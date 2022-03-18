export async function handleRequest(request: Request): Promise<Response> {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}
