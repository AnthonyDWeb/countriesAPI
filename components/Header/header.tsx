import React from "react";
import logo from "./logo.png";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
	const d = 1000;
	return (
		<header>
			<Image className="logo" src={logo} alt="logo" height={d} width={d} />
			<Link href={"http://arkanya.fr"} passHref={true} target="_blank">
				Arkanya
			</Link>
		</header>
	);
};
