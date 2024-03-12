"use client";
// CSR 구현을 위해서는, "use client" 명령어가 필요 (=> React문법, useEffect 등 쓰던 거 그대로 사용 가능)
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const TestLayout = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter(); // react - useNavigate와 동일

	useEffect(() => {
		console.log("최초 렌더링 한 번만 호출합니다!");
	}, []);

	//  layout.tsx : 페이지 경로 내부링크로 하나씩 이동하더라도- TestLayout이 렌더링되지 않음
	// template.tsx : But, 파일명을 layout.tsx => template.tsx로 변경하면 페이지링크이동 시 계속 렌더링됨
	return (
		<div>
			<div className="m-8 p-8 bg-pink-300">
				<h1 className="pb-4">테스트 페이지</h1>
				<p>테스트 경로 하위에서의 이동을 확인해보자구우</p>
				<p>useRouter를 쓸 수도, Link태그를 써서 이동할 수도 있어!</p>
				<nav className="m-4 border-solid border-2 border-purple-400">
					<ul>
						<li
							onClick={() => {
								router.push("/");
							}}
						>
							{/* <Link href="/test">테스트 페이지</Link> */}
							테스트 페이지 (Router)
						</li>
						<li>
							<Link href="/test/1">테스트 페이지 1 (Link)</Link>
						</li>
						<li>
							<Link href="/test/2">테스트 페이지 2 (Link)</Link>
						</li>
					</ul>
				</nav>
			</div>

			{children}
		</div>
	);
};

export default TestLayout;
