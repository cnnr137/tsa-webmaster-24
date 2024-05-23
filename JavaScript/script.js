document.addEventListener("DOMContentLoaded", function () {
	const navbar = document.querySelector(".top-navbar")
	const title = document.querySelector("#title")
	window.addEventListener("scroll", function () {
		if (this.window.scrollY > this.window.innerHeight) {
			navbar.classList.add("scrolled")
			navbar.classList.remove("unscrolled")
			title.classList.remove("green-text")
			title.classList.add("sc-title")
		} else {
			navbar.classList.remove("scrolled")
			navbar.classList.add("unscrolled")
			title.classList.remove("sc-title")
			title.classList.add("green-text")
		}
	})
})
