const input = document.getElementById("itensAdicionar");
const button = document.getElementById("btn");
const form = document.querySelector("form");


button.addEventListener("click", function(event) {
    event.preventDefault();
    const valueInput = input.value;
    let regex = /\d+/g;
    if(regex.test(valueInput) || valueInput == null || valueInput == "") {
        valueInput.replace(regex, "");
        alert("O item esta digita errado")
    } else {
        alert("esta enviado")
        criandoElementos(valueInput);
    }
})


function criandoElementos(value) {
    const main = document.querySelector("main");
    let ul = document.createElement("ul");
    ul.classList.add("list");
    let li = document.createElement("li");
    li.classList.add("list-item");
    let span = document.createElement("span");
    span.textContent = value;
    let checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
            span.style.textDecorationColor = 'red';
        } else {
            span.style.textDecoration = "none";
            span.style.textDecorationColor = "none";  
        }
    })
    let img = document.createElement("img");
    img.classList.add("delete");
    img.src = "./assets/delete.svg";
    img.addEventListener("click", function() {
        ul.remove();
        alertaDeRemovido();
    })
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(img);
    ul.appendChild(li);

    main.appendChild(ul);
}

function alertaDeRemovido() {
    const section = document.querySelector(".remocao");
    section.classList.add("remocao");
    const div = document.createElement("div");
    div.classList.add("remocao-item")
    let img1 = document.createElement("img");
    img1.classList.add("icon")
    img1.src = "./assets/Icon.svg";
    let p = document.createElement("p");
    p.classList.add("p")
    p.textContent = "O item foi removido da lista";
    let img2 = document.createElement("img");
    img2.classList.add("icon-apagar");
    img2.src = "./assets/delete-small.svg";
    img2.addEventListener("click", function() {
        div.remove();
    })
    div.appendChild(img1)
    div.appendChild(p)
    div.appendChild(img2)
    section.appendChild(div)
}