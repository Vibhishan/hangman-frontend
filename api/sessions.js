const BASE_URL = "http://localhost:3000/api/sessions";

async function createSession(name) {
  const response = await fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error("Failed to create session");
  }

  const data = await response.json();
  return data;
}

async function playInSession(sessionId, letter) {
  const response = await fetch(`${BASE_URL}/${sessionId}/play`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ letter }),
  });

  if (!response.ok) {
    throw new Error("Failed to play in session");
  }

  const data = await response.json();
  return data;
}

export { createSession, playInSession };
