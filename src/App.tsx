import React, { useEffect, useState } from 'react';
import SuccessMessage from './components/SuccessMessage';
import SuccessSubscription from './components/SuccessSubscription';
import CancelSubscription from './components/CancelSubscription';
import './styles/App.css';

function App() {
  const [redirected, setRedirected] = useState(false);
  const [path, setPath] = useState('');

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.href;
    
    // Parse the URL to extract the path
    const url = new URL(currentUrl);
    const pathname = url.pathname;
    
    // Set the path state
    setPath(pathname);
    
    // Get everything after the domain (path + query parameters)
    const pathAndParams = url.pathname + url.search + url.hash;
    
    // Create the deep link URL based on the path
    let deepLinkUrl;
    
    if (pathname.includes('/success')) {
      deepLinkUrl = `dark-agent://subscription/callback/success`;
    } else if (pathname.includes('/cancel')) {
      deepLinkUrl = `dark-agent://subscription/callback/cancel`;
    } else {
      // Default is auth callback
      deepLinkUrl = `dark-agent://auth/callback${pathAndParams}`;
    }
    
    // Only redirect if we haven't done so already
    if (!redirected) {
      console.log('Redirecting to:', deepLinkUrl);
      
      // Redirect to the deep link
      window.location.href = deepLinkUrl;
      
      // Mark as redirected to prevent infinite loops
      setRedirected(true);
    }
  }, [redirected]);

  // Render different components based on the path
  const renderComponent = () => {
    if (path.includes('/success')) {
      return (
        <SuccessSubscription onRetry={() => {
          // Reset redirect flag to allow retrying the deep link
          setRedirected(false);
        }} />
      );
    } else if (path.includes('/cancel')) {
      return (
        <CancelSubscription onRetry={() => {
          // Reset redirect flag to allow retrying the deep link
          setRedirected(false);
        }} />
      );
    } else {
      return (
        <SuccessMessage onRetry={() => {
          // Reset redirect flag to allow retrying the deep link
          setRedirected(false);
        }} />
      );
    }
  };

  return (
    <div className="app-container">
      {renderComponent()}
    </div>
  );
}

export default App;