/**
 * This is a function that shows the current year for the footer component
 * @returns {String}
 */
export default function getYear() {
  const date = new Date().getFullYear();
  return date;
}
