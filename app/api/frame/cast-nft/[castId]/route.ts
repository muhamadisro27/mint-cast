import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ castId: string }> }
) {
  const params = await context.params;
  const BASE_URL = process.env.NEXT_PUBLIC_URL;

  if (!params.castId || params.castId.length === 0) {
    return new Response(
      JSON.stringify({ error: "Cast Id parameter is missing" }),
      { status: 400 }
    );
  }

  return NextResponse.json({
    version: "vNext",
    image: `${BASE_URL}/api/preview/cast/${params.castId}`,
    buttons: [
      { label: "Mint NFT", action: "tx" },
      {
        label: "View Cast",
        action: "link",
        target: `https://warpcast.com/~/cast/${params.castId}`,
      },
    ],
  });
}
