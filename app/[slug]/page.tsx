import React from "react";

const PageDetails = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const slug = (await params).slug.replaceAll('%20', ' ');
	return <div>PageDetails {slug}</div>;
};
export default PageDetails;
