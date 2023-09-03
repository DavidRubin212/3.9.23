import React, { useRef } from "react";

export default function Counter() {
	let thisNumber = 0;
	const divKipper = useRef<HTMLDivElement>(null);
	const changeText = () => {
		thisNumber = thisNumber + 6;
		divKipper.current!.innerText = thisNumber.toString();
	};
    const changeZero = () => {
		thisNumber = 0
		divKipper.current!.innerText = thisNumber.toString();
	};
	return (
		<>
            <div>{thisNumber}</div>
			<div ref={divKipper}>0</div>
			<button onClick={changeText}>add</button>
            <button onClick={changeZero}>reset</button>

		</>
	);
}
