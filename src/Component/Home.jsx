
import "./Component CSS/Home.css"
import Navbar from "../assets/Navbar"
import Footer from "../assets/Footer.jsx"
import Page1 from "../Component/Page1.jsx"
// import Page2 from "../Component/Page2.jsx"
// import Page3 from "../Component/Page3.jsx"
import Page4 from "./Page4"
// import Reserfasi from "./Reserfasi"
// import Tim from "./Tim"
import Home2 from "./Home2"
// import Tentang from "./Tentang"
import Zennchi from "./Zennchi"
// import Font from "./Font"

function Home() {
  return (
    <div className="body">
        <Navbar/>
        <div className="isi">
          
          <Page1/>
          {/* <Page2/> */}
          {/* <Page3/> */}
          <Page4/>
          <Zennchi/>
          <Home2/>

          {/* <Tentang/> */}
        </div>
        <Footer/>
        {/* <Font/> */}
        {/* <Reserfasi/> */}
        {/* <Tim/> */}
        

    </div>
  )
}

export default Home