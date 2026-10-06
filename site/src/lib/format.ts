export const formatDate = (lang: string, date: string) =>
  new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
