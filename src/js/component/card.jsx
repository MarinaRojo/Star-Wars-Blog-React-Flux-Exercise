import React,{useContext} from "react";
import {Context} from "../store/appContext";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";

export const Card= (props)=>{
	const {store,actions}=useContext(Context);
    return (
        <div className="card col-2 m-3 bg-secondary p-0">
            
				<img className="card-img-top m-0" src="https://via.placeholder.com/300"/>
				<div className="card-body">
					<h5 className="card-title">{props.item.name}</h5>
					<Link className="btn btn-primary bg-warning border border-light text-dark" to={`/details/${props.type}/${props.item.uid}`}>
						More details
					</Link>
					<button className="btn btn-warning border border-light text-dark ms-2" onClick={()=> actions.add_favorites(props.item.name)}>Fav</button>
				</div>
			
        </div>

    );

}

Card.propTypes= {
    item: PropTypes.object,
	type: PropTypes.string
};