/** التحقق من رمز دخول المدرب — يُقرأ من متغير البيئة COACH_PIN */
export function coachPin(): string {
  return process.env.COACH_PIN ?? "2025";
}

export function isCoachAuthorized(req: Request): boolean {
  const pin = req.headers.get("x-coach-pin");
  return typeof pin === "string" && pin.length > 0 && pin === coachPin();
}

export function unauthorized() {
  return Response.json(
    { ok: false, error: "غير مصرح — رمز الدخول غير صحيح" },
    { status: 401 },
  );
}
