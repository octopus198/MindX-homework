// Bai 1
// Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
// let str = "abcdef";
// let reverseStr = str.split('').reverse().join('');
// console.log(reverseStr);


// Bai 2
// Viết một function xoá các phần từ trùng lặp trong một mảng các số
// const arr = [1, 2, 3, 5, 4, 2, 6, 4, 7, 7, 8, 1];
// const finalArr = [];

// function deleteDuplicate(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if (!finalArr.includes(arr[i])) {
//             finalArr.push(arr[i]);
//         }
//     }   
// }
// deleteDuplicate(arr);
// console.log(finalArr)

// Bai 3
// Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
// Input: [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
// Output: {value: 3, count: 3}

// const arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3, 2, 6];
// const numberList = {};

// function createNumberList(value, index, array) {
//     if (array.indexOf(value) === index) { // if this is the first time the number appears, its count is 1
//         numberList[value] = 1;
//     } else if (array.indexOf(value) !== index) { // if not the first time the number appears, add 1 to the count
//         numberList[value] += 1;
//     }
// }
// arr.filter(createNumberList);

// const max = Math.max(...Object.values(numberList)); // find the number repeated the most

// const mostRepeatedArray = []; // create array to hold the numbers repeated the most, could be more than 1 number

// function mostRepeatedNumbers(numberList) { // find the number repeated the most
//     let keysArray = Object.keys(numberList); // extract keys of numberList to an array
//     let valuesArray = Object.values(numberList); // extract values of numberList to an array
//     for(let i = 0; i < keysArray.length; i++) { // check each number, if its value = max --> push to mostRepeatedArray
//         if (valuesArray[i] === max) {  
//             mostRepeatedArray.push({
//                 'value': keysArray[i],
//                 'count': max
//             });
//         }
//     }
// }
// mostRepeatedNumbers(numberList);
// console.log(mostRepeatedArray);

// Bai 4

let list = document.getElementById("list");
let listData = []; // hold the original list of users name and phone number

function add() { 
  let name = document.getElementById("name").value;
  let phoneNumber = document.getElementById("phone-number").value;
  listData.push({
    name: name,
    phoneNumber: phoneNumber,
  });
  console.log(listData); // checkpoint

  listData.sort(function (a, b) { // sort users names alphabetically
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  
  list.innerHTML = ''; // clear the list appear on screen before printing list again

  for(let i = 0; i < listData.length; i++) {
      let content = `<li>${listData[i].name} ${listData[i].phoneNumber}</li>`;
      list.innerHTML += content;
  }
}

function search() {
  let searchInput = document.getElementById("search-input").value;
  let searchListData = []; // create a new array for search output
  searchListData = listData.filter(item => item.name === searchInput || item.phoneNumber === searchInput);
  if (searchListData.length > 0) {
    list.innerHTML = ''; // clear the list appear on screen before printing list again
    for (let i = 0; i < searchListData.length; i++) {
      list.innerHTML += `<li>${searchListData[i].name} ${searchListData[i].phoneNumber}</li>`;
    }
  } else {
    list.innerHTML = "Không có kết quả";
  }
}

function deleteDuplicate() {
  let listDataValues = listData.map((a) => a.phoneNumber); // extract phone number values of listData 
  console.log(listDataValues); // checkpoint

  const duplicatePhoneNumber = listDataValues.filter((item, index) => listDataValues.indexOf(item) !== index);
  // ^ find duplicate phone numbers
  console.log(duplicatePhoneNumber); // checkppoint

  listData = listData.filter((item, index, array) => {return (!duplicatePhoneNumber.includes(item.phoneNumber))  || 
    (duplicatePhoneNumber.includes(item.phoneNumber) && array.findIndex(element => duplicatePhoneNumber.includes(element.phoneNumber) && item.phoneNumber === element.phoneNumber) === index)
  });

 
  console.log(listData);  

  list.innerHTML = ''; // clear the list appear on screen before printing list again
  for (let i = 0; i < listData.length; i++) {
    list.innerHTML += `<li>${listData[i].name} ${listData[i].phoneNumber}</li>`;
  }
}

