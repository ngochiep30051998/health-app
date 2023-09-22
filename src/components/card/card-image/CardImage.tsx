import "./CardImage.scss";
type props = {
    image: string;
    dateTime: string;
}
export default function CardImage({ image, dateTime }: props) {
    return <div className="relative card-image aspect-square">
        <img src={image} className="h-full w-full object-cover" />
        <span className="absolute m-auto left-0 bottom-0 bg-primary-300 h-6 color-light px-2 font-normal">{dateTime}</span>
    </div>
}