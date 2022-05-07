import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import digitalMarketing from "../../images/digital-marketing.png";

export default function Section1() {
	const list = ["Tự động", "Uy tín", "Chất lượng", "An toàn"];
	return (
		<section className="block md:flex-center gap-4">
			<div className="md:flex-1 mb-7 md:mb-0">
				<h1 className="text-4xl lg:text-5xl leading-tight font-bold">
					Hệ thống Seeding dịch vụ mạng xã hội hàng đầu Việt Nam
				</h1>
				<p className="text-xl my-7 text-gray-700">
					Chúng tôi chuyên cung cấp các dịch vụ tăng Like, Follow,
					Share, Comment, View Video,... cho các Mạng xã hội như
					Facebook, Instagram, Tiktok...
				</p>
				<div>
					<Link to="/login" className="btn mb-3">
						Đăng nhập / Đăng ký
					</Link>

					<div>
						{list.map((item) => (
							<span
								key={uuidv4()}
								className="mr-3 lg:mr-5 font-semibold lg:text-lg last:mr-0"
							>
								<i className="bi bi-check2 text-green-500 mr-1"></i>
								<span className="text-gray-600">{item}</span>
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="md:flex-1">
				<img src={digitalMarketing} alt={digitalMarketing} />
			</div>
		</section>
	);
}
