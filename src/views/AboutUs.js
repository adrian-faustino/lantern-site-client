import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="main-content">
      
      <h1 className="AboutUs__title">About us</h1>

      <h2 className="AboutUs__headline">
        In August of 1945, atomic bombs were dropped on the Japanese cities of Hiroshima and Nagasaki. Some 226,00 people were killed in the immediate aftermath.
      </h2>

      <p className="AboutUs__p">
        <a href="https://visithiroshima.net/things_to_do/seasonal_events/summer/hiroshima_peace_memorial_ceremony_peace_message_lantern_floating_ceremony.html">Floating lantern ceremonies</a> are held every year in Japan and around the world to commemorate those who died and take a stand for peace.
        This is an annual peace event that shares a wish for a peaceful society and a world free from violence, especially the ultimate violence, nuclear weapons, which destroy not only all living beings on the earth, but also our future generations and their environment. 
      </p>

      <h3 className="AboutUs__title">What's in our events?</h3>
      <p className="AboutUs__p">
        Our shared hope is expressed by multicultural children’s choruses, youth speakers, and peace songs by Calgary Women’s Chorus.
        Also, an inspirational speaker who has lived through war will use poetry to reach into our hearts and light up our imaginations, to create a culture of peace and dignity for all. 
      </p>

    </div>
  )
}
