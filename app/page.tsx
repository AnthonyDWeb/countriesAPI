import Galery from "@/components/galery";
import IntersectionContainer from "@/components/Insersection/intersection";
import { useRef } from "react";

export default async function Home() {
	return (
		<div className="page">
			<IntersectionContainer animation="bottom">
				<h1 className="main-title">Countries API</h1>
			</IntersectionContainer>
			<Galery />
		</div>
	);
}
