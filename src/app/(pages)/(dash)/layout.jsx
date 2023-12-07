
import Navbar from "@/app/_components/Navbar"
import Layout01 from "@/app/_components/Layouts/Layout01"
export default function DashLayout({ children }) {
    return (
        <>
           
            <Layout01>
                {children}
            </Layout01>
        </>
    )
}