import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import serviceCenters from "../../data/districts.json";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
	const { user } = useAuth();

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	// Watch inputs dynamically
	const parcelType = watch("type");
	const senderRegion = watch("senderRegion");
	const receiverRegion = watch("receiverRegion");

	const calculateCost = (data) => {
		const type = data.type;
		const weight = parseFloat(data.weight || "0");
		const isOutside = data.senderServiceCenter !== data.receiverServiceCenter;

		let base = 0,
			extra = 0,
			outsideFee = 0;

		if (type === "document") {
			base = isOutside ? 80 : 60;
		} else if (weight <= 3) {
			base = isOutside ? 150 : 110;
		} else {
			base = isOutside ? 150 : 110;
			extra = (weight - 3) * 40;
			outsideFee = isOutside ? 40 : 0;
		}

		return base + extra + outsideFee;
	};

	const onSubmit = (data) => {
		const total = calculateCost(data);

		Swal.fire({
			title: "Confirm Your Parcel",
			icon: "info",
			html: `
				<div class="text-left text-base leading-relaxed space-y-2">
					<p><strong>Parcel Type:</strong> ${data.type === "document" ? "📄 Document" : "📦 Non-Document"}</p>
					${data.type !== "document" ? `<p><strong>Weight:</strong> ${data.weight} kg</p>` : ""}
					<p><strong>From:</strong> ${data.senderServiceCenter}</p>
					<p><strong>To:</strong> ${data.receiverServiceCenter}</p>
					<hr />
					<p><strong>Delivery Charge Details:</strong></p>
					<ul class="list-disc pl-5 space-y-1">
						${
							data.type === "document"
								? `<li>${
										data.senderServiceCenter === data.receiverServiceCenter
											? "Within same city: ৳60"
											: "Outside city: ৳80"
								  }</li>`
								: parseFloat(data.weight) <= 3
								? `<li>Base charge (up to 3kg): ৳${
										data.senderServiceCenter === data.receiverServiceCenter ? 110 : 150
								  }</li>`
								: `
									<li>Base charge: ৳${data.senderServiceCenter === data.receiverServiceCenter ? 110 : 150}</li>
									<li>Extra weight (${parseFloat(data.weight) - 3}kg x ৳40): ৳${(parseFloat(data.weight) - 3) * 40}</li>
									${data.senderServiceCenter === data.receiverServiceCenter ? "" : "<li>Outside city fee: ৳40</li>"}
								`
						}
					</ul>
					<hr />
					<p class="text-lg font-semibold mt-2">Total Cost: <span class="text-green-600 font-bold">৳${total}</span></p>
				</div>
			`,
			showCancelButton: true,
			confirmButtonText: "Proceed to Payment",
			cancelButtonText: "Go Back & Edit",
			confirmButtonColor: "#16a34a",
			cancelButtonColor: "#d33",
			customClass: {
				popup: "rounded-xl p-4",
				title: "text-lg font-bold",
			},
		}).then((result) => {
			if (result.isConfirmed) {
				const parcelData = {
					...data,
					price: total,
					createdBy: user?.email,
					deliveryStatus: "pending",
					paymentStatus: "unpaid",
					trackingId: `TRK-${data.senderServiceCenter.slice(0, 3).toUpperCase()}-${Date.now()}`,
					creation_date: new Date().toISOString(),
				};
				console.log("Parcel Confirmed:", parcelData);
				// TODO: Send parcelData to the server
				
				reset();
			}
		});
	};

	// Unique region list
	const regions = [...new Set(serviceCenters.map((c) => c.region))];

	// Filter service centers dynamically based on selected region
	const filteredSenderDistricts = serviceCenters.filter((c) => c.region === senderRegion).map((c) => c.district);
	const filteredReceiverDistricts = serviceCenters.filter((c) => c.region === receiverRegion).map((c) => c.district);

	return (
		<div className='max-w-7xl mx-auto p-6 shadow-inner rounded-2xl mt-6'>
			<h2 className='text-2xl font-bold mb-1'>Send Parcel</h2>
			<p className='mb-4 text-sm text-gray-500'>Fill in the details to send a parcel</p>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className='space-y-6'
			>
				{/* Parcel Info */}
				<div className='border rounded-2xl p-6'>
					<h3 className='text-xl font-semibold mb-2'>Parcel Info</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						{/* Parcel Type */}
						<div>
							<label className='label'>Parcel Type</label>
							<div className='flex gap-4'>
								<label className='flex items-center gap-2'>
									<input
										type='radio'
										value='document'
										{...register("type", { required: true })}
										className='radio radio-sm'
									/>
									Document
								</label>
								<label className='flex items-center gap-2'>
									<input
										type='radio'
										value='non-document'
										{...register("type", { required: true })}
										className='radio radio-sm'
									/>
									Non-Document
								</label>
							</div>
							{errors.type && <span className='text-red-500 text-sm'>Type is required</span>}
						</div>

						{/* Title */}
						<div>
							<label className='label'>Parcel Name</label>
							<input
								type='text'
								{...register("title", { required: true })}
								className='input input-bordered w-full'
							/>
							{errors.title && <span className='text-red-500 text-sm'>Title is required</span>}
						</div>

						{/* Weight */}
						<div>
							<label className='label'>Weight (kg)</label>
							<input
								type='number'
								step='0.1'
								min='0.1'
								disabled={parcelType !== "non-document"}
								{...register("weight")}
								className='input input-bordered w-full'
							/>
						</div>
					</div>
				</div>

				{/* Sender & Receiver Info */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
					{/* Sender Info */}
					<div className='border rounded-2xl p-6'>
						<h3 className='text-lg font-semibold mb-2'>Sender Info</h3>
						<div className='grid grid-cols-1 gap-4'>
							<input
								{...register("senderName", { required: true })}
								defaultValue='Zeanur Rahaman Zeon'
								placeholder='Name'
								className='input input-bordered w-full'
							/>
							<input
								{...register("senderContact", { required: true })}
								placeholder='Contact'
								className='input input-bordered w-full'
							/>
							<select
								{...register("senderRegion", { required: true })}
								className='select select-bordered w-full'
							>
								<option value=''>Select Region</option>
								{regions.map((region) => (
									<option
										key={region}
										value={region}
									>
										{region}
									</option>
								))}
							</select>
							<select
								{...register("senderServiceCenter", { required: true })}
								className='select select-bordered w-full'
							>
								<option value=''>Select District</option>
								{filteredSenderDistricts.map((d) => (
									<option key={d}>{d}</option>
								))}
							</select>
							<textarea
								{...register("senderAddress", { required: true })}
								placeholder='Pickup Address'
								className='textarea textarea-bordered w-full'
							/>
							<textarea
								{...register("pickupInstruction", { required: true })}
								placeholder='Pickup Instruction'
								className='textarea textarea-bordered w-full'
							/>
						</div>
					</div>

					{/* Receiver Info */}
					<div className='border rounded-2xl p-6'>
						<h3 className='text-lg font-semibold mb-2'>Receiver Info</h3>
						<div className='grid grid-cols-1 gap-4'>
							<input
								{...register("receiverName", { required: true })}
								placeholder='Name'
								className='input input-bordered w-full'
							/>
							<input
								{...register("receiverContact", { required: true })}
								placeholder='Contact'
								className='input input-bordered w-full'
							/>
							<select
								{...register("receiverRegion", { required: true })}
								className='select select-bordered w-full'
							>
								<option value=''>Select Region</option>
								{regions.map((region) => (
									<option
										key={region}
										value={region}
									>
										{region}
									</option>
								))}
							</select>
							<select
								{...register("receiverServiceCenter", { required: true })}
								className='select select-bordered w-full'
							>
								<option value=''>Select District</option>
								{filteredReceiverDistricts.map((d) => (
									<option key={d}>{d}</option>
								))}
							</select>
							<textarea
								{...register("receiverAddress", { required: true })}
								placeholder='Delivery Address'
								className='textarea textarea-bordered w-full'
							/>
							<textarea
								{...register("deliveryInstruction", { required: true })}
								placeholder='Delivery Instruction'
								className='textarea textarea-bordered w-full'
							/>
						</div>
					</div>
				</div>

				{/* Submit */}
				<div className='flex justify-end'>
					<button
						type='submit'
						className='btn btn-primary'
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default SendParcel;
