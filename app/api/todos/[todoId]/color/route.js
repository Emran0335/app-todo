import prisma from "@/utils/connect.js";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  console.log(params.todoId)
  try {
    const { color } = await req.json();
    const updapteColor = await prisma.todo.update({
      where: {
        id: params.todoId,
      },
      data: {
        color: color,
      },
    });
    return NextResponse.json(updapteColor);
  } catch (error) {
    console.log("Error updating: ", error);
    return NextResponse.json({ error: "Error updating color", status: 500 });
  }
}
