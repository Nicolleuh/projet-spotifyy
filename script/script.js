// Charte en camembert
const ctx = document.getElementById('myPieChart');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
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