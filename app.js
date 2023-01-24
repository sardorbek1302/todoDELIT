let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-input");
let elList = document.querySelector(".list");

let arr = [];


elList.addEventListener("click",function(evt){
   if(evt.target.matches(".delete-btn"));
   const btnId = Number(evt.target.dataset.todoId);
   const resultId = arr.findIndex(item => item.id === btnId);
   console.log(resultId);
   arr.splice(resultId , 1);
   createTodo(arr,elList)
});

const createTodo = (arrey,element) =>{
    element.innerHTML = ""
    for (let item of arrey){
        let elItem = document.createElement("li");
        let elStrong  = document.createElement("strong");
        let elBtn = document.createElement("button");
        elBtn.dataset.todoId = item.id
        elBtn.setAttribute("class", "bg-red-500 rounded-[3px] delete-btn text-[12px] p-3 ml-2.5");


        elStrong.textContent = item.name;
        elBtn.textContent = "Delete";

        elItem.append(elStrong,elBtn);
        element.appendChild(elItem)
    }
}


elForm.addEventListener("submit",function (event) {
    event.preventDefault()
    newTodo = {
        id:arr[arr.length -1] ?.id + 1 || 0,
        name:elInput.value,
        isCompleted:false
    };
     arr.push(newTodo);
     elInput.value = "";
     createTodo(arr,elList);
});