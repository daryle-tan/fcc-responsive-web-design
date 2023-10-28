const content = document.querySelector(".projects-grid")
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const items = document.querySelectorAll(".project-tile")
const itemsPerPage = 6 // Set the number of items to display per page
let currentPage = 0
var copy = document.querySelector(".slider-track").cloneNode(true)
document.querySelector(".technologyContainer").appendChild(copy)

function showPage(page) {
  const startIndex = page * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  items.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = "list-item"
    } else {
      item.style.display = "none"
    }
  })
}

showPage(currentPage)

prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--
    showPage(currentPage)
  }
  console.log("prev")
})

nextButton.addEventListener("click", () => {
  if (currentPage < Math.ceil(items.length / itemsPerPage) - 1) {
    currentPage++
    showPage(currentPage)
  }
  console.log("next")
})
