let input =document.querySelector('#inputField');
let submitButton=document.createElement('#submitButton');
let taskDiv=document.querySelector('#task')
submitButton.addEventListener("click",function(e){
  e.preventDefault()
  let text=input.value 
  let taskEle=document.createElement('p')
  taskEle.innerHTML=text;
  taskDiv.appendChild(taskEle)
})
