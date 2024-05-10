// import { NextResponse, NextRequest } from 'next/server';
// import { locales, defaultLocale } from './i18nConfig';
// import { getLocale } from './getLocale';

// export function middleware(req) {
//     const { pathname } = req.nextUrl;

//     // Check if path has a supported locale prefix
//     const pathnameHasLocale = locales.some(
//         (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//     );

//     if (pathnameHasLocale) return NextResponse.next(); // No redirect needed

//     // Determine final locale
//     const locale = getLocale(req) || defaultLocale; // Use optional getLocale or fallback

//     // Redirect with locale prefix
//     const url = new URL(req.nextUrl.origin);
//     url.pathname = `/${locale}${pathname}`;
//     return NextResponse.redirect(url);
// }

// export const config = {
//     matcher: [
//         // Skip internal paths (_next)
//         '/((?!_next).*)',
//     ],
// };
