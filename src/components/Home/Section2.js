import { v4 as uuidv4 } from "uuid";

import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import tiktok from "../../images/tiktok.svg";

export default function Section2() {
	const socials = [
		{
			name: "Facebook",
			img: facebook,
		},
		{
			name: "Instagram",
			img: instagram,
		},
		{
			name: "Tiktok",
			img: tiktok,
		},
	];
	return (
		<section className="py-90">
			<h3 className="section-heading">Các dịch vụ hiện có</h3>
			<div className="grid-layout text-center">
				{socials.map((social) => (
					<div key={uuidv4()} className="p-4">
						<img
							src={social.img}
							alt={social.name}
							className="w-full max-w-[60px] mx-auto"
						/>
						<h4 className="text-3xl font-semibold my-3">
							{social.name}
						</h4>
						<span className="text-gray-600">
							Tăng like bài viết, tăng bình luận, tăng người theo
							dõi, tăng chia sẻ ...
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
