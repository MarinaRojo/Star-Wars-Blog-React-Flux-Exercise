import React from "react";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";

export const Card= (props)=>{
    return (
        <div className="card col-2 m-3 bg-secondary p-0">
            
				<img className="card-img-top m-0" src="https://via.placeholder.com/150"/>
				<div className="card-body">
					<h5 className="card-title">{props.item.name}</h5>
					<Link className="btn btn-primary bg-warning border border-light text-dark" to={`/details/${props.type}/${props.item.uid}`}>
						More details
					</Link>
				</div>
			
        </div>

    );

}

Card.propTypes= {
    item: PropTypes.object,
	type: PropTypes.string
};