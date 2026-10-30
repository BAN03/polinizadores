export const NAV = [
	{ to: "/", label: "Inicio" },
	{ to: "/importancia", label: "Importancia" },
	{ to: "/polinizadores", label: "Polinizadores" },
	{ to: "/como-funciona", label: "¿Cómo funciona?" },
	{ to: "/amenazas", label: "Amenazas" },
	{ to: "/acciones", label: "Acciones" },
	{ to: "/fuentes", label: "Fuentes" },
];

export const POLINIZADORES = [
	{
		icon: "🐝",
		nombre: "Abejas",
		resumen:
			"Existen más de 25,000 especies conocidas y la mayoría son silvestres, no abejas domésticas. Numerosos cultivos dependen de ellas para producir frutos y semillas.",
		detalle:
			"Algunas especies, como la abeja melífera, viven en colonias muy organizadas: una reina que se reproduce, obreras que recolectan alimento, cuidan a las crías y mantienen la colonia, y zánganos con función reproductiva. Esta jerarquía NO se presenta en todas las especies: muchas abejas son solitarias y cada hembra construye y abastece su propio nido.",
	},
	{
		icon: "🦋",
		nombre: "Mariposas y polillas",
		resumen:
			"Al alimentarse del néctar, el polen se adhiere a su cuerpo y es transportado a otras plantas. Las mariposas visitan flores de día y muchas polillas de noche.",
		detalle:
			"Esto permite que algunas plantas sean polinizadas en distintos momentos del día. Además forman parte de las cadenas alimentarias y pueden servir como indicadores de las condiciones ambientales de un ecosistema.",
	},
	{
		icon: "🦇",
		nombre: "Murciélagos",
		resumen:
			"Son polinizadores fundamentales en ecosistemas tropicales y subtropicales. Algunas plantas abren sus flores por la noche y producen mucho néctar para atraerlos.",
		detalle:
			"Además de transportar polen, participan en la dispersión de semillas, por lo que contribuyen a la reproducción de las plantas y a la regeneración de los ecosistemas. La FAO los reconoce, junto con aves e insectos, como importantes polinizadores.",
	},
	{
		icon: "🪰",
		nombre: "Moscas",
		resumen:
			"Reciben menos atención que abejas y mariposas, pero son importantes polinizadoras. Algunas visitan flores por su néctar y otras por olores de materia orgánica.",
		detalle:
			"Pueden ser especialmente importantes donde otros polinizadores son menos abundantes. Algunas plantas incluso han desarrollado características específicas para atraerlas.",
	},
	{
		icon: "🪲",
		nombre: "Escarabajos",
		resumen:
			"Participan en la polinización desde hace millones de años. Algunas flores producen mucho polen y tienen estructuras resistentes que estos insectos pueden visitar.",
		detalle:
			"Su eficiencia varía según la especie vegetal y del escarabajo, pero forman parte de las redes de interacción entre plantas y animales que mantienen la diversidad vegetal.",
	},
	{
		icon: "🐦",
		nombre: "Aves (colibríes)",
		resumen:
			"Destacan los colibríes, sobre todo en América. Al beber néctar, el polen se adhiere a su pico o cabeza y lo llevan a la siguiente flor.",
		detalle:
			"Son clave para plantas que evolucionaron con flores tubulares, colores llamativos y abundante néctar, adaptadas a ellas.",
	},
];

export const DATOS = [
	{ icon: "🌸", valor: "87.5 %", texto: "de las plantas con flores son polinizadas por animales (FAO)" },
	{ icon: "🌾", valor: "35 %", texto: "de la producción agrícola mundial depende al menos en parte de polinizadores (FAO)" },
	{ icon: "🍎", valor: "75 %", texto: "de los tipos de cultivos alimentarios dependen parcialmente de ellos (FAO)" },
	{ icon: "🐝", valor: "25,000+", texto: "especies de abejas conocidas, la mayoría silvestres" },
	{ icon: "🌳", valor: "≈ 90 %", texto: "de las plantas silvestres con flores se reproducen gracias a polinizadores (FAO)" },
];

export const PASOS = [
	{ n: 1, icon: "🌼", titulo: "Visita a la flor", texto: "Un animal visita una flor en busca de alimento, principalmente néctar o polen. Los granos de polen se adhieren a su cuerpo." },
	{ n: 2, icon: "🚀", titulo: "Transporte del polen", texto: "El animal se desplaza y visita otra flor compatible. Parte del polen toca la estructura reproductiva femenina de la planta." },
	{ n: 3, icon: "🌱", titulo: "Fecundación", texto: "El contacto del polen con la estructura femenina permite que ocurra la fecundación." },
	{ n: 4, icon: "🍓", titulo: "Semillas y frutos", texto: "Según la especie vegetal, se desarrollan semillas y frutos que alimentan a otros organismos." },
];

export const AMENAZAS = [
	{ icon: "🏙️", t: "Pérdida y fragmentación de hábitats" },
	{ icon: "🪓", t: "Deforestación" },
	{ icon: "🚜", t: "Expansión de zonas urbanas y agrícolas" },
	{ icon: "🧪", t: "Uso inadecuado de pesticidas" },
	{ icon: "🌡️", t: "Cambio climático" },
	{ icon: "🦠", t: "Enfermedades y parásitos" },
	{ icon: "🥀", t: "Disminución de plantas con néctar y polen" },
	{ icon: "🌽", t: "Agricultura intensiva y monocultivos" },
	{ icon: "🏭", t: "Contaminación ambiental" },
];

export const CONSECUENCIAS = [
	{ icon: "🌿", t: "Plantas con dificultades para reproducirse", d: "Menos semillas y frutos en muchas especies (no todas desaparecerían de inmediato: algunas usan viento o agua)." },
	{ icon: "🦊", t: "Menos alimento y refugio para animales", d: "Se afectarían las cadenas alimentarias y habría pérdida de biodiversidad." },
	{ icon: "🛒", t: "Agricultura afectada", d: "Menores rendimientos; algunos alimentos podrían escasear o encarecerse." },
];

export const ACCIONES = [
	{ icon: "🌳", t: "Conservar y restaurar hábitats", d: "Mantener bosques, jardines y áreas verdes donde encuentren alimento y refugio." },
	{ icon: "🌻", t: "Plantar especies nativas", d: "Ofrecen los recursos adecuados para los polinizadores de cada región." },
	{ icon: "🚫", t: "Reducir pesticidas innecesarios", d: "Cuando sea necesario usarlos, hacerlo de forma responsable y siguiendo las recomendaciones." },
	{ icon: "🪵", t: "Evitar destruir nidos y refugios", d: "Muchas especies anidan en el suelo, troncos o pequeñas cavidades, no solo en colmenas." },
	{ icon: "🌈", t: "Mantener diversidad de plantas", d: "Distintas especies dan alimento durante diferentes épocas del año." },
	{ icon: "📚", t: "Promover la educación ambiental", d: "Conocer su función ayuda a comprender por qué hay que protegerlos." },
];

export const FUENTES = [
	{ n: "FAO", d: "Global Action on Pollination Services for Sustainable Agriculture." },
	{ n: "FAO", d: "Pollination and human livelihoods. Biodiversidad, alimentación y amenazas para los polinizadores." },
	{ n: "IPBES", d: "The Assessment Report on Pollinators, Pollination and Food Production." },
	{ n: "USDA NRCS", d: "Insects and Pollinators. Funcionamiento de la polinización, grupos de polinizadores y amenazas." },
	{ n: "Xerces Society", d: "Creating and Maintaining Healthy Pollinator Habitat. Conservación de hábitats y efectos de pesticidas." },
];
