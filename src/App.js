import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import HorizontalScroll from "react-scroll-horizontal";
import arrowIcon from "../src/assets/icons/arrow.png";
import Kiri from "./assets/images/kiritage.png";
import ScMate from "./assets/images/schoolmate.png";
import EmHome from "./assets/images/emotional home.png";
import Hanoi from "./assets/images/hanoi.png";
import EyeWant from "./assets/images/eyewant.png";
import BrBr from "./assets/images/brbr.png";
import Caroro from "./assets/images/caroro.png";
import OtoOwaiting from "./assets/images/o2owaiting.png";
import Cursor from "./Cursor";

const projects = [
	{
		src: Kiri,
		title: "KIRITAGE",
		detail: "어린이를 위한 인공지능 문화재 해설 서비스 KIRITAGE",
		maker: ["김민성  FE / 기획 / 디자인", <br />, "오민용 FE / 기획 / ML"],
		type: "rowSquare",
		link: "https://github.com/minsung521/kiritage",
	},
	{
		src: ScMate,
		title: "SCHOOL MATE",
		detail: "효과적인 교육을 누구나 모두에게, 스쿨메이트",
		maker: ["주자훈 기획 / 디자인"],
		type: "rowSquare",
		link: "https://github.com/JAHOON-JOO/schoolmate",
	},
	{
		src: EmHome,
		title: "EMOTIONAL HOME",
		detail: "사용자 심리/스트레스 기반 IOT서비스",
		maker: ["김민성 기획 / 디자인"],
		type: "column",
		link: "https://github.com/minsung521",
	},
	{
		src: Hanoi,
		title: "HANOI TOWER",
		detail: "퍼즐의 일종인 하노이 타워를 즐길 수 있는 어플리케이션",
		maker: ["오민용 개발"],
		type: "rowCircle",
		link: "https://play.google.com/store/apps/details?id=com.develop.hanoi",
	},
	{
		src: EyeWant,
		title: "EYE WANT",
		detail: "내 눈이 원하는 렌즈, 렌즈 추천 및 구매 서비스 EYE WANT",
		maker: ["권은채 기획 / 디자인"],
		type: "rowSquare",
		link: "https://www.instagram.com/_01527/",
	},
	{
		src: BrBr,
		title: "버려 버려",
		detail:
			"무단 투기를 방지하고 효과적인 분리배출을 유도하는 스마트 분리수거 플랫폼",
		maker: ["장인화 개발"],
		type: "column",
		link: "https://github.com/JangInHwa",
	},
	{
		src: Caroro,
		title: "카로로",
		detail: "플라스틱 용기 착색 해결 티슈 제품 및 어플리케이션",
		maker: [
			"권은채 기획 / 디자인",
			<br />,
			"김민성 개발",
			<br />,
			"장인화 개발",
		],
		type: "rowSquare",
		link: "https://www.youtube.com/watch?v=3foKcIzIRbo&t=30s&ab_channel=%EB%B0%B1%EC%97%85BACKUP",
	},
	{
		src: OtoOwaiting,
		title: "O2O 식당 웨이팅 서비스",
		detail: "모션인식 기술을 통해 식사 웨이팅 문제 솔루션 및 사업계획",
		maker: [
			"윤희원 기획 / 개발",
			<br />,
			"주자훈 기획 / 디자인",
			<br />,
			"오민용 기획 / 개발",
		],
		type: "rowSquare",
		link: "https://github.com/dhalsdyd",
	},
];

const App = () => {
	const initialRef = useRef();
	const mainRef = useRef();
	const textRef = useRef();
	const [locationX, setLocationX] = useState(0);
	const [isTouchDevice, setIsTouchDevice] = useState(0);

	useEffect(() => {
		setLocationX(window.pageXOffset);
		setIsTouchDevice(
			navigator.maxTouchPoints || "ontouchstart" in document.documentElement
		);
	});

	const initialClickController = () => {
		initialRef.current.style.transform = "translateX(-100vw)";
		mainRef.current.style.transform = "translateX(-100vw)";
		textRef.current.style.transform = "translateX(-100vw)";
	};

	return (
		<>
			{!isTouchDevice && (
				<div className="App">
					<Cursor />

					<HorizontalScroll
						reverseScroll={true}
						pageLock={true}
						config={{ stiffness: 100, damping: 16 }}
					>
						<div className="initialPage" ref={initialRef}>
							<div className="titleContainer">
								<div className="initialTitle">PROJECTS</div>
								<div className="initialDiscription">
									JUST 멤버들이 진행한 프로젝트를 확인하세요.
								</div>
							</div>
							<div className="btnContainer" onClick={initialClickController}>
								<img className="circularBtnIcon" src={arrowIcon}></img>
							</div>
						</div>
						<div className="mainPage" ref={mainRef}>
							{projects.map((project, index) => {
								// console.log(project.type);
								return (
									<div id={project.type} className="project">
										<img
											className="mainImage"
											key={index}
											src={project.src}
											alt="image"
										/>
										<div className="projectContainerWrapper">
											<div className="projectTextContainer">
												<div className="projectTitle">{project.title}</div>
												<div className="projectDetail">{project.detail}</div>
												<div className="projectMaker">{project.maker}</div>
											</div>
											<div
												className="projectBtnContainer"
												onClick={() => window.open(project.link, "_blank")}
											>
												<img className="circularBtnIcon" src={arrowIcon}></img>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className="endingPage" ref={textRef}>
							<a className="homeLink" href="https://justartup.today/">
								GO BACK TO{" "}
								<strong style={{ color: "#feaa00" }}>JUST/HOME</strong>
							</a>
						</div>
					</HorizontalScroll>
				</div>
			)}
			{isTouchDevice && (
				<div className="MobileApp">
					{/* <Cursor /> */}
					<div className="mobileInitialPage" ref={initialRef}>
						<div className="titleContainer">
							<div className="initialTitle">PROJECTS</div>
							<div className="initialDiscription">
								JUST 멤버들이 진행한 프로젝트를 확인하세요.
							</div>
						</div>
						<div className="btnContainer" onClick={initialClickController}>
							<img className="circularBtnIcon" src={arrowIcon}></img>
						</div>
					</div>
					<div className="mobileMainPage" ref={mainRef}>
						{projects.map((project, index) => {
							// console.log(project.type);
							return (
								<div id={"mobile" + project.type} className="mobileProject">
									<img
										className="mobilemainImage"
										key={index}
										src={project.src}
										alt="image"
									/>
									<div className="mobileprojectContainerWrapper">
										<div className="projectTextContainer">
											<div className="mobileprojectTitle">{project.title}</div>
											<div className="mobileprojectDetail">
												{project.detail}
											</div>
											<div className="mobileprojectMaker">{project.maker}</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="endingPage" ref={textRef}>
						<a className="mobileHomeLink" href="https://justartup.today/">
							GO BACK TO <strong style={{ color: "#feaa00" }}>JUST/HOME</strong>
						</a>
					</div>
				</div>
			)}
		</>
	);
};

export default App;
