const apiUrl = 'http://localhost:3000'

const apiRequest = async (endpoint, options) => {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        ...options
    });
    const data = await response.json();
    return data
}

