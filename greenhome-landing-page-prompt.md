# GreenHome Real Estate — Landing Page Build Prompt

Build a pixel-accurate, fully responsive real estate landing page for "GreenHome Real Estate" using **Next.js 14 (App Router)** and **Tailwind CSS**. Match the reference design exactly in layout, spacing, typography, and color palette. Use `next/image` for all images (use high-quality Unsplash placeholder URLs for houses/properties/avatars) and `lucide-react` for icons.

## Global Design System

- **Primary green:** `#1B5E3A` (dark forest green — used for headings, primary buttons, footer background)
- **Accent green:** `#4CAF50` / `#5CB85C` (brighter green — used for CTA buttons, badges, links, icons)
- **Background tones:** white (`#FFFFFF`) for main sections, very light green/gray (`#F7FAF8`) for alternating sections
- **Text colors:** dark navy/charcoal (`#1A2E35`) for headings, gray (`#6B7280`) for body copy
- **Font:** a clean modern sans-serif (e.g., "Inter" or "Poppins") — bold weights for headings, regular for body
- **Border radius:** consistently rounded corners (rounded-xl / rounded-2xl) on cards, buttons, and inputs
- **Shadows:** soft drop shadows on cards and the floating search bar

## Section-by-Section Breakdown

### 1. Header (sticky, white background)
- Left: logo — a small house icon in a green rounded-square badge, "GreenHome" in bold dark text + "REAL ESTATE" in small green uppercase letters beneath
- Center nav: Home (active, underlined green), Properties, About Us, Services, Blog, Contact
- Right: search icon + a pill-shaped dark-green "Get Started" button with an arrow icon

### 2. Hero Section (split layout, diagonal green shape dividing left/right)
- Left column:
  - Small green uppercase eyebrow text: "YOUR DREAM HOME AWAITS"
  - Large bold heading (3 lines, dark navy, last line/phrase in accent green): "Find the Perfect Property for a **Better Tomorrow**"
  - Gray paragraph: "We help you buy, sell and rent properties with ease. Discover the best homes, apartments, and investment opportunities across the city."
  - Two buttons: solid dark-green pill "Browse Properties →" and outlined pill "Contact Us"
  - Row of 3 trust indicators with small icons: "Trusted & Secure Transactions", "Professional Support", "Wide Range of Properties"
- Right column: large rounded-corner photo of a modern two-story luxury house with palm trees, car in driveway, warm evening lighting
- Overlapping the image, bottom-right: a small white floating card with a house icon, "Your Perfect Home Is Just a Click Away" text, and a small circular green arrow button

### 3. Floating Search Bar (overlapping hero and next section, white card, shadow, rounded-2xl)
- 4 horizontal segments divided by thin vertical lines: "Property Type" dropdown (Any Type), "Location" dropdown (Any Location), "Price Range" dropdown (Any Price), and a solid dark-green "Search" button with magnifying glass icon on the far right

### 4. Featured Properties Section
- Small green eyebrow: "FEATURED PROPERTIES"
- Heading: "Discover Our Best Properties" with a "View All Properties →" link aligned right
- 4-column grid of property cards, each with:
  - Property photo (rounded top corners) with a colored pill badge top-left ("For Sale" in dark green, or "For Rent" in a different shade) and a heart/favorite icon top-right in a white circle
  - Price in bold green (e.g., "₦85,000,000" or "₦2,500,000/year")
  - Property title (e.g., "4 Bedroom Detached Duplex")
  - Location with pin icon (e.g., "Lekki, Lagos")
  - Row of icon stats: beds, baths, square footage
- Use these 4 sample listings: 4-Bed Duplex Lekki (₦85M, For Sale), 3-Bed Apartment Ikoyi (₦2.5M/yr, For Rent), 3-Bed Bungalow Abuja (₦45M, For Sale), 2-Bed Apartment Victoria Island (₦1.2M/yr, For Rent)

### 5. About Section (light gray-green background)
- Left: large rounded property photo with an overlapping small dark-green card at bottom reading "Trusted Real Estate Partner — Since 2015" with a heart icon and checkmark badge
- Right: green eyebrow "ABOUT US", bold heading "Building Dreams, One Property at a Time", descriptive paragraph, then 3 stat columns in bold green numbers: "10+ Years Experience", "500+ Happy Clients", "1,000+ Properties Sold & Rented", followed by a "Learn More →" pill button

### 6. Services Section (white background)
- Green eyebrow "OUR SERVICES", heading "What We Offer", with a short paragraph to the right of the heading
- 5-column grid of service cards (light gray/green rounded boxes), each with a green icon, bold title, and short description: Property Sales, Property Rentals, Property Management, Investment Advisory, Real Estate Consulting

### 7. Testimonials Section (light mint-green background)
- Left: green eyebrow "TESTIMONIALS", heading "What Our Clients Say", short description
- Right: 2 white rounded testimonial cards side by side, each with a circular avatar photo, quoted text, client name in bold, and role below in gray (e.g., "Emmanuel Okafor — Home Buyer", "Blessing Adamu — Tenant")
- Small carousel dots beneath, centered

### 8. CTA Banner (full-width, gradient green background, diagonal/angled shape)
- Left: small circular white house icon, bold white heading "Ready to Find Your Dream Property?", subtext below
- Right: white pill button "Contact Us →"

### 9. Footer (dark green/near-black background, white text)
- 4 columns:
  1. Logo + short tagline ("Your trusted partner in real estate. Buy. Sell. Rent. Invest.")
  2. "Quick Links": Home, Properties, About Us, Services, Blog, Contact
  3. "Contact Us": phone, email, address, business hours — each with a small icon
  4. "Newsletter": short text + email input field with a green "Subscribe" button
- Bottom bar: copyright text left, social media icons (Facebook, X, Instagram, LinkedIn, YouTube) right, separated by a thin divider line

## Technical Requirements

- Fully responsive: stack to single column on mobile, adjust grids to 2-col on tablet
- Use semantic HTML and accessible markup (alt text, aria-labels on icon buttons)
- Componentize: `Header`, `Hero`, `SearchBar`, `PropertyCard`, `FeaturedProperties`, `AboutSection`, `ServicesSection`, `Testimonials`, `CTABanner`, `Footer`
- Use Tailwind's `container` and consistent horizontal padding (`px-6 md:px-12 lg:px-24`) across sections
- Property card data should be an array of objects mapped into `PropertyCard` components, not hardcoded per card
- Include hover states on buttons and cards (subtle scale/shadow transitions)
