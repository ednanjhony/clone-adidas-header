const addDropList = {
	open() {
		document
			.querySelector('.content-list')
			.classList
			.add('active')
	},
	close() {
		document
			.querySelector('.content-list')
			.classList
			.remove('active')
	}
}