document.querySelector("#add_item").addEventListener("click",function(){
    const ul = document.querySelector(".my_list");
    const li = document.createElement("li");
    const text = document.createTextNode("Item");
    li.appendChild(text);
    ul.appendChild(li);
});
