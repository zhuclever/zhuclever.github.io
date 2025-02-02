// Get current query parameters (e.g., "?source=google&id=123")
const currentQuery = encodeURIComponent(window.location.search);

// Redirect with existing parameters
window.location.href = `https://example.com/newpage${currentQuery}`;