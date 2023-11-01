import { Router, helpers } from "https://deno.land/x/oak@v11.1.0/mod.ts"

const router = new Router()

router.get("/", (ctx) => {
  ctx.response.body = {
    message: 'Welcome to the Oak Deno API!'
  }
})

router.get("/users/:userId", (ctx) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `Hello, ${userId} :)!`
})

export default router
