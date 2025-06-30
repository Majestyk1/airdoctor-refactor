import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'

function Admin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await signInWithEmailAndPassword(auth, email, password)
      setIsLoggedIn(true)
      console.log('Login successful!')
    } catch (error) {
      setError('Invalid email or password. Please try again.')
      console.error('Login error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    auth.signOut()
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
  }

  // Show admin dashboard if logged in
  if (isLoggedIn) {
    return (
      <div className="admin-dashboard min-h-screen bg-gray-50 py-8 pt-24">
        <div className="admin-dashboard__container max-w-4xl mx-auto px-4">
          <div className="admin-dashboard__header flex items-center justify-between mb-8">
            <h1 className="admin-dashboard__title text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
            <button 
              onClick={handleLogout}
              className="admin-dashboard__logout px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
          
          <div className="admin-dashboard__content bg-white rounded-lg shadow p-6">
            <p className="admin-dashboard__welcome text-gray-600 mb-4">
              Welcome to the CMS! Content editing features will be added here.
            </p>
            
            {/* Placeholder for content editing forms */}
            <div className="admin-dashboard__sections space-y-6">
              <div className="admin-section border rounded-lg p-4">
                <h2 className="admin-section__title text-xl font-semibold text-gray-800 mb-4">
                  Hero Section
                </h2>
                <p className="admin-section__placeholder text-gray-500">
                  Hero content editing form will go here...
                </p>
              </div>
              
              <div className="admin-section border rounded-lg p-4">
                <h2 className="admin-section__title text-xl font-semibold text-gray-800 mb-4">
                  About Section
                </h2>
                <p className="admin-section__placeholder text-gray-500">
                  About content editing form will go here...
                </p>
              </div>
              
              <div className="admin-section border rounded-lg p-4">
                <h2 className="admin-section__title text-xl font-semibold text-gray-800 mb-4">
                  Services Section
                </h2>
                <p className="admin-section__placeholder text-gray-500">
                  Services content editing form will go here...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show login form if not logged in
  return (
    <div className="admin-login min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="admin-login__container max-w-md w-full">
        <div className="admin-login__card bg-white rounded-lg shadow-md p-8">
          <div className="admin-login__header text-center mb-8">
            <h1 className="admin-login__title text-2xl font-bold text-gray-800 mb-2">
              Admin Login
            </h1>
            <p className="admin-login__subtitle text-gray-600">
              Sign in to manage website content
            </p>
          </div>

          <form onSubmit={handleLogin} className="admin-login__form space-y-6">
            <div className="form-field">
              <label 
                htmlFor="email" 
                className="form-field__label block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-field__input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-field">
              <label 
                htmlFor="password" 
                className="form-field__label block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-field__input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && (
              <div className="admin-login__error bg-red-50 border border-red-200 rounded-md p-3">
                <span className="admin-login__error-text text-sm text-red-600">
                  {error}
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`admin-login__submit w-full py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isLoading 
                  ? 'admin-login__submit_loading bg-gray-400 text-gray-700 cursor-not-allowed' 
                  : 'admin-login__submit_default bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isLoading ? (
                <span className="admin-login__loading flex items-center justify-center">
                  <span className="admin-login__spinner w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin 