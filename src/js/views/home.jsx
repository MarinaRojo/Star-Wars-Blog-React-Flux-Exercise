import React, {useEffect,useContext} from "react";
import {Context} from "../store/appContext";
import { Card } from "../component/card.jsx";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Home = () => {
	const {store,actions}=useContext(Context);
	


	useEffect(()=>{
		actions.getAllPlanets();
		actions.getAllCharacters();
		actions.getAllVehicles();
	},[]);

			return( 
				<div>
					<div  className="bg-dark">
					
						<div className="container row m-auto border-bottom border-info border-1">
							<div className="btn-group mt-4 mb-4" style={{width:"10%"}}>
							<button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul className="dropdown-menu">
								{store.favorites.map((item,index)=>{
									return <div key={index}><li className="dropdown-item" href="#">{item} <FontAwesomeIcon icon={faTrash} onClick={()=>actions.delete_favorite(item)}/></li></div>
								})}
								
								
							</ul>
							</div>

							<h1 className="text-light">Planets</h1>
							{store.planets.map((planet, index)=> {return (
									<Card item={planet} key={index} type="planets" />
							)})}

								
							<button className="btn btn-primary bg-warning border border-light text-dark mx-auto col-2 mb-2" onClick={actions.getAllPlanets}>
								
								{store.loading==true? 
									<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
								:
								"Show more"
								}



							
							</button>
						
						</div>
						
						<div className="container row m-auto border-bottom border-info border-1 mt-3">
							<h1 className="text-light">Characters</h1>
							{store.characters.map((character, index)=> {return (
									<Card item={character} key={index} type="people" />
							)})}

							<button className="btn btn-primary bg-warning border border-light text-dark mx-auto col-2 mb-2" onClick={actions.getAllCharacters}>Show more</button>
						</div>

						<div className="container row m-auto border-bottom border-info border-1 mt-3">
							<h1 className="text-light">Vehicles</h1>
							{store.vehicles.map((vehicle, index)=> {return (
									<Card item={vehicle} key={index} type="vehicles"/>
							)})}

							<button className="btn btn-primary bg-warning border border-light text-dark mx-auto col-2 mb-2" onClick={actions.getAllVehicles}>Show more</button>
						</div>
						
				</div>	
				</div>)
				
			

};
