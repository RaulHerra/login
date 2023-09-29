function cambiarTema(){
    let link = document.getElementById("tema");
    if(link.getAttribute("href")=="./css/oscuro.css"){
        link.setAttribute("href","./css/claro.css");
    }else{
        link.setAttribute("href","./css/oscuro.css");
    } 
}

function cambiarTemaHijo(){
    let link = document.getElementById("tema");
    if(link.getAttribute("href")=="../css/oscuro.css"){
        link.setAttribute("href","../css/claro.css");
    }else{
        link.setAttribute("href","../css/oscuro.css");
    }  
}