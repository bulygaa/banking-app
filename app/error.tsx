'use client';

const Error = ({ reset }: { reset: () => void }) => {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-800 to-white text-white'>
			<h1 className='text-4xl font-bold mb-4'>Oops! Something went wrong</h1>
			<p className='text-lg mb-6'>An unexpected error occurred. Please try again later.</p>
			<div className='flex gap-4'>
				<button
					onClick={reset}
					className='px-6 py-3 bg-errorRed text-white rounded-md hover:bg-red-700 transition-colors'
				>
					Retry
				</button>
			</div>
		</div>
	);
};

export default Error;
