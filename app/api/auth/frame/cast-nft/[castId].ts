import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { castId } = req.query;

  const BASE_URL = process.env.NEXT_PUBLIC_URL;

  res.json({
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
