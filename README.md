# 🏠 House Price Prediction System

A machine learning-based web application that predicts house prices based on input features such as location, size, number of bedrooms, and other relevant parameters.

---

## 📌 Project Overview

This project demonstrates the integration of a machine learning model with a web-based interface to predict house prices. Users can input property details through the frontend, and the backend processes the data to generate predicted prices.

The system is designed to showcase end-to-end ML workflow, including data handling, model usage, and deployment integration.

---

## ⚠️ Disclaimer

> The model used in this project is not fully trained or optimized.  
> Predictions may not be accurate and are intended for demonstration purposes only.

---

## 🛠️ Tech Stack / Tools Used

### 💻 Frontend
- Next.js
- React.js
- Tailwind CSS

### ⚙️ Backend
- Python
- FastAPI / Flask (update based on your code)

### 🤖 Machine Learning
- Scikit-learn
- Pandas
- NumPy

### 🔧 Tools & Environment
- VS Code
- Git & GitHub
- Node.js
- Python (3.x)

---

## 📂 Project Structure
House_Price_Prediction/
│
├── frontend/ # Next.js frontend
├── backend/ # Python backend (API + ML model)
├── model/ # Trained/placeholder ML model files
├── public/ # Static assets
│
├── requirements.txt # Python dependencies
├── package.json # Node dependencies
└── README.md


---

## ⚙️ Installation & Setup

### Clone the Repository
Git bash
git clone https://github.com/Shreyas1105/House_Price_Prediction.git
cd House_Price_Prediction

### 🔧 Backend Setup

### Step 1: Navigate to backend
cd backend

### Step 2: Create virtual environment
Create virtual environment

### Step 3: Activate environment
Windows: venv\Scripts\activate
Mac/Linux: source venv/bin/activate

### Step 4: Install dependencies
pip install -r requirements.txt

### Step 5: Run backend server
uvicorn main:app --reload
Server runs at:
http://127.0.0.1:8000

### 💻 Frontend Setup (Next.js)

### Step 1: Open new terminal
cd frontend

### Step 2: Install dependencies
npm install

### Step 3: Run frontend
npm run dev
Frontend runs at:
http://localhost:3000

### NOTE:
Before running the project 
1. Create a directory named data in the public directory
2. Install the Housing.csv file
3. Download the Housing.csv using the following link - https://www.kaggle.com/datasets/yasserh/housing-prices-dataset
4. Rename the csv file house_prices.csv and then move it to the data folder

📖 How to Use
Open the frontend in browser
Enter property details:
Location
Area
Bedrooms
Bathrooms
Click Predict
View the predicted house price

🚀 Features
Interactive UI for input
ML-based prediction system
API integration between frontend and backend
Modular and scalable structure

⚠️ Limitations
Model is not fully trained
Predictions may vary significantly
Limited dataset used
Not suitable for real-world decision making

### 👨‍💻 Author
***Shreyas M Shenoy***

### For queries: shreyasmshenoy11@gmail.com
