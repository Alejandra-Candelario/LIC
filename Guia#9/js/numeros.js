function capturar(){
  //  console.log("capturado"); captuta el numero ingresado
 function Datos (numeros){
     this.numeros=numeros;
 }
var numeroCapturar = document.getElementById("numero").value;
 //console.log(numeroCapturar);//lee los numeros 

 nuevoSujeto =new Datos(numeroCapturar);
 console.log(nuevoSujeto);  //lee "numeros:"
  agregar();
}
   var Arreglo =[];
   function agregar(){
   Arreglo.push(nuevoSujeto);
    console.log(Arreglo);  //recorre el arreglo "[datos]"
    document.getElementById("tabla").innerHTML +='<tbody><td>'+nuevoSujeto.numeros+'</td></tbody>';

};

//grafico de barras

function grafica(agregar){   
            
   
var miGrafica =document.getElementById("myChart");
var myChart = new Chart(miGrafica,{

    type:'bar',
    data:{
        labels:["num1","num2","num3","num4"],
        datasets:[
            {

            label:"Grafico de Numeros",
            backgroundColor:" violet",  //color barras
            borderColor: "purple",
            data: [nuevoSujeto.numeros],
            borderWidth: "2",
            }
            
        ]

    }, 
    options: { 
     legend:{ 
      responsive: true, 
      maintainAspectRatio: false,
     }, 
     scales: { 
     xAxes: [{ 
      gridLines: { 
       show: true, 
       color: "F3F3F3", 
      } 
     }], 
     yAxes: [{ 
      ticks: { 
      beginAtZero: true 
      } 
     }] 
     }, 
    
    } 
     }); 
    
    }
