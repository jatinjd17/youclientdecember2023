import React from "react";

function ChanneldetailsComponent({ Channeldetails }: any) {
  return (
    <div>
      <div>{Channeldetails.channelname}</div>
      <div>{Channeldetails.channeldescription}</div>
      <div>{Channeldetails.channelthumbnail}</div>
      <div>{Channeldetails.subscriberscount}</div>
      <div>{Channeldetails.totalvideos}</div>
      <div>{Channeldetails.totalviews}</div>
    </div>
  );
}

export default ChanneldetailsComponent;
