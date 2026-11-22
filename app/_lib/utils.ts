// Format a date string into a readable format
export function formatDate(dateString?: string) {
  const date = new Date(dateString ?? "");
  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
  if (!dateString) return "No date";
  return formattedDate;
}
