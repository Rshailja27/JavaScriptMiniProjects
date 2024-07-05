
let body = document.querySelector('body');
let input = document.querySelector("input");
let ul = document.querySelector("ul");

function taskAdded(input) {
let inputItem = input.value;
let list =  document.createElement("li");
list.innerText = inputItem;
let delButton =  document.createElement("button");
delButton.innerText = "Delete";
delButton.classList.add("delete") ;
ul.appendChild(list);
list.appendChild(delButton);
//console.log(list);
input.value = "";
}
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    taskAdded(input);

});

    ul.addEventListener("click", function (event) {
        event.target;
        console.log(event.target.nodeName);
        if( event.target.nodeName == "BUTTON"){
            let item = event.target.parentElement;
                item.remove();
                console.log(`deleted item ${event.target.nodeName}`);
        }
    });
