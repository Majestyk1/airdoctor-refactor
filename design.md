Design Rule Set for AirDoctorHVAC Rebuild (Mobile-First TailwindCSS)

1. Mobile-First Philosophy

Base Styles Apply to Mobile

-Write default Tailwind classes without prefixes for the smallest viewport (mobile).
-Use responsive prefixes (sm:, md:, lg:, xl:) to enhance layouts on larger screens.

Progressive Enhancement

-Start with a single-column layout on mobile, then add multi-column or grid layouts at md and above.

Touch-Friendly UI

-Buttons and interactive elements should be at least h-12 and px-4 for tappable areas.

Simplified Navigation

-Use a collapsible hamburger menu for mobile; expand to horizontal nav at md.

2. TailwindCSS Breakpoints & Responsive Classes

Breakpoint   Prefix   Min-Width   Use Case

Mobile      (none)       0        Default, mobile-first styling

Small         sm:       640px     Small tablets, large phones

Medium        md:       768px     Tablets, small laptops

Large         lg:       1024px    Desktop screens

Extra Large   xl:       1280px    Wide desktops

2XL          2xl:       1536px    Very wide screens

Example:

<div class="p-4 bg-white sm:p-6 md:grid md:grid-cols-2 lg:flex lg:space-x-4">
  <!-- Mobile: padding 4, white bg → Small: p-6 → Medium: two-column grid → Large: flex with gap → -->
</div>

3. Layout & Component Design

Container Widths

-Use max-w-screen-sm for mobile containers by default.
-Increase to max-w-screen-md at md:, max-w-screen-lg at lg: for readability.

Grid & Flex

-Prefer flex flex-col on mobile; switch to grid grid-cols-2/3 or flex-row at md.

Spacing Scale

-Use Tailwind’s spacing scale (space-y-4, gap-6) consistently. Avoid custom values.

Typography

-Default to text-base on mobile; scale up at md:text-lg, lg:text-xl for headings.

Buttons & CTAs

-Default: w-full text-center py-3 (mobile full-width).
-At md: switch to w-auto and inline display.

4. Navigation & Header

Mobile:

-fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white shadow
-Hamburger toggles translate-x-0/-translate-x-full for side drawer.

Desktop (md:):

-static bg-transparent flex-row space-x-6 p-6 for horizontal nav.

5. Images & Media

Responsive Images

-Use w-full h-auto object-cover for image blocks.
-Define aspect ratios with aspect-w-16 aspect-h-9 on media containers.

Lazy Loading

-Add loading="lazy" to <img> tags for performance on mobile.

6. Accessibility & Contrast

Tap Targets:

-Ensure min-h-12 and min-w-12 for tappable elements.

Color Contrast:

-Text ratio at least 4.5:1 against backgrounds (use text-gray-800 on bg-white).

Focus States:

-Use focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 on buttons/links.

7. Design Tokens & Branding

Color Palette:

-Primary: blue-600, blue-700; Secondary: gray-200, gray-800.

Rounded Corners:

-Use rounded-lg for cards/buttons; rounded-full for avatars/icons.

Shadows:

-Default: shadow-md; on hover hover:shadow-lg.

8. Integration with Planning.md

-Follow the Component & Hook Plan in planning.md for file structure.
-Apply these mobile-first Tailwind rules when writing each component (e.g. Hero.jsx, ServiceCard.jsx).
-Use Brave MCP to research any specific responsive patterns or component examples when needed.

