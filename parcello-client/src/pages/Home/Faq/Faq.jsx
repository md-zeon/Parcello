const faqs = [
	{
		question: "How does Parcello ensure secure parcel delivery?",
		answer:
			"Parcello uses OTP-based delivery confirmation. The recipient must provide a unique OTP to the delivery agent, ensuring the parcel reaches the correct person.",
	},
	{
		question: "Can I track my parcel in real-time?",
		answer:
			"Yes! Parcello provides real-time tracking for every parcel. Merchants and recipients can monitor status updates through their dashboards.",
	},
	{
		question: "How much does parcel delivery cost?",
		answer:
			"Delivery charges depend on the parcel type and destination. Within city starts from ৳60 and outside city from ৳80. Additional charges apply for heavier parcels.",
	},
	{
		question: "Who can use Parcello?",
		answer:
			"Parcello is designed for merchants, SMEs, delivery agents, and admins managing logistics. It’s optimized for both individual sellers and enterprises.",
	},
	{
		question: "Can I book bulk deliveries for my business?",
		answer:
			"Absolutely! Parcello supports SME and corporate bookings. You can book multiple parcels and manage them easily from your merchant dashboard.",
	},
	{
		question: "Is Parcello available in all districts?",
		answer:
			"Yes, Parcello supports delivery across all 64 districts in Bangladesh with a nationwide logistics network.",
	},
	{
		question: "How are parcels routed for outside city deliveries?",
		answer:
			"Parcels are sent to a warehouse, routed to the destination warehouse, and assigned to a local delivery agent for final delivery — all managed through the admin system.",
	},
];

const Faq = () => {
	return (
		<div>
			<div className='max-w-4xl mx-auto text-center pb-16 space-y-3'>
				<h2 className='text-2xl md:text-3xl font-bold text-secondary'>Frequently Asked Questions (FAQ)</h2>
				<p className='text-gray-600 max-w-2xl mx-auto'>
					Find answers to common questions about how Parcello works, pricing, delivery process, and more.
				</p>
			</div>

			<div className='max-w-3xl pb-20 mx-auto grid gap-2'>
				{faqs.map((faq, index) => (
					<div
						key={index}
						className='collapse collapse-arrow border border-secondary rounded-lg overflow-hidden'
					>
						<input
							type='radio'
							name='faq-accordion'
							className='peer'
						/>
						<div className='collapse-title font-semibold bg-white peer-checked:bg-[#C3DFE2]'>{faq.question}</div>
						<div className='collapse-content text-gray-600 text-sm bg-white peer-checked:bg-[#C3DFE2]'>
							<p>{faq.answer}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Faq;
