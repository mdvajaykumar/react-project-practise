import { useSelector } from "react-redux";

export function EmployeeList() {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="bg-secondary" style={{ height: "100vh" }}>
      <div className="alert alert-secondary text-center">EmployeeList</div>
      <div>Sample List</div>
      {state.employee.list.map((item, index) => (
        <div className="bg-danger">
          {item.name} / {item.password} /{item.mobile} /{item.email}
        </div>
      ))}
    </div>
  );
}
