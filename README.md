## Getting Started

First, run the development server:

```bash
pnpm run dev
```

# Project Stack

This project leverages a modern tech stack designed to enhance performance, maintainability, and
user experience. Below is the breakdown of each technology used in the project:

## Frontend Technologies

### React

- **Purpose**: A JavaScript library for building user interfaces.
- **Usage**: Enables the creation of reusable UI components, making the development process more
  efficient.

### Next.js

- **Purpose**: A React framework for server-side rendering and static site generation.
- **Usage**: Provides routing, API routes, and optimization features out of the box, enhancing SEO
  and performance.

### Emotion

- **Purpose**: A powerful library for writing CSS in JavaScript, particularly designed for React
  applications.
- **Usage**: Enables developers to apply styles at the component level, promoting modularity and
  maintainability in styling.

### Tailwind CSS

- **Purpose**: A utility-first CSS framework.
- **Usage**: Facilitates rapid UI development by providing predefined utility classes that can be
  composed to create complex designs without leaving your HTML.

## Custom Hook: `useScale`

The `useScale` hook is designed to dynamically adjust the scale of a component based on the viewport
height. This ensures that your UI remains visually appealing across different screen sizes.\*
Purpose: To calculate and set a scaling factor that adjusts based on the height of the user's
viewport.

- Usage: Initializes a state variable `scale` with a default value of `1`.
  - On component mount and window resize events, it calculates the new scale based on a base height
    (800 pixels in this case).
  - The scale value is updated accordingly, ensuring that it does not exceed `1`, which maintains
    the integrity of your layout.

## Architectural Pattern

### FSD (Feature-Sliced Design)

- **Purpose**: An architectural approach that emphasizes feature-driven development.
- **Usage**: Organizes code into features rather than technical layers, improving scalability and
  maintainability. Each feature contains its own components, styles, and logic, promoting separation
  of concerns.

## Deploy on Vercel

= The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.
