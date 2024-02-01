// api/api.js

// Function to fetch resources from the backend API
export const getResources = async () => {
    try {
      const response = await fetch('/api/resources');
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle any errors here
      console.error('Error fetching resources:', error);
      throw error; // Optionally rethrow the error
    }
  };


  // Function to create a new resource in the backend API
  export const createResource = async (resourceData) => {
    try {
      const response = await fetch('/api/resources', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resourceData)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle any errors here
      console.error('Error creating resource:', error);
      throw error; // Optionally rethrow the error
    }
  };

    // Function to delete a resource from the backend API

  export const deleteResource = async (resourceId) => {
    try {
      const response = await fetch(`/api/resources/${resourceId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle any errors here
      console.error('Error deleting resource:', error);
      throw error; // Optionally rethrow the error
    }
  }



  