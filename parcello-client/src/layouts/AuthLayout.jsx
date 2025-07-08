import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import ParcelloLogo from "../pages/shared/ParcelloLogo/ParcelloLogo";

const AuthLayout = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 min-h-screen'>
			<div className='bg-white p-8'>
				<div className="mb-10">
					<ParcelloLogo />
				</div>
				<Outlet />
			</div>
			<div className='bg-lime-50 flex items-center justify-center'>
				<img src={authImage} />
			</div>
		</div>
	);
};

export default AuthLayout;
