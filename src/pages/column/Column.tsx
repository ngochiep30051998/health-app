import CardRecommended from "../../components/card-recommend/CardRecommend";
import Card from "../../components/card/Card";
import { ColumnData, ColumnDataRecommended } from "../../constants/mock-data";
import "./Column.scss"
export default function Column() {
    return (
        <div className="w-full column">
            <section className="recommended-list">
                <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {ColumnDataRecommended.map(item => (<CardRecommended {...item} />))}
                </div>
            </section>
            <section className="post-list">
                <div className="grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        ColumnData.map(item => {
                            return <Card {...item} />
                        })
                    }
                </div>
            </section>
            <div className="w-full h-14 btn-view-more flex justify-center items-center">
                <button className="h-full color-light font-normal rounded">記録をもっと見る</button>
            </div>
        </div>
    )
}