# Blog App

A modern, full-stack blog platform built with Next.js and TypeScript, featuring secure authentication, beautiful UI components, and a responsive design. Perfect for sharing ideas, managing posts, and engaging with readers.

## Technologies Used

- **Next.js** – Powerful React framework for building fast, scalable web applications
- **TypeScript** – Type-safe development for reliable code
- **Radix UI** – Accessible, unstyled UI primitives for building beautiful interfaces
- **Auth.js** – Flexible authentication solution, supporting multiple providers
- **Responsive Design** – Mobile-first, adapts to any device
- **(Add your database or backend choice here, e.g., Prisma, MongoDB, PostgreSQL)**

## Features

- Secure user authentication and authorization (powered by Auth.js)
- Create, edit, and delete blog posts
- Markdown support for rich post formatting
- Commenting system for reader engagement
- Dashboard for post management
- Like, bookmark and follow functionality

## Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- npm 

### Installation

```bash
git clone https://github.com/osteensouthpaw/blog-app.git
cd blog-app
npm install
```

### Running Locally

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file based on `.env.example`. Fill in all required credentials (e.g., Auth.js providers, database URL).

## Usage

- Register or log in to start creating posts.
- Use the dashboard to manage content.
- Explore posts, like and join the discussion.
