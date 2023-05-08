// Задание 1. Поправил
function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}

// Задание 2. Поправил
function getUsersNamesInAgeRange(users, gender) {
  let result = users
    .filter((user) => user.gender === gender)
    .reduce(
      (averAge, userAge, index, array) => averAge + userAge.age / array.length,
      0
    );
  return result;
}
/*
function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0 || (gender !== "мужской" && gender !== "женский")) {
    return 0;
  } else if (gender === "женский") {
    result =
      users
        .filter((user) => user.gender === "женский")
        .reduce((acc, cur) => acc + cur.age, 0) /
      users.filter((user) => user.gender === "женский").map((ages) => ages.age)
        .length;
    return result;
  } else if (gender === "мужской") {
    result =
      users
        .filter((user) => user.gender === "мужской")
        .reduce((acc, cur) => acc + cur.age, 0) /
      users.filter((user) => user.gender === "мужской").map((ages) => ages.age)
        .length;
    return result;
  }
}*/
