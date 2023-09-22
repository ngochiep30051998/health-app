import "./Drawer.scss"
export function Drawer() {
    return (
        <div className="absolute top-16 right-0 h-16 w-60 drawer">
            <div className="drawer-container w-full">
                <ul className="list">
                    <li className="flex items-center pl-8"><span>自分の記録</span></li>
                    <li className="flex items-center pl-8"><span>体重グラフ</span></li>
                    <li className="flex items-center pl-8"><span>目標</span></li>
                    <li className="flex items-center pl-8"><span>選択中のコース</span></li>
                    <li className="flex items-center pl-8"><span>コラム一覧</span></li>
                    <li className="flex items-center pl-8"><span>設定</span></li>
                </ul>
            </div>
        </div>
    )
}