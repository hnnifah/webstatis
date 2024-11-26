let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active');
	cartItem.classList.remove('active');
}



window.onscroll = () =>{
	navbar.classList.remove('active');
	cartItem.classList.remove('active');
}


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
	product.onclick = () =>{
		preveiwContainer.style.display = 'flex';
		let name = product.getAttribute('data-name');
		previewBox.forEach(preview =>{
			let target = preview.getAttribute('data-target');
			if(name == target){
				preview.classList.add('active');
			}
		});
	};
});


previewBox.forEach(close =>{
	close.querySelector('.fa-times').onclick = () =>{
		close.classList.remove('active');
		preveiwContainer.style.display = 'none';
	};
});


previewBox.forEach(close =>{
	close.querySelector('.buy').onclick = () =>{
		close.classList.remove('active');
		preveiwContainer.style.display = 'none';
	};
});


function updateClock() {

	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

}

	// Update the clock immediately and then every second
	updateClock();
	setInterval(updateClock, 1000);



