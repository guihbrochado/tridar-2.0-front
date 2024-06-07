export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen w-full lg:grid lg:grid-cols-6">
            <div className="flex-1 flex justify-center items-center">
                <div className="w-full h-screen border flex justify-center items-center">
                    SideMenu
                </div>
            </div>
            <div className="col-span-5 bg-gray-500 flex flex-col">
                <div className="h-[10%] border flex justify-center items-center">
                    TopBarMenu
                </div>
                <main className="flex-1 flex justify-center items-center">
                    {children}
                </main>
            </div>
        </div>
    );
}
