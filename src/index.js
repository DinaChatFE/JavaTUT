const arraySlice = [1, 2, 3, 2, 3];

const lenght = arraySlice.length;

const result = arraySlice.slice(lenght - (lenght - 1), lenght);

document.getElementById("app").innerHTML = result;
