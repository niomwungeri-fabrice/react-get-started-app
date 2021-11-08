import React, { useEffect, useState } from 'react';
import Favorites from "./pages/Favorites";
import MeetUps from "./pages/MeetUps";
import NewMeetUps from "./pages/NewMeetUps";
import { Routes, Route, Link } from "react-router-dom";
import Layout from './components/layout/Layout';



const App = () => {

  const [meetUps, setMeetUps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://react-level-up-default-rtdb.firebaseio.com/meetups.json")
      .then(response => response.json())
      .then(data => {
        const meetUps = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetUps.push(meetup);
        }
        setMeetUps(meetUps);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      })
  }, [])


  if (isLoading) {
    return <section>
      <div>is loading ...</div>
    </section>
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MeetUps data={meetUps} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/new-meetups" element={<NewMeetUps />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Oops, I thin you re lost, find your  <Link to="/">here!</Link> </p>
            </main>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
