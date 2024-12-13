function submitData(name, email) {
    // Data to be sent in the POST request body
    const formData = {
      name: name,
      email: email
    };
  
    // Object for the POST request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    // Fetch request
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
        // Change response data from JSON format
        return response.json();
      })
      .then(data => {
        // Append the new ID to the DOM
        const idElement = document.createElement("p");
        idElement.textContent = `New User ID: ${data.id}`;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        // To handle errors and append the error message to the DOM
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  