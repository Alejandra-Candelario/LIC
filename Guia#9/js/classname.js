function init(){
    var btnaplicar = document.getElementById("add");
    var btnquitar = document.getElementById("remove");
    var hElement = document.getElementById("text");
    var clsName;

    if(btnaplicar.addEventListener){
    btnaplicar.addEventListener("click", function(){
   clsName = document.frmest.estilos.options[document.frmest.estilos.selectedIndex].value;
   CSSClass.add(hElement,clsName);
    }, false);
    }
    else if(btnaplicar.attachEvent){
    btnaplicar.attachEvent("onclick", function(){
   clsName = document.frmest.estilos.options[document.frmest.estilos.selectedIndex].value;
    CSSClass.add(hElement,clsName);
    });
    }
    //Controlar evento click sobre botón Eliminar
    if(btnquitar.addEventListener){
    btnquitar.addEventListener("click", function(){
   clsName = document.frmest.estilos.options[document.frmest.estilos.selectedIndex].value;
    CSSClass.remove(hElement,clsName);
    }, false);
    }
    else if(btnquitar.attachEvent){
    btnquitar.attachEvent("onclick", function(){
   clsName = document.frmest.estilos.options[document.frmest.estilos.selectedIndex].value;
    CSSClass.remove(hElement,clsName);
    });
    }
   }
   if(window.addEventListener){
    window.addEventListener("load", init, false);
   }
   else if(window.attachEvent){
    window.attachEvent("onload", init);
   }
