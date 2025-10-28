.PHONY: help install start stop build clean serve dev

# Default target
help:
	@echo "DevSpaces Documentation - Available commands:"
	@echo ""
	@echo "  make install    - Install dependencies"
	@echo "  make start      - Start development server"
	@echo "  make stop       - Stop development server"
	@echo "  make build      - Build for production"
	@echo "  make serve      - Preview production build"
	@echo "  make clean      - Clean cache and node_modules"
	@echo "  make dev         - Install + start (development)"
	@echo ""
	@echo "Server will be available at:"
	@echo "  - French:  http://localhost:3000"
	@echo "  - English: http://localhost:3000/en"

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	@npm install

# Start development server
start:
	@echo "🚀 Starting Docusaurus development server..."
	@npm start

# Stop development server (if running)
stop:
	@echo "🛑 Stopping development server..."
	@pkill -f "docusaurus start" || true
	@echo "✅ Server stopped"

# Build for production
build:
	@echo "🔨 Building documentation for production..."
	@npm run build

# Serve production build
serve:
	@echo "🌐 Serving production build..."
	@npm run serve

# Clean cache and dependencies
clean:
	@echo "🧹 Cleaning cache and dependencies..."
	@npm run clear
	@rm -rf node_modules
	@rm -rf build
	@echo "✅ Clean complete"

# Development workflow: install + start
dev: install
	@echo "✨ Starting development environment..."
	@npm start

