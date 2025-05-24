# AirDoctorHVAC Design System
## Mobile-First Tailwind CSS + BEM Architecture

## 1. Architecture Overview

### Hybrid BEM + Tailwind Approach
- **BEM Classes**: Semantic structure and component identity
- **Tailwind Utilities**: All visual styling and layout
- **CSS Files**: Minimal - only complex styles Tailwind can't handle
- **Result**: Clean, maintainable, and rapid development

### Example Implementation
```jsx
<div className="service-card border rounded-lg p-6 bg-white hover:shadow-md">
  <div className="service-card__icon-wrapper h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
    <Icon className="service-card__icon h-6 w-6 text-blue-600" />
  </div>
</div>
```

## 2. Mobile-First Foundation

### Progressive Enhancement Philosophy
- Base styles target mobile (no prefixes)
- Enhance for larger screens using responsive prefixes
- Start simple, add complexity at breakpoints

### Touch-Friendly Standards
- Minimum tap targets: `h-12 w-12` (48px)
- Button padding: `px-4 py-3` minimum
- Interactive spacing: `gap-4` or larger

## 3. Responsive Breakpoints

| Breakpoint | Prefix | Min-Width | Use Case |
|------------|--------|-----------|----------|
| Mobile | (none) | 0px | Default styling |
| Small | `sm:` | 640px | Large phones, small tablets |
| Medium | `md:` | 768px | Tablets, small laptops |
| Large | `lg:` | 1024px | Desktop screens |
| Extra Large | `xl:` | 1280px | Wide desktops |
| 2XL | `2xl:` | 1536px | Ultra-wide screens |

### Responsive Pattern
```jsx
<div className="p-4 bg-white sm:p-6 md:grid md:grid-cols-2 lg:flex lg:gap-6">
  {/* Mobile: stack + padding → Small: more padding → Medium: 2-col grid → Large: flex row */}
</div>
```

## 4. BEM Naming Convention

### Structure
- **Block**: Component name (`navbar`, `hero`, `service-card`)
- **Element**: Sub-components with `__` (`navbar__logo`, `hero__title`)
- **Modifier**: Variations with `--` (`navbar--scrolled`, `hero__slide--active`)

### Implementation Strategy
- BEM classes provide semantic meaning
- Tailwind classes handle all visual properties
- Combine both in className strings
- Keep CSS files minimal or empty

## 5. Layout & Component Patterns

### Container Strategy
```jsx
// Mobile-first container approach
<div className="container mx-auto px-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
```

### Grid & Flex Patterns
```jsx
// Mobile: stack → Desktop: grid
<div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">

// Mobile: full width → Desktop: inline
<button className="w-full py-3 md:w-auto md:px-6">
```

### Typography Scale
```jsx
// Responsive typography
<h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
<p className="text-base md:text-lg">
```

## 6. Component-Specific Guidelines

### Navigation
```jsx
// Mobile: fixed header with drawer
<header className="navbar fixed top-0 w-full z-50 bg-white shadow-md md:bg-transparent md:shadow-none">
  
// Desktop: horizontal navigation
<nav className="navbar__desktop-nav hidden md:flex md:items-center md:gap-6">
```

### Cards & Content
```jsx
// Consistent card pattern
<div className="component-name border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
```

## 7. Visual Design Tokens

### Color System
- **Primary**: `blue-600`, `blue-700` (CTAs, links)
- **Secondary**: `gray-600`, `gray-800` (text)
- **Backgrounds**: `white`, `gray-50`, `gray-100`
- **Borders**: `gray-200`, `gray-300`

### Spacing Scale
- **Component gaps**: `gap-4`, `gap-6`
- **Section padding**: `py-12`, `py-16`
- **Container padding**: `px-4`, `px-6`

### Border Radius
- **Cards/buttons**: `rounded-lg`
- **Icons/avatars**: `rounded-full`
- **Small elements**: `rounded-md`

### Shadows
- **Default**: `shadow-md`
- **Hover**: `hover:shadow-lg`
- **Focus**: `focus:ring-2 focus:ring-blue-500`

## 8. Accessibility Standards

### Interactive Elements
```jsx
// Minimum requirements
<button className="min-h-12 min-w-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">

// Touch-friendly spacing
<nav className="flex gap-4"> {/* Minimum 16px between targets */}
```

### Color Contrast
- Text on white: `text-gray-800` (minimum 4.5:1)
- Links: `text-blue-600 hover:text-blue-700`
- Disabled states: `text-gray-400`

## 9. Custom Utilities & Extensions

### When to Create Custom Utilities
- Complex properties Tailwind doesn't cover
- Frequently used combinations
- Brand-specific values

### Implementation
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        'xs': '2px',
        '4': '4px', // Custom value
      }
    }
  }
}
```

### Documentation
- Document all custom utilities
- Provide usage examples
- Note when to use vs. standard utilities

## 10. Implementation Results

### CSS Reduction Achieved
- **App.css**: Deleted → Tailwind layout utilities
- **Hero.css**: Deleted → `backdrop-blur-sm` replacement
- **Navbar.css**: 254 lines → 0 lines
- **ServiceCard.css**: 65 lines → 0 lines  
- **Home.css**: Deleted → Tailwind grid/typography
- **Total**: ~400+ lines of CSS eliminated

### Benefits Realized
- ✅ Semantic HTML structure (BEM)
- ✅ Rapid development (Tailwind utilities)
- ✅ Consistent design system
- ✅ Minimal maintenance overhead
- ✅ Mobile-first responsive design
- ✅ Excellent developer experience