import localFont from "next/font/local";

export const Qlassy = localFont({
	src: "./Qlassy.ttf",
	variable: "--Qlassy",
});
export const blackCastle = localFont({
	src: "./BlackCastleMF.ttf",
	variable: "--black-castle",
});
export const DM = localFont({ src: "./DMSerif.ttf", variable: "--dm" });

export const fontStyle = `${Qlassy.variable} ${blackCastle.variable} ${DM.variable}`;