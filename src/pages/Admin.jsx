import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, setDoc, deleteDoc, collection, getDocs, addDoc } from 'firebase/firestore'
import { auth, db } from '../utils/firebase'
import ServiceCardsForm from '../components/common/ServiceCardsForm'
import { projectsData } from '../constants'

function Admin() {
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  
  // Login form validation
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors, isSubmitting: isLoggingIn },
    reset: resetLogin
  } = useForm()
  
  // Hero form validation (Home)
  const {
    register: registerHero,
    handleSubmit: handleSubmitHero,
    formState: { errors: heroErrors, isSubmitting: isSubmittingHero },
    setValue: setHeroValue
  } = useForm()
  
  // About Hero form validation
  const {
    register: registerAboutHero,
    handleSubmit: handleSubmitAboutHero,
    formState: { errors: aboutHeroErrors, isSubmitting: isSubmittingAboutHero },
    setValue: setAboutHeroValue
  } = useForm()
  
  // Projects form validation
  const {
    register: registerProjects,
    handleSubmit: handleSubmitProjects,
    formState: { errors: projectsErrors, isSubmitting: isSubmittingProjects },
    setValue: setProjectsValue
  } = useForm()
  
  // Contact form validation
  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: contactErrors, isSubmitting: isSubmittingContact },
    setValue: setContactValue
  } = useForm()
  
  // Content state (only needed for display purposes, forms use react-hook-form)
  const [heroContent, setHeroContent] = useState({
    title: '',
    subtitle: '',
    accent: ''
  })
  
  const [aboutHeroContent, setAboutHeroContent] = useState({
    title: '',
    subtitle: '',
    accent: ''
  })
  
  const [projectsContent, setProjectsContent] = useState({
    title: '',
    subtitle: '',
    accent: ''
  })
  
  const [contactContent, setContactContent] = useState({
    title: '',
    subtitle: '',
    accent: ''
  })
  
  const [saveStatus, setSaveStatus] = useState('')

  const [serviceCards, setServiceCards] = useState([])
  const [serviceCardsLoading, setServiceCardsLoading] = useState(true)
  const [isSavingServiceCards, setIsSavingServiceCards] = useState(false)
  const [serviceCardsSuccess, setServiceCardsSuccess] = useState('')
  const [serviceCardsError, setServiceCardsError] = useState('')

  const [projectCards, setProjectCards] = useState(projectsData.map(card => ({
    ...card,
    icon: typeof card.icon === 'string' ? card.icon : (card.icon?.name?.toLowerCase() || '')
  })))
  const [isSavingProjectCards, setIsSavingProjectCards] = useState(false)
  const [projectCardsSuccess, setProjectCardsSuccess] = useState('')
  const [projectCardsError, setProjectCardsError] = useState('')

  // Check auth state on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
        setUser(user)
        loadContent() // Load existing content when user logs in
      } else {
        setIsLoggedIn(false)
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  // Load existing content from Firestore and populate forms
  const loadContent = async () => {
    try {
      // Load Hero content
      const heroDoc = await getDoc(doc(db, 'content', 'hero'))
      if (heroDoc.exists()) {
        const heroData = heroDoc.data()
        setHeroContent(heroData)
        // Populate form values
        setHeroValue('title', heroData.title || '')
        setHeroValue('accent', heroData.accent || '')
        setHeroValue('subtitle', heroData.subtitle || '')
      }

      // Load About content
      const aboutDoc = await getDoc(doc(db, 'content', 'about'))
      if (aboutDoc.exists()) {
        const aboutData = aboutDoc.data()
        const aboutHeroData = {
          title: aboutData.title || '',
          subtitle: aboutData.subtitle || '',
          accent: aboutData.accent || ''
        }
        setAboutHeroContent(aboutHeroData)
        // Populate form values
        setAboutHeroValue('title', aboutHeroData.title)
        setAboutHeroValue('accent', aboutHeroData.accent)
        setAboutHeroValue('subtitle', aboutHeroData.subtitle)
      }

      // Load Projects content
      const projectsDoc = await getDoc(doc(db, 'content', 'projects'))
      if (projectsDoc.exists()) {
        const projectsData = projectsDoc.data()
        setProjectsContent(projectsData)
        // Populate form values
        setProjectsValue('title', projectsData.title || '')
        setProjectsValue('accent', projectsData.accent || '')
        setProjectsValue('subtitle', projectsData.subtitle || '')
      }

      // Load Contact content
      const contactDoc = await getDoc(doc(db, 'content', 'contact'))
      if (contactDoc.exists()) {
        const contactData = contactDoc.data()
        setContactContent(contactData)
        // Populate form values
        setContactValue('title', contactData.title || '')
        setContactValue('accent', contactData.accent || '')
        setContactValue('subtitle', contactData.subtitle || '')
      }
    } catch (error) {
      console.error('Error loading content:', error)
      setSaveStatus('Error loading content')
    }
  }

  const handleLogin = async (data) => {
    setError('')
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      setIsLoggedIn(true)
      resetLogin()
      console.log('Login successful!')
    } catch (error) {
      setError('Invalid email or password. Please try again.')
      console.error('Login error:', error)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      setIsLoggedIn(false)
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // Save content functions with validation
  const saveHeroContent = async (data) => {
    try {
      setSaveStatus('Saving Hero content...')
      // Sanitize input data
      const sanitizedData = {
        title: data.title?.trim() || '',
        accent: data.accent?.trim() || '',
        subtitle: data.subtitle?.trim() || ''
      }
      await setDoc(doc(db, 'content', 'hero'), sanitizedData)
      setSaveStatus('Hero content saved successfully!')
      setTimeout(() => setSaveStatus(''), 3000)
    } catch (error) {
      console.error('Error saving hero content:', error)
      setSaveStatus('Error saving Hero content')
    }
  }

  const saveAboutHeroContent = async (data) => {
    try {
      setSaveStatus('Saving About Hero content...')
      // Sanitize input data
      const sanitizedData = {
        title: data.title?.trim() || '',
        accent: data.accent?.trim() || '',
        subtitle: data.subtitle?.trim() || ''
      }
      await setDoc(doc(db, 'content', 'about'), sanitizedData)
      setSaveStatus('About Hero content saved successfully!')
      setTimeout(() => setSaveStatus(''), 3000)
    } catch (error) {
      console.error('Error saving about hero content:', error)
      setSaveStatus('Error saving About Hero content')
    }
  }

  const saveProjectsContent = async (data) => {
    try {
      setSaveStatus('Saving Projects content...')
      // Sanitize input data
      const sanitizedData = {
        title: data.title?.trim() || '',
        accent: data.accent?.trim() || '',
        subtitle: data.subtitle?.trim() || ''
      }
      await setDoc(doc(db, 'content', 'projects'), sanitizedData)
      setSaveStatus('Projects content saved successfully!')
      setTimeout(() => setSaveStatus(''), 3000)
    } catch (error) {
      console.error('Error saving projects content:', error)
      setSaveStatus('Error saving Projects content')
    }
  }

  const saveContactContent = async (data) => {
    try {
      setSaveStatus('Saving Contact content...')
      // Sanitize input data
      const sanitizedData = {
        title: data.title?.trim() || '',
        accent: data.accent?.trim() || '',
        subtitle: data.subtitle?.trim() || ''
      }
      await setDoc(doc(db, 'content', 'contact'), sanitizedData)
      setSaveStatus('Contact content saved successfully!')
      setTimeout(() => setSaveStatus(''), 3000)
    } catch (error) {
      console.error('Error saving contact content:', error)
      setSaveStatus('Error saving Contact content')
    }
  }

  // Fetch all service cards from Firestore
  const fetchServiceCards = async () => {
    setServiceCardsLoading(true)
    try {
      const querySnapshot = await getDocs(collection(db, 'services'))
      const cards = []
      querySnapshot.forEach((doc) => {
        cards.push({ id: doc.id, ...doc.data() })
      })
      setServiceCards(cards)
    } catch (err) {
      setServiceCardsError('Failed to load service cards from Firestore.')
    }
    setServiceCardsLoading(false)
  }

  // Load service cards on mount and after login
  useEffect(() => {
    if (isLoggedIn) {
      fetchServiceCards()
    }
  }, [isLoggedIn])

  // Service Cards: Save a single card
  const handleSaveServiceCard = async (card, idx) => {
    try {
      let cardId = card.id
      if (cardId) {
        // Update existing card
        await setDoc(doc(db, 'services', cardId), { ...card, id: cardId })
      } else {
        // Add new card
        const docRef = await addDoc(collection(db, 'services'), card)
        cardId = docRef.id
      }
      // Refresh cards from Firestore
      const querySnapshot = await getDocs(collection(db, 'services'))
      const cards = []
      querySnapshot.forEach((doc) => {
        cards.push({ id: doc.id, ...doc.data() })
      })
      setServiceCards(cards)
      return true
    } catch (err) {
      throw new Error('Failed to save card.')
    }
  }

  // Service Cards: Remove handler (delete from Firestore)
  const handleRemoveServiceCard = async (idx) => {
    const card = serviceCards[idx]
    if (!card || !card.id) {
      setServiceCards(cards => cards.filter((_, i) => i !== idx))
      return
    }
    try {
      await deleteDoc(doc(db, 'services', card.id))
      await fetchServiceCards()
    } catch (err) {
      setServiceCardsError('Failed to delete card from Firestore.')
    }
  }

  // Fetch all project cards from Firestore
  const fetchProjectCards = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'))
      const cards = []
      querySnapshot.forEach((doc) => {
        cards.push({ id: doc.id, ...doc.data() })
      })
      // Debug: Log all cards and highlight missing fields
      cards.forEach((card, idx) => {
        if (!card.title || !card.icon || !card.description) {
          console.warn(`Project card at index ${idx} (id: ${card.id}) is missing required fields:`, card)
        }
      })
      setProjectCards(cards)
    } catch (err) {
      setProjectCardsError('Failed to load project cards from Firestore.')
    }
  }

  // Load project cards on mount and after login
  useEffect(() => {
    if (isLoggedIn) {
      fetchProjectCards()
    }
  }, [isLoggedIn])

  // Project Cards: Save a single card
  const handleSaveProjectCard = async (card, idx) => {
    setIsSavingProjectCards(true)
    setProjectCardsError('')
    setProjectCardsSuccess('')
    try {
      let cardId = card.id
      if (cardId) {
        // Update existing card
        await setDoc(doc(db, 'projects', cardId), { ...card, id: cardId })
      } else {
        // Add new card
        const docRef = await addDoc(collection(db, 'projects'), card)
        cardId = docRef.id
      }
      // Refresh cards from Firestore
      const querySnapshot = await getDocs(collection(db, 'projects'))
      const cards = []
      querySnapshot.forEach((doc) => {
        cards.push({ id: doc.id, ...doc.data() })
      })
      setProjectCards(cards)
      setProjectCardsSuccess(`Card "${card.title}" saved!`)
      setTimeout(() => setProjectCardsSuccess(''), 2000)
    } catch (err) {
      setProjectCardsError('Failed to save card.')
    }
    setIsSavingProjectCards(false)
  }

  // Project Cards: Remove handler (delete from Firestore)
  const handleRemoveProjectCard = async (idx) => {
    const card = projectCards[idx]
    if (!card || !card.id) {
    setProjectCards(cards => cards.filter((_, i) => i !== idx))
      return
    }
    try {
      await deleteDoc(doc(db, 'projects', card.id))
      // Refresh cards from Firestore
      const querySnapshot = await getDocs(collection(db, 'projects'))
      const cards = []
      querySnapshot.forEach((doc) => {
        cards.push({ id: doc.id, ...doc.data() })
      })
      setProjectCards(cards)
    } catch (err) {
      setProjectCardsError('Failed to delete card from Firestore.')
    }
  }

  // Project Cards: Remove and Add handlers
  const handleAddProjectCard = () => {
    setProjectCards(cards => [...cards, { title: '', description: '', icon: '' }])
  }

  // Show admin dashboard if logged in
  if (isLoggedIn) {
    return (
      <div className="admin-dashboard min-h-screen bg-gray-50 py-8 pt-24">
        <div className="admin-dashboard__container max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="admin-dashboard__header flex items-center justify-between mb-8">
            <div>
              <h1 className="admin-dashboard__title text-3xl font-bold text-gray-800">
                Admin Dashboard
              </h1>
              <p className="admin-dashboard__welcome text-gray-600 mt-2">
                Welcome back, {user?.email}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="admin-dashboard__logout px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>

          {/* Save Status */}
          {saveStatus && (
            <div className={`admin-dashboard__status mb-6 p-4 rounded-lg ${
              saveStatus.includes('Error') 
                ? 'bg-red-100 text-red-700 border border-red-200' 
                : saveStatus.includes('successfully')
                ? 'bg-green-100 text-green-700 border border-green-200'
                : 'bg-blue-100 text-blue-700 border border-blue-200'
            }`}>
              {saveStatus}
            </div>
          )}

          {/* Content Editing Sections */}
          <div className="admin-dashboard__sections space-y-8">
            
            {/* Hero Section Form - Home Page */}
            <div className="admin-section bg-white border rounded-lg p-6 shadow-sm">
              <h2 className="admin-section__title text-xl font-semibold text-gray-800 mb-4">
                Hero Section (Home Page)
              </h2>
              <form onSubmit={handleSubmitHero(saveHeroContent)} className="admin-section__form space-y-4">
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    {...registerHero('title', {
                      required: 'Title is required',
                      maxLength: {
                        value: 100,
                        message: 'Title must be less than 100 characters'
                      }
                    })}
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      heroErrors.title 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="e.g., Small Team,"
                  />
                  {heroErrors.title && (
                    <span className="form__error text-sm text-red-600 mt-1">{heroErrors.title.message}</span>
                  )}
                </div>
                
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Accent Text (colored part)
                  </label>
                  <input
                    type="text"
                    {...registerHero('accent', {
                      maxLength: {
                        value: 50,
                        message: 'Accent text must be less than 50 characters'
                      }
                    })}
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      heroErrors.accent 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="e.g., Big Solutions"
                  />
                  {heroErrors.accent && (
                    <span className="form__error text-sm text-red-600 mt-1">{heroErrors.accent.message}</span>
                  )}
                </div>
                
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Subtitle
                  </label>
                  <textarea
                    {...registerHero('subtitle', {
                      required: 'Subtitle is required',
                      maxLength: {
                        value: 300,
                        message: 'Subtitle must be less than 300 characters'
                      }
                    })}
                    rows="3"
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      heroErrors.subtitle 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="Brief description of your company..."
                  />
                  {heroErrors.subtitle && (
                    <span className="form__error text-sm text-red-600 mt-1">{heroErrors.subtitle.message}</span>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmittingHero}
                  className={`admin-section__save px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isSubmittingHero
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmittingHero ? 'Saving...' : 'Save Hero Content'}
                </button>
              </form>
            </div>

            {/* Hero Section Form - About Page */}
            <div className="admin-section bg-white border rounded-lg p-6 shadow-sm">
              <h2 className="admin-section__title text-xl font-semibold text-gray-800 mb-4">
                Hero Section (About Page)
              </h2>
              <form onSubmit={handleSubmitAboutHero(saveAboutHeroContent)} className="admin-section__form space-y-4">
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    {...registerAboutHero('title', {
                      required: 'Title is required',
                      maxLength: {
                        value: 100,
                        message: 'Title must be less than 100 characters'
                      }
                    })}
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      aboutHeroErrors.title 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="e.g., Where HVACR Excellence Meets Dodgers Spirit"
                  />
                  {aboutHeroErrors.title && (
                    <span className="form__error text-sm text-red-600 mt-1">{aboutHeroErrors.title.message}</span>
                  )}
                </div>
                
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Accent Text (colored part)
                  </label>
                  <input
                    type="text"
                    {...registerAboutHero('accent', {
                      maxLength: {
                        value: 50,
                        message: 'Accent text must be less than 50 characters'
                      }
                    })}
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      aboutHeroErrors.accent 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="e.g., Optional accent text"
                  />
                  {aboutHeroErrors.accent && (
                    <span className="form__error text-sm text-red-600 mt-1">{aboutHeroErrors.accent.message}</span>
                  )}
                </div>
                
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Subtitle
                  </label>
                  <textarea
                    {...registerAboutHero('subtitle', {
                      required: 'Subtitle is required',
                      maxLength: {
                        value: 300,
                        message: 'Subtitle must be less than 300 characters'
                      }
                    })}
                    rows="3"
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      aboutHeroErrors.subtitle 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="e.g., Chris Garcia, owner & director..."
                  />
                  {aboutHeroErrors.subtitle && (
                    <span className="form__error text-sm text-red-600 mt-1">{aboutHeroErrors.subtitle.message}</span>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmittingAboutHero}
                  className={`admin-section__save px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isSubmittingAboutHero
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmittingAboutHero ? 'Saving...' : 'Save Hero Content'}
                </button>
              </form>
            </div>

            {/* Hero Section Form - Projects Page */}
            <div className="admin-section bg-white border rounded-lg p-6 shadow-sm">
              <h2 className="admin-section__title text-xl font-semibold text-gray-800 mb-4">
                Hero Section (Projects Page)
              </h2>
              <form onSubmit={handleSubmitProjects(saveProjectsContent)} className="admin-section__form space-y-4">
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    {...registerProjects('title', {
                      required: 'Title is required',
                      maxLength: {
                        value: 100,
                        message: 'Title must be less than 100 characters'
                      }
                    })}
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      projectsErrors.title 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="e.g., Our Coolest Industrial Projects"
                  />
                  {projectsErrors.title && (
                    <span className="form__error text-sm text-red-600 mt-1">{projectsErrors.title.message}</span>
                  )}
                </div>
                
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Accent Text (colored part)
                  </label>
                  <input
                    type="text"
                    {...registerProjects('accent', {
                      maxLength: {
                        value: 50,
                        message: 'Accent text must be less than 50 characters'
                      }
                    })}
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      projectsErrors.accent 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="e.g., Optional accent text"
                  />
                  {projectsErrors.accent && (
                    <span className="form__error text-sm text-red-600 mt-1">{projectsErrors.accent.message}</span>
                  )}
                </div>
                
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Subtitle
                  </label>
                  <textarea
                    {...registerProjects('subtitle', {
                      required: 'Subtitle is required',
                      maxLength: {
                        value: 300,
                        message: 'Subtitle must be less than 300 characters'
                      }
                    })}
                    rows="3"
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      projectsErrors.subtitle 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="e.g., A few of the big, weird, and wonderful things..."
                  />
                  {projectsErrors.subtitle && (
                    <span className="form__error text-sm text-red-600 mt-1">{projectsErrors.subtitle.message}</span>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmittingProjects}
                  className={`admin-section__save px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isSubmittingProjects
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmittingProjects ? 'Saving...' : 'Save Hero Content'}
                </button>
              </form>
            </div>

            {/* Hero Section Form - Contact Page */}
            <div className="admin-section bg-white border rounded-lg p-6 shadow-sm">
              <h2 className="admin-section__title text-xl font-semibold text-gray-800 mb-4">
                Hero Section (Contact Page)
              </h2>
              <form onSubmit={handleSubmitContact(saveContactContent)} className="admin-section__form space-y-4">
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    {...registerContact('title', {
                      required: 'Title is required',
                      maxLength: {
                        value: 100,
                        message: 'Title must be less than 100 characters'
                      }
                    })}
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      contactErrors.title 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="e.g., Contact AirDoctor HVACR"
                  />
                  {contactErrors.title && (
                    <span className="form__error text-sm text-red-600 mt-1">{contactErrors.title.message}</span>
                  )}
                </div>
                
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Accent Text (colored part)
                  </label>
                  <input
                    type="text"
                    {...registerContact('accent', {
                      maxLength: {
                        value: 50,
                        message: 'Accent text must be less than 50 characters'
                      }
                    })}
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      contactErrors.accent 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="e.g., Let's Connect!"
                  />
                  {contactErrors.accent && (
                    <span className="form__error text-sm text-red-600 mt-1">{contactErrors.accent.message}</span>
                  )}
                </div>
                
                <div className="form__field">
                  <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                    Subtitle
                  </label>
                  <textarea
                    {...registerContact('subtitle', {
                      required: 'Subtitle is required',
                      maxLength: {
                        value: 300,
                        message: 'Subtitle must be less than 300 characters'
                      }
                    })}
                    rows="3"
                    className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      contactErrors.subtitle 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="e.g., Chris is ready to help with your next project..."
                  />
                  {contactErrors.subtitle && (
                    <span className="form__error text-sm text-red-600 mt-1">{contactErrors.subtitle.message}</span>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmittingContact}
                  className={`admin-section__save px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isSubmittingContact
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmittingContact ? 'Saving...' : 'Save Hero Content'}
                </button>
              </form>
            </div>

            {/* Service Cards Management Section */}
            <div className="admin-section bg-white border rounded-lg p-6 shadow-sm">
              <h2 className="admin-section__title text-xl font-semibold text-gray-800 mb-4">
                Project Cards (Home Page)
              </h2>
              {serviceCardsLoading ? (
                <div className="loading-state flex items-center justify-center p-8">
                  <div className="loading-state__spinner w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="loading-state__text ml-3 text-gray-600">Loading cards...</span>
                </div>
              ) : (
                <ServiceCardsForm
                  defaultValues={{ cards: serviceCards }}
                  onSaveCard={handleSaveServiceCard}
                  onRemove={handleRemoveServiceCard}
                />
              )}
            </div>

            {/* Project Cards Management Section */}
            <div className="admin-section bg-white border rounded-lg p-6 shadow-sm">
              <h2 className="admin-section__title text-xl font-semibold text-gray-800 mb-4">
                Project Cards (Projects Page)
              </h2>
              <ServiceCardsForm
                defaultValues={{ cards: projectCards }}
                onSaveCard={handleSaveProjectCard}
                isLoading={isSavingProjectCards}
                error={projectCardsError}
                successMessage={projectCardsSuccess}
                onRemove={handleRemoveProjectCard}
                onAdd={handleAddProjectCard}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show login form if not logged in
  return (
    <div className="admin-login min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 pt-24">
      <div className="admin-login__container max-w-md w-full">
        <div className="admin-login__card bg-white rounded-lg shadow-lg p-8">
          <h1 className="admin-login__title text-2xl font-bold text-center text-gray-800 mb-8">
            Admin Login
          </h1>
          
          {error && (
            <div className="admin-login__error bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmitLogin(handleLogin)} className="admin-login__form space-y-6">
            <div className="form__field">
              <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...registerLogin('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Enter a valid email'
                  }
                })}
                className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  loginErrors.email 
                    ? 'border-red-300 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="admin@example.com"
              />
              {loginErrors.email && (
                <span className="form__error text-sm text-red-600 mt-1">{loginErrors.email.message}</span>
              )}
            </div>
            
            <div className="form__field">
              <label className="form__label block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                {...registerLogin('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
                className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  loginErrors.password 
                    ? 'border-red-300 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="••••••••"
              />
              {loginErrors.password && (
                <span className="form__error text-sm text-red-600 mt-1">{loginErrors.password.message}</span>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isLoggingIn}
              className={`admin-login__submit w-full py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isLoggingIn
                  ? 'admin-login__submit_loading bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'admin-login__submit_default bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isLoggingIn ? (
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