const equipos = [
    {
      imagen: "https://dummyimage.com/300x300/000/fff.png&text=Equipo+1",
      nombre: "Equipo 1",
      fundacion: 1900,
      posicion: 3
    },
    {
      imagen: "https://dummyimage.com/300x300/000/fff.png&text=Equipo+2",
      nombre: "Equipo 2",
      fundacion: 1920,
      posicion: 1
    },
    // ...
  ];
  
  const equiposDiv = document.getElementById("equipos");
  
  equipos.forEach((equipo) => {
    const equipoDiv = document.createElement("div");
    equipoDiv.classList.add("equipo");
  
    const img = document.createElement("img");
    img.src = equipo.imagen;
    img.alt = "Escudo del " + equipo.nombre;
  
    const h2 = document.createElement("h2");
    h2.textContent = equipo.nombre;
  
    const p1 = document.createElement("p");
    p1.textContent = "Año de fundación: " + equipo.fundacion;
  
    const p2 = document.createElement("p");
    p2.textContent = "Posición actual en la tabla: " + equipo.posicion;
  
    equipoDiv.appendChild(img);
    equipoDiv.appendChild(h2);
    equipoDiv.appendChild(p1);
    equipoDiv.appendChild(p2);
  
    equiposDiv.appendChild(equipoDiv);
  });