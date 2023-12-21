import React from "react";

function ChanneldetailsComponent({ Channeldetails }: any) {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="flex justify-center ">
          <div className="p-5 bg-black text-white font-extrabold  w-40 rounded-2xl">
            {Channeldetails.subscriberscount}
          </div>
        </div>
        {/* <div className="flex  justify-center ">
          <div className=" text-center">
            <div>
              <img
                src={Channeldetails.channelthumbnail}
                alt={Channeldetails.channelname}
                className="rounded-full w-24 h-24 object-cover ml-12"
              />
            </div>

            <div className="text-3xl font-extrabold">
              {Channeldetails.channelname}
            </div>
          </div>
        </div> */}
        <div className="flex  justify-center align-middle">
          <div>
            <div>{Channeldetails.totalvideos}</div>
            <div>{Channeldetails.totalviews}</div>
          </div>
        </div>
      </div>
      {/* <div className="text-sm font-bold line-clamp-2 mx-48">
        {Channeldetails.channeldescription}
      </div> */}
    </div>
  );
}

export default ChanneldetailsComponent;
