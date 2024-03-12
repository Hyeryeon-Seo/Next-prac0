import React from "react";

const TestDetailPage = ({
	params, //
}: {
	params: {
		id: string; // 폴더 [id]를 통해 동적 라우팅
	};
}) => {
	return <div>TestDetailPage - Detail 페이지 : {params.id} </div>;
};

export default TestDetailPage;
