function squre(n) {
  return n * n;
}

function cubes(n) {
  return n * n * n;
}

function sumOfSomethings(a, b, fn) {
  let sq1 = fn(a);
  let sq2 = fn(b);
  return sq1 + sq2;
}

const highOrder = (n) => {
  const oneFun = (m) => {
    const twoFun = (p) => {
      return p + m + n;
    };
    return twoFun;
  };
  return oneFun;
};

let myNums = [2, 3, 5, 8, 9];

const arrNumsSum = (arr) => {
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });
  return total;
};

myNums.forEach((ele, idx, arr) => {
    console.log(ele, idx, arr);
});

let heros = ["shubh", "deva", "roni", "toni", "lakshy"];

heros.forEach((ele)=>console.log(ele.toUpperCase()))
heros.map((hero)=>console.log(hero.toLowerCase()))

console.log(heros);

const heroWith_Ni = heros.filter((h) => {
  return h.endsWith("ni");
});
console.log(heroWith_Ni);

console.log(arrNumsSum(myNums));

console.log(highOrder(2)(3)(4));

// console.log(sumOfSomethings(2,3,squre))
console.log(sumOfSomethings(2, 3, cubes));

const myBills = [10, 20, 70];

const totalBills = myBills.reduce((prev, curr) => prev + curr, 5);

console.log(totalBills);
