import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, onAuthStateChanged } from "../config";
import avatarDefault from "../images/avatar-default.webp";

function Profile() {
	const navigate = useNavigate();
	const [profile, setProfile] = useState();

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setProfile(user);
		} else {
			navigate("/login");
		}
	});
	console.log(profile);

	return (
		<div className="container overflow-hidden">
			{profile && (
				<>
					<header className="text-center mb-7">
						<img
							src={profile.photoURL || avatarDefault}
							alt="Some thing wrong..."
							className="w-[200px] h-[200px] object-cover rounđe-full mx-auto"
						/>
						<h1 className="text-2xl sm:text-3xl font-bold mt-1">
							{profile.email}
						</h1>
						<h3>
							{" "}
							{profile.emailVerified ? (
								<span className="text-lg font-bold">
									--- Đã kích hoạt email ---
								</span>
							) : (
								<span className="text-lg font-bold">
									--- Email chưa được kích hoạt ---
								</span>
							)}
						</h3>
					</header>
					<div>
						<h4 className="text-xl sm:text-2xl font-bold">
							Các thông tin khác
						</h4>

						<ul className="border shadow p-3 rounded-sm my-2 sm:text-lg">
							<li>UID: {profile.uid}</li>
							<li className="my-1">
								Tạo vào lúc: {profile.metadata.creationTime}
							</li>
							<li>
								Lần đăng nhập cuối cùng:{" "}
								{profile.metadata.lastSignInTime}
							</li>
						</ul>

						<details className="cursor-pointer select-none">
							<summary>Mã thông báo truy cập:</summary>
							<span className="italic">
								{profile.accessToken}
							</span>
						</details>
					</div>
				</>
			)}
		</div>
	);
}

export default Profile;
