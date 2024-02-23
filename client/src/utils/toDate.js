export function toReadableDate(date) {
  const toDate = new Date(date);

  return `${toDate.getFullYear()}-${toDate.getMonth() + 1}-${toDate.getDate()}`;
}
