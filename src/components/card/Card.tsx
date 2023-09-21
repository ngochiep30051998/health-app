import { Link } from "react-router-dom";
import "./Card.scss"
type props = {
    title: string;
    image: string;
    dateTime: string;
    description: string;
    url?: string;
}
export default function Card({ title, image, dateTime, description, url = '#' }: props) {
    return (
        <div className="bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 card">
            <Link to={url} className="cursor-pointer card-content">
                <figure>
                    <div className="h-36 relative card-content-image">
                        <img src={image} className="h-full w-full object-cover" />
                        <span className="absolute m-auto left-0 bottom-0 bg-primary-300 h-6 color-light px-2 font-normal">{dateTime}</span>
                    </div>

                    <div className="card-content-detail">
                        <p className="card-content-detail-title font-normal color-dark-500">{title}
                        </p>

                        <p className="card-content-detail-description color-primary-400 font-normal">
                            {description}
                        </p>
                    </div>
                </figure>
            </Link>
        </div> 
    )
}