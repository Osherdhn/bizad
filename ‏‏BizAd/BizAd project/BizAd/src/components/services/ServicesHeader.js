import { useEffect, useState } from "react";

function ServicesHeader(props) { //props  { addService: () => {}   }
  const [service, setService] = useState("");
  const [status, setStatus] = useState("active");

  function handleBtnClick(e) {
    e.preventDefault();
    props.addService({
      Service: service,
      Status: status,
    }); 
   }
 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="d-flex">
          <a className="navbar-brand" href="#">
            service name:
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="form-select me-2"
              >
                <option>Mailing List</option>
                <option>WhatsApp Group Notification</option>
              </select>
              <a className="navbar-brand" href="#">
            status:
          </a>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="form-select me-2"
              >
                <option>active</option>
                <option>disabled</option>
              </select>

              <button
                onClick={(e) => handleBtnClick(e)}
                className="btn btn-outline-success"
                type="submit"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ServicesHeader;
