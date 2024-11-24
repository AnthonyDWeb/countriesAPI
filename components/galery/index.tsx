"use client";
import React, { useContext } from "react";
import { Card } from "./card";
import { CountriesContext } from "@/context/countries.context";

const Galery = () => {
	const { countries } = useContext(CountriesContext);

	return (
		<div className="card-galery">
			{countries ? (
				countries.map((c, i) => <Card key={i} data={c} />)
			) : (
				<p>Chargement en cours</p>
			)}
		</div>
	);
};
export default Galery;
