import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface Img {
	classname: string;
	src: string | StaticImport;
	action: React.MouseEventHandler<HTMLImageElement>;
}
export const Img = ({ classname, src, action }: Img) => {
	const d = 1000;
	return (
		<Image className={classname} src={src} alt={classname} height={d} width={d} onClick={action} />
	);
};
