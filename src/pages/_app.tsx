import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Cesar Almendarez</title>
            </Head>

            <div className="min-h-screen">
                <div className="min-h-screen max-w-lg mx-auto px-8 md:px-0 py-24 min-h-screen grid place-items-center">
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    );
}