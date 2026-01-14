// Load structured data from JSON file and inject as JSON-LD script
(async function() {
  try {
    const response = await fetch('./structured-data.json');
    const structuredData = await response.json();
    
    // Create script element with JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData, null, 2);
    
    // Insert before closing body tag
    document.body.appendChild(script);
  } catch (error) {
    console.error('Failed to load structured data:', error);
  }
})();
