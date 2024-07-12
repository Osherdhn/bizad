import { useEffect } from "react";
import "./Card.css";
function Card(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    
    <div className="card m-4 shadow design col-3">
      <img src={props.image} className="card-img-top img" alt={props.name} />
      <div className="card-body fix">
        <div className=" card bg-secondary">{props.number}</div>
        <h3 className="card-title">{props.name}</h3>
        <p className="card">{props.key}</p>        
        <h5 className="card-text"><i class="bi bi-geo-alt"></i>{props.location}</h5>
        <p className="card-text"><i class="bi bi-tags"></i>{props.tags}</p>
        <p className="card-text"><i class="bi bi-telephone"></i>{props.phone}</p>
        <button className="btn btn-dark "><b>visit web</b></button>
      </div>
    </div>
    
  );
}
export default Card;
