// Insertion an Array in Js
let data = [10, 30, 40, 50, 60, 70];
let newData = 20;
let position =1;
// Insertion an Array //reversing
for (let i = data.length - 1; i >= 0; i--) {
  if (i >= position) {
    data[i + 1] = data[i];
    if (i == position) {
      data[i] = newData;
    }
  }
  console.log(data);
}
