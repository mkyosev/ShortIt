import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <div className="bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
}
