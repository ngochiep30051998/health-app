import { Link } from 'react-router-dom';
import './Header.scss';
import { Drawer } from '../drawer/Drawer';
import { useState } from 'react';

export default function Header() {
    const [showDrawer, setShowDrawer] = useState(false);
    const handleDrawer = ()=>{
        setShowDrawer(currentValue=> !currentValue)
    }
    return (
        <header className="w-full">
            <nav className="px-4 lg:px-40  bg-dark-500 h-16 w-full">
                <div className="flex flex-wrap justify-between items-center max-w-screen-xl w-full">
                    <Link to={'/'} className="flex items-center logo">
                        <img src="/assets/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
                    </Link>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li className="menu-item flex cursor-pointer">
                                <img src="/assets/images/icons/icon_memo.svg" className="menu-item-icon" />
                                <Link to={'/my-record'} className="color-light menu-item-label" aria-current="page">自分の記録</Link>
                            </li>
                            <li className="menu-item flex cursor-pointer">
                                <img src="/assets/images/icons/icon_challenge.svg" className="menu-item-icon" />
                                <Link to={'/top-my-page'} className="color-light menu-item-label" aria-current="page">チャレンジ</Link>
                            </li>
                            <li className="menu-item flex cursor-pointer">
                                <img src="/assets/images/icons/icon_info.svg" className="menu-item-icon" />
                                <Link to={'/column'} className="color-light menu-item-label" aria-current="page">お知らせ</Link>
                            </li>
                            <li className="menu-item flex cursor-pointer" onClick={handleDrawer}>
                                <img src={showDrawer ? "/assets/images/icons/icon_close.svg" : "assets/images/icons/icon_menu.svg"} className="menu-item-icon" />
                            </li>
                            {showDrawer && <Drawer />}
                        </ul>

                    </div>
                </div>
            </nav>


        </header>
    )
}