const regex = /\w:\/\/[\w\-\.\/]+/;

export default function url(data) {
  if (typeof data === 'string' && regex.test(data)) {
    return null;
  }
  return 'must be a URL (protocol included)';
}
