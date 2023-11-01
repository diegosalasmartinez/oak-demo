import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import routes from './routes/index.ts'

const app = new Application()
const port = 8000

app.use(routes.users.routes())
app.use(routes.users.allowedMethods())
app.use(routes.products.routes())
app.use(routes.products.allowedMethods())

app.addEventListener('listen', () => {
  console.log(`Listening on: ${port}`);
});

await app.listen({ port })
