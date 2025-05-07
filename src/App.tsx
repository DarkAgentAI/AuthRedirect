import React, { useEffect, useState } from 'react';
import SuccessMessage from './components/SuccessMessage';
import './styles/App.css';

function App() {
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.href;
    
    // Parse the URL to extract the query parameters
    const url = new URL(currentUrl);
    
    // Get everything after the domain (path + query parameters)
    const pathAndParams = url.pathname + url.search + url.hash;
    
    // Create the deep link URL with the same parameters
    const deepLinkUrl = `dark-agent://auth/callback${pathAndParams}`;
    
    // Only redirect if we haven't done so already
    if (!redirected) {
      console.log('Redirecting to:', deepLinkUrl);
      
      // Redirect to the deep link
      window.location.href = deepLinkUrl;
      
      // Mark as redirected to prevent infinite loops
      setRedirected(true);
    }
  }, [redirected]);

  return (
    <div className="app-container">
      <SuccessMessage onRetry={() => {
        // Reset redirect flag to allow retrying the deep link
        setRedirected(false);
      }} />
    </div>
  );
}

export default App;