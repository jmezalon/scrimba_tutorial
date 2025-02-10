const organizationData = {
  headquaters: {
    finace: {
      employees: [
        { id: 1, name: "John Doe", title: "Accountant" },
        { id: 2, name: "Jane Mitch", title: "Finance Manager" },
      ],
      budget: 1000000,
    },
    hr: {
      employees: [
        { id: 3, name: "Doe John", title: "HR Manager" },
        { id: 4, name: "Mitch Jane", title: "Recruiter" },
      ],
      budget: 500000,
      policies: ["Dress Code", "Vacation", "Benefits"],
    },
  },
  branch: {
    finace: {
      employees: [
        { id: 5, name: "Luke Walker", title: "Accountant" },
        { id: 6, name: "Mike James", title: "Finance Manager" },
      ],
      budget: 500000,
    },
    hr: {
      employees: [
        { id: 7, name: "Idya Layba", title: "HR Manager" },
        { id: 8, name: "Justin Lee", title: "Recruiter" },
      ],
      budget: 250000,
      policies: ["Dress Code", "Vacation", "Benefits"],
    },
  },
};

const searchEmployeeById = (orgArr, id) => {
  // solve recursively

  let results = [];

  for (let key in orgArr) {
    if (key === "employees") {
      for (let item of orgArr[key]) {
        if (item.id === id) {
          results.push(item);
        }
      }
    } else if (typeof orgArr[key] === "object") {
      const nestedEmployee = searchEmployeeById(orgArr[key], id);
      if (Array.isArray(nestedEmployee)) {
        results = [...results, ...nestedEmployee];
      }
    }
  }
  return results.length ? results : "Employee not found";
};

console.log(searchEmployeeById(organizationData, 15));
console.log(searchEmployeeById(organizationData, 8));
