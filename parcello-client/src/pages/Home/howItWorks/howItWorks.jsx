import React from "react";
import { LuCalendarPlus, LuPackageCheck, LuMapPin, LuUsers } from "react-icons/lu";

const howItWorks = [
	{
		id: 1,
		title: "Booking Pick & Drop",
		description: "Schedule parcel pickup and delivery easily via our platform for hassle-free logistics.",
		icon: LuCalendarPlus,
	},
	{
		id: 2,
		title: "Cash On Delivery",
		description: "Collect payments directly from customers with our reliable COD service.",
		icon: LuPackageCheck,
	},
	{
		id: 3,
		title: "Delivery Hub",
		description: "Our local hubs ensure quicker distribution and last-mile delivery across regions.",
		icon: LuMapPin,
	},
	{
		id: 4,
		title: "Booking SME & Corporate",
		description: "Tailored logistics for small businesses and corporate clients with advanced booking features.",
		icon: LuUsers,
	},
];

const HowItWorks = () => {
	return (
		<section className='py-16 bg-base-100'>
			<div className='mb-12'>
				<h2 className='text-3xl md:text-4xl font-bold text-secondary mb-2'>How It Works</h2>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
				{howItWorks.map(({ id, title, description, icon: Icon }) => (
					<div
						key={id}
						className='bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 flex flex-col'
					>
						<div className='text-4xl text-secondary mb-4'>
							<Icon />
						</div>
						<h3 className='text-xl font-semibold text-secondary mb-2'>{title}</h3>
						<p className='text-gray-600 text-sm'>{description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HowItWorks;
