import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Filter } from "./filter-component";

export const Header = () => {
	const d = 1000;
	return (
		<header>
			<div className="logo-container">
				<Image className="logo" src={logo} alt="logo" height={d} width={d} />
				<Link href={"http://arkanya.fr"} passHref={true} target="_blank">
					Arkanya
				</Link>
			</div>
			<Filter/>
		</header>
	);
};
