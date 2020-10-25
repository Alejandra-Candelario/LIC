//Registrar evento click al presionar el botón de envío
function iniciar(){
    var btnenviar = document.getElementById("btnSubmit");
    //Al producirse un click sobre el botón de envío
    //invocar los métodos del objeto carro que mostrarán
    //los valores ingresados en el formulario
    if(btnenviar.addEventListener){
    btnenviar.addEventListener("click", function(){
    var  selvalue, nuevoregistro;
    //var radiofield = document.frmmat.elements["chkgender"];
    //for(var i=0; i<radiofield.length; i++){
    //if(radiofield[i].checked){
    //chkvalue = radiofield[i].value;
    //}
    //}
    selvalue = document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
    
    nuevoregistro = new RegistroWeb(document.frmmat.txtname.value, document.frmmat.txtlastname.value,
    
    document.frmmat.txtemail.value,document.frmmat.txtpassword.value, selvalue);
    nuevoregistro.miembro();
    nuevoregistro.registro();
    }, false);
    }
    else{
    btnenviar.attachEvent("onclik", function(){
    var  nuevoregistro;
    //var radiofield = document.frmmat.elements["chkgender"];
    //for(var i=0; i<radiofield.length; i++){
    //if(radiofield[i].checked){
    //chkvalue = radiofield[i].value;
    //}
    //}
    selvalue = document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
    
    nuevoregistro = new RegistroWeb(document.frmmat.txtname.value, document.frmmat.txtlastname.value,
    
    document.frmmat.txtage.value,document.frmmat.txtpassword.value,  selvalue);
    nuevoregistro.miembro();
    nuevoregistro.registro();
    });
    }
    }
    //Definiendo la clase alumnoUDB haciendo uso de sintaxis de función
    function RegistroWeb(nombre, apellido, email, contraseña, carrera){
    //Propiedades de la clase
    this.nombre = nombre;
    this.apellido = apellido;
    
    this.email = email;
    this.contraseña = contraseña;
    this.carrera = carrera;
    this.ID = null;
    //Métodos de la clase
    this.miembro = function(){
    var fecha = new Date();
    var year = fecha.getFullYear();
   
    var sec = fecha.getSeconds();
    this.ID =  this.apellido.substring(0,1) +this.formato(year) + sec + this.formato(Math.round(0,1));
    }
    this.registro = function(){
    document.write("<!DOCTYPE html>\n");
    document.write("<html lang=\"es\">\n");
    document.write("<head>\n\t");
    document.write("<title>Alumno matriculado</title>\n");
    document.write("<meta charset=\"utf-8\" />");
    document.write("<link rel=\"stylesheet\" href=\"css/tabla.css\"/>\n");
    document.write("</head>\n");
    document.write("<body>\n");
    document.write("<table class=\"carinfo\"><tr>\n");
    document.write("<th colspan=\"2\">Datos del alumno</th>\n");
    document.write("<tr><td>Carnet: </td>\n");
    document.write("<td>" + this.ID + "</td></tr>\n");
    document.write("<tr><td>Nombre: </td>\n");
    document.write("<td>" + this.nombre + " " + this.apellido + "</td></tr>\n");
    document.write("<tr><td>Edad: </td>\n");
    document.write("<td>" + this.email + "</td></tr>\n");
    
    document.write("<tr><td>Género: </td>\n");
    document.write("<td>" + this.contraseña + "</td></tr>\n");
    document.write("<tr><td>Carrera: </td>\n");
    document.write("<td>" + this.carrera + "</td></tr>\n");
    document.write("</tr></table>\n");
    document.write("</head>\n");
    document.write("</html>\n");
    }
    this.formato = function(valor){
    if(valor<10) valor = "0" + valor;
    return valor;
    }
    }
    //Asociando función que manejará el evento load al cargar la página
    if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
    }
    else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
    }
    