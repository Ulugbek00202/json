const box = document.querySelector('.box')

async function getUsers() {
	try {
		const res = await fetch('https://fakestoreapi.com/products')
		const users = await res.json()
		users.forEach(user => {
			const card = document.createElement('div'),
				image = document.createElement('img'),
				h2 = document.createElement('h2'),
				h3 = document.createElement('h3'),
				p = document.createElement('p'),
				a = document.createElement('a')
			card.classList.add('card')
			image.innerHTML = user.image
			image.setAttribute('src', user.image)
			h2.innerHTML = `Title: ${user.title}`
			p.innerHTML = user.description
			h3.innerHTML = `Price: ${user.price} $`
			card.append(image, h2, p, h3)
			box.appendChild(card)
			console.log(card)
		})
	} catch (error) {
		console.log(error.message)
	}
}

getUsers()
