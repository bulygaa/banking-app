'use client';
import React, { useEffect } from 'react';
import { IModalWrapperProps } from './types';

const ModalWrapper: React.FC<IModalWrapperProps> = ({
	isOpen,
	title,
	children,
	submitText = 'Submit',
	cancelText = 'Cancel',
	submitLoading = false,
	onSubmit,
	onCancel,
}) => {
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onCancel();
		};

		if (isOpen) window.addEventListener('keydown', handleEscape);

		return () => {
			if (isOpen) window.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen]); // eslint-disable-line

	// ! render
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-5'>
			<div className='container max-w-lg bg-white rounded-lg shadow-lg p-6'>
				{/* Modal Header */}
				<div className='mb-4 border-b pb-2'>
					<h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
				</div>

				{/* Modal Body */}
				<div className='mb-6'>{children}</div>

				{/* Modal Footer */}
				<div className='flex justify-end gap-4'>
					<button
						className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300'
						onClick={onCancel}
					>
						{cancelText}
					</button>
					<button
						disabled={submitLoading}
						className='px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50'
						onClick={onSubmit}
					>
						{!submitLoading ? submitText : 'Loading...'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalWrapper;
