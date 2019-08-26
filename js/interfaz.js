class Interfaz {
	constructor() {
		// Inicializa la appa al instanciar
		this.init();
		// Leer el resultado
		this.listado = document.getElementById('resultado-eventos');
	}

	// Método para cuando inicialice la app
	init() {}
	// Imprimir categorias
	imprimirCategorias() {
		const listaCategorias = eventBrite.obtenerCategorias();
	}
}
