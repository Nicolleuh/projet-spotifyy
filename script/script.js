// Charte en camembert
const ctx = document.getElementById('myPieChart');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 2
    }]
  },
  options: {
    plugins: {
      
      title: {
        display: true,
        text: 'Distribution des Genres'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Charte barre horizontale
const barre = document.getElementById('myBarChart');
new Chart(barre, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    plugins: {
      
      title: {
        display: true,
        text: 'Top 10 des Artistes'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Fonction pour fetch les informations de spotify
async function fetchSpotifyData() {
  try {
    const response = await fetch('./data/spotify_data.json');
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`); // Au cas où ça FONCTIONNE PAAAAAS
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors du chargement des données Spotify :", error); // Au cas où ça fonctionne TOUJOURS PAAAAAAAAS
    return [];
  }
}


async function init() {
  const tracks = await fetchSpotifyData();

  if (tracks.length === 0) {
    console.warn("Aucune donnée à afficher.");
    return;
  }

  // On prend par exemple les 6 premiers morceaux
  const topTracks = tracks.slice(0, 6);

  // On extrait les noms et les popularités
  const labels = topTracks.map(track => track.name);
  const popularities = topTracks.map(track => track.popularity);

  // Graphique en camembert
  const ctxPie = document.getElementById('myPieChart');
  new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: 'Popularité',
        data: popularities,
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Top morceaux par popularité'
        }
      }
    }
  });

  // Graphique en barres
  const ctxBar = document.getElementById('myBarChart');
  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Popularité',
        data: popularities,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      },
      plugins: {
        title: {
          display: true,
          text: 'Top morceaux par popularité'
        }
      }
    }
  });

  // Bonus : remplir la liste des morceaux en HTML
  const listContainer = document.getElementById('trackList'); // pensez à ajouter cet id dans votre HTML
  if (listContainer) {
    listContainer.innerHTML = topTracks.map(track => `
      <li class="list-group-item d-flex align-items-center">
        <img src="${track.album.images[1]?.url}" alt="${track.name}" width="50" class="me-3 rounded">
        <div>
          <strong>${track.name}</strong><br>
          <small>${track.artists.map(a => a.name).join(', ')} — Popularité : ${track.popularity}</small>
        </div>
      </li>
    `).join('');
  }
}

// On lance tout au chargement
init();