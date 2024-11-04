import IntersectionContainer from "@/components/Insersection/intersection";
import { CardIformations, DataType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = ({ data }: { data: DataType }) => {
	const d = 1000;
	const flag = data.flags.png;

	const CardInformation = ({ keyname, value, cn }: CardIformations) => {
		const isName = keyname === "Name";
		const isLanguage = keyname === "Languages";
		const languages: [string, any][] =
			isLanguage && value ? Object.entries(value) : [];
		if (isLanguage) {
			console.log(languages);
		}
		// : isLanguage ? (
		// 	<div className={`card-detail ${cn}`}>
		// 		<p className="card-keyname">{keyname}:</p>
		// 		<div>
		// 			{languages.map((l) => (
		// 				<p className="card-value language">
		// 					- {l[0]} : {l[1]}
		// 				</p>
		// 			))}
		// 		</div>
		// 	</div>
		// )
		return keyname ? (
			isName ? (
				<p className={`card-detail ${cn}`}>{value}</p>
			) : (
				<p className={`card-detail ${cn}`}>
					<span className="card-keyname">{keyname}:</span>
					<span className="card-value">{value}</span>
				</p>
			)
		) : (
			<p className={`card-detail ${cn}`}>({value})</p>
		);
	};

	return (
		<IntersectionContainer animation="bottom">
			<div className="card">
				<div className="card-information-container">
					<Image className="card-flag" src={flag} width={d} height={d} alt="flag" />
					<CardInformation keyname="Name" value={data.name.common} cn="title" />
					<CardInformation value={data.name.official} cn="title-official" />
					<CardInformation keyname="Capital" value={data.capital?.map((c) => c)} />
					<CardInformation keyname="Population" value={data.population} />
					<CardInformation keyname="Region" value={data.region} />
				</div>
				{/* <Link className="card-button" href={`/${data.name.common}`}>Voir Plus</Link> */}
			</div>
		</IntersectionContainer>
	);
};
