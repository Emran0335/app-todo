import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export async function DELETE(params) {
  try {
    // console.log(params.todoId);
    if (!params.todoId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const deleteTask = await prisma.task.delete({
      where: {
        id: params.todoId,
      },
    });
    return NextResponse.json(deleteTask);
  } catch (error) {
    console.log("Error deleting: ", error);
    return NextResponse.json({ error: "Error deleting todo", status: 500 });
  }
}
