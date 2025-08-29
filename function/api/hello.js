// functions/api/hello.js

/**
 * Pages Function,
 * 当请求 /api/hello 时被触发
 */
export function onRequestGet(context) {
  console.log(context)
  // context 对象包含了请求的详细信息，例如 headers, cf properties 等
  // https://developers.cloudflare.com/pages/functions/api-reference/

  const data = {
    message: "Hello from the Cloudflare Pages Function!",
    timestamp: new Date().toISOString(),
  };

  // 使用 Response.json() 可以方便地返回一个 JSON 响应
  return Response.json(data);
}
