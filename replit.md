# Replit.md - Full Stack React/Express Application

## Overview

This is a full-stack web application built with React frontend and Express backend, featuring shadcn/ui components, Tailwind CSS styling, and PostgreSQL database integration via Drizzle ORM. The application appears to be a business services platform with a focus on AI solutions and premium user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system featuring luxury/premium themes
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Routing**: React Router for client-side navigation
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in session handling with connect-pg-simple
- **API Structure**: RESTful API with `/api` prefix
- **Development**: Hot reload with Vite integration for full-stack development

### Project Structure
```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
├── server/          # Express backend
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Database abstraction layer
│   └── vite.ts      # Vite integration for dev mode
├── shared/          # Shared types and schemas
│   └── schema.ts    # Database schema definitions
└── migrations/      # Database migration files
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with TypeScript support
- **Schema**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Automatic migration generation via drizzle-kit
- **Storage Interface**: Abstracted storage layer with both memory and database implementations

### Frontend Components
- **Design System**: Premium/luxury themed components with blue/neon blue color schemes
- **Component Library**: Full shadcn/ui component suite including forms, dialogs, cards, etc.
- **Custom Components**: HeroSection, ServiceCard, ServiceSection for business presentation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

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

### Development Tools
- **Build**: Vite for frontend, esbuild for backend
- **TypeScript**: Full type safety across the stack
- **Development**: Hot reload with Vite middleware integration

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
- **Database Setup**: Drizzle migrations handle schema changes
- **Production Build**: `npm run build` creates optimized production bundles

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with shared types and schemas for consistency
2. **TypeScript First**: Full type safety from database to frontend
3. **Component Abstraction**: Reusable UI components with consistent design system
4. **Database Abstraction**: Storage interface allows for multiple backend implementations
5. **Premium Design**: Luxury/premium themed UI components for business presentation
6. **Session Management**: PostgreSQL-based sessions for scalability
7. **API Design**: RESTful API with consistent error handling and logging