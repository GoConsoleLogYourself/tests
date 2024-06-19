const mapArrToStr = (arr: any[]) => {
  return arr.filter((item) => Number.isInteger(item)).map(String);
};

export default mapArrToStr;
