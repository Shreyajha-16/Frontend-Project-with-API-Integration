function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const allDropdowns = document.querySelectorAll('.dropdown-list');

  allDropdowns.forEach(item => {
    if (item !== dropdown) {
      item.style.display = 'none';
    }
  });

  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

  if (dropdownId !== 'lms-dropdown' && dropdownId !== 'fcm-dropdown') {
    document.getElementById('date-input-section').style.display = 'none';
  }

  resetDisplay();
}

function showDateInput(category) {
  resetDisplay(); // Clears previous data and UI elements
  const dateInputSection = document.getElementById('date-input-section');
  const categoryName = document.getElementById('category-name');
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');

  // Reset date inputs
  startDateInput.value = '';
  endDateInput.value = '';

  dateInputSection.style.display = 'block';
  categoryName.textContent = category;

  if (category === 'LMS COUNT') {
    document.getElementById('fetchLMSBtn').style.display = 'inline-block';
    document.getElementById('fetchFCMBtn').style.display = 'none';
  } else if (category === 'FCM COUNT') {
    document.getElementById('fetchLMSBtn').style.display = 'none';
    document.getElementById('fetchFCMBtn').style.display = 'inline-block';
  }

  // Hide dropdown menus after selection
  document.getElementById('lms-dropdown').style.display = 'none';
  document.getElementById('fcm-dropdown').style.display = 'none';
}

function updateResultTitle(title) {
  const resultTitle = document.querySelector('.result-box h2');
  resultTitle.textContent = title;
}

function fetchLMSCount() {
  updateResultTitle('LMS COUNT');
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  if (!startDate || !endDate) {
    handleError('Please select both start and end dates.');
    return;
  }

  const startEpoch = convertToEpoch(startDate);
  const endEpoch = convertToEpoch(endDate);

  if (startEpoch === null || endEpoch === null) {
    handleError('Invalid date format.');
    return;
  }

  const apiUrl = `http://localhost:8080/api/LMSCount?startDate=${startEpoch}&endDate=${endEpoch}`;

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
      handleError(`Error fetching LMS COUNT data: ${error.message}`);
    });
}


function fetchLMSLast() {
  updateResultTitle('LAST ENTRY');
  const apiUrl = 'http://localhost:8080/todos?category=LMS_LAST';
  resetDisplay();

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
      handleError(`Error fetching LMS LAST data: ${error.message}`);
    });
}

function fetchFCMLast() {
  updateResultTitle('LAST ENTRY');
  const apiUrl = '';
  resetDisplay();

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
      handleError(`Error fetching FCM LAST data: ${error.message}`);
    });
}

function fetchFCMCount() {
  updateResultTitle('FCM COUNT');
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  if (!startDate || !endDate) {
    handleError('Please select both start and end dates.');
    return;
  }

  const startEpoch = convertToEpoch(startDate);
  const endEpoch = convertToEpoch(endDate);

  if (startEpoch === null || endEpoch === null) {
    handleError('Invalid date format.');
    return;
  }

  const apiUrl = `http://localhost:8080/api/FCMCount?startDate=${startEpoch}&endDate=${endEpoch}`;

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
      handleError(`Error fetching FCM COUNT data: ${error.message}`);
    });
}

function fetchExploreData() {
  updateResultTitle('Explore Data');
  const apiUrl = '';
  resetDisplay();

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
      handleError(`Error fetching EXPLORE data: ${error.message}`);
    });
}

function fetchAsyncData() {
  updateResultTitle('Async Data');
  const apiUrl = '';
  resetDisplay();

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
      handleError(`Error fetching ASYNC data: ${error.message}`);
    });
}

function fetchCarpoolData() {
  updateResultTitle('Carpool Data');
  const apiUrl = '';
  resetDisplay();

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
      handleError(`Error fetching CARPOOL data: ${error.message}`);
    });
}

function fetchNCASEData() {
  updateResultTitle('NCASE Data');
  const apiUrl = '';
  resetDisplay();

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
      handleError(`Error fetching NCASE data: ${error.message}`);
    });
}

function fetchTMLData() {
  updateResultTitle('TML Data');
  const apiUrl = '';
  resetDisplay();

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
      handleError(`Error fetching TML data: ${error.message}`);
    });
}

function fetchIBMProblemsData() {
  updateResultTitle('IBM Problems Data');
  const apiUrl = '';
  resetDisplay();

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
      handleError(`Error fetching IBM PROBLEMS data: ${error.message}`);
    });
}

function displayData(data) {
  const container = document.getElementById('data-container');
  const errorContainer = document.getElementById('result');
  errorContainer.textContent = '';
  container.innerHTML = '';

  if (!data || data.length === 0) {
    container.innerHTML = '<p>No data found</p>';
  } else if (typeof data === 'object' && data !== null) {
    const value = Object.values(data)[0];
    container.textContent = value;
  } else {
    container.textContent = data;
  }
}

function handleError(errorMessage) {
  const container = document.getElementById('data-container');
  const errorContainer = document.getElementById('result');
  container.innerHTML = '';
  errorContainer.textContent = errorMessage;
}

function resetDisplay() {
  const container = document.getElementById('data-container');
  const errorContainer = document.getElementById('result');
  const dateInputSection = document.getElementById('date-input-section');

  container.innerHTML = '';
  errorContainer.textContent = '';
  dateInputSection.style.display = 'none';
}
function convertToEpoch(dateString) {
  const formattedDateString = dateString.replace("T", " ");

  const date = new Date(formattedDateString);
  if (isNaN(date.getTime())) {
    return null;
  }

  return date.getTime();
}
