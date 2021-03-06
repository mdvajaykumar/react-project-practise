import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteEmployeeAction,
  updateEmployeeAction,
  updateRefEmployee,
} from "../reducer/EmployeeReducer";

export function EmployeeList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  const history = useHistory();

  const deleteEmployee = (item, index) => {
    dispatch(deleteEmployeeAction(index));
  };

  const updateEmployee = (item, index) => {
    dispatch(updateRefEmployee(item));
    history.push("/employee-create");
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="alert alert-secondary text-center">EmployeeList</div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Password</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {[...state.employee.list].map((item, index) => (
          <tbody>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.password}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => updateEmployee(item)}
                >
                  edit
                </button>{" "}
                /{" "}
                <button
                  className="btn btn-primary"
                  onClick={() => deleteEmployee(item, index)}
                >
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
