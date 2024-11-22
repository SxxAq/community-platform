```markdown
# XpertBuddy

XpertBuddy is a modern learning community platform built with React, TypeScript, and Tailwind CSS. It allows users to connect, share knowledge, participate in events, and access resources.

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **State Management:** Context API
- **Package Manager:** pnpm

## Features

- User authentication (Sign up, Log in)
- Feed with posts and reactions
- Event listings and calendar view
- Resource library with search
- Community chat and Q&A section
- Wishlist voting system

## Project Structure
```

src/
├── components/ # Reusable UI components
│ ├── common/ # Basic components like Button, Input, Modal
│ ├── layout/ # Header, Footer, Sidebar
│ ├── auth/ # Authentication forms
│ ├── user/ # User profile and settings
│ ├── feed/ # Feed and posts
│ ├── events/ # Event listings and calendar
│ ├── resources/ # Resource list and search
│ ├── community/ # Community chat and Q&A
│ └── wishlist/ # Wishlist and voting system
├── pages/ # Application pages (Home, Login, etc.)
├── hooks/ # Custom hooks for auth, resources, events
├── context/ # Context for authentication and theme
└── App.tsx # Main entry point of the app

````

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
````

3. Start the development server:
   ```bash
   pnpm run dev
   ```

## Dark Mode

The app supports dark mode using Tailwind's `dark` variant. The background image changes based on the theme.

```

```
