type ServerSideTranslations = (options: { locale?: string }) => Promise<{
  translations: Record<string, string>;
}>;

export const serverSideTranslations: ServerSideTranslations = async ({ locale }) => {
  const translations = locale
    ? // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      ((await import(`locales/${locale}.json`)).default as Record<string, string>)
    : {};

  return {
    translations,
  };
};
