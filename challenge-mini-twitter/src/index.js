document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();

	const post = document.querySelector("textarea").value;
	const postContainer = document.querySelector("div");

	const p = document.createElement("p");
	p.innerText = post;

	postContainer.appendChild(p);

	console.log(post);
});
