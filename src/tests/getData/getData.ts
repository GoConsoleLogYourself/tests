import axios from "axios";
import mapArrToStr from "../mapArrToStr/mapArrToStr";

const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userIds = response.data.map((user: any) => user.id);
    return mapArrToStr(userIds);
  } catch (error) {}
};

export default getData;
