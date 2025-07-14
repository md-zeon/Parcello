import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import districtData from "../data/districts.json";
import { useEffect, useRef, useState } from "react";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
	iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
	shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const MapController = ({ position, zoom }) => {
	const map = useMap();

	useEffect(() => {
		if (position) {
			map.setView(position, zoom, { animate: true });
		}
	}, [position]);

	return null;
};

const CoverageMap = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedDistrict, setSelectedDistrict] = useState(null);
	const markerRefs = useRef([]);

	// Search handler
	const handleSearch = () => {
		const match = districtData.find((d) => d.district.toLowerCase().includes(searchTerm.toLowerCase()));

		if (match) {
			setSelectedDistrict(match);

			// Find the corresponding marker ref
			const markerRef = markerRefs.current.find((refObj) => refObj?.district === match.district);

			if (markerRef && markerRef.ref) {
				markerRef.ref.openPopup(); // open popup
			}
		}
	};

	return (
		<div>
			{/* 🔍 Search Box */}
			<div className='mb-4 flex gap-2'>
				<input
					type='text'
					placeholder='Search district...'
					className='input input-bordered w-full max-w-md'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSearch()}
				/>
				<button
					onClick={handleSearch}
					className='btn btn-primary'
				>
					Search
				</button>
			</div>

			{/* 🗺️ Map Section */}
			<div className='w-full h-[600px] rounded-xl overflow-hidden shadow-lg'>
				<MapContainer
					center={[23.685, 90.3563]}
					zoom={7}
					scrollWheelZoom={true}
					className='h-full w-full'
				>
					<TileLayer
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						attribution='&copy; OpenStreetMap contributors'
					/>

					{/* 👇 Auto-focus when a district is selected */}
					{selectedDistrict && (
						<MapController
							position={[selectedDistrict.latitude, selectedDistrict.longitude]}
							zoom={14}
						/>
					)}

					{/* Render all 64 district markers */}
					{districtData.map((district, index) => (
						<Marker
							key={index}
							position={[district.latitude, district.longitude]}
							ref={(ref) =>
								(markerRefs.current[index] = {
									district: district.district,
									ref: ref,
								})
							}
						>
							<Popup>
								<strong>{district.district}</strong> <br />
								Region: {district.region} <br />
								Areas: {district.covered_area.join(", ")}
							</Popup>
						</Marker>
					))}
				</MapContainer>
			</div>
		</div>
	);
};

export default CoverageMap;
