import React, { ReactNode } from 'react';
import { ICommonTableProps } from './types';
import { Pagination, SortButton } from './components';

const CommonTable = <T,>({ data, columnConfig, elementsCount }: ICommonTableProps<T>) => {
	return (
		<div className='w-full  bg-lightBlue p-4 rounded-lg shadow-md'>
			<div className='w-full overflow-x-auto'>
				<table className='min-w-full text-left text-sm text-primaryBlue table-fixed'>
					<thead className='border-b bg-blue-800 text-white'>
						<tr>
							{columnConfig.map((column, index) => (
								<th
									key={index}
									className={`px-4 py-2 ${column.className || ''}`}
								>
									<div className='flex items-center'>
										{column.title}
										{column.sortableName && <SortButton sortField={column.sortableName} />}
									</div>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{!data.length && (
							<tr>
								<td
									colSpan={columnConfig.length}
									className='px-4 py-8 text-center text-gray-500 text-xl'
								>
									No data to display
								</td>
							</tr>
						)}
						{data.map((record, rowIndex) => (
							<tr
								key={rowIndex}
								className='border-b hover:bg-gray-200 transition-colors whitespace-nowrap'
							>
								{columnConfig.map((column, colIndex) => {
									const value = column.dataIndex ? record[column.dataIndex] : null;
									return (
										<td
											data-testid='valueId'
											key={colIndex}
											className={`px-4 py-2 ${column.className || ''}`}
										>
											{column.render ? column.render(record, rowIndex) : (value as ReactNode)}
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className='flex items-center justify-center'>
				<Pagination elementsCount={elementsCount} />
			</div>
		</div>
	);
};

export default CommonTable;
