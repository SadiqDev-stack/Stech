
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => response.ok ? response : new Response(`
        <html>
          <body>
            <h1>Error Fetching Data</h1>
            <p>Failed to fetch data.</p>
          </body>
        </html>
      `, { headers: { 'Content-Type': 'text/html' } }))
      .catch(error => new Response(`
        <html>
          <body>
            <h1>Error Fetching Data</h1>
            <p>Failed to fetch data.</p>
          </body>
        </html>
      `, { headers: { 'Content-Type': 'text/html' } }))
  );
});