import IntersectionContainer from "@/components/Insersection/intersection";
import { CardIformations, DataType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = ({ data }: { data: DataType }) => {
	const isActive = false;
	const linkref = isActive ? `/${data.name.common}` : "/";
	const d = 1000;
	const flag = data.flags.png;

	const CardInformation = ({ keyname, value, cn }: CardIformations) => {
		const isName = keyname === "Name";
		// const isLanguage = keyname === "Languages" && value;
		// const languages: [string, any][] = isLanguage ? Object.entries(value) : [];

		return keyname && !isName ? (
			<p className={`card-detail ${cn}`}>
				<span className="card-keyname">{keyname}:</span>
				<span className="card-value">{value}</span>
			</p>
		) : (
			<p className={`card-detail ${cn}`}>{isName ? value : `(${value})`}</p>
		);
	};
	const isDesktop = window.screen.width >= 1024;
	return (
		<IntersectionContainer animation={isDesktop ? "bottom": "fade"}>
			<Link href={linkref} className={`card ${isActive && "pointer"}`}>
				<div className="card-information-container">
					<Image className="card-flag" src={flag} width={d} height={d} alt="flag" />
					<CardInformation keyname="Name" value={data.name.common} cn="title" />
					<CardInformation value={data.name.official} cn="title-official" />
					<CardInformation keyname="Capital" value={data.capital?.map((c) => c)} />
					<CardInformation keyname="Population" value={data.population} />
					<CardInformation keyname="Region" value={data.region} />
				</div>
			</Link>
		</IntersectionContainer>
	);
};
