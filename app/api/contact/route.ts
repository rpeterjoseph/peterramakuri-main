import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = bodySchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please complete all fields with a valid email address." }, { status: 400 });
  }

  // No email delivery service is connected yet. Messages are validated but
  // not delivered until a mail provider is wired up.
  return NextResponse.json({ ok: true });
}
