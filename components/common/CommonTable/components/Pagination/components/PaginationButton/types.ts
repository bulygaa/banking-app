import { PropsWithChildren } from 'react';

export interface IPaginationButtonProps extends PropsWithChildren {
	disabled?: boolean;
	href: string;
}
