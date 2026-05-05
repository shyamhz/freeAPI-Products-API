# ChaiTube - YouTube-Style Video Listing Interface

A modern, responsive YouTube-style video listing application built with React and Tailwind CSS that fetches and displays video data from the FreeAPI.

## 📋 Overview

ChaiTube is a clean, minimalist video browsing interface that demonstrates best practices in component design, hook usage, and API integration. The application fetches video data from the FreeAPI and displays it in an organized card-based layout with video thumbnails, titles, view counts, and like counts.

## ✨ Features

- **Responsive Design**: Mobile-first responsive layout using Tailwind CSS
- **Dynamic Video Loading**: Fetches video data from FreeAPI YouTube endpoint
- **Video Cards**: Clean, left-oriented card display with video thumbnails and metadata
- **Thumbnail Display**: High-quality video thumbnails at natural brightness and colors
- **Video Metadata**: Shows title, channel name, view count, and like count for each video
- **Dark Mode Toggle**: Official shadcn dark mode with persistent theme preference
- **Sidebar Navigation**: Includes app header with dark mode toggle and sidebar for better UX
- **Error Handling**: Proper error handling and request cancellation
- **Request Cancellation**: Abort controller implementation for clean request lifecycle

## 🛠️ Technologies Used

- **Frontend Framework**: React 18+
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **HTTP Client**: Fetch API
- **Component Library**: Shadcn/ui (Card, Button, Sidebar, etc.)
- **Icons**: Lucide React icons
- **UI Components**: Custom and pre-built components

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd yt-video-API
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Usage

Once the development server is running, the application will:

1. Automatically fetch video data from the FreeAPI endpoint
2. Parse the response and extract video information
3. Display videos in a responsive grid layout
4. Show video thumbnails with proper aspect ratio
5. Display video titles, view counts, and like counts

### API Endpoint

**Base URL**: `https://api.freeapi.app/api/v1/public/youtube/videos`

**Method**: GET

**Response Structure**:
```json
{
  "statusCode": 200,
  "data": {
    "page": 1,
    "limit": 10,
    "totalPages": 16,
    "totalItems": 157,
    "data": [
      {
        "items": {
          "id": "video-id",
          "snippet": {
            "title": "Video Title",
            "thumbnails": {
              "standard": {
                "url": "thumbnail-url"
              }
            }
          },
          "statistics": {
            "viewCount": "1000",
            "likeCount": "50"
          }
        }
      }
    ]
  }
}
```

## 📁 Project Structure

```
src/
├── App.jsx                      # Main app component with API logic
├── AppBody.jsx                  # Video list container
├── AppHeader.jsx                # Header component
├── Sidebar.jsx                  # Sidebar navigation
├── main.jsx                     # Application entry point
├── index.css                    # Global styles
├── components/
│   ├── content-card.jsx         # Individual video card component
│   ├── custom/
│   │   └── app-header.jsx       # Custom header component
│   └── ui/                      # Shadcn/ui components
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
│   └── use-mobile.js            # Mobile detection hook
├── lib/
│   └── utils.js                 # Utility functions
├── assets/                      # Static assets
└── public/                      # Public files
```

## 🔍 Key Components

### **App.jsx**
- Fetches video data from FreeAPI with nested data structure handling
- Manages card object list state including channel title extraction
- Implements proper error handling with HTTP status checking and request cancellation
- Passes data to AppBody component

### **AppBody.jsx**
- Maps through video data array
- Renders individual ContentCard components
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

