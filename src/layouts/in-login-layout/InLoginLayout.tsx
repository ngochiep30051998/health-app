import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./InLoginLayout.scss"
export default function InLoginLayout() {
    return <div className="w-full">
        <Header />
        <div className="w-full app-body">
            <Outlet />
        </div>
        <Footer />
    </div>
}