import React, { FC } from 'react';
import { ISpinnerProps } from './types';
import styles from './Spinner.module.css';

const Spinner: FC<ISpinnerProps> = ({ open = true }) => {
	if (!open) return null;
	return (
		<div className={styles.overlay}>
			<div className={styles.loader}>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
			</div>
		</div>
	);
};

export default Spinner;
