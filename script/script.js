// Fonction pour fetch les informations de spotify
async function fetchSpotifyData() {
  try {
    const response = await fetch('./data/data.json');
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
  const genreCounts = {};
  
  tracks.forEach(track => {
  
    track.artists[0].genres.forEach(genre => {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
  
  });
  
  const genreLabels = Object.keys(genreCounts);
  const genreValues = Object.values(genreCounts);


  // Graphique en camembert
  const ctxPie = document.getElementById('myPieChart');
  new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: genreLabels,
      datasets: [{
        label: 'Popularité',
        data: genreValues,
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Distribution des genres musicaux'
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
      indexAxis: 'y',
      scales: {
        y: { beginAtZero: true }
      },
      plugins: {
        title: {
          display: true,
          text: 'Top 10 des artistes (nombre de morceaux)'
        }
      }
    }
  });

}

init();