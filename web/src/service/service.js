export default async function sendServerRequest(method, path, body) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(body),
  };

  const  response = await fetch(path, options);

  if (!response.ok || response.status !== 200) {
    return response;
  }

  return response.json();
}
