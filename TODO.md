# TODO: Firebase-Powered CMS for AirDoctorHVAC

## 1. Firebase Project Setup

- [x] Create a new Firebase project at [firebase.google.com](https://firebase.google.com/)
- [x] Enable **Firestore Database** (for text/content)
- [x] Enable **Firebase Storage** (for image uploads)
- [x] Enable **Firebase Authentication** (for admin login)
    - [x] Set up Email/Password sign-in

---

## 2. Define Content Structure

- [x] List all site sections that need to be editable (e.g. Hero, About, Services, Projects, Contact)
- [x] For each section, define what fields are editable (e.g. title, subtitle, images, descriptions)
- [x] Design Firestore collections/documents for each section, e.g.:
    - `/content/hero`
    - `/content/about`
    - `/content/services`
    - `/content/projects`
    - `/content/contact`

---

## 3. Integrate Firebase with React App

- [x] Install Firebase SDK:  
  `npm install firebase`
- [x] Create a `src/utils/firebase.js` to initialize Firebase and export Firestore, Storage, and Auth instances
- [x] Add environment variables for Firebase config (use `.env`)

---

## 4. Build the Admin Page

- [ ] Create a new route/page: `/admin`
- [ ] Add login form (email/password) using Firebase Auth
- [ ] After login, show content editing forms for each section:
    - [ ] Text fields for titles, subtitles, etc.
    - [ ] Image upload fields (upload to Firebase Storage, save URL in Firestore)
- [ ] Add "Save" buttons to update Firestore
- [ ] Show success/error messages

---

## 5. Secure the Admin Page

- [ ] Restrict `/admin` route to authenticated users only
- [ ] Hide admin UI from public users
- [ ] (Optional) Add role-based access if more than one admin

---

## 6. Update Site Components to Use Firebase Content

- [ ] Refactor components (Hero, About, etc.) to fetch content from Firestore
- [ ] Show loading spinners while fetching
- [ ] Handle errors gracefully (show fallback content or error message)
- [ ] Use image URLs from Firestore/Storage

---

## 7. Test the CMS Workflow

- [ ] Test admin login/logout
- [ ] Test editing and saving content
- [ ] Test image uploads and display
- [ ] Test public site updates instantly after content changes
- [ ] Test on mobile and desktop

---

## 8. Polish & Deploy

- [ ] Add basic styling to admin page (use BEM + Tailwind)
- [ ] Add accessibility features (labels, focus states, ARIA)
- [ ] Deploy updated site (Vercel, Netlify, etc.)
- [ ] (Optional) Set up Firebase Hosting for admin-only preview

---

## 9. Documentation

- [ ] Write a short guide for your uncle:
    - How to log in
    - How to edit content
    - How to upload images
    - Who to contact for help

---

## 10. (Optional) Advanced Features

- [ ] Add version history/undo for content
- [ ] Add support for multiple languages
- [ ] Add analytics for admin actions
- [ ] Add notifications for content changes

---