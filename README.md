# Nextjs Boilerplate

- [Installation](#installation)
- [Development](#development)
- [Production](#production)
- [Environment Variables](#environment-variables)

### Installation
Application requires [Node.js v16.x.x](https://nodejs.org/dist/latest-v16.x/) to run.

Install the dependencies.
```sh
$ npm ci
```

### Development

##### VSCode settings
1. Install the recommended extensions. See **.vscode/extensions.json**
2. Create a **settings.json** file under **.vscode** folder, copy the content of **settings.template.json** to it, and feel free to use any additional custom setting you want.

##### Dev Server
Run `npm run dev` for a dev server. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.

### Production

##### Build
Run `npm run build` to build the project. The build artifacts will be stored in the **build/** directory.

##### Running production server
Run `npm run start` for a production server.

### Environment Variables
The application supports multiple environments. If you are new to Nextjs check out the documentation: https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables

| Variable | Development | Production |
| ------ | ------ | ------ |
| `NEXT_PUBLIC_APP_VERSION` | - | - |
| `NEXT_PUBLIC_APP_URL` | - | - |
| `NEXT_PUBLIC_API_URL` | - | - |

Can be overwritten the variables, create an **.env.local** or an **.env.[environment].local** file and overwrite the variables.