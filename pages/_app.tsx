import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import {SidebarProvider} from "@/components/ui/sidebar";

const geistMono = localFont({
    src: '../fonts/Geist_Mono/GeistMono-VariableFont_wght.ttf',
    variable: "--font-geist-mono",
    weight: '100 900',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${geistMono.variable} antialiased`}>
            <SidebarProvider>
                <Component {...pageProps} />
            </SidebarProvider>
        </div>
    );
}