import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../../shared/Auth/SocialLogin";
const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div>
			<h1 className='text-4xl font-black'>Welcome Back</h1>
			<p className='font-medium mt-2 mb-3'>Login with Parcello</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className='fieldset'>
					{/* Email */}
					<label className='label'>Email</label>
					<input
						type='email'
						{...register("email", { required: true })}
						className='input w-full bg-white'
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
						className='input w-full bg-white'
						placeholder='Password'
					/>
					{/* Error Messages */}
					{errors.password && (
						<span className='text-error'>
							{errors.password?.type === "required" && "Password is required"}
							{errors.password?.type === "minLength" && "Password must be at least 6 characters"}
						</span>
					)}
					{/* Forgot Password */}
					<div>
						<Link
							to='/forgot-password'
							className='link underline text-sm'
						>
							Forgot password?
						</Link>
					</div>
					{/* Login */}
					<button className='btn btn-primary mt-4'>Login</button>

					{/* Don't have an account? */}
					<div>
						Don't have an account?{" "}
						<Link
							to='/register'
							className='btn btn-link mx-0 px-0 text-xs'
						>
							Register
						</Link>
					</div>
				</fieldset>
			</form>
			<div className='divider'>Or</div>
			{/* Social Login */}
			<SocialLogin process={"Login"} />
		</div>
	);
};

export default Login;
