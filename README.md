# Product Listing

A modern, responsive product listing application built with React and Vite. Fetches and displays random products from the [FreeAPI](https://freeapi.app) with a clean, intuitive UI.

## Features

- **Random Product Loading**: Fetches random products from FreeAPI endpoint
- **Responsive Design**: Mobile-first layout with Tailwind CSS
- **Component-Based Architecture**: Reusable UI components using shadcn/ui
- **Sidebar Navigation**: Organized navigation interface
- **Error Handling**: Implements request cancellation and proper error management
- **Product Information**: Displays price, discount, stock, and descriptions

## Tech Stack

- **React** 19.2.5 - UI framework
- **Vite** 8.0.10 - Build tool
- **Tailwind CSS** 4.2.4 - Styling
- **Shadcn/ui** - Component library
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone or navigate to the project directory:
   ```bash
   cd product-listing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

- **Development Server**
  ```bash
  npm run dev
  ```
  Starts the dev server at `http://localhost:5173`

- **Build for Production**
  ```bash
  npm run build
  ```

- **Preview Production Build**
  ```bash
  npm run preview
  ```

- **Lint Code**
  ```bash
  npm run lint
  ```

## Project Structure

```
src/
├── App.jsx                    # Main app component
├── AppBody.jsx                # Product list container
├── AppHeader.jsx              # Header component
├── Sidebar.jsx                # Sidebar navigation
├── main.jsx                   # Entry point
├── index.css                  # Global styles
├── components/
│   ├── app-sidebar.jsx        # Sidebar implementation
│   ├── content-card.jsx       # Product card component
│   ├── custom/
│   │   └── app-header.jsx     # Custom header
│   └── ui/                    # Shadcn/ui components
│       ├── badge.jsx
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       ├── separator.jsx
│       ├── sheet.jsx
│       ├── sidebar.jsx
│       ├── skeleton.jsx
│       └── tooltip.jsx
├── hooks/
│   └── use-mobile.js          # Mobile detection hook
└── lib/
    └── utils.js               # Utility functions
```

## API Integration

The application fetches product data from:
```
https://api.freeapi.app/api/v1/public/randomproducts
```

Each product includes:
- ID, title, description
- Price and discount percentage
- Stock availability
- Thumbnail image

## How It Works

1. **App.jsx** - Fetches products from the FreeAPI endpoint on component mount
2. **AppBody.jsx** - Maps product data and renders individual product cards
3. **content-card.jsx** - Displays each product with image, title, price, and details
4. **Sidebar.jsx** - Provides navigation structure using shadcn/ui sidebar components

## License

Part of Web Dev Cohort 26
- Applies responsive grid layout

### **content-card.jsx**
- Displays individual video card with left-oriented layout
- Shows video thumbnail at full natural brightness and colors
- Displays video title, channel name, view count, and like count
- Uses semantic text styling with primary and muted foreground colors

## 🎨 Styling

The application uses **Tailwind CSS** with shadcn design system for styling:
- Responsive grid layout (`flex-col`, `sm:flex-row`)
- Aspect ratio maintenance for thumbnails
- Official shadcn dark mode with CSS custom properties
- Theme-aware colors using oklch color space
- Text hierarchy with primary foreground and muted secondary colors

## 🔗 API Integration

The application implements a robust API integration pattern:

- **AbortController**: Cancels pending requests on component unmount
- **Error Handling**: Catches and logs network errors with detailed messages
- **Status Checking**: Validates HTTP response status and throws errors
- **Safe Navigation**: Uses bracket notation for nested data access

## 📱 Responsive Breakpoints

- **Mobile**: Single column layout, full-width cards
- **Tablet & Desktop**: Multi-column responsive grid with `sm:flex-row`
- **Large Screens**: Optimized spacing and padding

## ⚠️ Error Handling

The application handles various error scenarios:

- HTTP error status codes
- Request cancellation (AbortError)
- Missing or malformed API responses



## 📝 Notes

- The application fetches the first 10 videos by default
- Thumbnails display at full natural brightness and colors
- Card width is limited to max-width-sm for better layout control
- All metadata including channel name, views, and likes are from the YouTube API
- Dark mode preference is persisted to localStorage

## 📄 License

This project is part of the Web Development Cohort 26 curriculum.

## 👨‍💻 Author

Built as a learning project for mastering React component patterns and API integration.

---

