class Interfaz {
	constructor() {
		// Inicializa la appa al instanciar
		this.init();
		// Leer el resultado
		this.listado = document.getElementById('resultado-eventos');
	}

	// Método para cuando inicialice la app
	init() {
		// LLmar a imprimir categorias de las REST API
		this.imprimirCategorias();
	}
	// Imprimir categorias
	imprimirCategorias() {
		const listaCategorias = eventBrite.obtenerCategorias().then((categorias) => {
			const cats = categorias.categorias.categories;
			// Seleccionar el select de categorias
			const selectCategoria = document.getElementById('listado-categorias');

			// Recorremos el arreglo e imprimimos los <option>
			cats.forEach((cat) => {
				const option = document.createElement('option');
				option.value = cat.id;
				option.appendChild(document.createTextNode(cat.name_localized));
				selectCategoria.appendChild(option);
			});
		});
	}
}
