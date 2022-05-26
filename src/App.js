import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import paths from "./routes";

export default function App() {
	const [goTop, setGoTop] = useState(false);

	const handleScrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setGoTop(true);
			} else {
				setGoTop(false);
			}
		});
	});

	return (
		<>
			<Header />

			<main className="min-h-screen py-10 bg-cream">
				<Routes>
					{paths.map((page) => (
						<Route
							key={uuidv4()}
							path={page.path}
							element={<page.component />}
						/>
					))}
				</Routes>
			</main>

			{goTop && (
				<button
					className="fixed bottom-6 right-6 shadow-md btn"
					onClick={handleScrollTop}
				>
					<i className="bi bi-chevron-double-up"></i>
				</button>
			)}
		</>
	);
}
