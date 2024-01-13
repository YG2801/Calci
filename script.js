const body = document.body
const inputBox = document.getElementById("input-box")
const outputBox = document.getElementById("output")
const btnEl = document.querySelectorAll(".btn")

document.getElementById("theme-icon").addEventListener("click", () => {
    body.classList.toggle("dark")
})

btnEl.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const id = e.target.id || e.target.parentElement.id
        switch (id) {
            case "plus":
                inputBox.value += "+"
                break
            case "minus":
                inputBox.value += "-"
                break
            case "multiply":
                inputBox.value += "*"
                break
            case "divide":
                inputBox.value += "/"
                break
            case "percent":
                inputBox.value += "%"
                break
            case "equal":
                try {
                    inputBox.value = eval(
                        inputBox.value.replace(/\b0+(\d+)\b/g, " $1")
                    )
                } catch (err) {
                    console.log(err)
                }
                break
            case "dot":
                inputBox.value += "."
                break
            case "clear":
                inputBox.value = ""
                outputBox.value = "0"
                break
            case "back":
                inputBox.value = inputBox.value.slice(0, -1)
                break
            default:
                inputBox.value += id
                break
        }
        try {
            outputBox.value =
                eval(inputBox.value.replace(/\b0+(\d+)\b/g, " $1")) ?? "0"
        } catch (err) {
            outputBox.value = "Error"
            console.log(err)
        }
    })
})
