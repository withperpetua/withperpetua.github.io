# Perpetua Landing Page

A modern React-based landing page for Perpetua, built with Vite and featuring a beautiful animated gradient background with floating particles.

## Features

- ✨ Modern React 18 with hooks
- 🎨 Beautiful animated gradient background
- 🌟 Floating particle animations
- 📱 Responsive design
- 📧 Email signup form with Google Apps Script integration
- 🔒 Developer tools protection
- 🚀 Fast development with Vite

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with animations
- **Google Apps Script** - Form submission handling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd withperpetua.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ContactInfo.jsx      # Footer contact component
│   ├── ContactInfo.css      # Contact info styles
│   ├── FloatingParticles.jsx # Animated particles component
│   ├── SignupForm.jsx       # Email signup form component
│   └── SignupForm.css       # Form styles
├── App.jsx                  # Main application component
├── App.css                  # App-specific styles
├── main.jsx                 # Application entry point
└── index.css                # Global styles
```

## Key Components

### App.jsx
Main application component that orchestrates the entire landing page, including:
- Domain redirect logic
- Developer tools protection
- Form submission state management

### SignupForm.jsx
Handles email collection with:
- Form validation
- Google Apps Script integration
- Loading states
- Success feedback

### FloatingParticles.jsx
Creates animated floating particles using:
- React refs for DOM manipulation
- CSS animations
- Responsive particle generation

## Styling

The application uses a modular CSS approach:
- `index.css` - Global styles and animations
- `App.css` - Main layout and component styles
- Component-specific CSS files for isolated styling

## Deployment

The application is configured for deployment to GitHub Pages. The build process creates optimized static files in the `dist` directory.

## Customization

### Colors
The main color scheme is defined in CSS variables and can be easily modified in the CSS files.

### Animations
Particle animations and gradient shifts can be adjusted in the respective CSS files.

### Form Integration
The Google Apps Script webhook URL can be updated in the `SignupForm.jsx` component.

## License

This project is private and proprietary.