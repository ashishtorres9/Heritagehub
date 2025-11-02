# Heritage Hub Nepal - Mushroom Farming Platform

## Overview

Heritage Hub Nepal is a sustainable ventures initiative focused on bamboo-powered mushroom farming in Nepal. The platform is a full-stack web application that provides information about mushroom farming models, allows users to calculate potential returns, and facilitates contact with the business through a form submission system. The application serves as a landing page and lead generation tool for the company's mushroom farming business, which offers both self-managed and Heritage Hub-managed farm models across different land sizes (4, 5, and 6 Anna plots).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight routing library. The application follows a multi-page structure with dedicated routes for Home, Farm Models, About, Vision, and Contact pages.

**UI Component Library**: Built on shadcn/ui components (Radix UI primitives) with Tailwind CSS for styling. The design system follows a "New York" style variant with custom color theming based on nature-inspired colors (Bamboo Green #2E5E3E, Terracotta #C44536, Cream #F8F4E9).

**Typography System**: Uses Playfair Display (serif) for headings and Inter (sans-serif) for body text, loaded from Google Fonts. This creates a balance between professional authority and readability.

**State Management**: React Query (@tanstack/react-query) for server state management. Form state is managed locally using react-hook-form with Zod schema validation.

**Design Philosophy**: The application follows a "Reference-Based Approach" drawing from modern agricultural tech and sustainable business landing pages. Core principles include trust through clarity, nature-inspired professionalism, and conversion-focused design patterns.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development Mode**: Uses Vite's middleware mode for hot module replacement (HMR) during development, providing a seamless development experience.

**API Structure**: RESTful API with a single primary endpoint (`POST /api/contact`) for contact form submissions. The backend is intentionally minimal, focusing on form processing and email notifications.

**Data Storage**: Currently uses in-memory storage (MemStorage class) for development. The schema is designed to support PostgreSQL through Drizzle ORM, with database configuration present but not actively used. This allows for easy migration to persistent storage when needed.

**Error Handling**: Custom middleware logs API requests with response times and JSON responses. Error responses include appropriate HTTP status codes and descriptive error messages.

### Data Storage Solutions

**ORM**: Drizzle ORM configured for PostgreSQL (using @neondatabase/serverless connector), though currently not actively used.

**Schema Design**: Two main tables defined:
- `users`: Basic user authentication structure (id, username, password)
- `contact_submissions`: Stores contact form data (name, phone, email, land size, model preference, timestamp)

**Current Implementation**: In-memory storage using JavaScript Maps for rapid prototyping and development without database dependencies. The storage interface (IStorage) provides abstraction, making it easy to swap to database-backed storage.

**Migration Strategy**: Drizzle Kit is configured for database migrations, with schema definitions in TypeScript that generate both database tables and Zod validation schemas for type safety.

### Authentication and Authorization

**Current State**: No active authentication system is implemented. The users table exists in the schema but is not utilized.

**Design Consideration**: The application is designed as a public-facing marketing and lead generation tool, so authentication is not currently required for its primary use case.

### External Dependencies

**Email Service**: Resend API for sending contact form notification emails to heritagehubnepal@gmail.com. The integration uses Replit's connector system for secure credential management.

**Email Flow**: When a contact form is submitted, the system stores the submission data and sends an email notification containing all form details. If email sending fails, the application returns a user-friendly error message with a fallback contact email.

**Replit Integration**: The application is built to run on Replit, with specific integrations:
- Replit Vite plugins for runtime error overlays, cartographer, and dev banner
- Replit connector system for managing external service credentials (Resend API)
- Environment-based authentication tokens for accessing connector credentials

**Static Assets**: Uses an attached_assets directory for storing images (bamboo grove mushroom farm hero image), referenced through Vite's alias system (@assets).

**Font Loading**: Google Fonts (Inter and Playfair Display) loaded directly in the HTML head for optimal performance.

**Icon Library**: Lucide React for consistent, accessible icons throughout the interface.

### Build and Deployment

**Build Process**: 
- Frontend: Vite builds the React application to dist/public
- Backend: esbuild bundles the Express server to dist/index.js as an ESM module
- Production mode serves pre-built static files

**Environment Handling**: Different configurations for development (NODE_ENV=development) and production (NODE_ENV=production), with environment-specific plugin loading.

**Type Safety**: Full TypeScript coverage with strict mode enabled. Shared types between frontend and backend through the @shared namespace for schemas and validation.