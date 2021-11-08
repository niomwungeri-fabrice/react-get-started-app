import React from 'react';
import {useNavigate} from 'react-router-dom';
import AddMeetUpForm from '../components/meetups/AddMeetUpForm';

const NewMeetUps = () => {
    const navigate = useNavigate();
    const asyncHandleSaveMeetUp = (meetUpData) => {
        fetch("https://react-level-up-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetUpData),
                headers: {
                    'Content-Type': "application/json"
                }
            }
        ).then((response) => {
            navigate("/");
            console.log(response)
            // alert(JSON.stringify(response))
        }).catch(err => {
            alert(JSON.stringify(err))
            // console.log(err)
        })
    }

    return <div>
        <h1>Add New MeetUp</h1>
        <AddMeetUpForm addMeetUp={asyncHandleSaveMeetUp} />
    </div>
}

export default NewMeetUps;