import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	// RootLayout에 metadata 를 작성해 모든 페이지에 적용되도록 함
	title: "Sparta Next App", // 탭 제목
	description: "This is awesome Website",
};

export default function RootLayout({
	// 최상단 root 컴포넌트. 전체 제어
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="m-5 flex gap-10">
					{/*RootLayout에 있는 nav는 모든 페이지에 적용돼*/}
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/blog">Blog</Link>
					<Link href="/test">Test</Link>
					<Link href="/rendering">Rendering_test</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
