import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

let index = 0;

export default function App() {
	const [movieList, setMovieList] = useState([]);
	const [userText, setUserText] = useState("");

	function updateText(e) {
		setUserText(e.target.value);
	}

	function addMovie(e) {
		e.preventDefault();
		if (userText !== "") {
			setMovieList([...movieList, { title: userText, id: index++ }]);
		}
	}

	return (
		<section className="flex flex-col items-center p-8 gap-2">
			<div className="flex flex-col items-center p-8 gap-2 select-none">
				<h1 className="font-black text-8xl">
					Re<span className=" text-red-800">Movie</span>
				</h1>
				<h6 className="text-sm font-bold">
					Remember which movies you want to watch!
				</h6>
			</div>

			<Form handleForm={addMovie} updateForm={updateText} />
			<List listName={movieList} listHandler={setMovieList} />
		</section>
	);
}
