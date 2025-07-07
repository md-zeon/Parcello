import Banner from "./Banner/Banner";
import Benefits from "./Benefits/Benefits";
import ClientLogosMarquee from "./ClientLogosMarquee/ClientLogosMarquee";
import OurServices from "./Services/OurServices";

const Home = () => {
	return (
		<div>
			<Banner />
			<OurServices />
			<ClientLogosMarquee />
			<Benefits />
		</div>
	);
};

export default Home;
