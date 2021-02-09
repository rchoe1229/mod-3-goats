document.addEventListener("DOMContentLoaded", () => {
    getGoats()
    handleCreateGoat()
})

const getGoats = () => {
    fetch("http://localhost:3000/goats")
    .then(res => res.json())
    .then(goats => goats.forEach(renderGoat))
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
    goatAge.innerText = `Age: ${goat.age}`

    const goatColor = document.createElement("h3")
    goatColor.innerText = `Color: ${goat.color}`

    const editBtn = document.createElement("button")
    editBtn.innerText = "Edit Goat"

    goatDiv.append(goatName, goatImg, goatAge, goatColor)
    goatContainer.append(goatDiv)
}

const createGoat = () => {
    const goatForm = document.querySelector("#goat-form")

    goatForm.addEventListener("submit", (event) => {
        event.preventDefault()
        updateGoat(event)
    })

}

const handleCreateGoat = () => {
    const goatForm = document.querySelector('#goat-form')
    goatForm.addEventListener("submit", (event) => {
        event.preventDefault()
        createGoat(event)
    })
}

const createGoat = (event) => {
    console.log(event.target.name.value)
    newGoatData = {
        name: event.target.name.value,
        image: event.target.image.value,
        age: event.target.age.value,
        color: event.target.color.value,
    }

    reqPack = {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newGoatData)
    }
    fetch(`http://localhost:3000/goats/`, reqPack)
    .then(res => res.json())
    .then(newGoat => renderGoat(newGoat))
}