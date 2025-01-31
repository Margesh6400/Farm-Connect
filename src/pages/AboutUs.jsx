import React, { useEffect } from 'react';

const AboutPage = () => {
  const redirectToHomeMission = () => {
    // Navigate to homepage with mission section hash
    window.location.href = '/#mission';
  };

  // Automatically redirect when component mounts
  useEffect(() => {
    redirectToHomeMission();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-2xl font-semibold text-gray-800">Redirecting to About Our Mission...</h1>
          <p className="text-gray-600 mt-2">Please wait a moment</p>
        </div>
        
        <button
          onClick={redirectToHomeMission}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Click here if not redirected
        </button>
      </div>
    </div>
  );
};

export default AboutPage;