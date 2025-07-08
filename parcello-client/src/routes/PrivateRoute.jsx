import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
	// Check if the user is authenticated
	const { user, loading } = useAuth();
    
	// If loading, show a spinner
	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500'></div>
			</div>
		);
	}

	// If user is not authenticated, redirect to login page
	if (!user) {
		return <Navigate to='/login'></Navigate>;
	}

	// If user is authenticated, render the children components
	return children;
};

export default PrivateRoute;
