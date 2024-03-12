import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<p>
				💎 page.tsx에서도 그랬듯이, layout.tsx 역시 컴포넌트명으로 어떤
				레이아웃인지 명시해주자
			</p>
			<p>** 여기는 어드민 페이지가 놓이는 곳! ** 💎</p>
			{children}
		</div>
	);
};

export default AdminLayout;
