showMenu = () => {
	const menu = document.getElementById('menuxs');
	if (menu.classList.contains('displaynone')||menu.classList.contains('noactive')){
		menu.classList.remove('noactive');
		menu.classList.remove('displaynone');
		menu.classList.add('active');
	}else {
		menu.classList.remove('active');
		menu.classList.add('noactive');
	}	
}

module.exports = {
    showMenu
}