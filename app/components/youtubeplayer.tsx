import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

function Youtubeplayer({ Videodetails }: any) {
  const [player, setPlayer]: any = useState(null);

  useEffect(() => {
    console.log(Videodetails);
  });

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      loop: 1,
      mute: 1,
    },
  };

  const onReady = (event: any) => {
    setPlayer(event.target);
  };

  const onStateChange = (event: any) => {
    // event.data === 0 indicates the end of the video
    if (event.data === 0) {
      player.seekTo(0);
    }
  };

  return (
    <div>
      {Videodetails ? (
        Videodetails[0].video_id ? (
          <YouTube
            // videoId="bFNo4jhRWes"
            videoId={Videodetails[0].video_id}
            opts={opts}
            onReady={onReady}
            onStateChange={onStateChange}
          />
        ) : null
      ) : null}
    </div>
  );
}

export default Youtubeplayer;
