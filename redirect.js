// Get current query parameters (e.g., "?source=google&id=123")
const currentQuery = window.location.search;
// Parse into key-value pairs
const params = new URLSearchParams(currentQuery);

// Encode values only (optional, if values contain special characters)
params.forEach((value, key) => {
    params.set(key, encodeURIComponent(value));
  });

let queryString = params.toString();
if(params.size){
  queryString = "?" + queryString;
}


// Redirect with existing parameters
window.location.href = `https://zhua05nuo.wixstudio.com/zhuclever${queryString}`;