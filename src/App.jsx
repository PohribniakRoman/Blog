import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ScrollToTop from "./components/ScrollToTop";

export default function App(){
    return <>
        <ScrollToTop />
        <Banner />
        <Main />
        <Footer />
    </>
}