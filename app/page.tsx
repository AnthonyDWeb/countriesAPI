import { Main } from "@/components/Main/main";
import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";

export default async function Home() {
	return (
		<div className="page">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
