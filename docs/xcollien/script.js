const gallery = document.querySelector(".gallery");

const filterButtons = document.querySelectorAll(".filter-btn");
const showAll = document.getElementById("showAll");

// Alle Bilder
const bilder = [];

for (let i = 1; i <= 25; i++) {
    bilder.push(`bilder/frau${i}.jpg`);
}

// Kategorien (jeweils 10 Bilder)
const kategorien = {

    // Kategorie A
    1: [
        bilder[0],
        bilder[1],
        bilder[2],
        bilder[3],
        bilder[4],
        bilder[5],
        bilder[6],
        bilder[7],
        bilder[8],
        bilder[9]
    ],

    // Kategorie B
    2: [
        bilder[3],
        bilder[4],
        bilder[5],
        bilder[6],
        bilder[7],
        bilder[8],
        bilder[9],
        bilder[10],
        bilder[11],
        bilder[12]
    ],

    // Kategorie C (ohne Bild 8 und 10)
    3: [
        bilder[0],
        bilder[1],
        bilder[2],
        bilder[3],
        bilder[4],
        bilder[5],
        bilder[6],
        bilder[8],
        bilder[10],
        bilder[13]
    ],

    // Kategorie D
    4: [
        bilder[9],
        bilder[10],
        bilder[11],
        bilder[12],
        bilder[13],
        bilder[14],
        bilder[15],
        bilder[16],
        bilder[17],
        bilder[18]
    ],

    // Kategorie E
    5: [
        bilder[12],
        bilder[13],
        bilder[14],
        bilder[15],
        bilder[16],
        bilder[17],
        bilder[18],
        bilder[19],
        bilder[20],
        bilder[21]
    ],

    // Kategorie F (ohne Bild 12 und 19)
    6: [
        bilder[14],
        bilder[15],
        bilder[16],
        bilder[17],
        bilder[19],
        bilder[20],
        bilder[21],
        bilder[22],
        bilder[23],
        bilder[24]
    ],

    // Kategorie G
    7: [
        bilder[5],
        bilder[6],
        bilder[7],
        bilder[8],
        bilder[9],
        bilder[10],
        bilder[11],
        bilder[12],
        bilder[13],
        bilder[14]
    ],

    // Kategorie H
    8: [
        bilder[10],
        bilder[11],
        bilder[12],
        bilder[13],
        bilder[14],
        bilder[15],
        bilder[16],
        bilder[17],
        bilder[18],
        bilder[19]
    ]

};

// Galerie anzeigen
function renderGallery(array) {

    gallery.innerHTML = "";

    array.forEach(src => {

        gallery.innerHTML += `
            <div class="card">
                <a href="#">
                    <img src="${src}" alt="">
                </a>
            </div>
        `;

    });

    // Bild auswählen
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            cards.forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

        });

    });

}

// Beim Start alle Bilder anzeigen
renderGallery(bilder);

// Filter
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(b => b.classList.remove("active"));

        button.classList.add("active");

        const id = button.dataset.filter;

        renderGallery(kategorien[id]);

    });

});

// Gesamte Übersicht
showAll.addEventListener("click", () => {

    filterButtons.forEach(b => b.classList.remove("active"));

    renderGallery(bilder);

});


// Link-Klick abfangen
    document.querySelectorAll(".card a").forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault(); // verhindert Navigation

            const timestamp = Date.now();
            console.log(timestamp);
            fetch(`https://manuelmichel.de/set?hakan=${timestamp}`)
                .catch(err => console.error(err));

        });

    });
