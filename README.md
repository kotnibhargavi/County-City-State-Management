# Country, State, and City Management System

🌐 Live Demo
View Live Demo ([(https://countrystatecitymanagement.netlify.app/)](https://countrystatecitymanagement.netlify.app/))

## 📋 Overview

A React-based hierarchical data management system that allows users to organize and manage a database of countries, states, and cities. Built with a clean, intuitive interface featuring animations and responsive design.

## ✨ Features

- **Hierarchical Data Management**: Organize data in a three-level hierarchy (Country → State → City)
- **Complete CRUD Operations**:
  - Add, edit, and delete countries
  - Add, edit, and delete states within countries
  - Add, edit, and delete cities within states
- **User-Friendly Interface**:
  - Expandable/collapsible sections
  - Confirmation dialogs for destructive actions
  - Visual feedback with animations
  - Responsive design for all screen sizes
- **Clean UI/UX**:
  - Modern gradient styling
  - Animated interactions
  - Intuitive navigation
  - Visual hierarchy with clear relationships


## 🛠️ Technologies Used

- **React**: Frontend UI library
- **JavaScript (ES6+)**: Programming language
- **CSS3**: Custom styling with animations
- **HTML5**: Semantic markup
- **Create React App**: Project scaffolding
- **Netlify**: Deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/country-state-city-management.git
   cd country-state-city-management
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🧩 Project Structure

```
src/
├── components/
│   ├── CountryList.js   # Manages country display and operations
│   ├── StateList.js     # Manages state display and operations
│   └── CityList.js      # Manages city display and operations
├── App.js               # Main application component
├── App.css              # Application styling
├── index.js             # Entry point
└── index.css            # Global styling
```

## 💻 Implementation Details

### Data Structure

The application uses a nested state structure to represent the hierarchical data:

```javascript
[
  {
    id: 1,
    name: "Country Name",
    states: [
      {
        id: 1,
        name: "State Name",
        cities: [
          {
            id: 1,
            name: "City Name"
          }
        ]
      }
    ]
  }
]
```

### Key Features Implementation

1. **Expandable UI**: Uses React state to track which sections are expanded
2. **Confirmation Dialogs**: Implements native browser confirm/prompt dialogs for user actions
3. **Nested Components**: Uses a component hierarchy that mirrors the data structure
4. **Animation**: CSS transitions and keyframes for smooth user interactions

## 🎨 Styling Highlights

- **Gradient Backgrounds**: Beautiful color gradients for visual appeal
- **Card Design**: Modern card-based UI with shadows and hover effects
- **Interactive Elements**: Buttons and UI elements with hover and active states
- **Responsive Design**: Adapts to different screen sizes
- **Animation Effects**: Smooth transitions for expanding/collapsing sections

## 🔜 Future Enhancements

- Data persistence using localStorage or a backend service
- Search functionality for finding entities quickly
- Sorting and filtering options
- Drag and drop reordering
- Export/import functionality for data backup
- User authentication and multi-user support
- Dark mode toggle

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name - [Your GitHub Profile]([https://github.com/your-usernam](https://github.com/kotnibhargavi)

## 🙏 Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [CSS Gradient Generator](https://cssgradient.io/)
- [JavaScript MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

Made with ❤️ and React
