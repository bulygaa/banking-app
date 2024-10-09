import Link from 'next/link';

const NotFound = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-800 to-white text-lightGray'>
			<h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
			<p className='text-lg mb-6'>The page you are looking for does not exist or has been moved.</p>
			<Link
				href='/'
				className='px-6 py-3 bg-lightGray text-primaryBlue rounded-md hover:bg-gray-200 transition-colors'
			>
				Go Home
			</Link>
		</div>
	);
};

export default NotFound;
