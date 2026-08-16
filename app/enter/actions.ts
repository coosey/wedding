"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function unlock(formData: FormData) {
  const input = String(formData.get("password") ?? "")
    .trim()
    .toLowerCase();
  if (input !== process.env.SITE_PASSWORD) {
    redirect("/enter");
  }
  const jar = await cookies();
  jar.set("wed", process.env.AUTH_COOKIE_VALUE!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  redirect("/");
}
