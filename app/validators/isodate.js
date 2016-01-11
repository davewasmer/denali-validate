const regex = /\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{0,4}Z/;

export default function isodate(data) {
  if (typeof data === 'string' && regex.test(data)) {
    return null;
  }
  return 'must be an ISO8601 date string';
}
