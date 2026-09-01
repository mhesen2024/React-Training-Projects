# Fast React Pizza

A responsive pizza-ordering application built with React. Browse the menu, manage a shopping cart, place an order, track its delivery status, and upgrade an existing order to priority.

## Features

- Browse a menu loaded from the Fast Pizza API
- Add, remove, and update cart item quantities
- View live cart totals
- Autofill the delivery address using browser geolocation
- Validate customer and order information
- Place an order and track its estimated delivery time
- Search for an existing order by its ID
- Upgrade an order to priority without navigating away
- Responsive styling for mobile and desktop

## Built With

- React 18
- React Router data APIs
- Redux Toolkit and React Redux
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/mhesen2024/fast-react-pizza.git
cd fast-react-pizza
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check JavaScript and JSX files with ESLint |

## Project Structure

```text
src/
├── featuers/
│   ├── cart/        # Cart state and components
│   ├── menu/        # Menu and pizza items
│   ├── order/       # Order creation, lookup, and updates
│   └── users/       # Customer state and geolocation
├── hooks/           # Reusable React hooks
├── services/        # Restaurant and geocoding API calls
├── ui/              # Shared interface components
├── utlis/           # Formatting and date helpers
├── router.jsx       # Application routes and data actions
└── store.js         # Redux store configuration
```

## API

Menu and order data are provided by the [Fast Pizza API](https://react-fast-pizza-api.jonas.io/api).
