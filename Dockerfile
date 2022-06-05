# Install
FROM node:16-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci


# Build
FROM node:16-alpine AS builder

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN npm run build


# Optimize node modules
FROM node:16-alpine AS optimize

WORKDIR /app

COPY --from=deps /app/package.json /app/package-lock.json ./
COPY --from=deps /app/node_modules ./node_modules

RUN apk add curl bash --no-cache
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin
RUN npm prune --production && node-prune


# Server
FROM node:16-alpine AS runner

WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

RUN mkdir pages

COPY --from=builder --chown=node:node /app/next.config.js ./
COPY --from=builder --chown=node:node /app/i18n.js ./
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/package.json ./package.json
COPY --from=optimize --chown=node:node /app/node_modules ./node_modules

USER node

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]