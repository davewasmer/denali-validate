const regex = /(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})[+-](\d{2})\:(\d{2})/;

export default function uuid(data) {
  if (typeof data === 'string' && regex.test(data)) {
    return null;
  }
  return 'must be v4 uuid';
}
