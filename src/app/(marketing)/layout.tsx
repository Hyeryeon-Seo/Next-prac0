import React from "react";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
	// react page component가 children으로 들어와. 그 타입은 React.ReactNode!
	return (
		<div>
			<p>
				💎 MarketingLayout - 이건 (marketing) 폴더에 생성된 레이아웃이야.
				그래서, (marketing) - business폴더 또한 이 layout의 영향을 받지 그리고
				얘가 children을 props로 받아서 뿌려줘야 하위컴포넌트에 영향을 줄 수
				있겠지? ** 여긴 마케팅과 관련된 페이지가 놓이는 곳! - 이건
				마케팅페이지들에 공통 레이아웃으로 적용돼** 💎
			</p>
			{children}
		</div>
	);
};

export default MarketingLayout;
