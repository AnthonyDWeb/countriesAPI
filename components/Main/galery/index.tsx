"use client";
import { getAllData } from "@/utils/api";
import React, { useEffect, useState } from "react";
type DataType = {
	capital: [string];
	region: string;
	population: number;
	flags: {
		png: string;
		svg: string;
	};
	languages: any;
	translations: {
		ara: { official: string; common: string };
		bre: { official: string; common: string };
		ces: { official: string; common: string };
		cym: { official: string; common: string };
		deu: { official: string; common: string };
		est: { official: string; common: string };
		fin: { official: string; common: string };
		fra: { official: string; common: string };
		hrv: { official: string; common: string };
		hun: { official: string; common: string };
		ita: { official: string; common: string };
		jpn: { official: string; common: string };
		kor: { official: string; common: string };
		nld: { official: string; common: string };
		per: { official: string; common: string };
		pol: { official: string; common: string };
		por: { official: string; common: string };
		rus: { official: string; common: string };
		slk: { official: string; common: string };
		spa: { official: string; common: string };
		srp: { official: string; common: string };
		swe: { official: string; common: string };
		tur: { official: string; common: string };
		urd: { official: string; common: string };
	};
	maps: {
		googleMaps: string;
		openStreetMaps: string;
	};
};

const Galery = () => {
	const [data, setData] = useState<DataType[]>([]);

	useEffect(() => {
		initData();
	}, []);

	const initData = async () => {
		const dataFetch = await getAllData();
		console.log("dataFetch", dataFetch);
		const dataFiltred: DataType[] = [];
		dataFetch.forEach(
			({
				capital,
				region,
				population,
				flags,
				languages,
				translations,
				maps,
			}: DataType) =>
				dataFiltred.push({
					capital,
					region,
					population,
					flags,
					languages,
					translations,
					maps,
				})
		);
		setData(dataFiltred);
	};
	console.log("data", data);

	return <div>Data</div>;
};
export default Galery;
