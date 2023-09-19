import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function InLoginLayout(){
    return <div className="w-full">
        <Header />
        <Outlet />
    </div>
}