import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { color } = await req.json();
    console.log(color);
    const updapteColor = await prisma.todo.update({
      where: {
        id: params.todoId,
      },
      data: {
        color: color,
      },
    });
    console.log(updapteColor);
    return NextResponse.json(updapteColor);
  } catch (error) {
    console.log("Error updating: ", error);
    return NextResponse.json({ error: "Error updating color", status: 500 });
  }
}
