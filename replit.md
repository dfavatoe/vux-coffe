# VUX Coffee - Vegan Café Landing Page

## Overview

This is a landing page for VUX Coffee, a vegan café located in Berlin-Neukölln. The application serves specialty coffee and steamed bao buns with an editorial, minimalist design aesthetic that reflects the café's punk rock yet intellectual brand identity.

The project is a full-stack TypeScript application with a React frontend and Express backend, using PostgreSQL for data storage. It features a modern, brutalist design with strong typography, intentional white space, and subtle animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and scroll reveals
- **Build Tool**: Vite for development and production builds

The frontend follows a pages-based structure with reusable components. Custom hooks abstract data fetching logic (`use-menu.ts`, `use-gallery.ts`, `use-opening-hours.ts`).

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect

The server uses a clean separation between routes, storage layer, and database connection. The storage pattern (`server/storage.ts`) provides an abstraction over database operations with automatic seeding of initial data.

### Shared Code
- **Location**: `shared/` directory
- **Schema**: Drizzle table definitions with Zod schema generation via `drizzle-zod`
- **Routes**: Type-safe API route definitions shared between client and server

### Build System
- Development: Vite dev server with HMR, proxied through Express
- Production: Client built with Vite, server bundled with esbuild
- Database migrations: Drizzle Kit with `db:push` command

### Design System
- **Typography**: Lora (serif body), Oswald (display headings), Inter (sans-serif UI)
- **Color Palette**: High-contrast black and white with neutral grays
- **Border Radius**: Set to 0px for brutalist aesthetic
- **Component Style**: Sharp edges, strong typography, editorial layout

## External Dependencies

### Database
- **PostgreSQL**: Primary data store accessed via `DATABASE_URL` environment variable
- **Drizzle ORM**: Database toolkit for schema definition, queries, and migrations
- **connect-pg-simple**: PostgreSQL session store (available but not currently used)

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for transitions and scroll effects
- **wouter**: Lightweight client-side routing
- **Radix UI**: Headless component primitives (via shadcn/ui)
- **Lucide React**: Icon library

### Build & Development
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Production server bundler
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety across the entire codebase

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator