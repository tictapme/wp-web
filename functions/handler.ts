export async function handleRequest(request: Request): Promise<Response|void> {
  // when  method is POST and the path is wp-admin/admin-ajax.php then repond with a 200
  const isForm = request.method === 'POST' && request.url.includes('/wp-admin/admin-ajax.php');
  if (isForm) {
    return new Response('mira tu que eres un form');
  }

}
