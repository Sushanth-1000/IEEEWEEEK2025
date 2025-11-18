const API_URL = 'https://ieeeweek2025.onrender.com';

const fetchEvents = async () => {
  let apiUrl;  // Declare here
  
  try {
    apiUrl = `${API_URL}/api/events`;  // Assign value here
    console.log('🔵 [1/3] Starting fetch to:', apiUrl);
    
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    });
    
    console.log('🟡 [2/3] Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('🔴 Response not OK:', {
        status: response.status,
        statusText: response.statusText,
        url: apiUrl,
        body: errorText
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('🟢 [3/3] Success! Data received');
    return data;
  } catch (error) {
    console.error('🔥 Fetch failed:', {
      message: error.message,
      name: error.name,
      url: apiUrl || 'URL not set',  // Now this will work
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
    throw error;
  }
};

export default fetchEvents;