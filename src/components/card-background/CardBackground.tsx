import { Link } from "react-router-dom";
import "./CardBackground.scss";

export default function CardBackground() {
    return <div className="rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 h-36 card-recommend">
        <Link to={"#"} className="cursor-pointer">
            <div className="card-recommend-detail flex flex-col justify-center items-center h-full" style={{backgroundImage:'assets/images/MyRecommend-1.png'}}>
                <p className="mb-4 card-recommend-detail-title color-primary-300 font-normal">BODY RECORD</p>
                <p className="mt-4 font-light card-recommend-detail-description color-light">自分のカラダの記録</p>
            </div>
        </Link>
    </div>
}