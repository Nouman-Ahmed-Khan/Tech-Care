// Get all patient divs (the container elements)
const patientItems = document.querySelectorAll('.patient-item');
let currentActive = null;

patientItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from previously active item
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        
        // Add active class to clicked item
        this.classList.add('active');
        currentActive = this;
    });
});

// Get all Nav item
const navItems = document.querySelectorAll('.nav-item');
let activeNav = null;

navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from previously active item
        if (activeNav) {
            activeNav.classList.remove('active');
        }
        
        // Add active class to clicked item
        this.classList.add('active');
        activeNav = this;
    });
});

//Getting Chart from API START

// Setup (defines the data and labels for the chart)
const labels = ['Oct, 2023','Nov, 2023','Dec, 2023','Jan, 2024', 'Feb, 2024', 'Mar, 2024'];  // Hardcoded labels (months)

const data = {
  labels: labels,  // The x-axis labels (months)
  datasets: [
    {
      label: 'Systolic',  // First dataset label
      data: [120, 110, 160, 105, 150, 155, 180],  // Manually defined data for Dataset 1
      borderColor: 'rgb(255, 99, 132)',  // Line color for Dataset 1
      backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Background color for the fill (transparent)
    },
    {
      label: 'Diastolic',  // Second dataset label
      data: [110, 65, 110, 90, 70, 80],  // Manually defined data for Dataset 2
      borderColor: 'rgb(54, 162, 235)',  // Line color for Dataset 2
      backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Background color for the fill (transparent)
    }
  ]
};

// Config (sets up the chart type, options, and data)
const config = {
  type: 'line',  // Defines the chart type as line chart
  data: data,    // The data we defined above
  options: {
    responsive: true,  // Makes the chart responsive to window resizing
    plugins: {
      legend: {
        position: 'top',  // Position the legend at the top of the chart
      },
      title: {
        display: true,  // Display the chart title
      }
    }
  },
};

// Creating the chart and rendering it
const ctx = document.getElementById('myChart').getContext('2d');  // Get the canvas element
const myChart = new Chart(ctx, config);  // Create and render the chart

// Getting Chart from API END