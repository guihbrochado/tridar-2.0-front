import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen w-full lg:grid lg:grid-cols-1">
            <div className="col-span-5 bg-gray-500 flex flex-col">
                <div className="h-[10%] flex justify-center items-center bg-black">
                    {/* <Header /> */}
                </div>
                <main className="flex-1 flex justify-center items-start  bg-black">
                    {children}
                </main>
            </div>
        </div>
    );
}
