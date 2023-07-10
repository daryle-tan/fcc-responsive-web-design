const canvas = document.querySelector(".canvas")
const NUM_PIXELS = 20
const PIXEL_WIDTH = 20
canvas.style.width = `${PIXEL_WIDTH * NUM_PIXELS}px`
let down = false

for (let i = 1; i <= NUM_PIXELS ** 2; i++) {
  const pixel = document.createElement("button")
  pixel.className = " pixel"
  pixel.style.width = `${PIXEL_WIDTH}px`
  pixel.style.height = `${PIXEL_WIDTH}px`

  pixel.addEventListener("mousedown", () => {
    down = true
    pixel.style.background = color
  })
  pixel.addEventListener("mouseenter", () => {
    if (down === true) pixel.style.background = color
  })
  pixel.addEventListener("mouseup", () => {
    down = false
  })
  canvas.append(pixel)
}

let colorArr = [
  "red",
  "blue",
  "yellow",
  "green",
  "purple",
  "black",
  "brown",
  "orange",
  "buttonFace",
]
let color
const indicator = document.createElement("button")
indicator.id = "indicator"
canvas.append(indicator)

for (let i = 0; i < colorArr.length; i++) {
  const colorPicker = document.createElement("button")
  colorPicker.className = "colorPicker"
  colorPicker.id = colorArr[i]
  colorPicker.style.width = `${PIXEL_WIDTH}px`
  colorPicker.style.height = `${PIXEL_WIDTH}px`
  colorPicker.style.background = colorArr[i]
  colorPicker.addEventListener("click", () => {
    color = colorPicker.id
    indicator.style.background = color
  })
  canvas.append(colorPicker)
}

const input = document.createElement("input")
input.className = "spectrum"
input.setAttribute("type", "color")
input.addEventListener("change", (e) => {
  color = e.target.value
  indicator.style.background = color
})

canvas.append(input)
