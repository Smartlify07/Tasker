import moment from "moment";

export const getDate = () => {
  const currentTime = Date.now();
  const formattedTime = moment(currentTime).format("MMMM, Do YYYY");
  return formattedTime;
};
