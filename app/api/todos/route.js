import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const todos = await prisma.todo.findMany({});
    return NextResponse.json(todos);
  } catch (error) {
    console.log("Error getting: ", error);
    return NextResponse.json({
      error: "Error getting todos",
      status: 500,
    });
  }
}
