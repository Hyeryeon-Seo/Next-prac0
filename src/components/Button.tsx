"use client"; // 클라이언트 컴포넌트  로 버튼만 따로 분리

import React from "react";

const CustomButton = () => {
	return (
		<button
			className="p-2 bg-indigo-300  border-solid rounded-lg border-2 border-indigo-300"
			onClick={() => {
				// 클라이언트컴포넌트가 아니면 onClick 속성사용시 에러 (이벤트핸들러사용)
				alert("안녕하세요!");
			}}
		>
			BUTTON 🎀 (client component)
		</button>
	);
};

export default CustomButton;
