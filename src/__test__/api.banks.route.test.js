import "cross-fetch/polyfill";
import { GET } from "../app/api/banks/route";

describe("GET function", () => {
  it("should return a random list of banks", async () => {
    // Mock the fetch function to return a sample response
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        { id: 1, name: "Bank A" },
        { id: 2, name: "Bank B" },
        { id: 3, name: "Bank C" },
      ]),
    });

    const response = await GET();

    expect(response.status).toBe(200);
    let json = await response.json();
    json = json.sort((a, b) => a.id - b.id);
    json = JSON.stringify(json);
    expect(json).toEqual(
      JSON.stringify([
        { id: 1, name: "Bank A" },
        { id: 2, name: "Bank B" },
        { id: 3, name: "Bank C" },
      ])
    );
  });

  it("should return an error response if fetching banks fails", async () => {
    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));
    const response = await GET();
    expect(response.status).toBe(500);
  });
});
