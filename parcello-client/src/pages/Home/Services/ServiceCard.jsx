const ServiceCard = ({ service }) => {
	const { icon: Icon, title, description } = service;
	return (
		<div className='card items-center justify-center shadow-md bg-white p-6 rounded-2xl hover:bg-[#caeb66] hover:shadow-xl transition-all duration-300'>
			<div className='mb-4 p-4 bg-gray-100 rounded-full'>
				<Icon className='text-3xl text-[#03373D]' />
			</div>
			<h3 className='text-xl font-semibold mb-2 text-[#03373D] text-center'>{title}</h3>
			<p className='text-sm text-gray-600 text-center'>{description}</p>
		</div>
	);
};

export default ServiceCard;
