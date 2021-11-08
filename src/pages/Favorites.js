import React, { useContext } from 'react';
import MeetupItemList from '../components/meetups/MeetupItemList';
import FavoritesContext from '../store/favorites-context';


const Favorites = () => {

    const favoritesContextManager = useContext(FavoritesContext);
    if (favoritesContextManager.favorites.length === 0) {
        return <div>
            Your have not added any favorites yet!
        </div>
    }
    return <div>
        <h1>Favorites</h1>
        <MeetupItemList data={favoritesContextManager.favorites} />
    </div>
}

export default Favorites;