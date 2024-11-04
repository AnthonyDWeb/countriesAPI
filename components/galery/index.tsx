"use client";
import { DataType } from "@/types";
import { getAllData } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { Card } from "./card";

const Galery = () => {
	const [data, setData] = useState<DataType[]>([]);

	useEffect(() => {
		initData();
	}, []);

	const initData = async () => {
		const dataFetch = await getAllData();
		const dataFiltred: DataType[] = [];
		dataFetch.forEach((d: DataType) => {
			const data: DataType = {
				name: d.name,
				capital: d.capital,
				region: d.region,
				population: d.population,
				flags: d.flags,
				languages: d.languages,
				translations: d.translations,
				maps: d.maps,
			};
			if (data.capital?.includes("Paris")) console.log("data paris", data);
			dataFiltred.push(data);
		});
		setData(dataFiltred);
	};

	return (
		<div className="card-galery">
			{data ? (
				data.map((d, i) => <Card key={i} data={d} />)
			) : (
				<p>Chargement en cours</p>
			)}
		</div>
	);
};
export default Galery;
