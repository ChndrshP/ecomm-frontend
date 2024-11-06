# E-commerce Project

This is a Next.js-based e-commerce project with features like product listing, cart management, wishlist, and user authentication.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Getting Started

To get the project up and running on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/e-commerce-project.git
   cd e-commerce-project
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following variables:

   ```
   NEXT_PUBLIC_API_URL=your_api_url
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

   Replace the placeholder values with your actual configuration.

4. Run the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Project Structure

```
e-commerce-project/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.jsx
│   │   └── signup/
│   │       └── page.jsx
│   ├── account/
│   │   └── page.jsx
│   ├── cart/
│   │   └── page.jsx
│   ├── wishlist/
│   │   └── page.jsx
│   ├── layout.jsx
│   └── page.jsx
├── componenjs/
│   ├── layout/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── TopHeader.jsx
│   └── ui/
│       └── (ui componenjs)
├── styles/
│   └── globals.css
├── lib/
│   └── (utility functions)
├── public/
│   └── (static assejs)
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── jsconfig.json
```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode
- `npm run lint`: Runs the linter to check for code style issues

## Features

- User authentication (NextAuth.js)
- Product listing
- Cart management
- Wishlist functionality
- Responsive design

## Technologies Used

- Next.js 13 (App Router)
- React
- TypeScript
- Tailwind CSS
- NextAuth.js for authentication
- Lucide React for icons

## License

This project is licensed under the MIT License.