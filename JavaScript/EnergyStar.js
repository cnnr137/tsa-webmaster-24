const CARDS = 6
const MAX_VISIBILITY = 3

// Function to create a card element
function createCard(src, content, cost, credit, url) {
	const card = document.createElement("div")
	card.className = "card"
	const anchor = document.createElement("a")
	anchor.href = url
	anchor.target = "_blank"
	const cardImgContainer = document.createElement("div")
	cardImgContainer.className = "card-img-container"
	const cardImg = document.createElement("img")
	cardImg.src = src
	cardImg.className = "card-img"
	cardImg.style.width = "25rem"
	cardImgContainer.appendChild(cardImg)
	anchor.appendChild(cardImgContainer)
	card.appendChild(anchor)
	const cardContent = document.createElement("p")
	cardContent.textContent = content
	card.appendChild(cardContent)
	const cardCost = document.createElement("h2")
	cardCost.textContent = cost
	card.appendChild(cardCost)
	const cardCredit = document.createElement("h3")
	cardCredit.textContent = credit
	card.appendChild(cardCredit)
	return card
}

// Function to initialize the carousel
function initCarousel() {
	const carousel = document.querySelector(".carousel")
	const cards = [
		createCard(
			"../Images/air_source_heat_pumps.png",
			"Designed to be energy efficient with reliable heating and cooling throughout the year!",
			"Costs around $4,000 - $17,100",
			"$2,000 Maximum Credited",
			"https://www.energystar.gov/rebate-finder?scrollTo=500&sort_by=utility&sort_direction=asc&page_number=0&lastpage=0&zip_code_filter=&find_rebates=Find+Rebates&search_text=air+source+heat+pump&product_clean_isopen=0&product_types=Select+a+Product+Category",
		),
		createCard(
			"../Images/heat_pump_water_heaters.png",
			"2 - 3x more sustainable than standard electric resistance water heaters!",
			"Costs around $1,000 - $3,500",
			"$2,000 Maximum Credited",
			"https://www.energystar.gov/rebate-finder?scrollTo=300&sort_by=utility&sort_direction=asc&page_number=0&lastpage=0&zip_code_filter=&find_rebates=Find+Rebates&search_text=heat+pump+water&product_clean_isopen=0&product_types=Select+a+Product+Category",
		),
		createCard(
			"../Images/biomass_stoves_boilers.png",
			"Burns clean biomass fuel to heat homes and water!",
			"Costs around $1,500 to $6,000",
			"$2,000 Maximum Credited",
			"https://www.energystar.gov/rebate-finder?scrollTo=300&sort_by=utility&sort_direction=asc&page_number=0&lastpage=0&zip_code_filter=&find_rebates=Find+Rebates&search_text=boiler&product_clean_isopen=0&product_types=Select+a+Product+Category",
		),
		createCard(
			"../Images/smart_thermostats.png",
			"Save 10% a year on heating and cooling through schedule learning and automatic temperature adjustments!",
			"Costs around $40 - $250",
			"$200 Maximum Credited",
			"https://www.energystar.gov/rebate-finder?scrollTo=4819&sort_by=utility&sort_direction=asc&page_number=0&lastpage=2&zip_code_filter=&search_text=smart+thermostat&product_clean_isopen=0&product_types=Select+a+Product+Category",
		),
		createCard(
			"../Images/solar_water_heater.png",
			"Reduce your annual hot water expenses by 50% by heating or preheating your water with sunshine!",
			"Costs around $1,000 to $5,000",
			"$1,000 Maximum Credited",
			"https://www.energystar.gov/rebate-finder?scrollTo=600&sort_by=utility&sort_direction=asc&page_number=0&lastpage=0&zip_code_filter=&find_rebates=Find+Rebates&search_text=solar+water+heaters&product_clean_isopen=0&product_types=Select+a+Product+Category",
		),
		createCard(
			"../Images/central_air_conditioning.png",
			"Use 8% less energy than conventional models with its high seasonal energy efficiency!",
			"Costs around $3,000 - $8,200",
			"$600 Maximum Credited",
			"https://www.energystar.gov/rebate-finder?scrollTo=5251&sort_by=utility&sort_direction=asc&page_number=3&lastpage=2&zip_code_filter=&search_text=central+air+conditioning&product_clean_isopen=0&product_types=Select+a+Product+Category",
		),
	]

	cards.forEach((card, i) => {
		const cardContainer = document.createElement("div")
		cardContainer.className = "card-container"
		cardContainer.style.setProperty("--offset", i)
		cardContainer.style.setProperty("--abs-offset", Math.abs(i))
		cardContainer.appendChild(card)
		carousel.appendChild(cardContainer)
	})

	const moveCarousel = direction => {
		const cardContainers = document.querySelectorAll(".card-container")
		let active = [...cardContainers].findIndex(
			container => container.style.getPropertyValue("--offset") == 0,
		)
		active = Math.max(0, Math.min(cards.length - 1, active + direction))

		cardContainers.forEach((container, i) => {
			container.style.setProperty("--offset", active - i)
			container.style.setProperty("--abs-offset", Math.abs(active - i))
		})
	}

	document
		.querySelector(".nav.left")
		.addEventListener("click", () => moveCarousel(-1))
	document
		.querySelector(".nav.right")
		.addEventListener("click", () => moveCarousel(1))
}

function reveal_image() {
	var reveals = document.querySelectorAll(".reveal-image")
	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight
		var elementTop = reveals[i].getBoundingClientRect().top
		var elementVisible = 100
		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active")
		} else {
			reveals[i].classList.remove("active")
		}
	}
}

window.addEventListener("scroll", reveal_image)

document.addEventListener("DOMContentLoaded", initCarousel)

reveal()
