'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type DataIsSecureNotificationProps = {
  onconfirm: React.MouseEventHandler<HTMLButtonElement>
};

export default function DataIsSecureNotification({ onconfirm }: DataIsSecureNotificationProps) {

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-md mx-auto bg-foreground p-2 rounded-lg text-[var(--gunmetal)]">
      <Image
        src="/lock.png" // Заміни на реальну картинку
        width={64}
        height={64}
        className="w-16 rounded-xl"
        alt="Demo" />
      <p className="text-xs">
        Всі данні будуть зашифровані
      </p>
      <Button className="w-full" onClick={onconfirm}>Підтвердити</Button>
    </div>
  );
}
