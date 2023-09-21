import "./ButtonIcon.scss";
type props = {
    title?: string;
    icon?: string;
}
export default function ButtonIcon({ icon, title }: props) {
    return <div className="btn-icon px-8 relative">
        <img src="assets/images/btn-ic.png" />
        <div className="btn-icon-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={icon} />
            <span className="btn-icon-title color-light font-normal">{title}</span>
        </div>
    </div>
}