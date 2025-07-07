import tracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";
import support from "../../../assets/tiny-deliveryman.png";

const benefits = [
	{
		id: 1,
		title: "Live Parcel Tracking",
		description:
			"Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
		image: tracking,
		aos: "fade-right",
	},
	{
		id: 2,
		title: "100% Safe Delivery",
		description:
			"We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
		image: safeDelivery,
		aos: "fade-left",
	},
	{
		id: 3,
		title: "24/7 Call Center Support",
		description:
			"Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
		image: support,
		aos: "fade-right",
	},
];

const Benefits = () => {
	return (
		<section className='py-16 px-4 md:px-10 lg:px-20 bg-base-100'>
			<div className='text-center mb-12'>
				<h2 className='text-3xl md:text-4xl font-bold text-secondary mb-2'>Why Choose Us</h2>
				<p className='text-gray-500 max-w-xl mx-auto'>
					Our core benefits ensure a seamless and reliable delivery experience.
				</p>
			</div>

			<div className='flex flex-col gap-10'>
				{benefits.map((benefit) => (
					<div
						key={benefit.id}
						className='bg-white p-8 rounded-3xl flex flex-col md:flex-row items-center overflow-hidden'
						data-aos={benefit.aos}
					>
						{/* Image */}
						<div className='md:w-52 flex items-center justify-center'>
							<div className='w-60 h-60 rounded-xl flex items-center justify-center'>
								<img
									src={benefit.image}
									alt={benefit.title}
									className='object-contain max-h-full max-w-full'
									loading='lazy'
								/>
							</div>
						</div>

						{/* Divider */}
						<div className='divider divider-vertical md:divider-horizontal py-10 mx-12'></div>
						{/* Content */}
						<div className='w-full md:w-3/4 flex flex-col justify-center text-center md:text-left'>
							<h3 className='text-2xl font-bold text-secondary mb-3'>{benefit.title}</h3>
							<p className='text-gray-600 leading-relaxed'>{benefit.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Benefits;
