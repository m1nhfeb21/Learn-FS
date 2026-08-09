"use strict";
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(this.name, this.salary);
    }
}
const employee = new Employee("minh", 200000000);
employee.display();
//# sourceMappingURL=index.js.map
