import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Banking App',
	description: 'Keep track of your finances with ease',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ToastContainer />
				<main className='h-screen overflow-x-hidden bg-gradient-to-b from-blue-800 to-white'>
					<div className='container h-full mx-auto px-5 pt-10 pb-10 rounded-lg shadow-lg'>{children}</div>
				</main>
			</body>
		</html>
	);
}
