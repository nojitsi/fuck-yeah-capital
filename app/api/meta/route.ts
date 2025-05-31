import { NextResponse } from 'next/server';
import {prisma} from "@/lib/prisma";

export async function PUT(request: Request) {
  const data = await request.json();

  console.log('Received data:', data);

  await prisma.user.update({
    where: {
      email: 'default@example.com',
    },
    data: { meta: data }
  })
  // Тут можна обробити дані, зберегти в БД тощо

  return NextResponse.json({ message: 'Success', received: data });
}