const template = document.querySelector(".search");
const contentbody = document.querySelector(".searchcont");
const searchInput = document.querySelector("#civilid");

let employees = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value();
  employees.forEach((employee) => {
    const isVisible = data[employee]["CivilID"].includes(value);
    employee.element.classList.toggle("d-none", !isVisible);
  });
});

fetch("../data/data.json")
  .then((res) => res.json())
  .then((data) => {
    for (employee in data) {
      employees = data.map((employee) => {
        (empName = data[employee]["Name"]),
          (empID = data[employee]["CivilID"]),
          (empPos = data[employee]["Position"]);

        const templateInstance = document.importNode(template.content, true);
        templateInstance.getElementById("scid").textContent = empID;
        templateInstance.getElementById("sname").textContent = empName;
        templateInstance.getElementById("sposition").textContent = empPos;

        contentbody.appendChild(templateInstance);
      });
    }
  });
