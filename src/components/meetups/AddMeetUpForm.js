import React, { useRef } from "react";
import Card from "../cards/Card";
import classes from "./AddMeetUpForm.module.css";
const AddMeetUpForm = (props) => {


    const titleRef = useRef();
    const urlRef = useRef();
    const addressRef = useRef();
    const descRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const submittedData = {
            title: titleRef.current.value,
            image: urlRef.current.value,
            address: addressRef.current.value,
            desc: descRef.current.value,
        }
        props.addMeetUp(submittedData);
    }
    return (<Card>
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={urlRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' required rows='5' ref={descRef} ></textarea>
            </div>
            <div className={classes.actions}>
                <button >Add Meetup</button>
            </div>
        </form>
    </Card>);
}

export default AddMeetUpForm;