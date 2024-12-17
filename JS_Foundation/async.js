// Define an async function
async function getUserData(userId) {
    try {
      // Await the fetch call to get user data
      let response = await fetch(`https://api.example.com/users/${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Await the conversion of response to JSON
      let userData = await response.json();
      console.log(userData);
    } catch (error) {
      // Handle errors
      console.error('Error fetching user data:', error);
    }
  }
  
  // Call the async function
  getUserData(1);
  