import "./globals.css";
import type { Metadata } from "next";
import { RootType } from "@/types";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { fontStyle } from "@/public/fonts";

export const metadata: Metadata = {
	title: "Countries API",
};

export default function RootLayout({ children }: RootType) {
	return (
		<html lang="en">
			<body className={fontStyle}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
