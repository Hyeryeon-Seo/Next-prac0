// 함수 만들어서 내보내는 로직 작성
export async function GET(request: Request) {
	const response = await fetch(`http://localhost:4000/todos`);
	const todos = await response.json();

	if (!todos) {
		return new Response("todos cannot be found", { status: 404 }); // 메세지와 함께 에러 객체 전달
	}
	return Response.json({ todos });
}

export async function POST(request: Request) {
	// 요청 시 title, contents 필요
	// body에서 값을 뽑아오기 const body = await request.json(); 이 안에 title, contents 키가 있으니까 구분할
	// 데이터 추가시 필요한건 title, contents만
	const { title, contents } = await request.json();

	const response = await fetch(`http://localhost:4000/todos`, {
		// * 사용자 요청에 대한 데이터베이스 처리
		// json-server에 데이터 넣기 (갱신)
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ title, contents, isDone: false }), // id는 자동생성이라 따로 넣지않음
	});

	// * 사용자 요청에 대한 응답 처리
	const todo = await response.json(); // 데이터를 넣고 응답 - json 화해서 todo(id까지 입력된)로 받기

	return Response.json({ todo });
}
