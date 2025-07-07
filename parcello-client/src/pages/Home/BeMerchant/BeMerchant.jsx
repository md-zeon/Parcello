import locationMerchant from "../../../assets/location-merchant.png";
const BeMerchant = () => {
	return (
		<div className='hero bg-secondary bg-[url("assets/be-a-merchant-bg.png")] p-20 rounded-4xl bg-top bg-contain bg-no-repeat'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<img
					src={locationMerchant}
					className='max-w-sm'
				/>
				<div>
					<h1 className='text-5xl text-white font-bold'>Merchant and Customer Satisfaction is Our First Priority</h1>
					<p className='py-6 text-gray-300'>
						We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao
						courier delivers your parcels in every corner of Bangladesh right on time.
					</p>
					<div className='space-x-4'>
						<button className='btn btn-primary rounded-full'>Become a Merchant</button>
						<button className='btn btn-primary btn-outline rounded-full'>Earn with Parcello Courier</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BeMerchant;
