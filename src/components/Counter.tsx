"use client";

import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<>
			<div className="text-xl font-bold border-2 border-b-slate-200 rounded-xl w-8 h-9 text-center text-lime-200">
				{count}
			</div>
			<button
				onClick={handleClick}
				className="p-2 bg-pink-300  border-solid rounded-lg border-2 border-pink-300"
			>
				CLICK! to increase counter num 🔮 (client component)
			</button>
		</>
	);
};

export default Counter;
