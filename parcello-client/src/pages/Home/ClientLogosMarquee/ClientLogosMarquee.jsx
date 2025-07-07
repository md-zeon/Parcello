import logo1 from "../../../assets/brands/logo1.png";
import logo2 from "../../../assets/brands/logo2.png";
import logo3 from "../../../assets/brands/logo3.png";
import logo4 from "../../../assets/brands/logo4.png";
import logo5 from "../../../assets/brands/logo5.png";
import logo6 from "../../../assets/brands/logo6.png";
import logo7 from "../../../assets/brands/logo7.png";

import Marquee from "react-fast-marquee";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogosMarquee = () => {
	return (
		<section className='bg-white py-10'>
			<div className='text-center mb-12'>
				<h2 className='text-3xl font-bold text-secondary'>We've helped thousands of sales teams</h2>
			</div>

			<Marquee
				speed={50}
				pauseOnHover
				gradient={false}
				className='flex items-center justify-center'
			>
				{logos.map((src, index) => (
					<div
						key={index}
						className='grid place-items-center px-16'
					>
						<img
							src={src}
							alt={`Client logo ${index + 1}`}
							className='h-6 object-contain transition cursor-pointer'
						/>
					</div>
				))}
			</Marquee>
		</section>
	);
};

export default ClientLogosMarquee;
