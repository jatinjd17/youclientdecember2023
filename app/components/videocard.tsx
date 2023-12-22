import React from "react";
import Youtubeplayer from "./youtubeplayer";

function VideoCardComponent({ videodetails, Channeldetails }: any) {
  //   console.log(videodetails);

  const Home = () => (
    <div className="flex justify-center p-8">
      {/* Left Column */}
      <div className="w-1/2 pr-4">
        {videodetails.slice(0, 2).map((item: any) => {
          return (
            <div
              key={item.video_id}
              // className="w-1/2 h-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
              className="my-3"
            >
              <div className="max-w-72 rounded overflow-hidden shadow-lg">
                <img
                  className="w-72"
                  src={item.thumbnailurl}
                  alt={item.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-lg mb-2 line-clamp-2">
                    {item.title}
                  </div>
                  <p className="text-gray-700 text-xs line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
          // <Card key={card.id} title={card.title} content={card.content} />
        })}
      </div>

      {/* Right Column */}
      <div className="w-1/2 pl-4">
        {videodetails.slice(2, 4).map((item: any) => {
          return (
            <div
              key={item.video_id}
              // className="w-1/2 h-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
              className="my-3"
            >
              <div className="max-w-72 rounded overflow-hidden shadow-lg">
                <img
                  className="w-72"
                  src={item.thumbnailurl}
                  alt={item.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-lg mb-2 line-clamp-2">
                    {item.title}
                  </div>
                  <p className="text-gray-700 text-xs line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
          // <Card key={card.id} title={card.title} content={card.content} />
        })}
      </div>
    </div>
  );

  const VideoCard = () => {
    return videodetails.map((item: any) => {
      return (
        <div
          key={item.video_id}
          // className="w-1/2 h-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
          className="my-3"
        >
          <div className="max-w-72 rounded overflow-hidden shadow-lg">
            <img className="w-72" src={item.thumbnailurl} alt={item.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-lg mb-2 line-clamp-2">
                {item.title}
              </div>
              <p className="text-gray-700 text-xs line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  const Leftcol = () => {
    return videodetails.slice(0, 2).map((item: any) => {
      return (
        <div
          key={item.video_id}
          // className="w-1/2 h-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
          className="my-8  rounded flex justify-center align-middle"
        >
          <div className="max-w-72 rounded overflow-hidden shadow-2xl bg-white">
            <img className="w-72" src={item.thumbnailurl} alt={item.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-lg mb-2 line-clamp-2">
                {item.title}
              </div>
              <p className="text-gray-700 text-xs line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  const Rightcol = () => {
    return videodetails.slice(2, 4).map((item: any) => {
      return (
        <div
          key={item.video_id}
          // className="w-1/2 h-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
          className="my-8  rounded flex justify-center align-middle"
        >
          <div className="max-w-72 rounded overflow-hidden shadow-2xl bg-white">
            <img className="w-72" src={item.thumbnailurl} alt={item.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-lg mb-2 line-clamp-2">
                {item.title}
              </div>
              <p className="text-gray-700 text-xs line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    // <div className=" flex flex-row gap-28">
    //   {/* <VideoCard /> */}
    //   {/* <Home /> */}
    //   <div className="ml-10 mt-4">
    //     <Leftcol />
    //   </div>

    //   <div className="">
    //     {/* <div className="p-5 bg-black text-white font-extrabold  w-40 rounded-2xl">
    //       {Channeldetails.subscriberscount}
    //     </div> */}
    //     <div className="flex flex-row  justify-center ">
    //       <div className="p-5 bg-red-700 text-white font-extrabold  w-40 rounded-2xl h-28 text-center mt-8">
    //         <p className="text-xl">Subscribers</p>
    //         <p className="text-2xl mt-2">{Channeldetails.subscriberscount}</p>
    //       </div>
    //       <div>
    //         <div className=" text-center">
    //           <div>
    //             <img
    //               src={Channeldetails.channelthumbnail}
    //               alt={Channeldetails.channelname}
    //               className="rounded-full w-28  hw-28  object-cover ml-24"
    //             />
    //           </div>

    //           <div className="text-3xl font-extrabold mt-4 mb-4 mx-4">
    //             {Channeldetails.channelname}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col mt-2 ">
    //         <div className="p-5 bg-blue-700 text-white font-extrabold  w-40 rounded-2xl h-16 text-center mt-2">
    //           <p className="-mt-3">Total Videos</p>
    //           <p className="text-xl">{Channeldetails.totalvideos}</p>
    //           {/* <p>{Channeldetails.totalviews}</p> */}
    //         </div>
    //         <div className="p-5 bg-orange-600 text-white font-extrabold  w-40 rounded-2xl h-16 text-center mt-2">
    //           {/* <p>{Channeldetails.totalvideos}</p> */}
    //           <p className="-mt-3">Total Views</p>
    //           <p className="text-xl">{Channeldetails.totalviews}</p>
    //         </div>
    //       </div>
    //     </div>
    //     <Youtubeplayer Videodetails={videodetails} />
    //     <div className="text-center text-4xl font-extrabold mt-3 text-red-700">
    //       <p>Type !Wall in Comment</p>
    //       <p>to show your channel here</p>
    //     </div>
    //   </div>
    //   <div className="mt-4 mr-28">
    //     <Rightcol />
    //   </div>
    // </div>
    <div className=" grid grid-cols-12">
      {/* <VideoCard /> */}
      {/* <Home /> */}
      <div className=" col-span-3 flex flex-col">
        <Leftcol />
      </div>

      <div className="col-span-6">
        {/* <div className="p-5 bg-black text-white font-extrabold  w-40 rounded-2xl">
          {Channeldetails.subscriberscount}
        </div> */}
        <div className="grid grid-cols-3 ">
          <div className=" col-span-1  flex justify-center align-middle">
            <div className="p-5 bg-red-700 text-white font-extrabold  w-40 rounded-2xl h-28 text-center mt-8  ">
              <p className="text-xl">Subscribers</p>
              <p className="text-2xl mt-2">{Channeldetails.subscriberscount}</p>
            </div>
          </div>

          <div className="col-span-1 ">
            <div className="flex justify-center ">
              <img
                src={Channeldetails.channelthumbnail}
                alt={Channeldetails.channelname}
                className="rounded-full w-28  hw-28  object-cover"
              />
            </div>

            <div className="text-3xl font-extrabold flex justify-center text-center mt-6 mb-6 line-clamp-2 ">
              {Channeldetails.channelname}
            </div>
          </div>
          <div className="col-span-1 flex  justify-center align-middle">
            <div className=" flex flex-col mt-4">
              <div className="p-5 bg-blue-700 text-white font-extrabold  w-40 rounded-2xl h-16 text-center mt-2">
                <p className="-mt-3">Total Videos</p>
                <p className="text-xl">{Channeldetails.totalvideos}</p>
                {/* <p>{Channeldetails.totalviews}</p> */}
              </div>
              <div className="p-5 bg-orange-600 text-white font-extrabold  w-40 rounded-2xl h-16 text-center mt-2">
                {/* <p>{Channeldetails.totalvideos}</p> */}
                <p className="-mt-3">Total Views</p>
                <p className="text-xl">{Channeldetails.totalviews}</p>
              </div>
            </div>
          </div>
        </div>
        <Youtubeplayer Videodetails={videodetails} />
        <div className="text-center text-4xl font-extrabold mt-3 text-red-700">
          <p>Type !Wall in Comment</p>
          <p>to show your channel here</p>
        </div>
      </div>
      <div className=" col-span-3">
        <Rightcol />
      </div>
    </div>
  );
}

export default VideoCardComponent;
