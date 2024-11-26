// Function to toggle visibility of dropdowns
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const allDropdowns = document.querySelectorAll('.dropdown-content');
  
  // Hide all dropdowns first
  allDropdowns.forEach(item => {
    if (item !== dropdown) {
      item.style.display = 'none';
    }
  });
  
  // Toggle the selected dropdown
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// LMS functions
function fetchLMSCount() {
  const apiUrl = 'http://localhost:8080/todos?category=LMS_COUNT';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('result').textContent = `Error fetching LMS COUNT data: ${error.message}`;
    });
}

function fetchLMSLast() {
  const apiUrl = 'http://localhost:8080/todos?category=LMS_LAST';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('result').textContent = `Error fetching LMS LAST data: ${error.message}`;
    });
}

// FCM functions
function fetchFCMCount() {
  const apiUrl = '';
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('result').textContent = `Error fetching FCM COUNT data: ${error.message}`;
    });
}

function fetchFCMLast() {
  const apiUrl = 'http://localhost:8080/todos?category=FCM_LAST';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('result').textContent = `Error fetching FCM LAST data: ${error.message}`;
    });
}

// Other functions (Explore, Async, etc.)
function fetchExploreData() {
  const apiUrl = 'http://localhost:8080/todos?category=EXPLORE';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('result').textContent = `Error fetching EXPLORE data: ${error.message}`;
    });
}

function fetchAsyncData() {
  const apiUrl = 'http://localhost:8080/todos?category=ASYNC';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('result').textContent = `Error fetching ASYNC data: ${error.message}`;
    });
}

function fetchCarpoolData() {
  const apiUrl = 'http://localhost:8080/todos?category=CARPOOL';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('result').textContent = `Error fetching CARPOOL data: ${error.message}`;
    });
}

function fetchNCASEData() {
  const apiUrl = 'http://localhost:8080/todos?category=NCASE';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('result').textContent = `Error fetching NCASE data: ${error.message}`;
    });
}

function fetchTMLData() {
  const apiUrl = 'http://localhost:8080/todos?category=TML';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('result').textContent = `Error fetching TML data: ${error.message}`;
    });
}

function fetchIBMProblemsData() {
  const apiUrl = 'http://localhost:8080/todos?category=IBM_PROBLEMS';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('result').textContent = `Error fetching IBM PROBLEMS data: ${error.message}`;
    });
}

// Function to display fetched data
function displayData(data) {
  const container = document.getElementById('data-container');
  container.innerHTML = '';

  if (!data || data.length === 0) {
    container.innerHTML = '<p>No data found</p>';
  } else {
    data.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.textContent = JSON.stringify(item);
      container.appendChild(itemDiv);
    });
  }
}

 // if (!startDate || !endDate) {
  //   alert("Please select both start and end dates.");
  //   return;
  // }
    // if (!startDate || !endDate) {
  //   alert("Please select both start and end dates.");
  //   return;
  // }
  if (startEpoch === null || endEpoch === null) {
    alert('Invalid date format. Please use yyyy-MM-dd HH:mm:ss.');
    return;
  }
  if (startEpoch === null || endEpoch === null) {
    alert('Invalid date format. Please use yyyy-MM-dd HH:mm:ss.');
    return;
  }