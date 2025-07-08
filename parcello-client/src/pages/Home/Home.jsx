import Banner from "./Banner/Banner";
import BeMerchant from "./BeMerchant/BeMerchant";
import Benefits from "./Benefits/Benefits";
import ClientLogosMarquee from "./ClientLogosMarquee/ClientLogosMarquee";
import Faq from "./Faq/Faq";
import HowItWorks from "./howItWorks/howItWorks";
import OurServices from "./Services/OurServices";
import TestimonialSlider from "./TestimonialSlider/TestimonialSlider";

const Home = () => {
	return (
		<div>
			<Banner />
			<HowItWorks />
			<OurServices />
			<ClientLogosMarquee />
			<Benefits />
			<BeMerchant />
			<TestimonialSlider />
			<Faq />
		</div>
	);
};

export default Home;
