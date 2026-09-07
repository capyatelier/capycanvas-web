import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export async function serve(port = 0) {
  const root = fileURLToPath(new URL('../../docs/', import.meta.url));
  const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.xml': 'application/xml', '.json': 'application/json' };
  const server = createServer(async (req,res) => {
    try {
      const url = new URL(req.url, 'http://localhost');
      const file = resolve(root, '.' + decodeURIComponent(url.pathname));
      if (!file.startsWith(root.endsWith(sep)?root:root+sep) && file !== resolve(root)) { res.writeHead(403).end(); return; }
      const info = await stat(file);
      if (info.isDirectory() && !url.pathname.endsWith('/')) { res.writeHead(301,{ Location: url.pathname + '/' + url.search }).end(); return; }
      const target = info.isDirectory() ? resolve(file,'index.html') : file;
      res.writeHead(200, { 'Content-Type': types[extname(target)] || 'text/plain; charset=utf-8' }); res.end(await readFile(target));
    } catch { res.writeHead(404,{ 'Content-Type':'text/html; charset=utf-8' }); res.end(await readFile(resolve(root,'404.html'))); }
  });
  await new Promise((done,reject) => { server.once('error',reject); server.listen(port,'127.0.0.1',done); });
  return { server, url: `http://127.0.0.1:${server.address().port}`, close: () => new Promise(r=>server.close(r)) };
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const { url } = await serve(Number(process.env.PORT || 4321)); console.log(`Capy Canvas website: ${url}`);
}
