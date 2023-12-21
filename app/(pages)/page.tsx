"use client";

import React, { useEffect, useRef, useState } from "react";
import { Getalldata } from "../api/youtubeactions";
import ChanneldetailsComponent from "../components/channeldetails";
import VideoCardComponent from "../components/videocard";
import YouTube from "react-youtube";

function Home() {
  const [Channeldetails, SetChanneldetails]: any = useState("");
  const [Videodetails, SetVideodetails]: any = useState(null);
  const playerRef = useRef(null);

  const [player, setPlayer] = useState(null);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      loop: 1,
      mute: 1,
    },
  };

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const onStateChange = (event) => {
    // event.data === 0 indicates the end of the video
    if (event.data === 0) {
      player.seekTo(0);
    }
  };

  const fetchData = async () => {
    try {
      console.log("trigger");
      // Make your API request here
      // const response = await fetch('/api/your-api-endpoint');
      // const data = await response.json();
      const data = await Getalldata();
      console.log("API response:", data.data);
      SetChanneldetails(data.data.channeldetails[0]);
      SetVideodetails(data.data.videodetails);
      // SetChanneldetails()
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Trigger API request every 10 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {/* <h1>Next.js API Trigger</h1> */}
      {/* {Channeldetails ? (
        <ChanneldetailsComponent Channeldetails={Channeldetails} />
      ) : null} */}
      {Videodetails ? (
        <VideoCardComponent
          videodetails={Videodetails}
          Channeldetails={Channeldetails}
        />
      ) : null}
      {/* {Videodetails ? (
        Videodetails[0].video_id ? (
          <YouTube
            // videoId="bFNo4jhRWes"
            videoId={Videodetails[0].video_id}
            opts={opts}
            onReady={onReady}
            onStateChange={onStateChange}
          />
        ) : null
      ) : null} */}
      {/* Your component content here */}
    </div>
  );
}

export default Home;
