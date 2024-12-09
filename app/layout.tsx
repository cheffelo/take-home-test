'use client'
import Providers from "../providers";
import React from "react";
import "../styles/globals.css";


const RootLayout = ({
                        children,
                    }: {
    children: React.ReactNode;
}) => {
    return (
        <html lang="en">
        <body className="max-w-screen-lg mx-auto">

        <Providers>{children}</Providers>
        </body>
        </html>
    );
}

export default RootLayout;