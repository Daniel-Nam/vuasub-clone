import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, onAuthStateChanged, signOut } from "../config";

export default function Header() {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const headerRef = useRef();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/login");
			})
			.catch((error) => {
				alert(error);
			});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { email } = user;
				setUser(email);
			} else {
				setUser(null);
			}
		});

		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				headerRef.current.classList.add("header--scrolled");
			} else {
				headerRef.current.classList.remove("header--scrolled");
			}
		});
	}, []);

	return (
		<header ref={headerRef}>
			<div className="container">
				<nav className="flex-center-between py-5">
					<Link to="/" className="text-2xl font-bold sm:mr-7">
						<i className="bi bi-intersect mr-2 text-blue-500"></i>
						<span>VuaSub.online</span>
					</Link>
					<button className="inline-block py-2 px-3 border rounded-sm sm:hidden">
						<i className="bi bi-list"></i>
					</button>
					<div className="hidden sm:flex-auto sm:flex-center-between">
						<Link to="/" className="text-lg hover-blue">
							Trang chủ
						</Link>
						{user ? (
							<div className="flex items-center gap-4">
								<Link
									to="/profile"
									className="text-lg hover-blue"
								>
									{user.split("@")[0]}
								</Link>
								<button
									className="btn bg-red-500 hover:bg-red-600 transition"
									onClick={handleSignOut}
								>
									Sign out
								</button>
							</div>
						) : (
							<Link to="/login" className="btn">
								<i className="bi bi-person mr-2"></i>
								<span>Đăng nhập</span>
							</Link>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
}
