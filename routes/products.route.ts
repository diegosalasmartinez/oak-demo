import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts"

const router = new Router()

router.get("/proudcts", (ctx) => {
  ctx.response.body = {
    message: 'Welcome Products API!'
  }
})

export default router
