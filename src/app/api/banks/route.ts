import { Bank } from "@/app/types";
import { NextResponse } from "next/server";

/**
 * Retrieves a list of banks from the server.
 * @returns A NextResponse object containing the list of banks in JSON format.
 *          If an error occurs while fetching the banks, an error response is returned.
 */
export async function GET() {
  try {
    let response = new Request(
      "https://dev.obtenmas.com/catom/api/challenge/banks"
    );
    let banks: Bank[] = await fetch(response).then((res) => res.json());
    banks = banks.sort(() => Math.random() - 0.5);
    return new NextResponse(JSON.stringify(banks), {
      headers: {
        "content-type": "application/json",
      },
    });
  } catch {
    return new NextResponse("Error fetching banks", {
      status: 500,
    });
  }
}
