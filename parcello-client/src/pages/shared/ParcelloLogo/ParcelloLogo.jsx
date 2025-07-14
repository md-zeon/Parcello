import { Link } from "react-router";
import logo from "../../../assets/logo.png";
const ParcelloLogo = () => {
	return (
		<Link to="/">
			<div className='flex items-end'>
				<img
					src={logo}
					alt='Logo'
					className=' mb-1'
				/>
				<p className='text-3xl font-extrabold -ml-2'>Parcello</p>
			</div>
		</Link>
	);
};

export default ParcelloLogo;
