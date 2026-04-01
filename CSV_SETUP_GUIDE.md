# How to Use Your Local CSV Dataset

## Step 1: Place Your CSV File

Copy your CSV file to the `public/data/` folder:

\`\`\`
your-project/
├── public/
│   ├── data/
│   │   └── house_prices.csv  ← Place your CSV here
│   ├── images/
│   └── ...
├── app/
└── ...
\`\`\`

If the `data` folder doesn't exist, create it manually.

## Step 2: CSV File Format

Your CSV should have these columns (adjust column names in the code if different):

\`\`\`csv
square_feet,bedrooms,bathrooms,year_built,location,price
2500,3,2,2000,urban,5000000
3000,4,2.5,2005,suburban,6500000
2000,2,1,1995,rural,3500000
...
\`\`\`

**Required Columns:**
- `square_feet` - Property size in sq ft
- `bedrooms` - Number of bedrooms
- `bathrooms` - Number of bathrooms
- `year_built` - Year the property was built
- `location` - Type: "urban", "suburban", or "rural"
- `price` - Actual house price (in INR)

## Step 3: Create the Data Folder

Before running the app:
1. Open the project folder in File Explorer
2. Go to `public/` folder
3. Create a new folder named `data`
4. Place your `house_prices.csv` file inside

## Step 4: Run the App

\`\`\`bash
npm run dev
\`\`\`

The app will automatically:
- Load your CSV data from `public/data/house_prices.csv`
- Train the ML model using your data
- Make predictions based on your dataset

## Column Names Not Matching?

If your CSV has different column names, update `app/api/predict/route.ts`:

Find this section:
\`\`\`typescript
const dataPoints = csvData.map((row) => ({
  squareFeet: parseFloat(row.square_feet),
  bedrooms: parseFloat(row.bedrooms),
  // ... update column names here
}));
\`\`\`

Replace with your column names.

## Example CSV Format

\`\`\`csv
square_feet,bedrooms,bathrooms,year_built,location,price
2500,3,2,2000,urban,4500000
3500,4,3,2010,suburban,6500000
2000,2,1,1990,rural,2500000
3200,3,2.5,2015,urban,7200000
\`\`\`

## Troubleshooting

**Issue:** CSV file not found
- Solution: Make sure file is in `public/data/house_prices.csv`

**Issue:** Model training fails
- Solution: Check CSV columns match the expected format

**Issue:** Predictions seem off
- Solution: Ensure your CSV has enough data (at least 50+ rows recommended)
