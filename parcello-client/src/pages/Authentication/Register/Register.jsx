import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

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
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className='fieldset'>
					{/* Email */}
					<label className='label'>Email</label>
					<input
						type='email'
						{...register("email", { required: true })}
						className='input'
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
						className='input'
						placeholder='Password'
					/>
					{/* Password Error Messages */}
					{errors.password && (
						<span className='text-error'>
							{errors.password?.type === "required" && "Password is required"}
							{errors.password?.type === "minLength" && "Password must be at least 6 characters"}
						</span>
					)}
					{/* Forgot Password */}
					<div>
						<a className='link link-hover'>Forgot password?</a>
					</div>
				</fieldset>
				{/* Register */}
				<button className='btn btn-neutral mt-4'>Create An Account</button>
			</form>
		</div>
	);
};

export default Register;
