import React,{useEffect,useContext} from "react";
import {Context} from "../store/appContext";
import { useParams } from "react-router-dom";

export const Detail=()=>{

    const {type,id}=useParams();
    const {store,actions}=useContext(Context);
	


	useEffect(()=>{
		actions.getItemDetail(type,id);
	
	},[]);



    return (
        <div>
            <div className="card row">
            <img className="card-img-top m-0 w-25 col-2" src="https://via.placeholder.com/150"/>


            {type == "planets"? 
            
            <div className="card col-2 m-3 bg-secondary p-0">
            <div className="card-body">
                <h5 className="card-title">{store.detail.name}</h5>
              
            </div>
        
    </div> :

            type == "vehicles"? 
            <div className="card-body">
                <h5 className="card-title">{store.detail.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div> :

            <div className="card-body">
                <h5 className="card-title">{store.detail.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        }
              
            </div>

        </div>
    )
    
}