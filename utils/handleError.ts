import { toast } from 'react-toastify';

export const handleError = (error: unknown) => {
	const errorMessage = error instanceof Error ? error.message : 'Unexpected Error';
	toast(errorMessage, { type: 'error', position: 'top-center' });
};
