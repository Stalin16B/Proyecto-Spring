package com.text.spring.rest;

import java.net.URI;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.text.spring.model.VehicleModel;
import com.text.spring.repository.VehicleRepository;
import com.text.spring.service.VehicleService;

@RestController
@RequestMapping("/api/vehicles/")
@CrossOrigin("*")
public class VehicleRest {
	
	
	@Autowired
	
	private final VehicleService vehiculoServicio;
	
	public VehicleRest(VehicleService vehiculoServicio, RestTemplate restTemplate) {
		this.vehiculoServicio = vehiculoServicio;
	}

	@PostMapping
	private ResponseEntity<VehicleModel> guardar(@RequestBody VehicleModel vehicle) {
		VehicleModel temporal = vehiculoServicio.guardar(vehicle);
		

        
		try {
			return ResponseEntity.created(new URI("/api/vehicles/" + temporal.getId())).body(temporal);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	
	@GetMapping ("/all")
	public ResponseEntity<List<VehicleModel>> getAllVehicles() {
		List<VehicleModel> vehicles = vehiculoServicio.getAllVehicles();
		return new ResponseEntity<>(vehicles, HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Optional<VehicleModel>> getVehicleById(@PathVariable("id") Long id) {

		return ResponseEntity.ok(vehiculoServicio.getVehicleById(id));
	}
	

}
