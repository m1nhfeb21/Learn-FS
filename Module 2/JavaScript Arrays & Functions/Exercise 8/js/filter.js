let ages = [15, 20, 12, 18, 25, 30, 10];

const getAdults = (array) => {
  let adults = array.filter((ages) => ages >= 18);
  return adults;
};
console.log(getAdults(ages));
