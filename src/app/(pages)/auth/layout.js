
import Navbar from "@/app/_components/Navbar"

export default function AutLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="auth-wrapper">
                {children}
            </main>
        </>
    )
}