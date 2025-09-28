import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { castId: string } }
) {
  const { castId } = params;

  return NextResponse.redirect(
    "https://placehold.co/1200x630.png?text=Cast+" + castId
  );
}
