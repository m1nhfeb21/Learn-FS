class Car {
  brand: string;
  year: number;
  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }
}

const getDetails = () => {
  let car = new Car(
    String(prompt("Nhập hãng xe:")),
    Number(prompt("Nhập năm sản xuất")),
  );
  console.log(`Hãng xe ${car.brand} được sản xuất vào năm ${car.year}`);
};

getDetails();
