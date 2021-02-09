document.addEventListener("DOMContentLoaded", () => {
  getGoats()
  addCreateListener()
})

const getGoats = () => {
  fetch(`http://localhost:3000/goats`)
    .then(resp => resp.json())
    .then(goats => goats.forEach(goat => renderGoat(goat)))
    }

const renderGoat = (goat) => {
  const goatContainer = document.querySelector(".goat-container")

  const goatDiv = document.createElement("div")
  goatDiv.className = "goat-div"

  const goatName = document.createElement("h2")
  goatName.innerText = goat.name

  const goatImg = document.createElement("img")
  goatImg.src = goat.image

  const goatAge = document.createElement("h3")
  goatAge.innerText = goat.age

  const goatColor = document.createElement("h3")
  goatColor.innerText = goat.goatColor

  goatDiv.append(goatName, goatImg, goatAge, goatColor)
  goatContainer.append(goatDiv)
}

const addCreateListener = () => {
  const goatForm = document.querySelector("goat-form")
  goatForm.addEventListener("submit", (event) => {
    event.preventDefault()
    createGoat(event)
  })
}

const createGoat = (event) => {
  // reqPack = {

  // }

  fetch(`http:localhost:3000/goats`, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify({
      name: event.target.name.value,
      image: event.target.image.value,
      age: event.target.age.value,
      color: event.target.color.value,
    })
  })
  .then(resp => resp.json())
  .then(newGoat => renderGoat(newGoat))
}