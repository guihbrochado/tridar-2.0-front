"use client"

import { useEffect, useState } from 'react';
import Header from "@/components/Header";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname;
            if (path === '/admin/courses') {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
        }
    }, [window]);

    return (
        <div className="h-screen w-full lg:grid lg:grid-cols-1">
            <div className="col-span-5 bg-gray-500 flex flex-col">
                {showHeader && (
                    <div className="h-[10%] flex justify-center items-center bg-black">
                        <Header />
                    </div>
                )}
                <main className="flex-1 flex justify-center items-start bg-black">
                    {children}
                </main>
            </div>
        </div>
    );
}
