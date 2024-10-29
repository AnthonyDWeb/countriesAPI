import { DataType } from "@/types";
import Image from "next/image";
import React from "react";

export const Card = ({ data }: { data: DataType }) => {
	const d = 1000;
	const flag = data.flags.png;

	const CardInformation = ({
		keyname,
		value,
		cn,
	}: {
		keyname?: string;
		value: string | string[] | number;
		cn?: string;
	}) => {
		return (
			<p className={`card-detail ${cn}`}>
				{!keyname ? (
					`(${value})`
				) : keyname === "Name" ? (
					value
				) : (
					<>
						<span className="card-keyname">{keyname}:</span>
						<span className="card-value">{value}</span>
					</>
				)}
			</p>
		);
	};
	return (
		<div className="card">
			<Image className="card-flag" src={flag} width={d} height={d} alt="flag" />
			<CardInformation keyname="Name" value={data.name.common} cn="title" />
			<CardInformation value={data.name.official} cn="title-official" />
			<CardInformation keyname="Capital" value={data.capital?.map(c => c)} />
			<CardInformation keyname="Population" value={data.population} />
			<CardInformation keyname="Region" value={data.region} />
			<CardInformation keyname="Languages" value={"en cours ..."} />
		</div>
	);
};
