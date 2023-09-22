
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
        <section className="mb-14 h-72 exercise-record bg-dark-500">
            <div className="table w-full p-6">
                <div className="table-header flex">
                    <div className="table-name color-light font-normal">
                        <span>MY EXERCISE</span>
                    </div>
                    <span className="table-date color-light font-normal">2021.05.21</span>
                </div>
                <div className="table-content grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div ></div>
                </div>
            </div>
        </section>
    </div>
}