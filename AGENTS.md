# Agent Guidelines for Vibe Coding Presentation

## Project Type
Slidev presentation project using Vue 3, TypeScript, and Markdown slides.

## Build/Test Commands
- `pnpm dev` - Start development server with auto-reload
- `pnpm build` - Build presentation for production
- `pnpm export` - Export slides to PDF
- No test framework configured

## Code Style
- **Language**: TypeScript with Vue 3 Composition API
- **Imports**: ES6 imports, prefer named exports
- **Vue Components**: Use `<script setup lang="ts">` syntax
- **Props**: Define with `defineProps()` and proper TypeScript types
- **Styling**: Utility-first CSS classes (UnoCSS/Tailwind-like)
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Files**: `.vue` for components, `.ts` for utilities, `.md` for slides

## Project Structure
- `slides.md` - Main presentation content
- `components/` - Vue components for slides
- `snippets/` - Code examples and utilities
- `pages/` - Additional slide pages

## Notes
- No linting/testing configured - focus on presentation content
- Uses Slidev's built-in features for animations, code highlighting, and themes