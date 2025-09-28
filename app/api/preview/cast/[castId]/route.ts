import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ castId: string }> }
) {
  const params = await context.params;

  return NextResponse.redirect(
    "https://placehold.co/1200x630.png?text=Cast+" + params.castId
  );
}
