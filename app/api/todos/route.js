import axios from "axios";
import { redirect } from "next/dist/server/api-utils";

export async function GET() {
  const res = await axios("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.data.slice(0, 2);
  return Response.json(data);
}

export async function POST(request) {
  try {
    const response = await request.json();
    console.log(response);
    return new Response(JSON.stringify(response), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error posting data:", error);

    return new Response(JSON.stringify({ error: "Failed to create todo" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
