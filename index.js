// promises js
export const addConst = (a,b) => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    ((a == 0 || b == 0) || (Math.pow(a + b, 2) > 100)) ? reject(new Error('Not allowed')) : resolve(Math.pow(a + b, 2));
  },1000)
})
}
addConst(1,1).then((data) => console.log(data))
             .catch((error) => console.log(error.message));
addConst(10,2).then((data) => console.log(data))
             .catch((error) => console.log(error.message));
