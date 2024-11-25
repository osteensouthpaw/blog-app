import { loginSchema } from "@/app/validationSchemas";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = loginSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json({ error: "Invalid details" }, { status: 400 });
  return NextResponse.json({ success: "Successful" });
}
