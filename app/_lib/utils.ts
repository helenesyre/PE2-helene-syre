// Format a date string into a readable format
export function formatDate(dateString?: string) {
  const date = new Date(dateString ?? "");
  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
  if (!dateString) return "No date";
  return formattedDate;
}

export function formatVenueDate(dateString?: string) {
  const date = new Date(dateString ?? "");
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  const formattedDate = Intl.DateTimeFormat("nb-NO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
    .format(date)
    .replace(".", "")
    .replace(".", "");
  if (!dateString) return "No date";
  return formattedDate;
}
