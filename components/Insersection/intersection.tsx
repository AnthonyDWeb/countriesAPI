"use client";
import React, { ReactElement, useEffect, useRef } from "react";
import "./intersection.css";

export interface Intersection {
	children: ReactElement;
	animation?: string;
	extra?: boolean;
}

export default function IntersectionContainer({ children, animation, }: Intersection) {
	const ref = useRef(null);
	const option = { rootMargin: "55%", threshold: 0, };

	useEffect(() => {
		const observer = new IntersectionObserver(interSectionCallback, option);
		ref.current && observer.observe(ref.current);
	});

	const interSectionCallback = (el: IntersectionObserverEntry[]) =>
		el.forEach((e) => e.isIntersecting && e.target.classList.add("active"));

	return (
		<div ref={ref} className={`observer ${animation}`}>
			{children}
		</div>
	);
}
