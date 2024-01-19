export default function Form({ handleForm, updateForm }) {
    return(<form className="flex items-center gap-2" onSubmit={handleForm}>
						<input
							className="m-2 shadow-inner shadow-gray-300 bg-white rounded-lg p-2 font-bold text-2xl focus:outline-none text-gray-700"
							type="text"
							name="userText"
							onChange={updateForm}
							placeholder="Type title here..."
							autoComplete="off"
						/>
                    <button className="bg-lime-700 active:bg-lime-700 active:shadow-inner shadow-md text-white hover:bg-lime-600 hover:text-ellipsis rounded-lg p-2 text-2xl w-12 font-extrabold select-none">+</button>
                    
					</form>)
}