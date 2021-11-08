import { Link } from "react-router-dom"
import React, { useContext } from 'react';
import classes from './MainNav.module.css';
import FavoritesContext from '../../store/favorites-context';

const MainNav = () => {

    const favoritesContextManager = useContext(FavoritesContext);

    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/new-meetups">Create New Meet Up</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites <span className={classes.badge}> {favoritesContextManager.totalFavorites} </span></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNav;