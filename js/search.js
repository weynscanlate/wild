const search = function(){
	const searchBtn = document.querySelector('.search-block > button');
	const input = document.querySelector('.search-block > input');

	try{

		input.addEventListener('click', () => {
			console.log(input.value);
		})

	}catch(e){
		console.error(e)
	}
}

search();