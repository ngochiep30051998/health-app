
import ButtonViewMore from "../../components/button-view-more/ButtonViewMore"
import CardBackground from "../../components/card-background/CardBackground"
import LineChart from "../../components/chart/LineChart"
import "./MyRecord.scss"
export default function MyRecord() {
    return <div className="w-full my-record px-4 lg:px-40 ">
        <section className="card-list mb-14">
            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <CardBackground image="assets/images/MyRecommend-1.jpg" title="BODY RECORD" description="自分のカラダの記録" />
                <CardBackground image="assets/images/MyRecommend-2.jpg" title="MY EXERCISE" description="自分の運動の記録" />
                <CardBackground image="assets/images/MyRecommend-3.jpg" title="MY DIARY" description="自分の日記" />
            </div>

        </section>
        <section className="line-chart h-72 mb-14">
            <LineChart />
        </section>
        <section className="mb-14 max-h-72 exercise-record bg-dark-500">
            <div className="table w-full p-6">
                <div className="table-header flex">
                    <div className="table-name color-light font-normal">
                        <span>MY EXERCISE</span>
                    </div>
                    <span className="table-date color-light font-normal">2021.05.21</span>
                </div>
                <div className="table-content grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-h-48 overflow-y-auto">

                    {Array(50).fill(null).map((_, i) => `item-${i}`).map(item => (
                        <div className="item flex justify-between mr-5" key={item}>
                            <div className="title">
                                <li className="color-light">家事全般（立位・軽い</li>
                                <p className="pl-4 color-primary-300">26kcal</p>
                            </div>
                            <span className="color-primary-300">10 min</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="diary pb-6">
            <p className="title">MY DIARY</p>
            <div className="diary-list grid grid-flow-row gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                {Array(8).fill(null).map((_, i) => `item-${i}`).map(item => (
                    <div className="item p-4" key={item}>
                        <p className="item-date-time">2021.05.21<br />23:25</p>
                        <p className="item-description">
                            私の日記の記録が一部表示されます。
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                        </p>
                    </div>
                ))}

            </div>
        </section>
        <ButtonViewMore/>
    </div>
}