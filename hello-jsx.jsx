import { h } from "https://cdn.skypack.dev/preact";
import preactRenderToString from 'https://cdn.skypack.dev/preact-render-to-string';

const App = () => {
  return (
    <html>
      <head>
        <title>Hello from JSX</title>
      </head>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>
  );
}

addEventListener("fetch", (event) => {
  // renderToString generates html string from JSX components.
  const response = new Response(preactRenderToString(<App />), {
    headers: { "content-type": "text/html; charset=uft-8" },
  });

  event.respondWith(response);
});
