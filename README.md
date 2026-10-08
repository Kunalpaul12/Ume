# 🧼 UME - Homemade Soaps & Lipbalms E-Commerce Store

A beautiful, modern React e-commerce web application for selling homemade soaps and lipbalms.

## ✨ Features

- **Product Listing**: Browse 8 handcrafted soaps and lipbalms with descriptions and prices
- **Shopping Cart**: Add/remove products and manage quantities
- **Checkout Page**: Customer information collection and order summary
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Beautiful UI**: Modern gradient design with smooth animations
- **Price Breakdown**: Shows subtotal, tax (18% GST), shipping, and total

## 🛠️ Tech Stack

- **React 19** - Modern UI library
- **Vite** - Lightning-fast build tool
- **CSS3** - Beautiful styling with gradients and animations
- **Unsplash API** - Random product images

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to project folder:**
```bash
cd /Users/kunalpal/Project/Ume
```

2. **Install dependencies:**
```bash
yarn install
```
or
```bash
npm install
```

3. **Start development server:**
```bash
yarn dev
```
or
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
yarn build
```
or
```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
Ume/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── ProductList.jsx
│   │   ├── ProductList.css
│   │   ├── ProductCard.jsx
│   │   ├── ProductCard.css
│   │   ├── Checkout.jsx
│   │   └── Checkout.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 📦 Product Data

Products include:
- **Soaps**: Lavender Dreams, Charcoal Detox, Honey Oat, Green Tea Spa
- **Lipbalms**: Rose Petal, Mint Chill, Vanilla Coconut, Strawberry Dream

Each product has:
- Unique name and description
- Price in INR (₹)
- Category badge
- Beautiful product image from Unsplash

## 💳 Checkout Features

- Customer information form (Name, Email, Phone, Address)
- Order summary with item details
- Quantity adjustment
- Price breakdown:
  - Subtotal
  - 18% GST Tax
  - Shipping (₹99)
  - **Total Amount**
- Order confirmation screen

## 🎨 Styling Highlights

- **Color Scheme**: Purple gradient (#667eea to #764ba2)
- **Animations**: Smooth hover effects and transitions
- **Responsive**: Mobile-first design that adapts to all screen sizes
- **Modern UI**: Clean cards, gradients, and shadows

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1024px
- Mobile: 480px - 767px
- Small Mobile: < 480px

## 🔄 How to Customize

### Change Product Images
Update the `image` URL in the products array in `App.jsx`:
```javascript
{
  id: 1,
  name: 'Your Product Name',
  image: 'https://your-image-url.com/image.jpg',
  // ... other properties
}
```

### Change Colors
Edit the gradient colors in `Header.css` and `ProductCard.css`:
```css
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Add More Products
Simply add more objects to the products array in `App.jsx`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel will auto-build and deploy

### Deploy to Netlify

1. Run `yarn build`
2. Drag and drop the `dist` folder to Netlify
3. Done!

### Deploy to Any Static Host

The `dist` folder contains all static files ready for deployment.

## 📝 TODO Features

- [ ] Payment integration (Razorpay, Stripe)
- [ ] User authentication
- [ ] Order history
- [ ] Product filters and search
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications
- [ ] Review and ratings system

## 🤝 Contributing

Feel free to fork, modify, and use this project for your own needs!

## 📄 License

This project is open source and available for educational and commercial use.

## 🎉 Enjoy Building!

Happy coding! Make Ume your own and customize it as needed. 🧼💄✨
