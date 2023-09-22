import ButtonIcon from "../../components/button-icon/ButtonIcon";
import ButtonViewMore from "../../components/button-view-more/ButtonViewMore";
import CardImage from "../../components/card/card-image/CardImage";
import LineChart from "../../components/chart/LineChart";
import { MealHistoryData } from "../../constants/mock-data";
import "./TopMyPage.scss";
export default function TopMyPage() {
    return <div className="top-my-page">
        <section className="top-my-page-header grid grid-flow-row sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
            <div className="date-archievement h-full col-span-2">
                <div className="relative h-full w-full">
                    <img src="assets/images/d01.jpg" className="h-full w-full object-cover" />
                    <div className="date-archievement-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="value">
                            <span className="date color-light">05/21</span><span className="percent color-light">{" "}75%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-weight col-span-3  h-full">
                <LineChart />
            </div>
        </section>
        <section className="transit container mx-auto px-40 pt-6 flex justify-center">
                <ButtonIcon icon="public/assets/images/icons/eat-ic.svg" title="Morning" key={'Morning'}/>
                <ButtonIcon icon="public/assets/images/icons/eat-ic.svg" title="Lunch" key={'Lunch'}/>
                <ButtonIcon icon="public/assets/images/icons/eat-ic.svg" title="Dinner" key={'Dinner'}/>
                <ButtonIcon icon="public/assets/images/icons/snack.svg" title="Snack" key={'Snack'}/>
        </section>
        <section className="meal-history container mx-auto md:px-40 pt-6">
            <div className="grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                {
                    MealHistoryData.map(item => {
                        return <CardImage {...item} />
                    })
                }
            </div>
        </section>
        <ButtonViewMore />
    </div>
}