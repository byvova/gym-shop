import { NavLink } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import { News } from '../../Pages/News';
import { Males } from '../../Pages/Males';
import { Females } from '../../Pages/Females';
import { Accessories } from '../../Pages/Accessories';
import { Goods } from '../../Pages/Goods';
import { Home } from '../../Pages/Home';

import { LuSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";

// redux heart


import clsx from 'clsx';

import css from './NavMenu.module.css'

const buildClass = clsx(css.menu, 'container');

export const NavMenu = () => {

    return (
        <>
            <div className={buildClass}>
                <nav className={css.navigation}>
                    <NavLink className={css.logo} to='/'>IGNAT</NavLink>
                    <NavLink to='/news'>НОВИНКИ</NavLink>
                    <NavLink to='/males'>ЧОЛОВІКИ</NavLink>
                    <NavLink to='/females'>ЖІНКИ</NavLink>
                    <NavLink to='/Accessories'>АКСЕСУАРИ</NavLink>
                    <NavLink to='/goods'>АКЦІЇ</NavLink>
                </nav>

                <div className={css.form}>
                    <form action="">
                        <LuSearch className={css.search} />
                        <input type="text" />
                    </form>
                    <div>
                        <FaRegHeart className={css.icon} />
                        <CiShoppingBasket className={css.icon} />
                    </div>
                </div>

            </div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/news" element={<News />} />
                <Route path="/males" element={<Males />} />
                <Route path="/females" element={<Females />} />
                <Route path="/Accessories" element={<Accessories />} />
                <Route path="/goods" element={<Goods />} />
            </Routes>
        </>
    )
}