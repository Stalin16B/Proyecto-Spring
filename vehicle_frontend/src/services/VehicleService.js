import axios from 'axios';


export default class VehicleService{
	url = "http://localhost:8080/api/vehicles/";
	getAll(){
		return axios.get(this.url + "all").then(res => res.data);
	}
}
