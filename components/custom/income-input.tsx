'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type IncomeInputProps = {
  initIncomeValue?: number;
};

export default function IncomeInput({ initIncomeValue }: IncomeInputProps) {
  const [value, setValue] = useState(initIncomeValue ?? "");

  const handleClick = async () => {
    const response = await fetch('/api/meta', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ income: value })
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-md mx-auto bg-foreground p-2 rounded-lg text-[var(--gunmetal)]">
      <p className="text-xs">
        Введіть ваш заробіток
      </p>
      <Input
        type="number"
        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        placeholder="Скільки ти заробляєш..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className="w-full" onClick={handleClick}>Вперед</Button>
    </div>
  );
}
