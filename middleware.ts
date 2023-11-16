import { NextRequest, NextResponse } from "next/server";

let locales = ["vi", "en"];
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;

  if (
    nextUrl.pathname.startsWith("/_next/") ||
    locales.some((locale) => {
      return nextUrl.pathname.startsWith(`/${locale}`);
    })
    // PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }

  const location = cookies.get("locale")?.value;

  console.log("location : ", location);

  if (location && locales.includes(location)) {
    nextUrl.pathname = `/${location}${nextUrl.pathname}`;

    return NextResponse.rewrite(nextUrl);
  } else {
    nextUrl.pathname = `/vi${nextUrl.pathname}`;

    return NextResponse.rewrite(nextUrl);
  }
}

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     "/((?!_next).*)",
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// };
