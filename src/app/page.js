
import { DataTableDemo } from "./_components/TableExample"
import Navbar from "./_components/Navbar"
export default function Home() {


  return (
   <>
     <Navbar />
      <section className="main-wrapper">
       
        <section className="section-1">
          <DataTableDemo />
        </section>
        <section className="section-2">
          <p>hello-2</p>
        </section>
      </section>
   </>
  )
}
