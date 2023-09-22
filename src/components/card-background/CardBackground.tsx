import { Link } from "react-router-dom";
import "./CardBackground.scss";
type props = {
    image: string;
    title: string;
    description: string;
}
export default function CardBackground({description,image,title}: props) {
    return <div className="card-background bg-primary-300 p-6">
        <Link to={"#"} className="cursor-pointer card-background-container" >
            <div className="card-background-detail flex flex-col justify-center items-center h-full w-full relative">
                <img src={image} className="h-full w-full object-cover opacity-75"/>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full content h-full flex justify-center items-center flex-col px-6">
                    <span className="title color-primary-300 font-normal text-center">{title}</span>
                    <span className="font-light description color-light color-light font-normal w-full">{description}</span>
                </div>
            </div>
        </Link>
    </div>
}