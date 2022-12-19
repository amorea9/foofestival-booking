export async function insertOrder(payload) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxaWp4dXhycGJtenB0bXh6bXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExMTQ5NDgsImV4cCI6MTk4NjY5MDk0OH0.MceLjvY9kuY_oIj6Hiejzixzcoy3LUN7ZAb57WWLEIk";
  const url = "https://sqijxuxrpbmzptmxzmqj.supabase.co";

  const res = await fetch(url + "/rest/v1/Orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxaWp4dXhycGJtenB0bXh6bXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExMTQ5NDgsImV4cCI6MTk4NjY5MDk0OH0.MceLjvY9kuY_oIj6Hiejzixzcoy3LUN7ZAb57WWLEIk",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxaWp4dXhycGJtenB0bXh6bXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExMTQ5NDgsImV4cCI6MTk4NjY5MDk0OH0.MceLjvY9kuY_oIj6Hiejzixzcoy3LUN7ZAb57WWLEIk",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}
