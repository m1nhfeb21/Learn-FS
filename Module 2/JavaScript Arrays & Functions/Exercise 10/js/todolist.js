const tasks = [];

const addTask = () => {
  let numberTasks = Number(prompt("Nhập số lượng công việc: "));

  for (let i = 0; i < numberTasks; i++) {
    let NameTasks = String(prompt("Tên công việc: "));
    tasks.push(NameTasks);
  }
};

const removeTask = () => {
  let indexRemove = Number(prompt("Nhập vị trí công việc cần xóa") - 1);
  if (indexRemove < 0 || indexRemove >= tasks.length)
    console.log("Không tồn tại công việc ở vị trí đó");
  else tasks.splice(indexRemove, 1);
};

const displayTasks = () => {
  for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i], "Vị trí công việc tương ứng là: ", i + 1);
  }
};
addTask();
removeTask();
displayTasks();
console.log(tasks);
