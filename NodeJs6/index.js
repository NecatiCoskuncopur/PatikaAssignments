import Koa from "koa";
import KoaRouter from "koa-router";

const app = new Koa();
const router = new KoaRouter();
const port = 3000;

router.get("/", (ctx) => {
  ctx.type = "text/html";
  ctx.body = "<h1>Home Page</h1>";
});

router.get("/about", (ctx) => {
  ctx.type = "text/html";
  ctx.body = "<h1>About Page</h1>";
});

router.get("/contact", (ctx) => {
  ctx.type = "text/html";
  ctx.body = "<h1>Contact Page</h1>";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
