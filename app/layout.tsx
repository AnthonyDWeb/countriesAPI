import "./globals.css";
import type { Metadata } from "next";
import { RootType } from "@/types";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { fontStyle } from "@/public/fonts";
import { CountriesProvider } from "@/context/countries.context";
import Link from "next/link";
import favico from "@/assets/globe.svg";

export const metadata: Metadata = {
	title: "Countries API",
};

export default function RootLayout({ children }: RootType) {
	return (
		<html lang="en">
			<CountriesProvider>
				<body className={fontStyle}>
					<Header />
					<main>{children}</main>
					<Footer />
				</body>
			</CountriesProvider>
		</html>
	);
}
