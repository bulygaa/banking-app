import { PropsWithChildren } from 'react';

export interface ShowWithTimeoutProps extends PropsWithChildren {
	show: boolean;
	timeout?: number;
}
