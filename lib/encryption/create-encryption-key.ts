import generateSalt from "@/lib/encryption/generate-salt";

export default function createEncryptionKey() {
  const salt = generateSalt();
  console.log({salt});
}