// Instanciar ambas clases
const eventBrite = new EventBrite();
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
		console.log('Buscado...');
	} else {
		console.log('no hay nada');
	}
});
