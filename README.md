# Competency Tree

Interactive roadmap of frontend development skills built with Astro + React.

## Features

- 🌍 **Bilingual Support** - English and Russian
- 📱 **Responsive Design** - Works on all devices
- 🎯 **Interactive Cards** - Click to explore detailed topics
- 🚀 **Static Generation** - Fast loading with SSG
- 🎨 **Modern UI** - Built with Tailwind CSS

## Tech Stack

- **Framework**: Astro 4
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

This project is automatically deployed to GitHub Pages on push to main/master branch.

### Manual Setup

1. Go to your repository Settings
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. Push to main/master branch to trigger deployment

## Project Structure

```
src/
├── components/          # React components
│   ├── CompetencyNode.jsx
│   └── CompetencyRoadmap.jsx
├── layouts/            # Astro layouts
│   └── Layout.astro
├── pages/              # Astro pages
│   └── index.astro
└── env.d.ts           # TypeScript environment
```

## Data Structure

The competency data is stored in JSON files:
- `data.json` - English translations
- `data-ru.json` - Russian translations

Each competency contains:
- **name**: Competency title
- **topics**: Array of topics with concepts
- **concepts**: Array with level (junior/middle/senior) and description

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run build`
5. Submit a pull request

## License

MIT
