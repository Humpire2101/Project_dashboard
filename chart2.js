const ctz = document.getElementById('doughnut');

  new Chart(ctz, {
    type: 'doughnut',
    data: {
      labels: ['academic', 'non academy', 'administration', 'others'],
      datasets: [{
        label: 'Employees',
        data: [42, 15, 56, 34],
        borderWidth: 1
      }]
    },
    options: {
        responsive:true,
    }
  });