"use client";
import React, { useContext, useState } from "react";
import filter from "@/assets/filter.png";
import { Img } from "../Image";
import { CountriesContext } from "@/context/countries.context";

export const Filter = () => {
	const [display, setDisplay] = useState(false);
	const { regions, selectRef, handleFilter } = useContext(CountriesContext);

	// ------------------------------ FUNCTIONS -----------------------------------
	const handleDisplay = () => setDisplay(!display);
	const handleRadio = (value: string) => {
		const radios = Array.from(document.getElementsByTagName("input"));
		radios.forEach((el) => (el.checked = el.id === value));
		console.log("radios", radios);
		selectRef.current = value;
	};
	const handleForm = () => {
		setDisplay(!display);
		handleFilter();
	};

	// ------------------------------ RENDERS -----------------------------------
	const FilterMenu = () => {
		return (
			<div className={`filter-menu ${display && "show"}`}>
				<h3 className="filter-title">Settings</h3>
				<form name="form" className="form" action={handleForm}>
					{regions.map((r) => (
						<RadioInput value={r} key={r} />
					))}
					<button className="filter-button" onClick={handleForm}>
						Validate
					</button>
				</form>
			</div>
		);
	};

	const RadioInput = ({ value }: { value: string }) => {
		return (
			<label className="container" htmlFor={value}>
				<input
					id={value}
					type="radio"
					className="radio-input"
					onChange={() => handleRadio(value)}
					defaultChecked={selectRef.current === value}
				/>
				<span className="label">{value}</span>
			</label>
		);
	};

	return (
		<div className="filter-container">
			<Img classname="filter" src={filter} action={handleDisplay} />
			<FilterMenu />
		</div>
	);
};
