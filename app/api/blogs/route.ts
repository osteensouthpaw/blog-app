import { createBlogSchema } from "@/app/validationSchemas";
import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session || !session.user)
    return NextResponse.json({ error: "user not logged In" }, { status: 401 });

  const body = await request.json();
  const validation = createBlogSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 401 });

  const newBlog = await prisma.blog.create({
    data: {
      categoryId: body.category,
      title: body.title,
      content: body.content,
      userId: session.user.id,
    },
  });

  return NextResponse.json(newBlog, { status: 201 });
}
