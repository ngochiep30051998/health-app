import "./MobileDrawer.scss";
export default function MobileDrawer(){
    return (
        <div className="absolute top-16 right-0 h-16 w-60 drawer-mobile">
            <div className="drawer-mobile-container w-full">
                <ul className="list">
                    <li className="flex items-center pl-8"><span>自分の記録</span></li>
                    <li className="flex items-center pl-8"><span>チャレンジ</span></li>
                    <li className="flex items-center pl-8"><span>お知らせ</span></li>
                </ul>
            </div>
        </div>
    )
}