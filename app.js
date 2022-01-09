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

    //console.log(`titulo: ${titleTarea}, descripción: ${descripcionTarea}`);
   
    event.preventDefault();//previene el comportamiento por defecto, y 
    //evita que se recargue la página
}






//console.log(document.getElementById('formTask'))







