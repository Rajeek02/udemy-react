import Navbar from "./Navbar";
import Footer from "./Footer";
import Mainimage from "./Mainimage";
import Categories from "./Categories";
import Popular from "./Popular";
import Recommended from "./Recommended";
import Topics from "./Topics";


function App(){
    return(
        <>
        <Navbar></Navbar>
        <Categories></Categories>
        <Mainimage></Mainimage>
        <Popular></Popular>
        <Recommended></Recommended>
        <Topics></Topics>
        <Footer></Footer>
        
        </>
    )
}
export default App