import "./globals.css";
import { cx } from "@/src/utils";
import { Inter, Manrope } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import siteMetadata from "@/src/utils/siteMetaData";
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-in",
});

const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-mr",
});

export const metadata = {

    title: {
        template: `%s | ${siteMetadata.title}`,
        default: siteMetadata.title, // a default is required when creating a template
    },
    description: siteMetadata.description,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,

        siteName: siteMetadata.title,
        images: [siteMetadata.socialBanner],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        card: "summary_large_image",
        title: siteMetadata.title,
        images: [siteMetadata.socialBanner],
    },
};

export async function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ur' }]
}

export default function RootLayout({ children, params }) {
    return (
        <html lang={params.locale} dir={params.locale == 'ur' ? 'rtl' : 'ltr'}>
            <body
                className={cx(
                    inter.variable,
                    manrope.variable,
                    "font-mr bg-light dark:bg-dark"
                )}
            >
                <Script id="theme-switcher" strategy="beforeInteractive">
                    {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }`}
                </Script>
                <Header defaultLang={params.locale} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
