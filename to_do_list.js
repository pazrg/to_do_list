//función para insertar nuevas tareas
function addtask() {
	"use strict";
	var new_task = document.getElementById("txt").value;
    var para = document.createElement("P");

    //le doy al parrafo que creo un id, atributo onclik para el boton de done y un valor a capturar
    para.setAttribute ("id",new_task.length);
    para.setAttribute ("onclick","move_to_done(this)");
    para.setAttribute ("value", new_task);

    var t = document.createTextNode(new_task);

    para.appendChild(t);
    document.getElementById("to_be_done").appendChild(para);
    document.getElementById("txt").value = "";
}    		

//función para mover tareas desde 'tasks_to_go' a 'tasks_down'
function move_to_done(m) {
	"use strict";
	var new_task = document.getElementById(m.id).innerHTML;
    var para = document.createElement("P");

    //le doy al parrafo que creo un id, atributo onclik para el boton de done y un valor a capturar
    para.setAttribute ("id",new_task.length + 1);
    para.setAttribute ("onclick","move_to_be_done(this)");
    para.setAttribute ("value", new_task);

    var t = document.createTextNode(new_task);

    para.appendChild(t);
    document.getElementById("done").appendChild(para);
    var out=document.getElementById(m.id);
    document.getElementById("to_be_done").removeChild(out);
} 

//función para mover tareas desde 'tasks_down' a 'task_to_go'
function move_to_be_done(m) {
	"use strict";
	var new_task = document.getElementById(m.id).innerHTML;
    var para = document.createElement("P");

    para.setAttribute ("id",new_task.length +2);
    para.setAttribute ("onclick","move_to_done(this)");
    para.setAttribute ("value", new_task);   

    var t = document.createTextNode(new_task);

    para.appendChild(t);
    document.getElementById("to_be_done").appendChild(para);
    var out=document.getElementById(m.id);
    document.getElementById("done").removeChild(out);
} 

//función para eliminar el panel de 'tasks_to_go'
function clear_to_be_done(m) {
	"use strict";
    document.getElementById("to_be_done").innerHTML ='';
} 

//función para eliminar el panel de 'tasks_down'
function clear_done(m) {
	"use strict";
    document.getElementById("done").innerHTML ='';
} 

