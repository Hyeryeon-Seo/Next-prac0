import CSR from "@/components/rendering/CSR";
import ISR from "@/components/rendering/ISR";
import SSG from "@/components/rendering/SSG";
import SSR from "@/components/rendering/SSR";
import React from "react";

export const revalidate = 5; // ISR 방식에서 따로 페이지(OR레이아웃)에 revalidate 옵션 주는 법

const RenderingTestPage = () => {
	return (
		<div>
			<h1>4가지 렌더링 방식을 테스트해보자-!</h1>
			<ISR />
			{/* SSG(static), ISR(일정주기마다 갱신), SSR(Server Side.요청마다 실시간 갱신),    CSR(Client Side.기존react방식.요청마다실시간갱신.빌드타임에초기생성X) */}
		</div>
	);
};

export default RenderingTestPage;
