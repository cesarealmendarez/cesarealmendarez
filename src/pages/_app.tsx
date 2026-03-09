import Head from "next/head";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    let router = useRouter();

    useEffect(() => {
        if (router.pathname as string == "/") {} 
        else if (router.pathname as string == "/projects") {} 
        else { router.push("/"); }
    }, []);

    return (
        <>
            <Head>
                {(() => {
                    if (router.pathname as string == "/") {
                        return <title>Cesar Almendarez</title>;
                    } else if (router.pathname as string == "/projects") {
                        return <title>Projects - Cesar Almendarez</title>;
                    } else {
                        return <title>Cesar Almendarez</title>;
                    }
                })()}
            </Head>

            <div className="min-h-screen">
                <div className="min-h-screen max-w-lg mx-auto px-8 md:px-0 py-24">
                    <NavigationBar />
                    
                    <Component {...pageProps} />
                </div>

                <Footer />
            </div>
        </>
    );
}