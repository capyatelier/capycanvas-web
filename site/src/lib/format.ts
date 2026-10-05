export const formatDate = (lang: string, date: string) =>
  new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));

export const formatSize = (lang: string, bytes: number) =>
  new Intl.NumberFormat(lang, { style: 'unit', unit: 'megabyte', maximumSignificantDigits: 2 }).format(bytes / 1e6);
