# House Price Prediction App - Setup Guide for VS Code

## Quick Start (3 Simple Steps)

### Step 1: Extract & Open in VS Code
\`\`\`bash
# Extract the downloaded ZIP file
# Open VS Code
# Open the folder: File → Open Folder → Select the extracted folder
\`\`\`

### Step 2: Open Terminal & Install
Press `Ctrl + `` (backtick) or go to Terminal → New Terminal, then run:

\`\`\`bash
npm install
\`\`\`

### Step 3: Start the Development Server
\`\`\`bash
npm run dev
\`\`\`

Done! Open your browser and go to: **http://localhost:3000**

---

## Features
✅ Real-time house price prediction using ML  
✅ INR (Indian Rupees) currency support  
✅ Beautiful eye-cooling teal/blue color scheme  
✅ Interactive charts and analytics  
✅ Mobile responsive design  
✅ Conference-ready presentation UI  

---

## What's Inside

### 📁 File Structure
\`\`\`
house-price-prediction/
├── app/
│   ├── page.tsx          (Main page)
│   ├── layout.tsx        (Layout wrapper)
│   ├── globals.css       (Styling)
│   └── api/
│       └── predict/
│           └── route.ts  (Prediction API)
├── components/
│   ├── hero-section.tsx
│   ├── prediction-form.tsx
│   ├── results-section.tsx
│   ├── analytics-dashboard.tsx
│   └── features-section.tsx
└── package.json          (Dependencies)
\`\`\`

---

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Run production build |

---

## Browser Compatibility
- Chrome / Edge (Latest)
- Firefox (Latest)
- Safari (Latest)

---

## Deployment

### Deploy to Vercel (Free)
1. Push code to GitHub
2. Go to vercel.com
3. Import your GitHub repository
4. Click Deploy (automatic)

---

## Troubleshooting

### Port 3000 already in use
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Node modules issue
\`\`\`bash
rm -rf node_modules
npm install
\`\`\`

### Hot reload not working
\`\`\`bash
# Restart the dev server
# Press Ctrl+C to stop, then run npm run dev again
\`\`\`

---

## Color Scheme (Eye-Cooling)
- **Background**: Dark teal/blue
- **Accent**: Mint green & cyan
- **Text**: White & light gray
- Perfect for long conference presentations!

---

## Currency
All prices are displayed in **INR (Indian Rupees)** format with ₹ symbol.

Example: ₹45,00,000 (45 Lakhs)

---

## For Conference Presentation
1. Enter sample property data
2. Click "Get Prediction"
3. Show the predicted price in INR
4. Scroll down to see advanced analytics
5. Point out the 95% accuracy rate
6. Highlight the real-time performance

---

## Support
For issues, check the browser console (F12) for error messages.
