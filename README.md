# GitHub Repositories Manager

A React application that allows you to manage and explore GitHub repositories. Built with modern React hooks, React Router DOM v6, and styled-components.

## 🚀 Features

- **Repository Management**: Add and remove GitHub repositories from your list
- **Repository Details**: View detailed information about each repository
- **Issues Tracking**: Browse and filter issues for each repository
- **Responsive Design**: Modern UI with styled-components
- **Local Storage**: Persist your repository list locally
- **GitHub API Integration**: Real-time data from GitHub's public API

## 🛠️ Technologies Used

- **React 19.1.0** - Modern React with hooks
- **React Router DOM 6.30.1** - Client-side routing
- **Styled Components 6.1.19** - CSS-in-JS styling
- **Axios 1.10.0** - HTTP client for API requests
- **React Icons 5.5.0** - Icon library
- **Create React App** - Development environment

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd repos
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── App.js                 # Main application component
├── index.js              # Application entry point
├── routes.js             # React Router configuration
├── pages/
│   ├── Main/
│   │   ├── index.js      # Main page component
│   │   └── styles.js     # Main page styles
│   └── Repositorio/
│       ├── index.js      # Repository details component
│       └── styles.js     # Repository page styles
├── services/
│   └── api.js           # GitHub API configuration
└── styles/
    └── global.js        # Global styles
```

## 🎯 Usage

### Adding a Repository
1. On the main page, enter a repository name in the format: `owner/repository-name`
2. Click the "+" button or press Enter
3. The repository will be added to your list and saved locally

### Viewing Repository Details
1. Click on the repository name or the bars icon in your repository list
2. View repository information including:
   - Repository name and description
   - Owner avatar and details
   - List of issues with filtering options

### Managing Issues
- **Filter Issues**: Use the filter buttons to view "All", "Open", or "Closed" issues
- **Pagination**: Navigate through issues using the "Previous" and "Next" buttons
- **Issue Details**: Click on issue titles to view them on GitHub

### Removing Repositories
- Click the trash icon next to any repository in your list to remove it

## 🔌 API Integration

The application uses GitHub's public API to fetch repository and issue data:

- **Base URL**: `https://api.github.com`
- **Endpoints**:
  - `GET /repos/{owner}/{repo}` - Repository information
  - `GET /repos/{owner}/{repo}/issues` - Repository issues

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Styling

The application uses **styled-components** for styling with:
- Modern, clean design
- Responsive layout
- Consistent color scheme
- Smooth animations and transitions

## 💾 Data Persistence

Your repository list is automatically saved to localStorage and will persist between browser sessions.

## 🔧 Development

### Recent Updates
- **React Router DOM v6**: Updated from v5 for React 19 compatibility
- **Modern React Patterns**: Uses hooks and functional components
- **Improved Error Handling**: Better user feedback for API errors

### Troubleshooting

If you encounter routing issues:
1. Ensure you're using React Router DOM v6
2. Check that all route components are properly imported
3. Verify that the `useParams` hook is used correctly in dynamic routes

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or issues, please:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

---

**Happy coding! 🎉**
