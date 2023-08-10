const apiUrl = 'http://localhost:3000'

const apiRequest = async (endpoint, options) => {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        ...options
    });

    const result = {status:response.status};
    if (response.headers.get('Content-Length') > '0') {
        result.data = await response.json();
    }

    return result;
}

