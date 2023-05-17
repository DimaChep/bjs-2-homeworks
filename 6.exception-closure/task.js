//Задача №1
function parseCount(number) {
  let result = Number.parseFloat(number, 1);
  error = new Error("Невалидное значение");
  if (Number.isNaN(Number.parseFloat(number))) {
    throw error;
  } else {
    return result;
  }
}

function validateCount(parse) {
  try {
    let result = parseCount(parse);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

//Задача №2
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    let s = this.perimeter / 2;
    return Number(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
