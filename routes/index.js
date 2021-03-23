import Dashboard from "../ui/dashboards";
// import Apps from "../ui/Apps";
import Employee from "../ui/employees";
console.log("ankur");

export default [
  {
    path: "main",
    component: Dashboard,
  },
  // {
  //   path: "apps",
  //   component: Apps,
  // },

  {
    path: "employee",
    component: Employee,
  },
];
