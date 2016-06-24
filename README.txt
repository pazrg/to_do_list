En el html sólo se han utilizado 3 botones: 1 para la inserción de tareas (primera función del .js: 'addtask') y 2 para el reseteo del contenido de los paneles de tareas 'por hacer' y 'hechas' (dos ultimas funciones del .js: 'clear_to_be_done' y 'clear_done').

No se han creado botones per se (¿explícitos?) para el movimiento de un panel a otro (done-undone-done); sino que el la propia creación de los elementos de una u otra lista siempre se añade el atributo 'onclik' con una función asignada (set.attribute sobre el elemento creado), de modo que basta con clikear sobre ellos en la lista y se detonan las funciones segunda y tercera del .js ('move_to_done' y 'move_to_be_done'), que en definitiva los desplaza a la lista opuesta (elimina de la actual y crea en la otra).

Se adjunta captura de pantalla de la vista previa de la aplicación así como el html, css y .js correspondiente.
