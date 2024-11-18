import { createBlogSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { Blog } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body: Blog = await request.json();
  const validation = createBlogSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 401 });

  const newBlog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return NextResponse.json(newBlog, { status: 201 });
}
