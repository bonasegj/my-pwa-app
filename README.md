# My PWA App

This is a Progressive Web App (PWA) that allows users to send WhatsApp messages without saving contacts. The app is designed to be simple and user-friendly.

## Project Structure

```
my-pwa-app
├── index.html        # Main structure of the web application
├── style.css         # Styles for the web application
├── script.js         # JavaScript code for user interactions
├── manifest.json     # Web app manifest providing metadata
├── service-worker.js  # Service worker for caching and offline functionality
└── README.md         # Documentation for the project
```

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-pwa-app
   ```

3. Open `index.html` in your web browser.

## Features

- Send WhatsApp messages directly from the app.
- Responsive design for mobile and desktop.
- Offline functionality through service worker caching.

## PWA Setup

- The app is configured as a PWA with a `manifest.json` file that includes metadata such as the app name, icons, and theme color.
- A service worker is implemented to cache assets and enable offline access.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.