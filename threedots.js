const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [24, 54, 34];
const allAges = ages.concat(ages2).concat([44]).concat(ages3);
const allAges2 = [...ages, ...ages2, 55, ...ages3];
console.log(allAges2);


const business = 650;
const minister = 455;
const sochib = 450;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const takPoisa = [34, 211, 121, 132243, 1, 1];
const maximumTk = Math.max(...takPoisa);
console.log(maximumTk);