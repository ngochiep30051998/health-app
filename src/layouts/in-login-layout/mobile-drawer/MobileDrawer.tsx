import { Link } from "react-router-dom";
import "./MobileDrawer.scss";

export default function MobileDrawer(){
    return (
        <div className="absolute top-16 right-0 h-16 w-60 drawer-mobile">
            <div className="drawer-mobile-container w-full">
                <ul className="list">
                    <li className="flex items-center pl-8"><Link to={'my-record'}>自分の記録</Link></li>
                    <li className="flex items-center pl-8"><Link to={'top-my-page'}>チャレンジ</Link></li>
                    <li className="flex items-center pl-8"><Link to={'column'}>お知らせ</Link></li>
                </ul>
            </div>
        </div>
    )
}