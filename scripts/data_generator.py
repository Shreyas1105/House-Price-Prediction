import numpy as np
import pandas as pd
import json

# Generate comprehensive market data for analytics
np.random.seed(42)

# Generate sample properties
properties = []
for i in range(10000):
    sqft = np.random.uniform(1000, 5000)
    bedrooms = np.random.randint(1, 6)
    bathrooms = np.random.uniform(1, 4)
    year = np.random.randint(1980, 2024)
    location = np.random.choice(['urban', 'suburban', 'rural'])
    
    # Price calculation
    base = 200000
    price = (
        base +
        sqft * 150 +
        bedrooms * 50000 +
        bathrooms * 30000 -
        (2024 - year) * 1000
    )
    
    loc_multiplier = {'urban': 1.3, 'suburban': 1.1, 'rural': 0.9}[location]
    price = price * loc_multiplier + np.random.normal(0, 20000)
    
    properties.append({
        'id': i,
        'square_feet': sqft,
        'bedrooms': bedrooms,
        'bathrooms': bathrooms,
        'year_built': year,
        'location': location,
        'price': price,
    })

df = pd.DataFrame(properties)

# Calculate statistics
print("Market Analysis Statistics")
print("=" * 50)
print(f"Total Properties: {len(df)}")
print(f"Average Price: ${df['price'].mean():,.2f}")
print(f"Median Price: ${df['price'].median():,.2f}")
print(f"Price Range: ${df['price'].min():,.2f} - ${df['price'].max():,.2f}")
print(f"\nBy Location:")
for loc in df['location'].unique():
    subset = df[df['location'] == loc]
    print(f"  {loc.capitalize()}: ${subset['price'].mean():,.2f} avg ({len(subset)} properties)")

# Save for later use
df.to_csv('market_data.csv', index=False)
print("\n✓ Market data saved to market_data.csv")

# Generate correlation matrix
correlations = df[['square_feet', 'bedrooms', 'bathrooms', 'price']].corr()
print("\nFeature Correlations with Price:")
print(correlations['price'].drop('price').sort_values(ascending=False))
