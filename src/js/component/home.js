import React, { useState } from "react";
import shortid from "shortid";

//create your first component
export function Home() {
	const [tarea, setTarea] = useState("");
	const [arrayTareas, setArrayTareas] = useState([]);

	let tareasPendientes = arrayTareas.length;

	const eliminar = idUnico => {
		let itemEliminar = arrayTareas.filter(item => {
			return item.id !== idUnico;
		});
		setArrayTareas(itemEliminar);
	};

	const agregarTarea = e => {
		e.preventDefault();
		setArrayTareas([
			...arrayTareas,
			{
				id: shortid.generate(),
				nombreTarea: tarea
			}
		]);
		setTarea("");
	};

	return (
		<div className="app">
			<header className="header">
				<h1>Todos</h1>
				<form onSubmit={agregarTarea}>
					<input
						placeholder="¿Qué necesita hacer?"
						onChange={e => setTarea(e.target.value)}
						value={tarea}
					/>
				</form>
			</header>
			<section>
				{tareasPendientes === 0 ? (
					<p>No hay tareas pendientes</p>
				) : (
					arrayTareas.map(item => (
						<div className="lista" key={item.id}>
							<p>
								{item.nombreTarea}{" "}
								<i
									onClick={() => {
										eliminar(item.id);
									}}
									className="fas fa-trash"></i>
							</p>
						</div>
					))
				)}
			</section>
			<footer className="footer">
				<p>Quedan {tareasPendientes} tareas pendientes.</p>
			</footer>
		</div>
	);
}
