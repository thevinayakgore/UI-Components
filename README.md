![UI Components Banner]([banner.png])

# 🚀 Modern UI Components

A curated collection of beautiful, responsive, and accessible UI components built with **React** and **Next.js**. Perfect for accelerating your web development projects.

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist, and professional UI
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Performance Optimized** - Built with Next.js/React
- 🎭 **TypeScript** - Fully typed for better development experience
- 🔧 **Customizable** - Easy to modify and extend
- 🚀 **Production Ready** - Battle-tested components

## 🛠 Tech Stack

- **Framework** - Next.js
- **Language** - TypeScript
- **Styling** - Tailwind CSS
- **Animations** - Framer Motion
- **Icons** - Lucide React

## 📦 Components Library

### 🧩 Navigation
- **Navbar** - Responsive navigation with mobile menu
- **Sidebar** - Collapsible sidebar with nested menus
- **Breadcrumbs** - Dynamic breadcrumb navigation
- **Pagination** - Custom pagination component

### 📊 Data Display
- **Cards** - Product, profile, and feature cards
- **Tables** - Sortable and filterable data tables
- **Lists** - User lists, notification lists
- **Stats** - Analytics and metric cards

### 📝 Forms
- **Search Bars** - Advanced search with filters
- **Input Fields** - Various input types with validation
- **Select Menus** - Custom dropdowns and multi-select
- **File Upload** - Drag & drop file uploader

### 🎪 Feedback
- **Modals** - Various modal dialogs
- **Toasts** - Notification toasts
- **Loaders** - Loading spinners and skeletons
- **Progress Bars** - Animated progress indicators

### 🎨 Layout
- **Hero Sections** - Landing page heroes
- **Grid Layouts** - Responsive grid systems
- **Footers** - Multi-column footers
- **Headers** - Page headers with actions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ui-components.git
cd ui-components
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ui-components/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI elements
│   ├── forms/          # Form components
│   ├── layout/         # Layout components
│   └── shared/         # Shared components
├── lib/                # Utilities and configurations
├── hooks/              # Custom React hooks
├── styles/             # Global styles and Tailwind config
├── public/             # Static assets
└── app/                # Next.js app directory
    ├── page.tsx        # Home page
    └── components/     # Page-specific components
```

## 🎯 Usage

### Importing Components

```tsx
import { Button, Card, Modal } from '@/components/ui';

export default function MyPage() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card>
        <h3>Card Title</h3>
        <p>Card content goes here</p>
      </Card>
    </div>
  );
}
```

### Customizing Components

```tsx
<Button 
  variant="secondary"
  size="lg"
  className="custom-class"
  onClick={() => console.log('Clicked!')}
>
  Custom Button
</Button>
```

## 🎨 Customization

### Theming
All components use CSS variables for easy theming:

```css
:root {
  --primary: #3b82f6;
  --secondary: #64748b;
  --accent: #f59e0b;
}
```

### Styling
Components are built with Tailwind CSS and support:
- Custom color schemes
- Dark mode
- Responsive breakpoints
- Custom animations

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Lucide](https://lucide.dev/) for beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

---

<div align="center">

### ⭐ Don't forget to star this repository if you find it useful !

**Happy coding !** 🎉

</div>
