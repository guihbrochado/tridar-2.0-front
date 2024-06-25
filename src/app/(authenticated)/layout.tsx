'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const pathname = usePathname();
    const showHeader = pathname !== '/admin/courses';

    return (
        <div className="h-screen w-full lg:grid lg:grid-cols-1">
            <div className="col-span-5 bg-gray-500 flex flex-col">
                <ToastContainer />

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
