"use client";
import React, { createContext, useEffect, useRef, useState } from "react";
import {
	DataType,
	CountriesContextType as CCT,
	CountriesProviderTypes as CPT,
} from "../types";
import { getAllData } from "@/utils/api";
import { getStorage, setStorage } from "@/utils/storage";
import { FILTRED_KEY } from "@/constants";

const CountriesContextInit = {
	regions: [],
	setRegions: (regions: string[]): void => {},
	countries: [],
	setCountries: (countries: DataType[]): void => {},
	countriesSave: [],
	setSave: (countriesSave: DataType[]): void => {},
	selectRef: {
		current: "None",
	},
	handleFilter: (): void => {},
};

export const CountriesContext = createContext<CCT>(CountriesContextInit);
export const CountriesProvider: CPT = ({ children }) => {
	const [regions, setRegions] = useState<string[]>([]);
	const [countries, setCountries] = useState<DataType[]>([]);
	const [countriesSave, setSave] = useState<DataType[]>([]);
	const selectRef = useRef("None");

	useEffect(() => {
		initData();
	}, []);

	const initData = async () => {
		const storeData = await getStorage(FILTRED_KEY);
		if (storeData) {
			setCountries(storeData);
			setSave(storeData);
			initRegions(storeData);
		} else {
			const dataFiltred: DataType[] = [];
			const dataFetch = await getAllData();
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
				dataFiltred.push(data);
			});
			if (dataFiltred) setStorage(FILTRED_KEY, JSON.stringify(dataFiltred));
			setCountries(dataFiltred);
			setSave(dataFiltred);
			initRegions(dataFiltred);
		}
	};
	const initRegions = (data: DataType[]) => {
		const regionList: string[] = ["None"];
		data.forEach((d) => {
			const checkIfExist = regionList.includes(d.region);
			if (!checkIfExist) regionList.push(d.region);
		});
		setRegions(regionList);
	};
	const handleFilter = () => {
		const newCountries =
			selectRef.current === "None"
				? countriesSave
				: [...countriesSave].filter((c) => c.region === selectRef.current);
		console.log("newCountries", newCountries);
		setCountries(newCountries);
	};

	const CountriesContextValue = {
		regions,
		setRegions,
		countries,
		setCountries,
		selectRef,
		handleFilter,
	};

	return (
		<CountriesContext.Provider value={CountriesContextValue}>
			{children}
		</CountriesContext.Provider>
	);
};
