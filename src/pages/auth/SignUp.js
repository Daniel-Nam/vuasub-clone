import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../../config";

export default function SignUp() {
	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isShow, setIsShow] = useState(false);
	const [error, setError] = useState();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const showPassword = (e) => {
		e.preventDefault();
		setIsShow(!isShow);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === "" || password === "") {
			setError(false);
			setError("Vui lòng nhập đầy đủ thông tin");
		} else if (email !== "" && password !== "") {
			createUserWithEmailAndPassword(auth, email, password)
				.then(() => {
					// Signed in
					console.clear();
					navigate("/login");
				})
				.catch((error) => {
					const errorCode = error.code;
					console.log(errorCode);
					const errorMessage = error.message;
					setError(errorMessage);
				});
		}
	};

	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit}>
				<Link to="/" className="form-link">
					<i className="bi bi-arrow-left"></i>
				</Link>

				<header className="form-header">
					<h1 className="text-3xl font-bold">Đăng Ký</h1>
					<p className={error ? "text-red-500" : null}>
						{error
							? error
							: "Sẵn sàng trải nghiệm những điều thú vị nào ✨✨✨"}
					</p>
				</header>

				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						className="form-input"
						placeholder="Nhập email..."
						autoComplete="off"
						onChange={handleEmail}
					/>
				</div>

				<div className="form-group relative">
					<label htmlFor="password">Mật khẩu</label>
					<input
						type={isShow ? "text" : "password"}
						id="password"
						className="form-input"
						placeholder="Nhập mật khẩu..."
						autoComplete="off"
						onChange={handlePassword}
					/>
					<button
						onClick={showPassword}
						className="form-password-icon"
					>
						{isShow ? (
							<i className="bi bi-eye-fill"></i>
						) : (
							<i className="bi bi-eye-slash-fill"></i>
						)}
					</button>
				</div>

				<button className="block w-full btn">Tạo tài khoản</button>

				<p className="text-center mt-4">
					Bạn đã có tài khoản?{"  "}
					<Link to="/login" className="text-blue-500">
						Đăng nhập
					</Link>
				</p>
			</form>
		</div>
	);
}
