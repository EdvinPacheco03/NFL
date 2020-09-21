//array con las imagenes para el carrusel
var images = [
    "img/1.jpeg",
    "img/2.jpeg",
    "img/3.jpeg",
];

//console.log(images);

var num = 0;
//Funcion para pasar a la siguiente imagen en el carrusel
function next(){
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}

setInterval(next, 3000);
//Funcion para regresrar una imagen en el carruserl
function prev(){
    var slider = document.getElementById("slider");
    num--;
    if(num < 0){
        num = images.length-1;
    }
    slider.src = images[num];
}
//setInterval(slider, 3000);



//Funcion  para Imprimir la hora en el Nav
function time(){
    var d = new Date();
    var hours = ("0" + d.getHours()).slice(-2);
    var mins = ("0" + d.getMinutes()).slice(-2);
    var secs = ("0" + d.getSeconds()).slice(-2);
    var hora = document.getElementById("date");
    hora.innerHTML ="Hora: " +hours+":"+mins+":"+secs;
    //console.log(hours+":"+mins+":"+secs);
}
 setInterval(time,1000);

 //Funcion para Cambiar el color del texto de los parrafos de la pagina
var text = document.getElementById("text");
function color(){
    var color = prompt("Ingrese el color de Fuente para el texto");
    text.style.color = color;
    
}


function reg(){
    confirm("Desea Registrarse")
}
//Funcion para Cambiar el titulo de la pagina
var title = document.getElementById("title");
function edit(){
    var edit = prompt("Ingrese el Nuevo Titulo para la pagina")

    title.innerHTML = edit;
}

//fucion para mostrar el formulario de registro
function crear(){
    document.getElementById('reg').style.display = 'block';
    document.getElementById('log').style.display = 'none';
    
}

//funcion para alertar el registro
    
function regis(){
    var name = document.getElementById('nombre').html();
    var apellido = document.getElementById('apellido');
    alert(name);
    alert("FELICIDADES " +name+" "+apellido+" YA FORMAS PARTE DE NUESTRA FAMILIA!!!! :3")

}

//funcion para dar un mensaje al abandonar el sitio
window.onunload = function(){
    alert("Graciass por visitarnos!!!! Esperamos vuelva pronto");
}

//Mostrar un numero ramdom de usuario xd
var ran = Math.round(Math.random()*100000);
var num = document.getElementById('num');
num.innerHTML = "Usted es el usuario No. "+ran+" en vistirar nuestra pagina el dia de hoy";

//Cambiar de titulo al posar el mouse por encima
function titl(obj){
    //obj.innerHTML = `A ppro trais el ocni trix`;
    obj.innerHTML = `Lo mejor de la Liga NFL`
    obj = document.getElementById('tit').style.color = 'red';
}


//Agregar nuevo comentario
function comentar(){
    var div = document.createElement("div");
    var p = document.createElement("p");
    var te = document.getElementById('newcomen').value;
    var one = document.createTextNode(te);
    //alert(one);
    var h4 = document.createElement("h4");
    var tit = document.createTextNode("Unknow");
    
    h4.appendChild(tit)
    p.appendChild(one);
    //alert(p);
    div.appendChild(p);
    div.insertBefore(h4, p);

    var cont = document.getElementById("coments");
    cont.appendChild(div);


}

 //Cambiar de color la imagen al pasar el mouse
 function imag(){
     var ima = document.getElementById('img').style.filter = 'grayscale(100%)';
 }
//Regresar la imagen a su color original
 function color(){
    var ima = document.getElementById('img').style.filter = 'grayscale(0%)';
 }


 //Hacer el titulo de las noticias parpadeante
 //var color = "red";
 //setInterval(blink, 1000);
 function blink(){
     var blinkit = document.getElementById('titles');
     color = (color == "#ffffff")? "red" : "#ffffff";
     blinkit.style.color = color;
     blinkit.style.fontSize = '40px';
     
 }


 //Funcion para mostrar el mapa
 function viewmap(){
     document.getElementById('msg').style.display = 'none';
     document.getElementById('mapa').style.display = 'block';
 }
 


