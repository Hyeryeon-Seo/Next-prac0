"use client"; // 여기서는 react query 등 사용위해 "use client" - client component로! CSR

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import NotFoundPage from "../not-found";
import type { NewTodo, Todo } from "@/types"; // interface 혹은 type . 굳이 type이라고 기재하기않아도 import되지만 명시적으로 써주는게 좋다

// 이 페이지에서는, React Query를 사용해 값을 가져올 것
// 물론 이전처럼 바로 json-server와 통신할 수 있지만, 이번에는 json-server를 BasS가 아닌 DB로 보기로 했으니
// 여기서는 (우리가직접만든) 백엔드와 통신할 것 (=> 그럼 그 백엔드가 json-server DB와 통신)
const TodosPage = () => {
	const queryClient = useQueryClient();

	const [title, setTitle] = useState("");
	const [contents, setContents] = useState("");

	const {
		data: todos,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["todos"],
		queryFn: async () => {
			// 이전react에서 했듯이 - :4000/todos 이렇게 json-server로 요청 바로 보내지말고, (BaaS로 쓰지말고 DB로 쓰기)
			// 내부서버로 만들어둔 백엔드로 요청보내기
			const response = await fetch(`http://localhost:3000/api/practice`);
			const { todos } = await response.json(); // 원하는 todos 배열 직접 받으려면 todos key로 (구조분해할당)
			return todos;
		},
	});

	// useMutation
	const newTodoMutation = useMutation({
		mutationFn: async (newTodo: NewTodo) => {
			const response = await fetch(`http://localhost:3000/api/practice`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newTodo),
			});
			const todo = await response.json();
			return todo;
		},
	});

	if (isLoading) {
		return <div>로딩 중입니다 .. !</div>;
	}

	if (isError) {
		return <NotFoundPage />;
	}

	return (
		<div className="flex flex-col items-center m-20">
			<h1 className="font-bold text-3xl mb-3">My To-Do List</h1>
			<p>See all your Todos and Make them all Done!</p>

			<section className="mt-10 mb-20 flex flex-col gap-5">
				<h2>새로운 To Do 추가하기</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						newTodoMutation.mutate(
							{ title, contents },
							{
								onSuccess: () => {
									setTitle("");
									setContents("");
									queryClient.invalidateQueries({
										// useMutation 활용
										queryKey: ["todos"],
									});
								},
							}
						);
					}}
				>
					<div className="flex gap-20">
						<div className="flex items-center gap-5">
							<label htmlFor="title">Title</label>
							<input
								id="title"
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className="text-pink-600 h-10"
							/>
						</div>
						<div className={`flex items-center gap-5`}>
							<label htmlFor="contents">Contents</label>
							<input
								id="contents"
								type="text"
								value={contents}
								onChange={(e) => setContents(e.target.value)}
								className="text-purple-700/70 w-80 h-10"
							/>
						</div>
						<button
							type="submit"
							className="border-2 border-purple-400/30 bg-purple-400/30 p-2 rounded-lg w-40 hover:bg-pink-300/70"
						>
							Add Todo
						</button>
					</div>
				</form>
			</section>

			{todos.map((todo: Todo) => {
				return (
					<div
						key={todo.id}
						className="bg-pink-100 border border-pink-200 text-pink-500 p-8 mb-5 rounded hover:scale-105 w-10/12 transform delay-100"
					>
						<h2 className="text-lg font-bold">{todo.title}</h2>
						<p>{todo.contents}</p>
						{todo.isDone ? <p>🥰 Done</p> : <p>🤔 Not Done Yet</p>}
					</div>
				);
			})}
		</div>
	);
};

export default TodosPage;
