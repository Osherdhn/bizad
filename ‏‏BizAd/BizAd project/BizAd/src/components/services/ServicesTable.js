import Status from "./Status";

function ServicesTable(props) {
  function handleDelete(service) {
    props.deleteService(service);
  }

  return (
    <table className="table table-hover container">
      <thead>
        <tr>
          <th className="w-50">Service</th>
          <th className="w-50">Status</th>
          
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.Services.map((service) => (
          <tr key={service.id} className="bg-light">
            <td>{service.Service}</td>
            <td>
              <Status type={service.Status} />
            </td>
           
            <td>
              <button
                onClick={() => handleDelete(service)}
                className="btn btn-default"
              >
                <i className="bi-trash3"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ServicesTable;
