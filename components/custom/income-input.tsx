'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function IncomeInput() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    alert(`Цифра: ${value}`);
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-md mx-auto bg-foreground p-2 rounded-lg">
      Всі данні зашифровані
      <Input
        type="number"
        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        placeholder="Скільки ти заробляєш..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className="w-full" onClick={handleClick}>Продовжити</Button>
    </div>
  );
}
