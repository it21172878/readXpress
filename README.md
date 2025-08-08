# 📚 readXpress - Digital Bookstore

A modern, responsive online bookstore built with React, Vite, and Tailwind CSS. Browse and download books from various genres with a beautiful, user-friendly interface.

## ✨ Features

- **Modern Design**: Clean, gradient-based UI with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Multiple Categories**: Kids Books, Romance, Fantasy, Mystery, Sci-Fi, Non-Fiction
- **Search & Filter**: Find books by title, author, or category
- **Instant Downloads**: Integration with Mega Drive for book downloads
- **Book Ratings**: Star ratings and review counts for each book
- **Navigation**: Smooth routing with React Router DOM

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd readxpress
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📖 Usage

### Adding Books

To add new books, edit the `src/data/books.js` file. Each book object should include:

```javascript
{
  id: unique_id,
  title: "Book Title",
  author: "Author Name",
  category: "Category",
  description: "Book description...",
  coverImage: "image_url",
  rating: 1-5,
  reviews: number_of_reviews,
  megaUrl: "https://mega.nz/file/your_file_link"
}
```

### Mega Drive Integration

The app uses Mega Drive links for book downloads. When users click "Download":

1. An alert shows with book information
2. The Mega Drive link opens in a new tab
3. Users can download the book from Mega Drive

To set up your Mega Drive links:

1. Upload books to your Mega Drive account
2. Generate public download links
3. Add these links to the `megaUrl` field in the book data

## 🎨 Customization

### Colors and Styling

The app uses Tailwind CSS for styling. Main color scheme includes:

- Purple (`purple-600`)
- Blue (`blue-600`)
- Yellow (`yellow-300`) for accents
- Pink (`pink-500`) for romance category
- Various gradients for visual appeal

### Categories

To add new categories:

1. Add data to `src/data/books.js`
2. Update the `getBooksByCategory` function
3. Create a new page component
4. Add route to `App.jsx`
5. Update navigation in `Navbar.jsx`

## 📱 Pages

- **Home**: Featured books, search, category overview
- **Kids Books**: Children's literature and educational content
- **Romance**: Love stories and romantic novels
- **Fantasy**: Magic, dragons, and epic adventures
- **Mystery**: Thrillers, detective stories, and suspense
- **Sci-Fi**: Science fiction and futuristic tales
- **Non-Fiction**: Educational content, biographies, self-help

## 🛠️ Built With

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

## 📦 Project Structure

```
readxpress/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── BookCard.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── books.js
│   ├── pages/
│   │   ├── Fantasy.jsx
│   │   ├── Home.jsx
│   │   ├── KidsBooks.jsx
│   │   ├── Mystery.jsx
│   │   ├── NonFiction.jsx
│   │   ├── Romance.jsx
│   │   └── SciFi.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel**: Connect your GitHub repo to Vercel for automatic deployments
- **Netlify**: Drag and drop the `dist` folder to Netlify
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Deploy with Firebase CLI

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with the project, please open an issue on GitHub.

---

Made with ❤️ for book lovers everywhere! 📚✨+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
