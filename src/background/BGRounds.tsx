import React, { useEffect, useState } from "react";
import styled from "styled-components";

const RoundBG = styled.div<{
	$x: number;
	$y: number;
	$diameter: number;
	$timer: number;
}>`
	top: ${({ $y }) => $y + "px"};
	left: ${({ $x }) => $x + "px"};
	width: ${({ $diameter }) => $diameter + "px"};
	height: ${({ $diameter }) => $diameter + "px"};
	background-color: rgba(54, 180, 255, 0.5);
	border-radius: 50%;
	backdrop-filter: blur(500px);
	filter: blur(250px);
	position: absolute;
	transition: all 5s;
`;

const initPosition = [
	{ id: "1", x: -119, y: -2, diameter: 650, timer: 2 },
	{ id: "2", x: 1378, y: -259, diameter: 541, timer: 2 },
	{ id: "3", x: 1377, y: 641, diameter: 602, timer: 3 },
];

export const BGRounds = () => {
	const [posArr, setPosArray] = useState(initPosition);
	const [count, setCount] = useState(0);

	let timerId: number | null | undefined = null;
	useEffect(() => {
		const timerFunc = () => {
			setPosArray((state) => {
				return Math.round(Math.random() * 5) > 7
					? initPosition
					: state.map((item) => ({
							...item,
							x: Math.round(
								Math.random() * (Math.random() * 10 > 5 ? 2100 : -400)
							),
							y: Math.round(
								Math.random() * (Math.random() * 10 > 5 ? 1200 : -400)
							),
							timer: Math.round(Math.random() * 5),
					  }));
			});
			timerId = setTimeout(timerFunc, 10 * 1000);
		};
		timerId = setTimeout(timerFunc, 10 * 1000);
		return () => {
			!!timerId && clearTimeout(timerId);
		};
	}, []);

	return (
		<>
			{posArr.map((item) => (
				<RoundBG
					key={item.id}
					$x={item.x}
					$y={item.y}
					$diameter={item.diameter}
					$timer={item.timer}
				/>
			))}
		</>
	);
};
