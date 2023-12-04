
import Navbar from "@/app/_components/Navbar"
import Layout01 from "@/app/_components/Layouts/Layout01"
export default function DashLayout({ children }) {
    return (
        <>
            {/* <Navbar />
            <main className="main-wrapper">
                {children}
            </main> */}
            <Layout01>
                {children}
            </Layout01>
        </>
    )
}