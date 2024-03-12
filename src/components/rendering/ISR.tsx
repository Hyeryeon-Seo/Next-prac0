import Image from "next/image";
import React from "react";

import type { RandomUser } from "@/types";

// ISR TEST : revalidate 의 시간(초단위)에 따라 데이터 갱신
// revalidate 옵션 주는 방법 (1) fetch옵션으로 (2) 레이아웃/페이지단위에서 따로 export const.. 써주기
const ISR = async () => {
	const response = await fetch(
		`https://randomuser.me/api`
		/* {next: {
			revalidate: 5, // 5초로 지정 - 5초마다 새로운 데이터가져와라.
			// (알아서 새로고침은 아니고, 유저가 새로고침 등해서 화면 리렌더링되어야 바뀜. 다만 5초단위면, 5초가 지나고 리렌더링해줘야 새 데이터)
			// 하루마다 데이터 갱신해야 한다면 3600(1시간)*24

			// 혹은 위 fetch 옵션말고, revalidate옵션을 따로 줄 수 있는데, revalidate 옵션은 페이지/레이아웃에만 적용가능 (컴포넌트레벨에서는 X)
			// ex) rendering/page.tsx에서 export const revalidate = 5; 라고 써주면, 해당 페이지의 모든데이터가 모두 5초마다 갱신됨
		}, 
	} */
	);
	const { results } = await response.json();
	const user: RandomUser = results[0];

	return (
		<div className="mt-8">
			<div className="border p-4 my-4">
				<div className="flex gap-8">
					{/* 유저 기본정보 */}
					<div>
						<Image
							src={user.picture.large}
							alt={user.name.first}
							width={200}
							height={200}
						/>
						<h2 className="text-xl font-bold">
							{user.name.title}. {user.name.first} {user.name.last}
						</h2>
						<p className="text-gray-600">{user.email}</p>

						<div className="mt-4">
							<p>
								<span className="font-bold">전화번호 : </span>
								{user.phone}
							</p>
							<p>
								<span className="font-bold">휴대전화번호 : </span>
								{user.cell}
							</p>
							<p>
								<span className="font-bold">사는 곳 : </span>
								{user.location.city}, {user.location.country}
							</p>
							<p>
								<span className="font-bold">등록일자 : </span>
								{new Date(user.registered.date).toLocaleDateString()}
							</p>

							<p>
								<span className="font-bold">생년월일 : </span>
								{new Date(user.dob.date).toLocaleDateString()}
							</p>
						</div>
					</div>

					{/* 지도영역 */}
					<iframe
						src={`https://maps.google.com/maps?q=${user.location.coordinates.longitude},${user.location.coordinates.latitude}&z=15&output=embed`}
						height="450"
						width="600"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default ISR;
