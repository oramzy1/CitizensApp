
  // Fetch user-specific reports (example function)
  function fetchUserReports(authToken) {
    fetch("https://showstoppermusicng.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        query: `
        query {
          myReports {
            id
            title
            description
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const reports = result.data.myReports || [];
        const reportsContainer = document.getElementById("reports-container");
  
        if (reports.length > 0) {
          reportsContainer.innerHTML = reports
            .map(
              (report) => `
            <div class="report-card">
              <h3>${report.title}</h3>
              <p>${report.description}</p>
            </div>
          `
            )
            .join("");
        } else {
          reportsContainer.innerHTML = "<p>No reports found.</p>";
        }
      })
      .catch((error) => console.error("Error fetching reports:", error));
  }
  