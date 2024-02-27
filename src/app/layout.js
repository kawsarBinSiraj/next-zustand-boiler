import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.scss";
import { Quicksand } from "next/font/google";
import NextThemesProviders from "@/components/next-themes/theme-provider";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CornerStone from "@/components/corner-stone";

/**
 * description :- {fonts}
 * created_at:- 01/01/2024 11:27:16
 */
const quicksand = Quicksand({ subsets: ["latin"], weight: ["300", "400"] });

/**
 * description :- {meta}
 * created_at:- 01/01/2024 12:45:36
 */
export const metadata = {
    title: "Next.js",
    description: "The React Framework for the Web",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/next-js-icon.png",
                href: "/next-js-icon.png",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/next-js-icon.png",
                href: "/next-js-icon.png",
            },
        ],
    },
    openGraph: {
        title: "Next.js",
        description: "The React Framework for the Web",
        siteName: "Next.js",
        images: [
            {
                url: "/next-og.jpeg", // Must be an absolute URL
                width: 800,
                height: 600,
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

/**
 * description :- RootLayout
 * created_at:- 01/01/2024 11:27:30
 */
export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body developed-by="kawsar bin siraj" className={quicksand.className}>
                <CornerStone>
                    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
                        <NextThemesProviders>{children}</NextThemesProviders>
                    </GoogleOAuthProvider>
                    <ToastContainer autoClose={1200} />
                </CornerStone>
            </body>
            <GoogleAnalytics gaId="G-XYZ" />
            <GoogleTagManager gtmId="GTM-XYZ" />
        </html>
    );
}
