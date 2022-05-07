import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<div className="container">
				<Section1 />
				<Section2 />
			</div>
			<Section3 />
			<Section4 />
			<Footer />
		</>
	);
}
