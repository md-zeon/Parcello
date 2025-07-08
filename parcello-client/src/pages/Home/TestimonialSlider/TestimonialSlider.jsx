import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { LuChevronLeft, LuChevronRight, LuQuote } from "react-icons/lu";
import customerTop from "../../../assets/customer-top.png";

const testimonials = [
	{
		quote:
			"Parcello completely transformed our logistics workflow. Real-time tracking and OTP delivery make our customers feel secure.",
		name: "Anika Rahman",
		title: "Owner, Anika's Boutique",
		image: "https://img.daisyui.com/images/profile/demo/4@94.webp",
	},
	{
		quote:
			"Fast, reliable, and transparent. Parcello helped me scale my delivery service across districts effortlessly.",
		name: "Shakil Ahmed",
		title: "CEO, Dhaka Electronics",
		image: "https://img.daisyui.com/images/profile/demo/2@94.webp",
	},
	{
		quote:
			"As a delivery agent, I love the system's simplicity and the fact that I earn on every successful drop-off. It's smooth and fair.",
		name: "Rafiq Hasan",
		title: "Delivery Agent, Parcello",
		image: "https://img.daisyui.com/images/profile/demo/kenobee@192.webp",
	},
	{
		quote:
			"With Parcello's dashboard, managing bookings and tracking parcels became 10x easier. It's a lifesaver for SMEs.",
		name: "Sumaiya Khatun",
		title: "Founder, Urban Craft BD",
		image: "https://img.daisyui.com/images/profile/demo/3@94.webp",
	},
	{
		quote:
			"The admin dashboard gives us full control over routing, agents, and deliveries. Excellent for large-scale logistics.",
		name: "Jahangir Alam",
		title: "Admin Manager, SpeedNet Courier",
		image: "https://img.daisyui.com/images/profile/demo/anakeen@192.webp",
	},
	{
		quote: "Secure, dependable, and feature-rich. Parcello's OTP system ensured zero parcel losses this quarter.",
		name: "Mehedi Hasan",
		title: "Logistics Coordinator, eMart",
		image: "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
	},
];

function TestimonialSlider() {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef(null);

	return (
		<div className='bg-base-100 py-16 px-4'>
			<div className='max-w-4xl mx-auto text-center pb-16 space-y-3'>
				<div className="grid place-items-center">
					<img src={customerTop} alt="Customer Review Section Logo" />
				</div>
				<h2 className='text-2xl md:text-3xl font-bold text-secondary'>What our customers are saying</h2>
				<p className='text-gray-600 max-w-2xl mx-auto'>
					Parcello is trusted by businesses and individuals alike for secure, fast, and intelligent parcel management.
				</p>
			</div>
			<Swiper
				modules={[Autoplay, Keyboard, Navigation, Pagination]}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				slidesPerView={1}
				spaceBetween={20}
				pagination={{ clickable: true }}
				loop={true}
				centeredSlides={true}
				keyboard={{ enabled: true }}
				autoplay={{
					delay: 2500,
					reverseDirection: true,
					disableOnInteraction: false,
				}}
				breakpoints={{
					768: {
						slidesPerView: 2,
						centeredSlides: true,
					},
					1024: {
						slidesPerView: 3,
						centeredSlides: true,
					},
				}}
                className="my-swiper"
			>
				{testimonials.map((item, index) => (
					<SwiperSlide
						key={index}
						className='pt-10'
					>
						<div
							className={`rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 ${
								activeIndex === index ? "bg-white shadow-xl opacity-100 md:-translate-y-10" : "bg-white/60 opacity-40"
							}`}
						>
							<div>
								<div className='text-4xl text-secondary mb-4'><LuQuote /></div>
								<p className='text-gray-700 text-sm mb-6 leading-relaxed'>{item.quote}</p>
							</div>
							<div className='flex items-center gap-3 border-t pt-4'>
								<div className='w-10 h-10 rounded-full overflow-hidden'>
									<img
										src={item.image}
										alt={item.name}
										className='w-full h-full object-cover'
									/>
								</div>
								<div>
									<h4 className='text-base font-semibold text-gray-800'>{item.name}</h4>
									<p className='text-sm text-gray-500'>{item.title}</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='w-fit mx-auto flex justify-center items-center gap-4 mt-8'>
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					className='bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary cursor-pointer transition'
				>
					<LuChevronLeft className='w-5 h-5 text-secondary hover:text-gray-700' />
				</button>

				<button
					onClick={() => swiperRef.current?.slideNext()}
					className='bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary cursor-pointer transition'
				>
					<LuChevronRight className='w-5 h-5 text-secondary hover:text-gray-700' />
				</button>
			</div>
		</div>
	);
}

export default TestimonialSlider;
