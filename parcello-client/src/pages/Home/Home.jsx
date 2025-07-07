import Banner from "./Banner/Banner";
import BeMerchant from "./BeMerchant/BeMerchant";
import Benefits from "./Benefits/Benefits";
import ClientLogosMarquee from "./ClientLogosMarquee/ClientLogosMarquee";
import HowItWorks from "./howItWorks/howItWorks";
import OurServices from "./Services/OurServices";

const Home = () => {
	return (
		<div>
			<Banner />
			<HowItWorks />
			<OurServices />
			<ClientLogosMarquee />
			<Benefits />
			<BeMerchant />
		</div>
	);
};

export default Home;
