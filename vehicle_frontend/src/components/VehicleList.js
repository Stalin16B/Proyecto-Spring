// VehicleList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alerta } from "../function";

const VehicleList = () => {
	const url = "http://localhost:8080/api/vehicles/";
	const url1 = "http://localhost:8080/api/vehicles/all";
	const [vehiculos, setVehiculos] = useState([]);
	const [id, setId] = useState("");
	const [placa, setPlaca] = useState("");
	const [model, setModel] = useState("");
	const [price, setPrice] = useState("");
	const [year, setYear] = useState("");
	const [observation, setObservation] = useState("");
	const [operation, setOperation] = useState(1);
	const [title, setTitle] = useState("");

	useEffect(() => {
		getAllVehicles();
	}, []);

	const getAllVehicles = async () => {
		const respuesta = await axios.get(url1);
		setVehiculos(respuesta.data);
	};

	const openModal = (op, id, placa, model, price, year, observation) => {
		setId('');
		setPlaca('');
		setModel('');
		setPrice('');
		setYear('');
		setObservation('');
		setOperation(op)
		if (op == 1) {
			setTitle('Registrar Producto');
		} else if (op == 2) {
			setTitle('Editar Producto');
			setId('id');
			setPlaca('placa');
			setModel('model');
			setPrice('price');
			setYear('year');
			setObservation('observation')
		}
		window.setTimeout(function () {
			document.getElementById('placa').focus()
		}, 500)
	}
	const validar = () => {
		var parametros;
		var metodos;
		if (placa.trim() == '') {
			show_alerta('Digite la Placa del vehiculo', 'warning');
		} else if (model.trim() == '') {
			show_alerta('Escoga el modelo del Vehiculo', 'warning')
		} else if (price.trim() == '') {
			show_alerta('Ingrese el valor del Vehiculo', 'warning')
		} else if (year.trim() == '') {
			show_alerta('Ingrese año del vehiculo', 'warning')
		} else if (observation.trim() == '') {
			show_alerta('Observación obligatoria del vehiculo', 'warning')
		} else {
			if (operation == 1) {
				parametros = {
					placa: placa.trim(), model: model.trim(), price: price.trim(), year: year.trim(),
					observation: observation.trim
				}
				metodos = 'POST';
			} else {
				parametros = {
					placa: placa.trim(), model: model.trim(), price: price.trim(), year: year.trim(),
					observation: observation.trim
				}
				metodos = 'PUT';
			}
			enviarSolicitud(metodos, parametros)
		}
	}

	const enviarSolicitud = async (metodos, parametros) => {
		await axios({ method: metodos, url: url, data: parametros }).then(function (respuesta) {
			var tipo = respuesta.data[0]
			var msj = respuesta.data[1]
			show_alerta('Producto Guardado','success')
			if (tipo == 'success') {
				document.getElementById('btnCerrar').click()
				getAllVehicles();
			}
		})
			.catch(function (error) {
				show_alerta('Error en la solicitud de guardado', 'error')
				console.log(error)
			})
	}

	return (
		<div className="VehicleList">

			<div className="container-fluid">
				<div className="row mt-3">
					<div className="col-md-4 offset-md-4">
						<div className="d-grid mx-auto">
							<button
								onClick={() => openModal(1)}
								className="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#modalVehiculo"
							>
								<i class="fa-solid fa-circle-plus"></i>Añadir Nuevo Vehiculo
							</button>
						</div>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-12 col-lg-8 offset-0 offset-lg-2">
						<div className="table-responsive">
							<table class="table table-bordered">
								<thead class="table-dark">
									<tr>
										<th scope="col">Placa</th>
										<th scope="col">Modelo</th>
										<th scope="col">Precio</th>
									</tr>
								</thead>
								<tbody className="table-group-divider">
									{vehiculos.map((vehiculo, i) => (
										<tr key={vehiculo.id}>
											<td>{vehiculo.placa}</td>
											<td>{vehiculo.model}</td>
											<td>{vehiculo.price}</td>
										</tr>
									))
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="modal fade" id="modalVehiculo" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<label className="h5">{title}</label>
						</div>
						<div class="modal-body">
							<input type="hidden" id="id"></input>
							<div className="input-group mb-3">
								<span className="input-group-text"><i class="fa-solid fa-car"></i></span>
								<input type="text" id="placa" className="form-control" placeholder="Placa" value={placa}
									onChange={(e) => setPlaca(e.target.value)}></input>
							</div>

							<div className="input-group mb-3">
								<span className="input-group-text"><i class="fa-solid fa-tags"></i></span>
								<select type="text" class="form-select" aria-label="Default select example" value={model}
									onChange={(e) => setModel(e.target.value)} >
									<option selected>Seleccionar Modelo</option>
									<option value="Audi">Audi</option>
									<option value="BMW">BMW</option>
									<option value="Chevrolet">Chevrolet</option>
									<option value="Citroen">Citroen</option>
									<option value="Fiat">Fiat</option>
									<option value="Kia">Kia</option>
									<option value="Ford">Ford</option>
									<option value="Honda">Honda</option>
									<option value="Hyundai">Hyundai</option>
									<option value="Mazda">Mazda</option>
									<option value="Mercedes">Mercedes</option>
									<option value="Mitsubishi">Mitsubishi</option>
								</select>
							</div>
							<div className="input-group mb-3">
								<span className="input-group-text"><i class="fa-solid fa-dollar-sign"></i></span>
								<input type="number" id="price" className="form-control" placeholder="Precio" value={price}
									onChange={(e) => setPrice(e.target.value)}></input>
							</div>

							<div className="input-group mb-3">
								<span className="input-group-text"><i class="fa-solid fa-calendar-days"></i></span>
								<input type="text" id="year" className="form-control" placeholder="Año" value={year}
									onChange={(e) => setYear(e.target.value)}></input>
							</div>
							<div class="form-floating">
								<textarea type="text" id="observation" className="form-control" placeholder="Observaciones" value={observation}
									onChange={(e) => setObservation(e.target.value)}></textarea>
								<label for="observation"><i class="fa-solid fa-eye"></i> Observaciones del vehiculo</label>
							</div>
							<br/>
							<center><button onClick={() => validar()} type="button" className="btn btn-success"><i className="fa-solid fa-floppy-disk"></i> Guardar</button>
							</center> 

						</div>
						<div class="modal-footer">
							<button type="button" id="btnCerrar" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
export default VehicleList;
