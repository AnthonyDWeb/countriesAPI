import IntersectionContainer from "@/components/Insersection/intersection";
import { Metadata } from "next";
import React from "react";

interface Params {
	params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
	// Your network call
	const slug = (await params).slug.replaceAll("%20", " ");
	const title = `Countries API - ${slug}`;
	return {
		title: `${title}`,
	};
};


const PageDetails = async ({ params }: Params) => {
	const slug = (await params).slug.replaceAll("%20", " ");
	return (
		<div className="detail-page">
			{/* <IntersectionContainer animation="bottom">
				<h1 className="detail-title">{slug}</h1>
			</IntersectionContainer> */}
			<div className="detail-card"></div>
		</div>
	);
};
export default PageDetails;
