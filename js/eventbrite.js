class EventBrite {
	constructor() {
		this.token_auth = '6C5U65Y4EYKNLTFA6U43';
		this.ordernar = 'date';
	}
	// Obtiene las categorias en init()
	async obtenerCategorias() {
		// Consultar las categorias a las REST API de Event Brite
		const respuestaCategorias = await fetch(
			`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`
		);

		// Esperar la respuesta de las categorias y devolver un JSON
		const categorias = await respuestaCategorias.json();

		// devolvemos el resultado
		return {
			categorias
		};
	}
}
