import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import HorizontalScroll from "react-scroll-horizontal";
import arrowIcon from "../src/assets/icons/arrow.png";

const App = () => {
	return (
		<div className="App">
			<HorizontalScroll
				reverseScroll={true}
				pageLock={true}
				config={{ stiffness: 100, damping: 16 }}
			>
				<div className="initialPage">
					<div className="titleContainer">
						<div className="initialTitle">PROJECTS</div>
						<div className="initialDiscription">
							JUST 멤버들이 진행한 프로젝트를 확인하세요.
						</div>
					</div>
					<div className="btnContainer">
						<img className="circularBtnIcon" src={arrowIcon}></img>
					</div>
				</div>
			</HorizontalScroll>
		</div>
	);
};

export default App;
