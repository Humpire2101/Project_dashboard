const ctx = document.getElementById('lineChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jul', 'aug', 'set', 'oct', 'nov', 'dec'],
      datasets: [{
        label: 'Earnings in $',
        data: [2050, 1900, 2100, 1800, 2800, 2000, 2500, 2600, 2450, 1950, 2300,3100],
        borderWidth: 1
      }]
    },
    options: {
        responsive:true,
    }
  });