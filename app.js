//capturar o seleccionar el evento que dispare este formulario
//el evento submit

//acceder a un evento de este formulario

const form=document.getElementById('formTask');
form.addEventListener('submit',saveTask);

function saveTask(event){
    //alert("Enviando formulario");
    //console.log(event);

    let titleTarea=form.elements['title'].value;
    // console.log(form.elements['title'])
    //console.log(titleTarea.value);
    let descripcionTarea=form.elements['descripcion'].value;
    
    const Tarea={
        titulo:titleTarea,
        descripcion:descripcionTarea
    }

    if(localStorage.getItem('tareas')===null){
        let tareas=[];
        tareas.push(Tarea);
        localStorage.setItem('tareas',JSON.stringify(tareas));
    }
    else{
        let tareas=JSON.parse(localStorage.getItem('tareas'));
        tareas.push(Tarea);
        localStorage.setItem('tareas',JSON.stringify(tareas));
    }

    //console.log(Tarea);
    //localStorage.setItem('tareas',JSON.stringify(Tarea));//como voy a llamar ese parametro, y el valor
    //console.log(JSON.parse(localStorage.getItem('tareas')));
    
    event.preventDefault();//previene el comportamiento por defecto, y 
    //evita que se recargue la página
}


//local storage, permite almacenar información dentro del navegador

function getTasks(){
    let tareas=JSON.parse(localStorage.getItem('tareas'));
    let tasksviews=document.getElementById('tasks');
    tasksviews.innerHTML='';//limpiamos
    for(tarea of tareas){
        tasksviews.innerHTML+=`
        <div class="card mb-4">
            <div class="card-body">
                <p>${tarea.titulo}</p>
                <p>${tarea.descripcion} </p>
                <a href="" class="btn btn-danger">Eliminar</a>
            </div>
        </div>`
    }
    
}

getTasks();



//console.log(document.getElementById('formTask'))







