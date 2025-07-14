import CoverageMap from "../../components/CoverageMap";

const Coverage = () => {
	return (
		<div className='px-4 py-10 max-w-6xl mx-auto'>
			<h2 className='text-3xl font-bold mb-6 text-center'>We are available in 64 districts</h2>

			{/* Map Display */}
			<CoverageMap />

			{/* Search box will go here later */}
		</div>
	);
};

export default Coverage;
