document.addEventListener("DOMContentLoaded", () => {
  fetch("../data/data.json")
    .then((res) => res.json())
    .then((data) => {
      const template = document.querySelector(".viewAll"),
        tableBody = document.querySelector(".view");

      for (employee in data) {
        (empName = data[employee]["Name"]),
          (empID = data[employee]["CivilID"]),
          (empPos = data[employee]["Position"]);
        const templateInstance = document.importNode(template.content, true);
        templateInstance.getElementById("cid").textContent = empID;
        templateInstance.getElementById("name").textContent = empName;
        templateInstance.getElementById("position").textContent = empPos;

        tableBody.appendChild(templateInstance);
      }
    });
});
