import { memo, useMemo, useState } from "react";

const employees = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Employee ${i}`,
  salary: Math.floor(Math.random() * 5000) + 1000,
}));

const EmployeeCard = memo(({ employee, onSelect }) => {
  console.log("Render:", employee.id);

  return (
    <div>
      <h3>{employee.name}</h3>
      <p>{employee.salary}</p>

      <button onClick={() => onSelect(employee)}>
        Select
      </button>
    </div>
  );
})

export default function App() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [counter, setCounter] = useState(0);

  const filteredEmployees=useMemo(()=>{
    return employees
    .filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.salary - b.salary);
  },[employees,search])

  const averageSalary=useMemo(()=>{
    return filteredEmployees.reduce((sum, emp) => sum + emp.salary, 0) /
    filteredEmployees.length;
  },[filteredEmployees])

  const title = "Employee Dashboard";

  const company = {
    name: "OpenAI",
    country: "USA",
  };

  const selectEmployee = (employee) => {
    setSelected(employee);
  };

  const resetSelection = () => {
    setSelected(null);
  };

  const isSelected = selected !== null;

  return (
    <>
      <h1>{title}</h1>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <button onClick={resetSelection}>
        Reset
      </button>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Average Salary: {averageSalary}</p>

      <p>{company.name}</p>

      <p>{isSelected ? "Selected" : "No Selection"}</p>

      {filteredEmployees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onSelect={selectEmployee}
        />
      ))}
    </>
  );
}