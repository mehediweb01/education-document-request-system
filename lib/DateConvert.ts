// date convert
export const dateConvert = (
  date: string | Date,
  isOnlyDate: boolean = false,
): string => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (isOnlyDate) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: userTimeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(date));
  }

  return new Intl.DateTimeFormat("en-US", {
    timeZone: userTimeZone,
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(date));
};
