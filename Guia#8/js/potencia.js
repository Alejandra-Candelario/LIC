function iniciar(){
    var btncalcular = document.getElementById("calc");
    if(btncalcular.addEventListener){
        btncalcular.addEventListener("click", calcularpotencia, false);
    }
    else{
        btncalcular.attachEvent("onclick", calcularpotencia);
    }
}

function calcularpotencia(){
    var ejr = new elevar(document.frmelevp.txtbase.value, document.frmelevp.txtpotencia.value);
    ejr.mostrar(ejr.celev(), "calculo");
    return false;
}

function elevar(base, potencia){
    this.base = parseInt(base);
    this.potencia = parseInt(potencia);
    
    this.celev = new Function("return this.base ** this.potencia");
    this.mostrar = new Function("valor","alert('El calculo es: ' + valor)");
}

if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else(window.attachEvent);{
    window.attachEvent("onload", iniciar);
}

