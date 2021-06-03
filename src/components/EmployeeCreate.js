import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createEmployeeAction } from "../reducer/EmployeeReducer";

export function EmployeeCreate() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const [operation, SetOperation] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const updateName = (e) => setName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateMobile = (e) => setMobile(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);

  const addEmployee = () => {
    dispatch(
      createEmployeeAction({
        name,
        password,
        mobile,
        email,
      })
    );

    SetOperation(true);
    setTimeout(() => SetOperation(false), 2000);
    history.push("/employee-list");

    setName("");
    setPassword("");
    setMobile("");
    setEmail("");
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="alert alert-primary text-center">EmployeeCreatePage</div>

      {operation && (
        <div className="alert alert-success">Operation success</div>
      )}

      <div className="m-2">
        <input
          type="text"
          className="form-control m-2"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => updateName(e)}
        />
      </div>

      <div className="m-2">
        <input
          type="text"
          className="form-control m-2"
          value={password}
          placeholder="Enter your passsword"
          onChange={(e) => updatePassword(e)}
        />
      </div>

      <div className="m-2">
        <input
          type="text"
          className="form-control m-2"
          value={mobile}
          placeholder="Enter mobile"
          onChange={(e) => updateMobile(e)}
        />
      </div>

      <div className="m-2">
        <input
          type="text"
          className="form-control m-2"
          value={email}
          placeholder="Enter your Email"
          onChange={(e) => updateEmail(e)}
        />
      </div>

      <input
        type="button"
        value="AddEmployee"
        className="bg-primary m-2"
        onClick={() => addEmployee()}
      />
    </div>
  );
}
