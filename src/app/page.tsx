import ColorPalette from "@/components/ColourPalette";
import HoverText from "@/components/HoverText";
export default function Home() {
	let ott = "over the top ";
	let impressive = "impressive";

	return (
		<main className="flex min-h-screen flex-col items-center p-24 *:mt-4 text-tBlack">
			<h1 className="font-calistoga text-2xl">
				Greetings, Tailwind hiring personnel
			</h1>
			<h1 className="font-calistoga text-2xl gap-4 ">
				Get ready for an extremely...
				<>
					<HoverText />
				</>
				<br />
				application for the role of Design Engineer
			</h1>
			{/* <ColorPalette /> */}
		</main>
	);
}
