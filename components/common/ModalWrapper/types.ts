import { PropsWithChildren } from 'react';

export interface IModalWrapperProps extends PropsWithChildren {
	isOpen: boolean;
	title: string;
	onSubmit: () => void;
	onCancel: () => void;
	// Optional props
	submitText?: string;
	cancelText?: string;
	submitLoading?: boolean;
}
