
document.addEventListener("DOMContentLoaded",()=>{
    const formR=document.getElementById("formRegistro");
    if(formR) formR.addEventListener("submit",validacion);
    const formA=document.getElementById("formActividad");
    if(formA) formA.addEventListener("submit",validaciondeactividad);
});

function validacion(e){
    e.preventDefault();
    const nombre=document.getElementById("nombre").value;

    const correo=document.getElementById("correo").value;

    const telefono=document.getElementById("telefono").value;

    const tipo=document.getElementById("tipo").value;

    const RUT=document.getElementById("RUT").value;

    if(nombre==""||correo==""||tipo==""){
        document.getElementById("error").textContent="Faltan campos por completar";
        return;
    }
    if(telefono==""){
        document.getElementById("error").textContent="Número invalido";
        return;
    }

    if(telefono.length!=12){
        document.getElementById("error").textContent="Número invalido";
        return;
    }
    if(!correo.includes("@")){
        document.getElementById("error").textContent="Correo inválido";
        return;
    }
    
    if(RUT.length!=8 && RUT.length!=9){
        document.getElementById("error").textContent="RUT inválido";
    }
    alert("Registrado");
}


function validaciondeactividad(e){
    e.preventDefault();
    const nombre=document.getElementById("nombreactividad").value;
    const tipo=document.getElementById("tipoactividad").value;
    const archivo=document.getElementById("archivo").value;
    const dias=document.querySelectorAll("input[name='dias']:checked");
    if(nombre==""||tipo==""||archivo==""||dias.length==0){
        document.getElementById("errorAct").textContent="Faltan campos por completr";
        return;
    }
    alert("Actividad registrada");
}
