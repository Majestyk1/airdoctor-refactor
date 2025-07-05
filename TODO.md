# AirDoctorHVAC CMS Implementation Plan

## Overview
Creating a Firebase-based CMS for the AirDoctorHVAC website to allow content management through an admin page without touching code.

## Content Structure

### Hero Sections (Standardized across all pages)
All hero sections will have identical fields:
- **title**: Main heading text
- **accent**: Colored/highlighted portion of title (optional)
- **subtitle**: Descriptive text below title

Pages with hero sections:
- Home Page (`/`) - Firestore: `content/hero`
- About Page (`/about`) - Firestore: `content/about` (hero fields only)
- Projects Page (`/projects`) - Firestore: `content/projects`
- Contact Page (`/contact`) - Firestore: `content/contact`

### About Bio Content
Static content in the About page component:
- **bio**: Full biographical text about company/owner (hardcoded in component)
- Not managed through CMS for simplicity

### Individual Service Cards
Each service will be a separate document:
- Firestore: `services/{serviceId}`
- Fields: title, description, icon, features[]

### Individual Project Cards  
Each project will be a separate document:
- Firestore: `projects/{projectId}`
- Fields: title, description, image, category, completionDate

## Implementation Steps

### ✅ Step 1: Firebase Project Setup
- [x] Create Firebase project
- [x] Enable Firestore Database
- [x] Enable Firebase Storage
- [x] Enable Authentication
- [x] Set up admin user account

### ✅ Step 2: Install Firebase SDK
- [x] Install Firebase SDK: `npm install firebase`
- [x] Create `src/utils/firebase.js` configuration file
- [x] Set up environment variables for Firebase config

### ✅ Step 3: Basic Firestore Structure
- [x] Create initial Firestore collections and documents
- [x] Set up security rules for read/write access
- [x] Test basic read/write operations

### ✅ Step 4: Admin Authentication & Dashboard
- [x] Create `/admin` route with authentication
- [x] Build login form with email/password
- [x] Create admin dashboard with content editing forms
- [x] Implement save functionality for all content types

### ✅ Step 5: Security & Validation
- [x] Implement proper form validation (react-hook-form)
- [x] Add input sanitization (trim, length limits)
- [x] Add admin-only route protection
- [x] Set up proper Firestore security rules (enhanced)

**Enhanced Security Rules Include:**
- **Authentication Requirements**: Only authenticated users can write
- **Admin-Only Write Access**: Specific admin email check for content management
- **Data Validation**: Field requirements, type checking, and length limits
- **Read Access Control**: Public read for content, no read access for admin collections
- **Audit Trail**: Automatic timestamps and user tracking
- **Rate Limiting**: Built-in protection against spam/abuse
- **Field-Level Security**: Validates required fields and data types

### ✅ Step 6: Connect Public Site to CMS
- [x] Update Home.jsx to fetch hero content from Firestore
- [x] Update About.jsx to fetch hero and bio content
- [x] Update Projects.jsx to fetch hero content  
- [x] Update Contact.jsx to fetch hero content
- [x] Add loading states and error handling
- [x] Implement fallback content for offline/error states

### 📝 Step 7: Individual Cards Management
- [x] Create service card management in admin(home/projects page)
- [x] Update public components to fetch individual cards(home page is fetching data correctly project page still needs to be done before cheking this task off)
- [ ] Add image upload functionality for projects

### 🚀 Step 8: Advanced Features
- [ ] Image upload and management
- [ ] Content versioning/history
- [ ] Preview changes before publishing
- [ ] Bulk import/export functionality
- [ ] Analytics and usage tracking

## Current Status: ✅ SECURE CMS COMPLETE

The core CMS functionality with security features is now complete and working:

### ✅ What's Working:
- **Admin Authentication**: Secure login with Firebase Auth
- **Content Management**: Edit all hero sections with validation
- **Live Updates**: Changes appear immediately on public site
- **Error Handling**: Proper loading states and error messages
- **Form Validation**: react-hook-form with input sanitization and length limits
- **Admin Protection**: Route-level authentication protection
- **Standardized Forms**: All hero sections use identical fields (title, accent, subtitle)
- **Security**: Input sanitization and proper error handling

### 📋 Next Priority:
**Step 7: Individual Cards Management** - This will allow editing of individual service and project cards rather than just the hero sections.

### 🎯 Ready for Production:
The current implementation provides a fully functional CMS for managing the main content sections. Your uncle can now:
1. Log into `/admin` 
2. Edit hero sections for all pages
3. Update the about bio content
4. See changes live on the website immediately

The remaining steps are enhancements that can be added over time as needed.