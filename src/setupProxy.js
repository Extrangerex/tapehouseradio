import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  console.log("daf");
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://www.tapehouse.shop",
      changeOrigin: true,
    })
  );
};
