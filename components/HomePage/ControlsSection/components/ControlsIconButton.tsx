import { FC, PropsWithChildren } from 'react';

interface IControlsIconButtonProps extends PropsWithChildren {
	onClick: () => void;
}

const ControlsIconButton: FC<IControlsIconButtonProps> = ({ children, onClick }) => {
	return (
		<button
			className='bg-darkButton rounded-full p-4 flex items-center justify-center'
			onClick={onClick}
		>
			<div className='h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 stroke-lightGray'>{children}</div>
		</button>
	);
};

export default ControlsIconButton;
