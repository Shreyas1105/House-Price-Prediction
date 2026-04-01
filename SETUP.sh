#!/bin/bash

echo "House Price Prediction AI - Setup Script"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✓ Node.js detected: $(node -v)"

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "⚠️  Python 3 not found. ML scripts will not work."
    echo "   Install from https://www.python.org/downloads"
else
    echo "✓ Python detected: $(python3 --version)"
fi

echo ""
echo "Installing dependencies..."
npm install

echo ""
echo "Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""

if command -v python3 &> /dev/null; then
    echo "To generate ML model data, run:"
    echo "  pip install pandas numpy scikit-learn"
    echo "  python scripts/train_model.py"
    echo "  python scripts/data_generator.py"
fi
