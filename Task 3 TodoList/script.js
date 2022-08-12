window.addEventListener("load", () => {

    const Form = document.querySelector('#new-task-form');
    const input=document.querySelector('#new-task-input');
    const list_el=document.querySelector('#tasks');

    Form.addEventListener('submit',(event)=>
    {
        event.preventDefault();
        const task=input.value;
        const task_el=document.createElement('div');
        task_el.classList.add('Task');

        const task_content=document.createElement('div');
        task_content.classList.add('Content');

        task_el.appendChild(task_content);

        const task_input_el=document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");
        task_content.appendChild(task_input_el);

        const task_actions_el=document.createElement('div')
        task_actions_el.classList.add('form-task-buttons');

        const task_edit_el=document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML="EDIT";

        const task_delete_el=document.createElement('div');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML="DELETE";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);
        input.value='';
task_edit_el.addEventListener('click',()=>{
    if(task_edit_el.innerText.toLowerCase()==="edit")
    {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText="save";
    }
    else
    {
        task_input_el.setAttribute("readonly","readonly");
        task_edit_el.innerText="EDIT";
    }
});
task_delete_el.addEventListener("click",()=>{

    list_el.removeChild(task_el);
});
    });
});