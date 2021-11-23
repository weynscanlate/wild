const getGoods = () => {
	const links = document.querySelectorAll('.navigation-link')

	const renderGoods = (goods) => {
		const goodsContainer = document.querySelector('.long-goods-list')

		goodsContainer.innerHTML

		goods.forEach(good => {
			const goodBlock = document.createElement('div')

			goodBlock.classList.add('col-lg-3')
			goodBlock.classList.add('col-sm-6')

			goodBlock.innerHTML = `
				<div class="goods-card">
						<span class="label">New</span>
						<img src="img/image-120.jpg" alt="image: Faded Beach Trousers"
							class="goods-image">
						<h3 class="goods-title">Faded Beach Trousers</h3>
						<p class="goods-description">Navy/Ochre/Black/Khaki</p>
						<button class="button goods-card-btn add-to-cart" data-id="007">
							<span class="button-price">$139</span>
						</button>
					</div>
			`

			goodsContainer.append(goodBlock)
		})
	}


	const getData = (value, category) => {
		fetch('/db/db.json')
		.then((res) => res.json())
		.then((data) => {
			const array = category ? data.filter((item) => item[category] === value) : data 

			
			localStorage.setItem('goods', JSON.stringify(array))

			if(window.location.pathname !== "/goods.html"){
				window.location.href = "/goods.html"
			}else{
				renderGoods(array)
			}

			window.location.href = '/goods.html'
		})
	}

	links.forEach((link) =>{
		link.addEventListener('click', (event) => {
			event.preventDefault();
			const linkValue = link.textContent
			link category = link.dataset.field
			getData();
		})
	})

	if(localStorage.getItem('goods') && window.location.pathname === "/goods.html"){
		renderGoods(JSON.parse(localStorage.getItem('goods')))
	}

}

getGoods()