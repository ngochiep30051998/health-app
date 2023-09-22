
import CardBackground from "../../components/card-background/CardBackground"
import "./MyRecord.scss"
export default function MyRecord() {
    return <div className="w-full column px-4 lg:px-40">
        <section className="card-list">
            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <CardBackground />
                <CardBackground />
                <CardBackground />
            </div>

        </section>
    </div>
}