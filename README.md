# Authentication Success Page

A modern, minimalist authentication success page built with React and TypeScript. This page provides users with a clear indication that they've been successfully authenticated, along with instructions for returning to the main application.

## Features

- ✨ Smooth animations and transitions
- 📱 Fully responsive layout
- 🔄 Deep linking support
- 🎯 Retry mechanism for failed redirections
- 🌓 High-contrast, accessible color scheme

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

This page is designed to be shown after successful authentication, typically in scenarios where:

- OAuth authentication has completed
- Email verification is confirmed
- Password reset is successful

The page attempts to redirect users back to the main application using deep linking. If the automatic redirect fails, users can manually trigger the redirect using the "Return to App" button.

## Customization

### Deep Link URL

Modify the deep link URL in `src/App.tsx`:

```typescript
window.location.href = 'yourapp://auth/success';
```

### Colors

The application uses a minimalist color palette:
- Matte Black: `#1A1A1A`
- Off-white: `#F1EFE7`

These can be modified in `src/styles/App.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
