import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	POLINIZADORES, DATOS, PASOS, AMENAZAS, CONSECUENCIAS, ACCIONES, FUENTES, NAV,
} from "../data";

/* ---------- Piezas reutilizables ---------- */

const PageHeader = ({ icon, kicker, title, children }: { icon: string; kicker: string; title: string; children?: React.ReactNode }) => (
	<section className="relative overflow-hidden px-4 py-16 text-center"
		style={{ background: "linear-gradient(180deg, #FFFBEB, #FEFCE8, #F0FDF4)" }}>
		<div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-[#FFD23066] blur-2xl" />
		<div className="relative max-w-3xl mx-auto">
			<div className="text-6xl mb-3">{icon}</div>
			<p className="text-[#FE9A00] font-bold uppercase tracking-widest text-sm mb-2">{kicker}</p>
			<h1 className="text-[#7B3306] text-3xl md:text-5xl font-bold mb-4">{title}</h1>
			{children && <p className="text-lg">{children}</p>}
		</div>
	</section>
);

const NextPage = ({ to }: { to: string }) => {
	const i = NAV.findIndex((n) => n.to === to);
	const next = NAV[i + 1];
	if (!next) return null;
	return (
		<div className="text-center pb-16">
			<Link to={next.to}
				className="inline-block bg-[#FE9A00] text-white font-bold py-4 px-7 rounded-[14px] no-underline"
				style={{ boxShadow: "0px 4px 6px #FEE685" }}>
				Siguiente: {next.label} →
			</Link>
		</div>
	);
};

const PollinatorCard = ({ p }: { p: (typeof POLINIZADORES)[number] }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-amber-100"
			style={{ boxShadow: "0px 2px 8px #0000001A" }}>
			<div className="bg-[#FEF3C6] rounded-2xl w-16 h-16 flex items-center justify-center text-4xl">{p.icon}</div>
			<h3 className="text-[#7B3306] text-2xl font-bold">{p.nombre}</h3>
			<p>{p.resumen}</p>
			{open && <p className="text-sm bg-amber-50 rounded-xl p-4 text-left">{p.detalle}</p>}
			<button onClick={() => setOpen(!open)}
				className="mt-auto text-[#FE9A00] font-bold border-0 bg-transparent cursor-pointer hover:underline">
				{open ? "Ver menos ▲" : "Ver más ▼"}
			</button>
		</div>
	);
};

/* ---------- PÁGINA: INICIO ---------- */

export function Inicio() {
	const accesos = NAV.filter((n) => n.to !== "/");
	const iconos: Record<string, string> = {
		"/importancia": "🌍", "/polinizadores": "🐝", "/como-funciona": "🌼",
		"/amenazas": "⚠️", "/acciones": "🌱", "/fuentes": "📚",
	};
	return (
		<>
			<section className="relative overflow-hidden px-4 py-20 md:py-28"
				style={{ background: "linear-gradient(180deg, #FFFBEB, #FEFCE8, #F0FDF4)" }}>
				<div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#FFD23066] blur-2xl" />
				<div className="absolute bottom-0 left-10 w-60 h-60 rounded-full bg-[#B9F8CF66] blur-[100px]" />
				<span className="absolute top-8 right-10 text-7xl opacity-70 hidden md:block">🌻</span>
				<span className="absolute bottom-10 left-6 text-6xl opacity-70 hidden md:block">🌿</span>
				<div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
					<div>
						<p className="inline-block bg-[#FEF3C6] text-[#7B3306] font-bold text-sm rounded-full px-4 py-1 mb-4">
							Desarrollo Sustentable y Medio Ambiente
						</p>
						<h1 className="text-[#7B3306] text-4xl md:text-6xl font-bold mb-6">
							Los principales polinizadores y su importancia para los ecosistemas
						</h1>
						<p className="text-lg mb-4">
							Aunque algunas plantas pueden ser polinizadas por el viento o el agua, una gran cantidad depende de los animales
							para reproducirse. Entre los principales polinizadores están las abejas, mariposas, polillas, moscas,
							escarabajos, aves y murciélagos.
						</p>
						<p className="text-lg font-semibold text-[#7B3306] mb-8">
							Pregunta guía: ¿qué pasaría si los principales polinizadores del planeta desaparecieran?
						</p>
						<Link to="/importancia"
							className="inline-block bg-[#FE9A00] text-white font-bold py-4 px-7 rounded-[14px] no-underline"
							style={{ boxShadow: "0px 4px 6px #FEE685" }}>
							Más información
						</Link>
					</div>
					<div className="flex items-center justify-center">
						<div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-yellow-200 to-green-100 flex items-center justify-center">
							<span className="text-[9rem] md:text-[12rem] leading-none">🐝</span>
							<span className="absolute top-6 left-4 text-5xl">🌸</span>
							<span className="absolute bottom-8 right-4 text-5xl">🦋</span>
							<span className="absolute top-10 right-6 text-4xl">🌼</span>
							<span className="absolute bottom-4 left-10 text-4xl">🌺</span>
						</div>
					</div>
				</div>
			</section>

			<section className="px-4 py-16">
				<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
					{[
						{ icon: "🎯", t: "¿Por qué este tema?", d: "En clase se planteó: “¿Qué pasaría si los polinizadores desaparecieran del planeta?”. De ahí surgió nuestra pregunta: ¿qué pasaría si desaparecieran los principales polinizadores?" },
						{ icon: "👥", t: "¿A quién va dirigida?", d: "A personas que buscan información objetiva sobre los principales polinizadores y a quienes quieran generar conciencia social sobre su importancia y las consecuencias de que desaparezcan o estén en peligro de extinción." },
						{ icon: "🌍", t: "¿Qué queremos lograr?", d: "Dar a conocer a los principales polinizadores, su importancia en los ecosistemas, cómo funcionan sus poblaciones y jerarquías, y el equilibrio ecológico que sostienen." },
					].map((c) => (
						<div key={c.t} className="bg-amber-50 rounded-2xl p-6" style={{ boxShadow: "0px 2px 4px #0000001A" }}>
							<div className="text-4xl mb-3">{c.icon}</div>
							<h3 className="text-[#7B3306] text-xl font-bold mb-2">{c.t}</h3>
							<p>{c.d}</p>
						</div>
					))}
				</div>
			</section>

			<div className="bg-[#FEF3C6] py-5 px-4">
				<div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3 font-bold">
					{[["🐝", "Abejas"], ["🦋", "Mariposas"], ["🌙", "Polillas"], ["🪰", "Moscas"], ["🪲", "Escarabajos"], ["🐦", "Aves"], ["🦇", "Murciélagos"]].map(([i, n]) => (
						<span key={n} className="flex items-center gap-2"><span className="text-2xl">{i}</span>{n}</span>
					))}
				</div>
			</div>

			<section className="px-4 py-16">
				<h2 className="text-[#7B3306] text-3xl font-bold text-center mb-8">Explora el sitio</h2>
				<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
					{accesos.map((n) => (
						<Link key={n.to} to={n.to}
							className="bg-white border border-amber-100 rounded-2xl p-6 text-center no-underline hover:bg-amber-50"
							style={{ boxShadow: "0px 2px 4px #0000001A" }}>
							<div className="text-4xl mb-2">{iconos[n.to]}</div>
							<span className="text-[#7B3306] font-bold text-lg">{n.label}</span>
						</Link>
					))}
				</div>
			</section>
		</>
	);
}

/* ---------- PÁGINA: IMPORTANCIA ---------- */

export function Importancia() {
	return (
		<>
			<PageHeader icon="🌍" kicker="Importancia" title="¿Por qué importan los polinizadores?">
				La polinización es el traslado del polen desde las estructuras masculinas de una flor hasta las femeninas de otra flor de
				la misma especie, lo que permite la fecundación y la producción de semillas y frutos.
			</PageHeader>

			<section className="px-4 py-16">
				<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
					{DATOS.map((d) => (
						<div key={d.valor} className="bg-gradient-to-b from-amber-50 to-white border border-amber-100 rounded-2xl p-5 text-center">
							<div className="text-4xl mb-2">{d.icon}</div>
							<div className="text-[#7B3306] text-3xl font-bold">{d.valor}</div>
							<p className="text-sm mt-1">{d.texto}</p>
						</div>
					))}
				</div>

				<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
					<div className="rounded-2xl p-6 bg-green-50">
						<div className="text-4xl mb-3">🌳</div>
						<h3 className="text-[#7B3306] text-xl font-bold mb-2">En los ecosistemas</h3>
						<p>Permiten la reproducción de muchas plantas, que dan alimento, refugio y recursos a otros organismos. También contribuyen a la regeneración de bosques, humedales y otros ecosistemas.</p>
					</div>
					<div className="rounded-2xl p-6 bg-amber-50">
						<div className="text-4xl mb-3">🥑</div>
						<h3 className="text-[#7B3306] text-xl font-bold mb-2">En la alimentación humana</h3>
						<p>Frutas, verduras, semillas y frutos secos dependen total o parcialmente de la polinización animal. Aportan vitaminas, minerales y otros nutrientes para una dieta equilibrada.</p>
					</div>
					<div className="rounded-2xl p-6 bg-orange-50">
						<div className="text-4xl mb-3">🔗</div>
						<h3 className="text-[#7B3306] text-xl font-bold mb-2">En las cadenas alimentarias</h3>
						<p>Algunos polinizadores comen plantas y, a la vez, sirven de alimento a aves, reptiles, anfibios, mamíferos y otros insectos. Su disminución puede provocar efectos en cadena.</p>
					</div>
				</div>

				<div className="max-w-4xl mx-auto mt-12 bg-[#FFF8E1] border-l-4 border-[#FE9A00] rounded-xl p-6">
					<h3 className="text-[#7B3306] text-xl font-bold mb-2">🩺 Indicadores de la salud ambiental</h3>
					<p>Como muchos polinizadores son sensibles a los cambios del ambiente, una disminución en sus poblaciones puede señalar contaminación, pérdida de vegetación, cambios en el clima o degradación del hábitat.</p>
				</div>
			</section>
			<NextPage to="/importancia" />
		</>
	);
}

/* ---------- PÁGINA: POLINIZADORES ---------- */

export function Polinizadores() {
	return (
		<>
			<PageHeader icon="🐝" kicker="Conócelos" title="Principales polinizadores">
				Son animales que, al visitar flores para obtener alimento, transportan accidentalmente el polen de una flor a otra. Existen
				miles de especies, pero algunos grupos destacan por su importancia.
			</PageHeader>
			<section className="px-4 py-16">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{POLINIZADORES.map((p) => <PollinatorCard key={p.nombre} p={p} />)}
				</div>
			</section>
			<NextPage to="/polinizadores" />
		</>
	);
}

/* ---------- PÁGINA: ¿CÓMO FUNCIONA? ---------- */

export function ComoFunciona() {
	return (
		<>
			<PageHeader icon="🌼" kicker="El proceso" title="¿Cómo funciona la polinización?">
				Es una relación de beneficio mutuo: las plantas proporcionan alimento y los animales contribuyen a su reproducción.
			</PageHeader>
			<section className="px-4 py-16 bg-amber-50">
				<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-5 mb-12">
					{PASOS.map((p) => (
						<div key={p.n} className="bg-white rounded-2xl p-6 relative" style={{ boxShadow: "0px 2px 4px #0000001A" }}>
							<span className="absolute -top-3 -left-3 bg-[#FE9A00] text-white font-bold w-9 h-9 rounded-full flex items-center justify-center">{p.n}</span>
							<div className="text-4xl mb-2">{p.icon}</div>
							<h3 className="text-[#7B3306] text-lg font-bold mb-1">{p.titulo}</h3>
							<p className="text-sm">{p.texto}</p>
						</div>
					))}
				</div>

				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
					<div className="bg-white rounded-2xl p-8" style={{ boxShadow: "0px 2px 4px #0000001A" }}>
						<h3 className="text-[#7B3306] text-xl font-bold mb-3 flex items-center gap-3"><span className="text-3xl">📈</span> ¿Cómo funcionan las poblaciones?</h3>
						<p className="mb-3">Su tamaño cambia según el alimento disponible, los sitios de reproducción, el clima, los depredadores, las enfermedades y la actividad humana. Por ejemplo, una población de abejas crece con muchas flores y disminuye cuando desaparecen sus fuentes de alimento.</p>
						<p>La diversidad es clave: unos trabajan de día y otros de noche, y cada uno visita flores distintas. Un ecosistema con más diversidad de polinizadores mantiene mejor la polinización ante los cambios ambientales.</p>
					</div>
					<div className="bg-white rounded-2xl p-8" style={{ boxShadow: "0px 2px 4px #0000001A" }}>
						<h3 className="text-[#7B3306] text-xl font-bold mb-3 flex items-center gap-3"><span className="text-3xl">👑</span> Jerarquías y organización social</h3>
						<p className="mb-3">Solo algunos insectos sociales, como ciertas abejas y avispas, viven en colonias con división del trabajo.</p>
						<ul className="space-y-2 mb-3 list-none p-0">
							<li>👑 <b>Reina:</b> se especializa en la reproducción.</li>
							<li>🐝 <b>Obreras:</b> alimentan larvas, limpian y protegen el nido y recolectan recursos.</li>
							<li>🧬 <b>Zánganos:</b> función principalmente reproductiva.</li>
						</ul>
						<p>Una mariposa, un escarabajo o una abeja solitaria no tienen necesariamente jerarquía. Es más correcto hablar de organización social en ciertas especies que afirmar que todos los polinizadores tienen jerarquías.</p>
					</div>
				</div>
			</section>
			<div className="pt-12"><NextPage to="/como-funciona" /></div>
		</>
	);
}

/* ---------- PÁGINA: AMENAZAS ---------- */

export function Amenazas() {
	return (
		<>
			<PageHeader icon="⚠️" kicker="Riesgos" title="Principales amenazas">
				Numerosas poblaciones de polinizadores enfrentan hoy diferentes amenazas. La pérdida de hábitat es especialmente grave porque
				necesitan lugares donde alimentarse, reproducirse y refugiarse.
			</PageHeader>
			<section className="px-4 py-16">
				<div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
					{AMENAZAS.map((a) => (
						<div key={a.t} className="flex items-center gap-4 bg-red-50 border border-red-100 rounded-xl p-4">
							<span className="text-3xl">{a.icon}</span>
							<span className="font-semibold text-[#7B3306]">{a.t}</span>
						</div>
					))}
				</div>
				<p className="max-w-3xl mx-auto text-center">
					🧪 Según la Xerces Society, ciertos pesticidas pueden contaminar los hábitats y afectar a abejas y mariposas. La FAO también
					señala la agricultura intensiva, los monocultivos, las enfermedades y el cambio climático como factores de su disminución.
				</p>

				<div className="max-w-6xl mx-auto mt-16">
					<h2 className="text-[#7B3306] text-2xl md:text-3xl font-bold text-center mb-8">¿Qué pasaría si desaparecieran?</h2>
					<div className="grid md:grid-cols-3 gap-6">
						{CONSECUENCIAS.map((c) => (
							<div key={c.t} className="bg-amber-50 rounded-2xl p-6">
								<div className="text-4xl mb-2">{c.icon}</div>
								<h3 className="text-[#7B3306] font-bold text-lg mb-1">{c.t}</h3>
								<p className="text-sm">{c.d}</p>
							</div>
						))}
					</div>
					<p className="text-center mt-8 max-w-3xl mx-auto">
						La evaluación de la IPBES concluye que la disminución de los polinizadores amenaza la biodiversidad, la producción de
						alimentos y el bienestar humano. No se trata solo de perder abejas, mariposas o murciélagos, sino de alterar las
						relaciones que mantienen funcionando muchos ecosistemas.
					</p>
				</div>
			</section>
			<NextPage to="/amenazas" />
		</>
	);
}

/* ---------- PÁGINA: ACCIONES ---------- */

export function Acciones() {
	return (
		<>
			<PageHeader icon="🌱" kicker="Propuesta" title="¿Cómo podemos protegerlos?">
				La protección requiere acciones individuales y colectivas. Hay que conservar la diversidad completa de polinizadores, no solo
				la abeja melífera, para que la polinización resista enfermedades y cambios climáticos.
			</PageHeader>
			<section className="px-4 py-16">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{ACCIONES.map((a, i) => (
						<div key={a.t} className="bg-white border border-amber-100 rounded-2xl p-6" style={{ boxShadow: "0px 2px 4px #0000001A" }}>
							<div className="flex items-center gap-3 mb-2">
								<span className="text-3xl">{a.icon}</span>
								<span className="text-[#FE9A00] font-bold">Acción {i + 1}</span>
							</div>
							<h3 className="text-[#7B3306] text-lg font-bold mb-1">{a.t}</h3>
							<p className="text-sm">{a.d}</p>
						</div>
					))}
				</div>
			</section>

			<section className="px-4 py-16 bg-green-50">
				<div className="max-w-3xl mx-auto text-center">
					<div className="text-5xl mb-4">🌎</div>
					<h2 className="text-[#7B3306] text-3xl md:text-4xl font-bold mb-4">Conclusión</h2>
					<p className="mb-4">Los polinizadores pueden parecer pequeños dentro de la enorme diversidad del planeta, pero su función tiene consecuencias a gran escala: mantienen la biodiversidad, la estabilidad de los ecosistemas y la seguridad alimentaria.</p>
					<p>Una planta depende de un polinizador, este depende de los recursos de las plantas, y otros animales dependen de los frutos, las semillas o los propios polinizadores. Proteger a los polinizadores es proteger los ecosistemas de los que dependemos.</p>
				</div>
			</section>
			<div className="pt-12"><NextPage to="/acciones" /></div>
		</>
	);
}

/* ---------- PÁGINA: FUENTES ---------- */

export function Fuentes() {
	return (
		<>
			<PageHeader icon="📚" kicker="Referencias" title="Fuentes consultadas" />
			<section className="px-4 py-16">
				<ol className="max-w-3xl mx-auto list-decimal pl-6 space-y-3">
					{FUENTES.map((f, i) => (
						<li key={i}><b className="text-[#7B3306]">{f.n}.</b> {f.d}</li>
					))}
				</ol>
				<p className="max-w-3xl mx-auto text-sm mt-8 text-center">
					Contenido elaborado por el equipo a partir de la investigación propia y de las fuentes citadas.
				</p>
			</section>
		</>
	);
}
