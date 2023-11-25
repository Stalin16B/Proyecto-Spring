package com.text.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.text.spring.model.VehicleModel;
import com.text.spring.repository.VehicleRepository;



@Service
public class VehicleService {
	

	    
		@Autowired
		private final RestTemplate restTemplate;
	    
//		private final String uri = "https://auto.jedai.workers.dev";

		private VehicleRepository repositorioVehiculo;
		public VehicleService(VehicleRepository vehicleRepository, RestTemplate restTemplate) {
	        this.repositorioVehiculo = vehicleRepository;
	        this.restTemplate = restTemplate;

	    }
		
		public VehicleModel guardar (VehicleModel vehicle) {
//			 double precio = precioEx(vehicle.getPlaca());
//		     vehicle.setPrice(precio);
			return repositorioVehiculo.save(vehicle);
		}
		
//		Metodo para obtener el precio desde el servicio REST pero no me guarda el valor
//		private double precioEx(String placa) {
////			String url = uri + "?placa=" + placa;
////			Double response = restTemplate.getForObject(url, Double.class);
////			return response != null ? response : 0.0;
//			return 12000.20;
//		}
		
		public List<VehicleModel> getAllVehicles (){
			return repositorioVehiculo.findAll();
		}
		
		public Optional<VehicleModel> getVehicleById (Long id) {
			return repositorioVehiculo.findById(id);
		}


}
