import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function Section3() {
	const prices = [
		{
			priceName: "Cộng tác viên",
			price: "500,000",
			desc: "Cấp bậc này sẽ được giảm giá các dịch vụ.",
		},
		{
			priceName: "Đại lý",
			price: "2,000,000",
			desc: "Giảm giá các dịch vụ và có thể tạo website riêng.",
		},
		{
			priceName: "Nhà phân phối",
			price: "10,000,000",
			desc: "Các dịch vụ trước đó + hỗ trợ, tư vấn, trao đổi riêng, ...",
		},
	];
	return (
		<section className="py-90 bg-white">
			<div className="container">
				<h3 className="section-heading">Cấp bậc &amp; ưu đãi</h3>
				<div className="grid-layout">
					{prices.map((item) => (
						<div key={uuidv4()} className="plan">
							<h4 className="plan-heading">
								{item.priceName}
							</h4>
							<p className="text-lg">
								<i className="bi bi-cash text-green-600 mr-2"></i>
								<span>
									Tổng nạp: <b>{item.price}</b> vnđ
								</span>
							</p>
							<p className="text-lg my-4">
								<i className="bi bi-stars text-yellow-400 mr-1"></i>
								<span>{item.desc}</span>
							</p>
							<Link to="/upgrade-level" className="btn-outline">
								Xem Ngay
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
