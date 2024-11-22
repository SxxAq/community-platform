# XpertBuddy

A modern learning community platform built with React, TypeScript, and Tailwind CSS. XpertBuddy empowers users to connect, share knowledge, participate in events, and access curated educational resources.

## 🚀 Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS v3
- **State Management:** React Context API & useState Hook
- **Package Manager:** pnpm
- **Build Tool:** Vite
- **Code Quality:** ESLint + Prettier

## ✨ Features

### Core Functionality

- User authentication with email
- Personalized feed with posts, likes, and comments
- Event management with calendar integration
- Searchable resource library with categories and tags
- community chat and Q&A system
- Democratic wishlist voting system

### Technical Features

- Responsive design for all screen sizes
- Dark/Light mode with theme persistence
- Optimistic UI updates for better UX
- Infinite scrolling for feed and resources

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Basic components
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── Card/
│   ├── layout/          # Layout components
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Sidebar/
│   ├── auth/            # Authentication components
│   ├── user/            # User-related components
│   ├── feed/            # Feed components
│   ├── events/          # Event components
│   ├── resources/       # Resource components
│   ├── community/       # Community components
│   └── wishlist/        # Wishlist components
├── pages/               # Application pages
│   ├── Home/
│   ├── Login/
│   ├── Register/
│   ├── Profile/
│   └── Settings/
├── hooks/               # Custom React hooks
│   ├── useAuth.ts
│   ├── useResources.ts
│   └── useEvents.ts
├── context/             # React Context providers
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx

├── assets/             # Static assets
└── App.tsx             # Main application entry
```

## 🛠️ Setup and Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/xpertbuddy.git
   cd xpertbuddy
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env.local
   ```

   Configure your environment variables in `.env.local`

4. **Start development server**
   ```bash
   pnpm dev
   ```
   The application will be available at `http://localhost:5173`

## 🎨 Theming

### Dark Mode

The application supports system-preferred and user-selected dark mode using Tailwind's `dark` variant.

```tsx
// Example of dark mode styling
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-gray-900 dark:text-white">Hello XpertBuddy</h1>
</div>
```

### Custom Theming

The app uses CSS variables for main color scheme, allowing easy customization:

```css
:root {
  --primary: #3b82f6;
  --secondary: #10b981;
  --accent: #8b5cf6;
}

.dark {
  --primary: #60a5fa;
  --secondary: #34d399;
  --accent: #a78bfa;
}
```

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

## 📦 Building for Production

1. Build the application:

   ```bash
   pnpm build
   ```

2. Preview the production build:
   ```bash
   pnpm preview
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
