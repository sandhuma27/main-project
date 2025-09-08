// utils.js

// Generate a unique ID (timestamp + random)
export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// Load data from localStorage
export function load(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (e) {
    console.error("Error loading from localStorage", e);
    return fallback;
  }
}

// Save data to localStorage
export function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Error saving to localStorage", e);
  }
}
