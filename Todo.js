let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

btn.addEventListener("click" , function(){
    let li = document.createElement("li");
    li.innerText = inp.value;
   

    let Del = document.createElement("Button");
    Del.innerText = "Delete" ;
    Del.classList.add("delete");

    li.appendChild(Del);
    ol.appendChild(li);  
    inp.value = "";
});

ol.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON") {            // Delete Button element ki baat ho rhi h 
        let listItem = event.target.parentElement ; // Agar direct remove lagate toh remove nhi hota isiliye pehle parent element ko access kiya 
        listItem.remove();
    }

});