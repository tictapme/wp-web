const endpointUrl = 'https://enw2fvdskkb4b.x.pipedream.net/'
addEventListener('fetch', async (event) => {
    const request: Request = event.request;
    // when  method is POST and the path is wp-admin/admin-ajax.php then repond with a 200
    const isForm = request.method === 'POST' && request.url.includes('/wp-admin/admin-ajax.php');
    if (isForm) {

        // Compatibility dates aren't yet possible to set: https://developers.cloudflare.com/workers/platform/compatibility-dates#formdata-parsing-supports-file
        // const formData = (await parseFormDataRequest(request)) as FormData;
        event.respondWith( await fetch(
            endpointUrl,
            {
                method: "POST",
                body: 'este es el body',
            }
        ));
    }
})
