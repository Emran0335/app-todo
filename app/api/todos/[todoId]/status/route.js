import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export async function PATCH(params) {
  console.log(params.taskId);
  try {
    if (!params.todoId) {
      return NextResponse.json({ error: "Not Found!", status: 401 });
    }

    const { completed } = await req.json();

    const updateStatus = await prisma.task.update({
      where: {
        id: params.todoId,
      },
      data: {
        completed,
      },
    });
    return NextResponse.json(updateStatus);
  } catch (error) {
    console.log("Error updating: ", error);
    return NextResponse.json({ error: "Error updating status", status: 500 });
  }
}
