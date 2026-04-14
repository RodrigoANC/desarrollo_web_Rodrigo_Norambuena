const miembros = [
{
    nombre: "Juan Pérez",
    telefono: "+56950601211",
    correo: "juan@mail.com",
    actividad: "Fútbol",
    descripcion: "Juego tenis de mesa dos veces a la semana."
},
{
    nombre: "Ana López",
    telefono: "+56958888752",
    correo: "ana@mail.com",
    actividad: "Social",
    descripcion: "Asiste a un club de lectura social una veces a la semana."
}
];

function abrirventana(miembro){
    document.getElementById("ventana").style.display = "block";
    document.getElementById("VNombre").textContent = miembro.nombre;
    document.getElementById("VInfo").textContent =
        "Actividad: " + miembro.actividad + " | " + miembro.descripcion;
}

function cerrarventana(){
    document.getElementById("ventana").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.getElementById("tablaMiembros");

    miembros.forEach((m, index) => {
        const filatabla = document.createElement("tr");

        filatabla.innerHTML = `
            <td>${m.nombre}</td>
            <td>${m.telefono}</td>
            <td>${m.correo}</td>
        `;

        filatabla.addEventListener("click", () => abrirventana(m));

        tabla.appendChild(filatabla);
    });

    document.getElementById("cerrar").onclick = cerrarventana;
});
