import logo from "../../../assets/logo.png";
const ParcelloLogo = () => {
	return (
		<div className="flex items-center">
			<img
				src={logo}
				alt='Logo'
                className="w-8"
			/>
			<p className="text-3xl">Parcello</p>
		</div>
	);
};

export default ParcelloLogo;
