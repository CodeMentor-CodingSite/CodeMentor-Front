export default function capitalizeFirstChar(str: string) {
  return str.split(' ').map(s => s.replace(/\b[a-z]/, (letter) => letter.toUpperCase())).join(' ');
}