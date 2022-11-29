const horaires = [
  { heure: "9h-17h", jour: "Lundi", cours: "POO Java" },
  { heure: "13h-17h", jour: "Mardi", cours: "Bases de données" },
  { heure: "10h-14h", jour: "Mercredi", cours: "Angular" },
  { heure: "12h-16h", jour: "Jeudi", cours: "Jakarta EE" },
  { heure: "6h-21h", jour: "Vendredi", cours: "Spring Boot" },
];

const cours = document.querySelector("#horaire");

horaires.forEach((horaire) => {
  cours.innerHTML += createRow(horaire);
});

function createRow({ heure, jour, cours }) {
  return `<tr>
        <td>${heure}</td>
        <td>${jour}</td>
        <td>${cours}</td>
    </tr>`;
}
