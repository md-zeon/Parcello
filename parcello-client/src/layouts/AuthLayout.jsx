import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import ParcelloLogo from "../pages/shared/ParcelloLogo/ParcelloLogo";

const AuthLayout = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2'>
			<div className='bg-white p-8'>
				<ParcelloLogo />
				<div className='mt-10 mx-auto max-w-sm'>
					<Outlet />
				</div>
			</div>
			<div className='bg-lime-50 flex items-center justify-center'>
				<img src={authImage} />
			</div>
		</div>
	);
};

export default AuthLayout;
