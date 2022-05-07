import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/Profile";

export default function App() {
	console.log(
		"%cConsole là một nơi vô cùng nguy hiểm, cách hacker 🧑‍💻 khác có thể thông quá nó để làm việc xấu !!!",
		"color: red; font-size: 30px;"
	);

	console.log(
		"%cCẩn thận bạn nhá 👀👀👀",
		"color: #eab308; font-size: 30px;"
	);

	return (
		<>
			<Header />
			<main className="min-h-screen py-10 bg-cream">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</main>
		</>
	);
}
