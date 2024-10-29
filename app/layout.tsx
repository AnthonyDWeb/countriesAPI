import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
// 	src: "./fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });
// const geistMono = localFont({
// 	src: "./fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });
const Qlassy = localFont({
	src: "./fonts/Qlassy.ttf",
	variable: "--Qlassy",
});
const blackCastle = localFont({
	src: "./fonts/BlackCastleMF.ttf",
	variable: "--black-castle",
});
const DM = localFont({
	src: "./fonts/DMSerif.ttf",
	variable: "--dm",
});

export const metadata: Metadata = {
	title: "Countries API",
	description: "Countries API application",
};

type RootType = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootType) {
	const fontStyle = `${Qlassy.variable} ${blackCastle.variable} ${DM.variable}`;
	return (
		<html lang="en">
			<body className={fontStyle}>{children}</body>
		</html>
	);
}
