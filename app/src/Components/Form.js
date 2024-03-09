import react from "react";
import "../Style/Form.css";

function Form(){
  return(
    <div class = "container">
        <div class = "container-sm">
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
        <input type="text" readonly class="form-control" id="staticEmail" ></input>
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword"></input>
       </div>
      </div>
    </div>
    </div>
    
  )
}

export default Form;