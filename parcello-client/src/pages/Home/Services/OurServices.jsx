import ServiceCard from "./ServiceCard";
import { LuRocket, LuMapPin, LuBoxes, LuCreditCard, LuBriefcase, LuRotateCw } from "react-icons/lu";

const services = [
	{
		icon: LuRocket,
		title: "Express & Standard Delivery",
		description:
			"We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
	},
	{
		icon: LuMapPin,
		title: "Nationwide Delivery",
		description:
			"We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
	},
	{
		icon: LuBoxes,
		title: "Fulfillment Solution",
		description:
			"We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
	},
	{
		icon: LuCreditCard,
		title: "Cash on Home Delivery",
		description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
	},
	{
		icon: LuBriefcase,
		title: "Corporate Service / Contract In Logistics",
		description: "Customized corporate services which includes warehouse and inventory management support.",
	},
	{
		icon: LuRotateCw,
		title: "Parcel Return",
		description:
			"Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
	},
];

const OurServices = () => {
	return (
		<section className='py-16 px-4 md:px-10 lg:px-20 bg-secondary rounded-3xl'>
			<div className='text-center mb-12'>
				<h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>Our Services</h2>
				<p className='text-gray-300 max-w-2xl mx-auto'>
					Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to
					business shipments — we deliver on time, every time.
				</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						service={service}
					/>
				))}
			</div>
		</section>
	);
};

export default OurServices;
