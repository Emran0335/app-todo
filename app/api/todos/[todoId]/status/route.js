import prisma from "@/utils/connect.js";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  console.log(params);
  try {
    const { completed } = await req.json();
    console.log(completed);

    const updateStatus = await prisma.todo.update({
      where: {
        id: params.todoId,
      },
      data: {
        completed: completed,
      },
    });
    return NextResponse.json(updateStatus);
  } catch (error) {
    console.log("Error updating: ", error);
    return NextResponse.json({ error: "Error updating status", status: 500 });
  }
}
