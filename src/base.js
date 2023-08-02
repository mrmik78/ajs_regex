export default function validateUsername(Validator) {
  // eslint-disable-next-line no-useless-escape
  return /^[^\d_-]([a-zA-Z\_-]\d{0,3})+[^\d_-]$/.test(Validator);
}
