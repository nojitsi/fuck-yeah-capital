import randomBytes from "randombytes"

export default function generateSalt(bytesLength = 32) {
  const array = randomBytes(bytesLength);
  return array.buffer;
}