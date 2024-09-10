import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import browserSync from 'browser-sync';

// Convert __filename and __dirname to be compatible with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an Express application
const app = express();

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Initialize Browsersync
const bs = browserSync.create();

bs.init({
    proxy: `http://localhost:3000`, // Proxy the Express server
    files: [`${__dirname}/index.html`], // Watch for changes in index.html
    port: 3001, // Serve Browsersync on this port
    open: false, // Set to true to automatically open the browser
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
