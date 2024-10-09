'use client';
import React, { useEffect, useState } from 'react';
import { ShowWithTimeoutProps } from './types';

const ShowWithTimeout: React.FC<ShowWithTimeoutProps> = ({ show, timeout = 200, children }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		let timer: NodeJS.Timeout;

		if (show) {
			timer = setTimeout(() => setIsVisible(true), timeout);
		} else {
			setIsVisible(false);
		}

		// unmount
		return () => clearTimeout(timer);
	}, [show, timeout]);

	return isVisible && show ? <>{children}</> : null;
};

export default ShowWithTimeout;
