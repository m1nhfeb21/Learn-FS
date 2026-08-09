"use strict";
class Car {
    brand;
    year;
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
}
const getDetails = () => {
    let car = new Car(String(prompt("Nhập hãng xe:")), Number(prompt("Nhập năm sản xuất")));
    console.log(`Hãng xe ${car.brand} được sản xuất vào năm ${car.year}`);
};
getDetails();
//# sourceMappingURL=index.js.map
