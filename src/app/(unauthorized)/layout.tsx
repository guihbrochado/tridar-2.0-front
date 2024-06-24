
export default function LayoutAuth({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen">
            <div
                className="h flex h-[100%] max-h-[100vh] items-center justify-center"
            >
                {children}
            </div>
        </div>
    );
}
