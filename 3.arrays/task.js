// Задание 1.
function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}

// Задание 2.
function getUsersNamesInAgeRange(users, gender) {
  let result = users
    .filter((user) => user.gender === gender)
    .reduce((summator, userAge, index, array) => {
      if (index === array.length - 1) {
        (summator + userAge.age) / array.length, 0;
      }
    });
  return result;
}
