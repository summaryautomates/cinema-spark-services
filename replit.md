# Replit.md - Full Stack React/Express Application

## Overview

This is a modern full-stack web application built with React frontend and Express backend. The application features an AI-powered interface with dynamic hero section and responsive design, utilizing shadcn/ui components, Tailwind CSS styling, and PostgreSQL database integration via Drizzle ORM. The current implementation includes a premium business services presentation layer with custom components for showcasing AI solutions.

**Last Updated**: July 31, 2025

## User Preferences

- **Communication Style**: Simple, everyday language - non-technical explanations preferred
- **Development Approach**: Mobile-first responsive design with premium/luxury theming
- **Architecture**: Prefer modern web application patterns with minimal backend footprint

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS v3.4.17 with custom design system featuring luxury/premium themes
- **UI Components**: shadcn/ui component library with Radix UI primitives (full suite)
- **State Management**: TanStack Query v5.60.5 for server state management
- **Routing**: React Router DOM v7.6.3 and Wouter v3.3.5 for client-side navigation
- **Forms**: React Hook Form v7.55.0 with Zod validation and Hookform Resolvers
- **Animations**: Framer Motion v11.13.1 and custom CSS animations
- **Icons**: Lucide React v0.453.0 and React Icons v5.4.0

### Backend Architecture
- **Framework**: Express.js v4.21.2 with TypeScript
- **Runtime**: Node.js with ESM module system
- **Database**: PostgreSQL with Drizzle ORM v0.39.1 and Drizzle Kit v0.30.4
- **Database Provider**: Neon Database (serverless PostgreSQL) via @neondatabase/serverless v0.10.4
- **Session Management**: Express Session v1.18.1 with connect-pg-simple v10.0.0 for PostgreSQL storage
- **Authentication**: Passport.js v0.7.0 with passport-local v1.0.0 strategy
- **API Structure**: RESTful API with `/api` prefix and consistent error handling
- **Development**: Hot reload with Vite integration via custom middleware
- **WebSocket**: ws v8.18.0 for real-time communication capabilities

### Project Structure
```
├── client/                    # React frontend application
│   ├── index.html            # Main HTML template
│   ├── public/               # Static assets
│   └── src/
│       ├── App.tsx           # Main application component
│       ├── main.tsx          # Application entry point
│       ├── assets/           # Image assets (hero-bg.jpg, service-pattern.jpg)
│       ├── components/       # Custom UI components
│       │   ├── HeroSection.tsx      # Dynamic hero section
│       │   ├── ServiceCard.tsx      # Service presentation card
│       │   ├── ServiceSection.tsx   # Services overview section
│       │   └── ui/           # shadcn/ui component library
│       ├── pages/            # Route components
│       │   ├── Index.tsx     # Home page component
│       │   └── NotFound.tsx  # 404 error page
│       ├── hooks/            # Custom React hooks
│       │   ├── use-mobile.tsx # Mobile detection hook
│       │   └── use-toast.ts  # Toast notifications hook
│       └── lib/              # Utility functions
│           ├── queryClient.ts # TanStack Query configuration
│           └── utils.ts      # General utility functions
├── server/                   # Express backend
│   ├── index.ts             # Server entry point
│   ├── routes.ts            # API route definitions
│   ├── storage.ts           # Database abstraction layer
│   └── vite.ts              # Vite integration middleware
├── shared/                   # Shared types and schemas
│   └── schema.ts            # Database schema definitions
├── attached_assets/          # User-provided assets
└── Configuration files (package.json, tsconfig.json, etc.)
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with TypeScript support
- **Schema**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Automatic migration generation via drizzle-kit
- **Storage Interface**: Abstracted storage layer with both memory and database implementations

### Current Implementation

#### Frontend Components
- **Design System**: Premium/luxury themed components with blue/neon blue color schemes
- **Component Library**: Full shadcn/ui component suite (40+ Radix UI primitives)
- **Custom Components**: 
  - `HeroSection.tsx` - Dynamic hero section with AI-powered interface messaging
  - `ServiceCard.tsx` - Service presentation cards for business offerings
  - `ServiceSection.tsx` - Services overview section with responsive grid layout
- **Pages**: Home page (`Index.tsx`) and 404 error page (`NotFound.tsx`)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Theme Support**: Dark/light mode capability via next-themes v0.4.6

### Authentication & User Management
- **User Schema**: Basic user model with username/password
- **Session Management**: PostgreSQL session storage
- **Storage Interface**: CRUD operations for user management

## Data Flow

1. **Client Requests**: React components make API calls via TanStack Query
2. **API Layer**: Express routes handle requests with `/api` prefix
3. **Storage Layer**: Abstract storage interface provides data access
4. **Database**: PostgreSQL via Drizzle ORM for persistence
5. **Response**: JSON responses with consistent error handling

## External Dependencies

### Core Runtime
- **Frontend**: React, React Router, TanStack Query
- **Backend**: Express, Drizzle ORM
- **Database**: Neon Database (serverless PostgreSQL)

### UI/UX Libraries
- **Component Library**: Radix UI primitives via shadcn/ui
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React icons
- **Animations**: Built-in CSS animations and transitions

### Development Tools & Dependencies
- **Build Tools**: 
  - Vite v5.4.14 for frontend development and building
  - esbuild v0.25.0 for backend bundling
  - TypeScript v5.6.3 for full type safety across the stack
- **Development Experience**:
  - tsx v4.19.1 for TypeScript execution
  - Hot reload with Vite middleware integration
  - Replit-specific plugins for enhanced development experience
- **Code Quality**:
  - Zod v3.24.2 for runtime validation and type inference
  - Drizzle-zod v0.7.0 for database schema validation
  - PostCSS v8.4.47 with Autoprefixer v10.4.20

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable required
- **Node Environment**: `NODE_ENV` for development/production modes
- **Build Output**: Separate client and server builds combined for deployment

### Development Workflow
- **Local Development**: `npm run dev` starts both frontend and backend with hot reload
- **Database Setup**: `npm run db:push` applies Drizzle schema changes
- **Production Build**: `npm run build` creates optimized production bundles
- **Production Start**: `npm start` runs the production server
- **Type Checking**: `npm run check` validates TypeScript types

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with shared types and schemas for consistency
2. **TypeScript First**: Full type safety from database to frontend with ESM modules
3. **Component Abstraction**: Reusable UI components with consistent design system
4. **Database Abstraction**: Storage interface allows for multiple backend implementations
5. **Premium Design**: Luxury/premium themed UI components for business presentation
6. **Session Management**: PostgreSQL-based sessions for scalability
7. **API Design**: RESTful API with consistent error handling and logging
8. **Modern Tooling**: Latest versions of React 18, Vite 5, and TypeScript 5.6
9. **Multi-Router Support**: Both React Router DOM and Wouter for flexible routing options

## Recent Changes

### July 31, 2025
- Updated project documentation with comprehensive dependency versions
- Documented current frontend component structure (HeroSection, ServiceCard, ServiceSection)
- Added detailed project structure with actual file locations
- Included development workflow commands and build processes
- Updated architecture details with latest package versions
- Documented current implementation status with AI-powered interface theme

## Current Status

**Application State**: Fully functional development environment with Express server running on port 5000
**Frontend**: AI-powered interface with responsive design and premium theming
**Backend**: Express server with PostgreSQL database integration ready
**Database**: Drizzle ORM configured with Neon Database support
**Development**: Hot reload enabled with Vite integration

## Next Development Priorities

Based on current architecture, potential areas for expansion:
1. User authentication implementation using existing Passport.js setup
2. Database schema implementation and API endpoints
3. Dynamic content management for services and hero sections
4. Enhanced responsive design and accessibility features
5. Performance optimization and SEO implementation