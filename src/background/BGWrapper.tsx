import React, { Children, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: black;
`;

const Content = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(22, 26, 29, 0.4);
	backdrop-filter: blur(300px);
`;

const RoundBG = styled.div<{
	$x: number;
	$y: number;
	$diameter: number;
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
`;

export const BGWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Wrapper>
			<RoundBG $x={-119} $y={-2} $diameter={650} />
			<RoundBG $x={1378} $y={-259} $diameter={541} />
			<RoundBG $x={1377} $y={641} $diameter={602} />
			<Content>{children}</Content>;
		</Wrapper>
	);
};
