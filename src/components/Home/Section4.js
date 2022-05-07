import { v4 as uuidv4 } from "uuid";

export default function Section4() {
	const features = [
		{
			icon: "bi bi-gem text-4xl text-blue-500",
			title: "Hỗ trợ 24/7",
			desc: "Chúng tôi luôn lắng nghe phản hồi, góp ý của khách hàng để cải thiện hệ thống.",
		},
		{
			icon: "bi bi-gear text-4xl text-gray-800",
			title: "Giao dịch tự động",
			desc: "Hệ thống hoàn toàn tự động hóa 100% giúp việc xử lý đơn, nạp tiền luôn nhanh nhất có thể.",
		},
		{
			icon: "bi bi-cash-stack text-4xl text-green-500",
			title: "Giá tốt nhất",
			desc: "Chúng tôi sẽ luôn đem lại giá dịch vụ rẻ nhất trên thị trường để phục vụ khách hàng.",
		},
	];
	return (
		<section className="py-90">
			<div className="container">
				<h3 className="section-heading">Ưu điểm hệ thống</h3>
				<div className="grid-layout">
					{features.map((feature) => (
						<div key={uuidv4()} className="advantage">
							<i className={feature.icon}></i>
							<div>
								<h4 className="advantage-heading">
									{feature.title}
								</h4>
								<p>{feature.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
