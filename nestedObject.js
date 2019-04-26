//Direction:

// You can modify properties on this nested object in the same way you modified properties in the last challenge. Set the value of the online key to 45.

// Given Code:
// let userActivity = {
//   id: 23894201352,
//   date: 'January 1, 2017',
//   data: {
//     totalUsers: 51,
//     online: 42
//   }
// };

// // change code below this line

// // change code above this line

// console.log(userActivity);

//Solution

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line
userActivity.data.online = 45;
// change code above this line

console.log(userActivity);