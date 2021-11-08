import React from 'react';

import MeetupItemList from '../components/meetups/MeetupItemList';

const MeetUps = (props) => {
    return (<div>
        <h1>MeetUps</h1>
        <MeetupItemList data={props.data}/>
    </div>)
}

export default MeetUps;