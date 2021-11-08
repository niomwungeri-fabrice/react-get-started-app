import React from 'react';
import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favorite) => { },
    removeFavorite: (meetupId) => { },
    isItemFavorite: (meetupId) => { }
});


export const FavoritesContextProvider = (props) => {

    const [favorites, setFavorites] = useState([]);

    const addFavorites = (favorite) => {
        setFavorites((prevFav) => {
            return prevFav.concat(favorite);
        })
    }

    const removeFavorites = (meetupId) => {
        setFavorites((prevFav) => {
            return prevFav.filter(meetup => meetup.id !== meetupId);
        })
    }

    const isItemFavorite = (meetupId) => {
        return favorites.some(meetup => meetup.id === meetupId)
    }



    const context = {
        favorites,
        totalFavorites: favorites.length,
        addFavorite: addFavorites,
        removeFavorite: removeFavorites,
        isItemFavorite: isItemFavorite
    }


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;