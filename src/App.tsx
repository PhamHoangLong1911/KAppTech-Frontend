import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './contexts/AuthContext';

// Layout Components
import Layout from './components/layout/Layout';
import AdminLayout from './components/layout/AdminLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import ManagePages from './pages/admin/ManagePages';
import ManagePosts from './pages/admin/ManagePosts';
import ManageCaseStudies from './pages/admin/ManageCaseStudies';
import ManageUsers from './pages/admin/ManageUsers';
import Settings from './pages/admin/Settings';

// Components
import ProtectedRoute from './components/common/ProtectedRoute';
import ScrollToTop from './components/common/ScrollToTop';

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <div className="App">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="services" element={<Services />} />
                  <Route path="portfolio" element={<Portfolio />} />
                  <Route path="portfolio/:slug" element={<CaseStudyDetail />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="blog/:slug" element={<BlogPost />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="careers" element={<Careers />} />
                  <Route path="faq" element={<FAQ />} />
                </Route>

                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Admin Routes */}
                <Route path="/admin" element={
                  <ProtectedRoute roles={['admin', 'editor', 'author']}>
                    <AdminLayout />
                  </ProtectedRoute>
                }>
                  <Route index element={<Navigate to="/admin/dashboard" replace />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  
                  <Route path="pages" element={
                    <ProtectedRoute roles={['admin', 'editor']}>
                      <ManagePages />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="posts" element={<ManagePosts />} />
                  
                  <Route path="case-studies" element={
                    <ProtectedRoute roles={['admin', 'editor']}>
                      <ManageCaseStudies />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="users" element={
                    <ProtectedRoute roles={['admin']}>
                      <ManageUsers />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="settings" element={
                    <ProtectedRoute roles={['admin']}>
                      <Settings />
                    </ProtectedRoute>
                  } />
                </Route>

                {/* 404 Route */}
                <Route path="*" element={
                  <Layout>
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                        <p className="text-gray-600 mb-8">Page not found</p>
                        <a href="/" className="btn btn-primary">Go Home</a>
                      </div>
                    </div>
                  </Layout>
                } />
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
