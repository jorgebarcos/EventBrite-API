// Instanciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

// Listener al buscador

document.getElementById('buscarBtn').addEventListener('click', (e) => {
	e.preventDefault();

	// Leer el texto del input buscar
	const textoBuscador = document.getElementById('evento').value;

	// leer el select
	const categorias = document.getElementById('listado-categorias');
	const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

	// Revisar que haya algo escrito en el buscador
	if (textoBuscador !== '') {
		// Cuando si hay una busqueda
		eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada).then((eventos) => {
			console.log(eventos);
		});
	} else {
		// Mostrar mensaje para que imprima algo
		ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
	}
});
