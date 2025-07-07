import Banner from "./Banner/Banner";
import ClientLogosMarquee from "./ClientLogosMarquee/ClientLogosMarquee";
import OurServices from "./Services/OurServices";

const Home = () => {
	return (
		<div>
			<Banner />
			<OurServices />
			<ClientLogosMarquee />
		</div>
	);
};

export default Home;
