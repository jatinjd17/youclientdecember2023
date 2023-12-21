import axios from "axios";

export const Getalldata = async () => {
  const ss = await axios.get(
    "https://youserverdecember2023.vercel.app/getdata"
  );

  console.log(ss);

  return ss;
};
