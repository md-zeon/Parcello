import logo from "../../../assets/logo.png";
const ParcelloLogo = () => {
	return (
		<div className="flex items-end">
			<img
				src={logo}
				alt='Logo'
                className=" mb-1"
			/>
			<p className="text-3xl font-extrabold -ml-2">Parcello</p>
		</div>
	);
};

export default ParcelloLogo;
