import React, { useRef } from "react";

export default function Style() {
	const divKipper = useRef<HTMLDivElement>(null);
	const divKipper1 = useRef<HTMLDivElement>(null);

	const changeColor = () => {
		divKipper.current!.style.backgroundColor = "white";
		divKipper1.current!.style.backgroundColor = "white";
	};
	const changeText = () => {
		let newText = divKipper.current!.innerText;
		divKipper.current!.innerText = divKipper1.current!.innerText;
		divKipper1.current!.innerText = newText;
	};

	return (
		<>
			<button onClick={changeColor}>change color</button>
			<button onClick={changeText}>swap text</button>

			<div ref={divKipper} style={{ backgroundColor: "blue" }}>
				i am blue squere
			</div>
			<div ref={divKipper1} style={{ backgroundColor: "red" }}>
				i am red squere
			</div>
		</>
	);
}
