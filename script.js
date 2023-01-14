window.addEventListener('load', ()=>{
    const form= document.getElementById("new-task-form");
    const input= document.getElementById("new-task-input");
    const list_el=document.getElementById("tasks");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task=input.value;
        if(!task){
            alert("Please fill the task");
            return;
        }
        const task_el=document.createElement("div");
        task_el.classList.add("task");
        
        const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText=task;

        task_el.appendChild(task_content_el);

        list_el.appendChild(task_el);
        
        const task_actions_el=document.createElement("div");
        task_actions_el.classList.add("actions");
        task_el.appendChild(task_actions_el);

        const task_edit_el=document.createElement("button");
        const task_delete_el=document.createElement("button");
        task_edit_el.classList.add("edit");
        task_delete_el.classList.add("delete");
    
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_edit_el.innerHTML="Edit";
        task_delete_el.innerHTML="Delete";

        input.value='';

        task_edit_el.addEventListener('click',()=>{
        })
    })
})



const Array1=[1,2,3,4,5,6];

Array1.forEach((Array)=>{
    console.log(Array);
})

