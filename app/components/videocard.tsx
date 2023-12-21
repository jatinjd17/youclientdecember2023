import React from "react";

function VideoCardComponent({ videodetails }: any) {
  //   console.log(videodetails);
  const VideoCard = () => {
    return videodetails.map((item: any) => {
      return (
        <div
          key={item.video_id}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-96" src={item.thumbnailurl} alt={item.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="">
      <VideoCard />
    </div>
  );
}

export default VideoCardComponent;
