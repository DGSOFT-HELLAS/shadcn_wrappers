
import Navbar from "@/app/_components/Navbar"
export default function DashLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="main-wrapper">
                {children}
            </main>
        </>
    )
}