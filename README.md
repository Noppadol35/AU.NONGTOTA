# AU.NONGTOTA - Toyota Car Repair Landing Page

A modern, professional, and SEO-friendly landing page for AU.NONGTOTA Toyota car repair shop built with Next.js 14 and TypeScript.

## Features

- **Modern Design**: Clean, automotive-themed design with Toyota brand colors
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper heading hierarchy, meta tags, and structured data
- **Interactive Components**: Sticky navigation, review slider, contact forms
- **8 Key Sections**:
  1. Header & Navigation (sticky with CTA)
  2. Hero Section (with background image and CTAs)
  3. Services Section (4 service cards with icons)
  4. Promotions Section (special offers with badges)
  5. Why Choose Us Section (4 key benefits)
  6. Customer Reviews Section (testimonial slider)
  7. About Us Section (company story with embedded map)
  8. Contact Section (contact info, social links, form, map)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Color Palette

- **Toyota Red**: #EB0A1E
- **Toyota Black**: #1C1C1C
- **Silver**: #C0C0C0
- **Gray**: #6B7280
- **Light Gray**: #F3F4F6

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
AU.NONGTOTA/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── Header.tsx           # Navigation header with sticky behavior
│   ├── HeroSection.tsx      # Hero section with background image
│   ├── ServicesSection.tsx  # Services grid with icons
│   ├── PromotionsSection.tsx # Special offers section
│   ├── WhyChooseUsSection.tsx # Benefits section
│   ├── ReviewsSection.tsx   # Customer testimonials slider
│   ├── AboutSection.tsx     # About us with embedded map
│   ├── ContactSection.tsx   # Contact form and information
│   └── Footer.tsx           # Footer with links and info
├── public/                  # Static assets (images, favicon)
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Key Features

### Responsive Design
- Mobile-first approach with breakpoints for tablet and desktop
- Collapsible mobile navigation menu
- Optimized layouts for all screen sizes

### SEO Optimization
- Proper HTML semantic structure
- Meta tags for search engines and social media
- Structured heading hierarchy (H1, H2, H3)
- Schema-friendly review markup

### Interactive Elements
- Sticky navigation that changes on scroll
- Customer review slider with navigation
- Hover effects on cards and buttons
- Smooth scrolling between sections

### Contact Integration
- Click-to-call phone numbers
- Contact form with service selection
- Social media links (Facebook, Instagram, YouTube, LINE)
- Embedded Google Maps

## Customization

### Colors
Update the Toyota brand colors in `tailwind.config.js`:
```javascript
colors: {
  toyota: {
    red: '#EB0A1E',
    black: '#1C1C1C',
    silver: '#C0C0C0',
    gray: '#6B7280',
    lightgray: '#F3F4F6',
  },
}
```

### Content
- Update contact information in `ContactSection.tsx`
- Modify services in `ServicesSection.tsx`
- Change promotions in `PromotionsSection.tsx`
- Update customer reviews in `ReviewsSection.tsx`

### Images
Replace placeholder images with actual photos:
- Hero background image
- Service section images
- About us workshop photos
- Customer profile pictures

## Deployment

1. **Build for Production**:
   ```bash
   npm run build
   ```

2. **Start Production Server**:
   ```bash
   npm start
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images with Next.js Image component
- Lazy loading for maps and images
- Minimal JavaScript bundle
- CSS optimization with Tailwind

## Contact

For support or questions about this landing page:
- **Email**: nongtota.mechanic@gmail.com
---

© 2025 AU.NONGTOTA. All rights reserved.
