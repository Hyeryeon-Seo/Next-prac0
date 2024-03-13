"use client";
// 여기도 꼭 use client 써줘야함!! (react query 사용위한 provider import와 감싸주는 컴포넌트 - 클라이언트 컴포넌트)

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProvider = ({ children }: React.PropsWithChildren) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default QueryProvider;
