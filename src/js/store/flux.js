import { getPlanets } from "../service/planets";
import { getCharacters } from "../service/characters";
import { getVehicles } from "../service/vehicles";
import { getDetail } from "../service/detail";

let swapiPlanets= "https://www.swapi.tech/api/planets/";
let swapiCharacters="https://www.swapi.tech/api/people/";
let swapiVehicles="https://www.swapi.tech/api/vehicles/";
let swapiDetail="https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets:[],
			characters:[],
			vehicles:[],
			loading:false,
			detail:{},
			favorites:[]
		},
		actions: {
			getAllPlanets: () => {
					const store=getStore();
					store.detail={};
					store.planets=[];
					store.loading=true;
					getPlanets(swapiPlanets)
					.then(res => res.json())
					.then(data =>{
						const {results, next}=data;
						results.map((planet)=>{
							setStore({...store,planets:[...store.planets,planet]});
							store.loading=false;
							if(next!=null){
								swapiPlanets=next;
							}else{
								swapiPlanets="https://www.swapi.tech/api/planets/";
							}
							
							
						});
					
					})
					.catch(err => console.error(err));

					
			},

			getAllCharacters:()=>{
				const store=getStore();
				store.characters=[];
				store.detail={};
				getCharacters(swapiCharacters)
				.then(res => res.json())
				.then(data => {
					const {results,next}=data;
					results.map((character)=>{
						setStore({...store,characters:[...store.characters, character]});
						if(next!=null){
							swapiCharacters=next;
						}else{
							swapiCharacters="https://www.swapi.tech/api/people/";
						}
					})
				})
				.catch(err => console.error(err));
			},

			getAllVehicles:()=>{
				const store=getStore();
				store.vehicles=[];
				store.detail={};
				getVehicles(swapiVehicles)
				.then(res => res.json())
				.then(data =>{
					const {results, next}=data;
					results.map((vehicle)=>{
						setStore({...store,vehicles:[...store.vehicles, vehicle]});
						if(next!=null){
							swapiVehicles=next;
						}else{
							swapiVehicles="https://www.swapi.tech/api/vehicles/";
						}
					})
				})
				.catch(err => console.error(err));
			},

			getItemDetail: (type,id) => {
				swapiPlanets="https://www.swapi.tech/api/planets/";
				swapiVehicles="https://www.swapi.tech/api/vehicles/";
				swapiCharacters="https://www.swapi.tech/api/people/";
				getDetail(`${swapiDetail}${type}/${id}`)
				.then(res => res.json())
				.then(data =>{
					const {result}=data;
					setStore({detail: result.properties})
				})
				.catch(err => console.error(err));

				
		},

		add_favorites(item_name){
			
			const store=getStore();
			setStore({...store,favorites:[...store.favorites, item_name]});
			
		},

		delete_favorite(item_name){
			const store=getStore();
			const new_favs= store.favorites.filter((item)=>item!=item_name)
			store.favorites=[];
			new_favs.map((fav)=>{
				setStore({...store,favorites:[...store.favorites,fav]});
			})
			
		}
		}
	};
};

export default getState;
