const SummaryLoading = () => {
	return (
		<div className='flex flex-col items-center h-full w-full gap-16 p-4'>
			{/* Title */}
			<p className='text-4xl sm:text-5xl text-lightGray'>Summary</p>

			{/* Skeleton Table */}
			<div className='w-full max-w-6xl overflow-hidden rounded-lg shadow-lg'>
				<table className='min-w-full table-fixed border-collapse'>
					{/* Table Header */}
					<thead>
						<tr className='bg-lightGray'>
							{Array.from({ length: 5 }).map((_, index) => (
								<th
									key={index}
									className='px-4 py-2 border-b border-gray-300'
								>
									<div className='h-4 bg-gray-200 rounded-md'></div>
								</th>
							))}
						</tr>
					</thead>

					{/* Table Body with Skeleton Rows */}
					<tbody>
						{Array.from({ length: 5 }).map((_, rowIndex) => (
							<tr
								key={rowIndex}
								className='border-b border-gray-300'
							>
								{Array.from({ length: 5 }).map((_, colIndex) => (
									<td
										key={colIndex}
										className='px-4 py-4'
									>
										<div className='h-4 bg-gray-200 rounded-md'></div>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SummaryLoading;
