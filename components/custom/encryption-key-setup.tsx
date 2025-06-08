'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import createEncryptionKey from "@/lib/encryption/create-encryption-key";

const initEncryptionKeySetup = () => {
  createEncryptionKey();
}

export default function EncryptionKeySetup() {

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-md mx-auto bg-foreground p-2 rounded-lg text-[var(--gunmetal)]">
      <Image
        src="/lock.png"
        width={256}
        height={256}
        className="w-64 h-auto rounded-xl"
        alt="Demo" />
      <p className="text-xs">
        Одна з ключових засад платформи - забезпечити приватність ваших данних, для того щоб ви без страху могли користувалися нашою платформою. Ми хочемо зберігати данні в такому вигляді, що навіть ми - розробники не могли їх прочитати. Тому для забезпечення безпеки ваших данних, просимо створити ключ шифрування.
      </p>

      <Button className="w-full" onClick={initEncryptionKeySetup}>Створити ключ шифрування</Button>
    </div>
  );
}
