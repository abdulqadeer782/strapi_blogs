import { parseCookies } from 'next/headers';

export function getLocale(req) {
    const cookies = parseCookies(req.headers);
    const userLocale = cookies.locale;

    // Check for supported locales and return valid one
    return locales.includes(userLocale) ? userLocale : defaultLocale;
}
