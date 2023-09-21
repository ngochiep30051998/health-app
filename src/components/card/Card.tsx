import { Link } from "react-router-dom";
import "./Card.scss"
import CardImage from "./card-image/CardImage";
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
                    <CardImage image={image} dateTime={dateTime} />

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