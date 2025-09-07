# KAppTech CMS - Frontend

A modern React.js frontend application for KAppTech CMS website with TypeScript, Tailwind CSS, and professional UI components.

## 🚀 Features

- **React 19** with TypeScript
- **Tailwind CSS** for responsive design
- **React Router** for client-side routing
- **React Query** for data fetching
- **Framer Motion** for animations
- **Heroicons** for consistent iconography
- **Role-based Authentication** (Admin, Editor, Author, Viewer)
- **Professional Dashboard** with analytics
- **User Management System**
- **Content Management** (Pages, Posts, Case Studies)
- **Responsive Design** - Mobile-first approach

## 🛠️ Tech Stack

- React 19.1.1
- TypeScript 4.9.5
- Tailwind CSS 3.4.17
- React Router DOM 7.8.2
- Axios 1.11.0
- React Query 3.39.3
- Framer Motion 12.23.12

## 📋 Prerequisites

- Node.js 16+ 
- npm or yarn

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/PhamHoangLong1911/KAppTech-Frontend.git
cd KAppTech-Frontend

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

For production, update the API URL to your backend deployment URL.

### Development

```bash
# Start development server
npm start

# The app will run on http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# The build folder will contain optimized files ready for deployment
```

## 🎯 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run build:s3` - Build with S3 specific optimizations
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

### AWS S3 + CloudFront (Recommended)

1. Build the project:
```bash
npm run build
```

2. Configure S3 bucket:
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `index.html` (for SPA routing)

3. Upload `build/` folder contents to S3

4. Configure CloudFront:
   - Set custom error pages (403, 404) to redirect to `/index.html` with 200 status

### Alternative Deployments

- **Netlify**: Automatic deployment with `_redirects` file included
- **Vercel**: Zero-config deployment
- **GitHub Pages**: Static hosting option

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Common components
│   ├── layout/         # Layout components
│   └── ui/             # Basic UI elements
├── contexts/           # React contexts
├── pages/              # Page components
│   ├── admin/          # Admin pages
│   ├── auth/           # Authentication pages
│   └── public/         # Public pages
├── services/           # API services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── styles/             # Global styles
```

## 🔐 Authentication

The frontend includes a complete authentication system:

- Login/Register forms with validation
- JWT token management
- Protected routes
- Role-based access control
- Auto-logout on token expiration

## 🎨 UI Components

- Professional dashboard with analytics
- User management interface
- Content management forms
- Responsive navigation
- Loading states and error handling
- Modal dialogs and form validation

## 🌐 API Integration

The frontend communicates with the backend API for:

- User authentication and authorization
- Content management (CRUD operations)
- File uploads and media management
- User profile management
- Analytics and reporting

## 🔧 Configuration

### Router Configuration

The app uses React Router for client-side routing. For deployment on static hosts:

- **BrowserRouter**: Clean URLs (requires server configuration)
- **HashRouter**: Hash-based routing (works on any static host)

### Build Configuration

The build process includes:

- TypeScript compilation
- CSS optimization and purging
- JavaScript minification
- Asset optimization
- Service worker generation

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interfaces
- Optimized for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@kapptech.com or create an issue on GitHub.

## 🔗 Related

- [KAppTech Backend API](https://github.com/PhamHoangLong1911/KAppTech-Backend) - The backend API for this frontend application
