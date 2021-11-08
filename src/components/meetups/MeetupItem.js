import React, { useContext } from "react";
import Card from "../cards/Card";
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (props) => {
    const favoritesContextManager = useContext(FavoritesContext);

    const isItemFavorite = favoritesContextManager.isItemFavorite(props.id);

    const addToFavorites = () => {
        if (isItemFavorite) {

            console.log(favoritesContextManager.favorites);

            favoritesContextManager.removeFavorite(props.id);
        } else {
            favoritesContextManager.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address

            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={addToFavorites} >{isItemFavorite ? "Remove To Favorites" : "To Favorites"}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;