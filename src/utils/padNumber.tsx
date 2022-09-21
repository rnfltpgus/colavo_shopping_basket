const padNumber = (num: number, length: number) => {
  return String(num).padStart(length, "0");
};

export default padNumber;
