import "./ButtonViewMore.scss";
type props = {
    onViewMore?: () => void;
}
export default function ButtonViewMore({ onViewMore }: props) {
    return <div className="w-full h-14 btn-view-more flex justify-center items-center" onClick={onViewMore}>
        <button className="h-full color-light font-normal rounded">記録をもっと見る</button>
    </div>
}