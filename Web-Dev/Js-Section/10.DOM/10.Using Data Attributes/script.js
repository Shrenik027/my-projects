//Using `getAttribute` and `setAttribute`

const usercard = document.getElementById("userCard");
const userId = usercard.getAttribute("data-user-id");
// console.log(userId);

//Modifying data Attributes

usercard.setAttribute("data-user-role", "super-admin");
usercard.setAttribute("data-user-position", "Engineer");
// console.log(usercard);

//Using Dataset
const userRole = usercard.dataset.userRole;
const userId2 = usercard.dataset.userId;
console.log(userId2);
