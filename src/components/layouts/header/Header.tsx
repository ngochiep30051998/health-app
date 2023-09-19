import './Header.scss';

export default function Header() {
    return (
        <header>
            <nav className="px-4 lg:px-6  bg-dark-500 h-16">
                <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center logo">
                        <img src="/assets/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
                    </a>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li className="menu-item flex">
                                <img src="/assets/images/icons/icon_memo.svg" className="menu-item-icon"/>
                                <a href="#" className="color-light menu-item-label" aria-current="page">自分の記録</a>
                            </li>
                            <li className="menu-item flex">
                                <img src="/assets/images/icons/icon_challenge.svg" className="menu-item-icon"/>
                                <a href="#" className="color-light menu-item-label" aria-current="page">チャレンジ</a>
                            </li>
                            <li className="menu-item flex">
                                <img src="/assets/images/icons/icon_info.svg" className="menu-item-icon"/>
                                <a href="#" className="color-light menu-item-label" aria-current="page">お知らせ</a>
                            </li>
                            <li className="menu-item flex">
                                <img src="/assets/images/icons/icon_menu.svg" className="menu-item-icon"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}