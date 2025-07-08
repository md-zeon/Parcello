import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
	const { createUser } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);

		createUser(data.email, data.password)
			.then((result) => {
				const user = result.user;
				console.log("User registered:", user);
			})
			.catch((error) => {
				console.error("Error registering user:", error);
			});
	};

	return (
		<div>
			<h1 className='text-4xl font-black'>Create An Account</h1>
			<p className='font-medium mt-2 mb-3'>Register with Parcello</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className='fieldset'>
					{/* Name */}
					<label className='label'>Name</label>
					<input
						type='text'
						{...register("name", { required: true })}
						className="input bg-white w-full"
						placeholder="Full Name"
					/>
					{/* Name Error Message */}
					{errors.name && <span className='text-error'>{errors.name.type === "required" && "Name is required"}</span>}
					{/* Email */}
					<label className='label'>Email</label>
					<input
						type='email'
						{...register("email", { required: true })}
						className='input bg-white w-full'
						placeholder='Email'
					/>
					{/* Email Error Messages */}
					{errors.email && (
						<span className='text-error'>{errors.email.type === "required" && "Email is required"}</span>
					)}
					{/* Password */}
					<label className='label'>Password</label>
					<input
						type='password'
						{...register("password", {
							required: true,
							minLength: 6,
						})}
						className='input bg-white w-full'
						placeholder='Password'
					/>
					{/* Password Error Messages */}
					{errors.password && (
						<span className='text-error'>
							{errors.password?.type === "required" && "Password is required"}
							{errors.password?.type === "minLength" && "Password must be at least 6 characters"}
						</span>
					)}
					{/* Register */}
					<button className='btn btn-primary mt-4'>Create An Account</button>
					{/* Already have an account? */}
					<div>
						Already have an account?{" "}
						<Link
							to='/login'
							className='btn btn-link mx-0 px-0 text-xs'
						>
							Login
						</Link>
					</div>
				</fieldset>
				<div className='divider'>Or</div>
				{/* Social Login */}
				<SocialLogin process={"Register"} />
			</form>
		</div>
	);
};

export default Register;
