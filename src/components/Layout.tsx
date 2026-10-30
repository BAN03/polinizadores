import React, { useEffect } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { NAV } from "../data";

const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);
	return null;
};

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen bg-white text-[#973C00]">
			<ScrollToTop />

			<header className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur border-b border-amber-100">
				<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 py-3">
					<Link to="/" className="flex items-center gap-2 no-underline">
						<span className="text-3xl">🐝</span>
						<span className="text-[#7B3306] text-xl font-bold">Polinizadores</span>
					</Link>
					<nav className="flex items-center gap-1 overflow-x-auto">
						{NAV.map((n) => (
							<NavLink
								key={n.to}
								to={n.to}
								end={n.to === "/"}
								className={({ isActive }) =>
									"whitespace-nowrap text-sm font-bold py-1.5 px-3 rounded-lg no-underline " +
									(isActive ? "bg-[#FE9A00] text-white" : "text-[#7B3306] hover:bg-amber-100")
								}
							>
								{n.label}
							</NavLink>
						))}
					</nav>
				</div>
			</header>

			<main className="flex-1">
				<Outlet />
			</main>

			<footer className="bg-[#461901] text-[#FEE685] py-12 px-4">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
					<div>
						<div className="flex items-center gap-2 mb-3">
							<span className="text-3xl">🐝</span>
							<span className="text-[#FFD230] text-xl font-bold">Polinizadores</span>
						</div>
						<p className="text-sm mb-2">Desarrollo Sustentable y Medio Ambiente · Tecnologías de la Información</p>
						<p className="text-sm">Docente: Diego Israel Gómez Rodríguez</p>
						<p className="text-xs text-[#FFB900] mt-4">© 2026 Polinizadores. 🌍 Protegiendo a los polinizadores.</p>
					</div>
					<div>
						<h4 className="font-bold mb-2">Equipo</h4>
						<ul className="text-sm space-y-1 list-none p-0 m-0">
							<li>Aarón Sánchez Orozco</li>
							<li>Angel de Jesus Atanasio Diaz</li>
							<li>Jonathan Alberto Oliva Mosqueda</li>
							<li>Nataly Gabriela Martinez Valencia</li>
							<li>Alejandro Roman Lopez Herrera</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
}
