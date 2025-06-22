# Vibe Coding - No Code of the AI Era

A presentation about the new paradigm of AI-assisted development, exploring how tools like **opencode** and **Claude 4** are transforming the way we build software.

> "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."  
> — **Andrej Karpathy** (February 2025)

## 🎯 About This Presentation

This presentation demonstrates "vibe coding" in practice - it was created using AI-powered development tools to showcase the very concept it presents. The slides explore how AI assistants are enabling a new paradigm where developers can focus on creativity and problem-solving rather than syntax and boilerplate.

**Presented at:** Burda.Product.Tech 2025

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) package manager

### Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thekorn/vibe-coding-presentation.git
   cd vibe-coding-presentation
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Visit <http://localhost:3030> to view the presentation

### Building for Production

To build the presentation for deployment:

```bash
# Build static files
pnpm build

# Export to PDF
pnpm export
```

### Development Tools

The project includes modern development tooling:

```bash
# Run tests
pnpm test

# Run tests once
pnpm test:run

# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format
```

## 📁 Project Structure

```
├── slides.md              # Main presentation entry point
├── pages/                 # Individual slide pages
│   ├── cover.md           # Title slide
│   ├── intro.md           # Introduction with Karpathy quote
│   ├── idea.md            # Core concept slides
│   ├── use-cases.md       # Practical applications
│   ├── weekend.md         # Weekend project showcase
│   ├── outro.md           # Credits and source information
│   ├── images/            # Presentation images and screenshots
│   └── videos/            # Demo videos and recordings
├── theme/excali/          # Custom Slidev theme
│   ├── layouts/           # Custom slide layouts
│   ├── components/        # Vue components
│   └── styles/            # Theme styling
├── components/            # Reusable Vue components with tests
├── examples/              # Live coding examples
│   └── tic-tac-toe/       # Complete React Tic-Tac-Toe implementation
└── snippets/              # Code examples and utilities
```

## 🎨 Features

- **Custom Theme:** Hand-crafted excali theme with brand colors
- **Modular Structure:** Slides organized in separate files for maintainability
- **Interactive Elements:** Live code examples and animations
- **Live Demos:** Complete working examples (Tic-Tac-Toe game)
- **Rich Media:** Embedded videos and screenshots showcasing AI development
- **Test Coverage:** Components and utilities with comprehensive tests
- **Modern Tooling:** Biome for linting/formatting, Vitest for testing
- **Responsive Design:** Works on desktop and mobile devices

## 🛠 Built With

- [Slidev](https://sli.dev/) - Presentation framework for developers
- [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- [UnoCSS](https://unocss.dev/) - Instant on-demand atomic CSS engine
- [Shiki](https://shiki.style/) - Syntax highlighter
- [Vitest](https://vitest.dev/) - Fast unit testing framework
- [Biome](https://biomejs.dev/) - Fast formatter and linter
- [Playwright](https://playwright.dev/) - End-to-end testing
- **[opencode](https://opencode.ai)** - AI-powered development assistant
- **Claude 4** - Advanced AI language model

## 📖 Learn More

- [Slidev Documentation](https://sli.dev/)
- [opencode](https://opencode.ai) - The AI assistant used to create this presentation
- [Original Tweet by Andrej Karpathy](https://x.com/karpathy/status/1886192184808149383)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*This presentation is a living example of "vibe coding" - created through the collaboration of human creativity and AI assistance.*
