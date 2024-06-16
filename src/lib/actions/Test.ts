"use server";

export async function getTestRes() {
  var response;

  try {
    response = await fetch("https://httpbin.org/status/429");
  } catch (error) {
    throw new Error("Fetch Error", { cause: error });
  }

  if (!response?.ok) {
    throw new Error("Response Error", {
      cause: `HTTP Response Code: ${response?.status}`,
    });
  }

  return response;
}
