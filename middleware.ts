// middleware.ts
 
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import generateNonce from '#/utils/generate-nonce'
const nonce = generateNonce();

export function middleware(request: NextRequest) {

  // Clone the request headers and set a new header
  // that will be sent to the server `header-for-the-server`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("header-for-the-server", "hello server");
 
  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });
  let contentSecurityPolicy = ''
  //contentSecurityPolicy = `default-src 'self';`
  contentSecurityPolicy = `default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self';`
  //contentSecurityPolicy = `default-src 'self'; style-src 'nonce-${nonce}';`
  
  // Set a new response header that you can inspect in the browser
  // `header-for-the-client`
  response.headers.set("header-for-the-client", "hello client");
  response.headers.set("Content-Security-Policy", contentSecurityPolicy);
  return response;
}