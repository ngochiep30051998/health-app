import "./Footer.scss"
export default function Footer() {
    return (
        <footer className="px-4 lg:px-40  bg-dark-500 h-32 footer pt-14">
            <div className="footer-container mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className="footer-item leading-4 font-light">
                        <a href="#" className="">会員登録</a>
                    </li>
                    <li className="footer-item leading-4 font-light">
                        <a href="#" className="">運営会社</a>
                    </li>
                    <li className="footer-item leading-4 font-light">
                        <a href="#" className="">利用規約</a>
                    </li>
                    <li className="footer-item leading-4 font-light">
                        <a href="#" className="">個人情報の取扱について</a>
                    </li>
                    <li className="footer-item leading-4 font-light">
                        <a href="#" className="">特定商取引法に基づく表記</a>
                    </li>
                    <li className="footer-item leading-4 font-light">
                        <a href="#" className="">お問い合わせ</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}