class Employee {
  public name: string;
  private salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  display() {
    console.log(this.name, this.salary);
  }
}

const employee = new Employee("minh", 200000000);
employee.display();
console.log(employee.name, employee.salary);
