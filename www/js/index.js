// document.getElementById('incidentForm').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const category = document.getElementById('category').value;

//     // Use REST API to submit the data to WordPress
//     const response = await fetch('https://your-wordpress-site/wp-json/wp/v2/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer YOUR_API_TOKEN'
//         },
//         body: JSON.stringify({
//             title,
//             content: description,
//             categories: category, // Configure categories in WordPress
//             status: 'publish'
//         })
//     });

//     if (response.ok) {
//         alert('Incident submitted successfully!');
//     } else {
//         alert('Failed to submit incident.');
//     }
// });



// navigator.geolocation.getCurrentPosition(
//     (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         console.log(`Lat: ${latitude}, Long: ${longitude}`);
//     },
//     (error) => {
//         console.error('Error getting location', error);
//     }
// );


// Fetch all Incidents
async function fetchIncidents() {
    const response = await fetch('https://yourwordpresssite.com/wp-json/wp/v2/posts');
    const incidents = await response.json();
  
    const incidentList = document.getElementById('incident-list');
    incidentList.innerHTML = '';
    incidents.forEach((incident) => {
      const li = document.createElement('li');
      li.textContent = `${incident.title.rendered}: ${incident.content.rendered}`;
      incidentList.appendChild(li);
    });
  }
  
  fetchIncidents();

//   Fetch user specific incidents
  async function fetchUserIncidents() {
    const token = localStorage.getItem('token');
    const response = await fetch('https://yourwordpresssite.com/wp-json/wp/v2/posts?author_me', {
      headers: { Authorization: `Bearer ${token}` },
    });
  
    const incidents = await response.json();
    const userIncidentList = document.getElementById('user-incident-list');
    userIncidentList.innerHTML = '';
    incidents.forEach((incident) => {
      const li = document.createElement('li');
      li.textContent = `${incident.title.rendered}: ${incident.content.rendered}`;
      userIncidentList.appendChild(li);
    });
  }
  
  fetchUserIncidents();
  