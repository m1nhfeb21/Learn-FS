function simulateTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task Completed!");
    }, 2000);
  });
}

simulateTask()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Lỗi:", error);
  });
