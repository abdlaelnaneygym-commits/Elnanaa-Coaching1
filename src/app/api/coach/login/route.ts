import { coachPin } from "@/lib/coach-auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as { pin?: string } | null;
    if (!body?.pin || body.pin !== coachPin()) {
      return Response.json(
        { ok: false, error: "رمز الدخول غير صحيح" },
        { status: 401 },
      );
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "خطأ في الخادم" }, { status: 500 });
  }
}
