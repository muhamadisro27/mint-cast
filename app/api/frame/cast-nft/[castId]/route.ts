import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: { castId: string } }
) {
  const { castId } = context.params;
  const BASE_URL = process.env.NEXT_PUBLIC_URL;

  return NextResponse.json({
    version: "vNext",
    image: `${BASE_URL}/api/preview/cast/${castId}`,
    buttons: [
      { label: "Mint NFT", action: "tx" },
      {
        label: "View Cast",
        action: "link",
        target: `https://warpcast.com/~/cast/${castId}`,
      },
    ],
  });
}