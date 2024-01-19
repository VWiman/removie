export default function List({ listName, listHandler }) {
	return (
		<ul className="flex flex-col items-center min-w-full px-96 gap-8 p-8">
			{listName.map((movie) => (
				<li
					className="flex items-center w-full justify-between p-2 rounded-xl shadow-lg bg-white select-none"
					id={movie.id}
					key={movie.id}>
					<label htmlFor={movie.id + 10} className="text-3xl font-sans font-extrabold uppercase m-1">
						{movie.title}
					</label>
					<div className="flex items-center gap-2">
						<input
							className="w-5 h-5 appearance-none outline outline-4 outline-black rounded-lg text-xs checked:bg-lime-700 checked:outline-black checked:border-white checked:border-2 hover:outline-black hover:border-white hover:border-2 active:bg-lime-600 active:border-2 active:border-white m-1 cursor-pointer"
							type="checkbox"
							name="seen"
							id={movie.id + 10}
						/>

						<button
							className="outline outline-4 outline-red-800 rounded-lg text-xs w-5 h-5 font-black text-red-800 m-1 hover:outline-red-700 active:outline-red-600 select-none"
							onClick={() => listHandler([...listName.filter((m) => m.id !== movie.id)])}>
							X
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}
