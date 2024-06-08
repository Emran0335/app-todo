import prisma from "@/utils/connect.js";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  console.log(params)
  try {
    console.log(params.todoId);
    if (!params.todoId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const deleteTodo = await prisma.todo.delete({
      where: {
        id: params.todoId,
      },
    });
    return NextResponse.json(deleteTodo);
  } catch (error) {
    console.log("Error deleting: ", error);
    return NextResponse.json({ error: "Error deleting todo", status: 500 });
  }
}
