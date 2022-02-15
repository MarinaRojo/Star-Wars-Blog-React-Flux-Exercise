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
        <div className="bg-dark">
                <div className="card row container m-auto">
                 {type=="planets"?
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img src="https://via.placeholder.com/600" className="card-img m-4" alt="..."/>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                            <h5 className="card-title">{store.detail.name}</h5>
                            <ul className="card-text list-group">
                                <li className="list-group-item">Diameter: {store.detail.diameter}</li>
                                <li className="list-group-item">Rotation period: {store.detail.rotation_period}</li>
                                <li className="list-group-item">Orbital period: {store.detail.orbital_period}</li>
                                <li className="list-group-item">Gravity: {store.detail.gravity}</li>
                                <li className="list-group-item">Population: {store.detail.population}</li>
                                <li className="list-group-item">Climate: {store.detail.climate}</li>
                                <li className="list-group-item">Terrain: {store.detail.terrain}</li>
                                <li className="list-group-item">Surface water:{store.detail.surface_water}</li>
                    
                            </ul>
                           
                            </div>
                        </div>
                    </div>

                    : type=="people"?
                
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img src="https://via.placeholder.com/600" className="card-img m-4" alt="..."/>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                            <h5 className="card-title">{store.detail.name}</h5>
                            <ul className="card-text list-group">
                            <li className="list-group-item">Height: {store.detail.height}</li>
                            <li className="list-group-item">Mass: {store.detail.mass}</li>
                            <li className="list-group-item">Hair color: {store.detail.hair_color}</li>
                            <li className="list-group-item">Skin color: {store.detail.skin_color}</li>
                            <li className="list-group-item">Eye color: {store.detail.eye_color}</li>
                            <li className="list-group-item">Birth year: {store.detail.birth_year}</li>
                            <li className="list-group-item">Gender: {store.detail.gender}</li>

                            </ul>
                            </div>
                        </div>
                    </div>
            
                    : <div className="row no-gutters">
                    <div className="col-4">
                        <img src="https://via.placeholder.com/600" className="card-img m-4" alt="..."/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                        <h5 className="card-title">{store.detail.name}</h5>
                        <ul className="card-text list-group">
                            <li className="list-group-item">Model: {store.detail.model}</li>
                            <li className="list-group-item">Vehicle class: {store.detail.vehicle_class}</li>
                            <li className="list-group-item">Manufacturer: {store.detail.manufacturer}</li>
                            <li className="list-group-item">Cost in credits: {store.detail.cost_in_credits}</li>
                            <li className="list-group-item">Length: {store.detail.length}</li>
                            <li className="list-group-item">Crew: {store.detail.crew}</li>
                            <li className="list-group-item">Passengers: {store.detail.passengers}</li>
                            <li className="list-group-item">Max atmosphering speed: {store.detail.max_atmosphering_speed}</li>
                            <li className="list-group-item">Cargo capacity: {store.detail.cargo_capacity}</li>
                            <li className="list-group-item">Consumables: {store.detail.consumables}</li>
                            

                            </ul>
                        </div>
                    </div>
                    </div>
            
            }
                   
                </div>
        </div>
            
      
       
    )
    
}