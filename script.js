const input = document.getElementById("input");
const addButton = document.getElementById("btnAdd");
const list = document.getElementById("list");
const tooltip = document.getElementById("tooltip") 


addButton.addEventListener("click", ()=>  {

    // check if input field empty 
    if(input.value === "") {
        tooltip.innerHTML="You have to write a task first"; 

        setTimeout(() => tooltip.innerHTML = "", 2000); 
        
        return; 
    }

    else {
    //create a li element
    const task = document.createElement("li");

    //create a input element 
    const checkbox = document.createElement("input");

    //change input type to "checkbox"
    checkbox.type = "checkbox"; 

    const deleteButton = document.createElement("button"); 
    deleteButton.innerHTML = '<i class="fas fa-times"></i>'; // einfacher & zuverlässig
    
    task.append(checkbox, document.createTextNode(input.value), deleteButton)

     //add li to task list 
    list.appendChild(task);
    

    checkbox.addEventListener("change", () =>{
    if(checkbox.checked){
        task.style.textDecoration ="line-through"; 
    }
    else{
        task.style.textDecoration ="none"; 
    }
});

    deleteButton.addEventListener("click", () =>{
        task.remove();  
    }); 

    //clear input-feld
    input.value = ""; 
    }


});


