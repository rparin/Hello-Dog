"use server";

export async function getDogFact() {
  const res = await fetch("https://dogapi.dog/api/v2/facts", {
    method: "GET",
    headers: {
      "Content-Type": "application/vnd.api+json; charset=utf-8",
    },
    cache: "no-store",
  });
  return await res.json();
}
