# Fitness Sports Center — Web Development Project

> A modern, responsive promotional website built for a fitness gym as part of a **Web Development Internship Evaluation**.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-EF0078?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

---

## Live Links

| Resource | URL |
|---|---|
| Live Website | [fitness-sports-center-three.vercel.app](https://fitness-sports-center-three.vercel.app/) |
| GitHub Repository | [github.com/akith22/fitness-sports-center](https://github.com/akith22/fitness-sports-center.git) |
| Figma Design | [View Design File](https://www.figma.com/design/wdaROXh9pR2r7h0B6fuJfD/FitnessSportCenter?node-id=0-1&p=f&t=RJOK06d9rtRk3tUV-0) |

---

## Project Overview

A local fitness brand needed a compelling online presence to support the launch of their new gym. The goal was to build a **clean, engaging, and user-friendly** promotional site that communicates their brand identity and converts visitors into members.

This project covers the full frontend lifecycle — from Figma design to pixel-perfect implementation — delivering a dark-themed, performance-optimised website with smooth animations and a fully responsive layout.

---

## Features

### Core Sections
| Section | Description |
|---|---|
| **Hero** | Bold landing section with a clear call-to-action |
| **About** | Brand story and gym philosophy |
| **Services** | Personal Training, Strength Training, Cardio, Nutrition |
| **Facilities** | Visual showcase of gym equipment and spaces |
| **Membership Plans** | Basic, Pro, and Elite tiers with pricing |
| **Trainers** | Realistic professional trainer profiles |
| **Contact** | Inquiry form with validation and success feedback |
| **Footer** | Organised navigation links and brand info |

### Contact Form
- Name, Email, and Message fields
- Client-side input validation
- Simulated submission with success confirmation message

### Navigation & UX
- Sticky navigation bar that follows the user as they scroll
- Smooth scrolling between all sections
- Section-based anchor navigation
- Fully functional footer links

### Interactions & Animations
- **Scroll-triggered animations** powered by Framer Motion
- Card hover effects with smooth transitions
- Modal popup interactions for trainer and plan details

### Responsiveness
- Fully adaptive across **mobile**, **tablet**, and **desktop**
- Flexible layouts using Tailwind CSS utility classes
- Touch-friendly interaction targets

---

## Design

The visual design was created in **Figma** before development began, ensuring a structured workflow and clear design direction.

- **Dark aesthetic** with gold accent colour (`#D4A017`)
- **Card-based** component layout system
- Clean, modern fitness-themed typography
- Pixel-perfect implementation from Figma specs

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18 + Vite** | Component-based UI architecture, fast dev server |
| **TypeScript** | Type safety and improved developer experience |
| **Tailwind CSS** | Utility-first responsive styling |
| **Framer Motion** | Declarative scroll and interaction animations |
| **React Router DOM** | Client-side routing |

---

## Installation & Setup

**Prerequisites:** Node.js `v18+` and npm

```bash
# 1. Clone the repository
git clone https://github.com/akith22/fitness-sports-center.git

# 2. Navigate into the project directory
cd fitness-sports-center

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## Requirements Coverage

| Requirement | Implementation |
|---|---|
| **UI/UX Design** | Figma-first design approach; dark theme with gold accents; cohesive visual language throughout |
| **Responsiveness** | Tailwind CSS breakpoints applied across all sections; tested on mobile, tablet, and desktop |
| **Functionality** | All sections rendered, form validation active, navigation and anchors fully operational |
| **Code Quality** | TypeScript throughout; component-based file structure; clean separation of concerns |
| **Component Architecture** | Each section is an isolated React component, enabling easy maintainability and reuse |

---

## Bonus Features

- Scroll-triggered reveal animations — content animates into view as users scroll
- Enhanced sticky navigation with smooth section transitions
- Interactive UI components — modals, hover cards, animated CTA buttons
- Tight Figma-to-code fidelity throughout

---

## Notes

- This is a **frontend-only** project — no backend or database is connected.
- Form submissions are **simulated** on the client side.
- Developed as part of a **Web Development Internship Evaluation**.

---

