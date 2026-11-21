export async function onRequest() {
  const IMAGE_URL = "https://raw.githubusercontent.com/kannm0699-sketch/Service-/refs/heads/main/WhatsApp-Image-2026-11-07-a.gif";

  const response = await fetch(IMAGE_URL);

  if (!response.ok) {
    return new Response("GIF not found", { status: 404 });
  }

  return new Response(response.body, {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
