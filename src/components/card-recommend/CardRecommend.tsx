import "./CardRecommended.scss";
type props = {
    title: string;
    description: string;
}
export default function CardRecommended({description,title}: props) {
    return (
        <div className="rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 h-36 card-recommend">
            <a href="link" className="cursor-pointer">
                <div className="card-recommend-detail flex flex-col justify-center items-center h-full bg-dark">
                    <p className="mb-4 card-recommend-detail-title color-primary-300 font-normal">{title}</p>
                    <p className="card-recommend-detail-underline w-14 h-0.5"></p>
                    <p className="mt-4 font-light card-recommend-detail-description color-light">{description}</p>
                </div>
            </a>
        </div>
    )
}