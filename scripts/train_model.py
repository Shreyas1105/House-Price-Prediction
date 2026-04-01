import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import r2_score, mean_absolute_error
import pickle
import json

# Generate synthetic real estate data for demonstration
np.random.seed(42)
n_samples = 1000

data = {
    'square_feet': np.random.uniform(1000, 5000, n_samples),
    'bedrooms': np.random.randint(1, 6, n_samples),
    'bathrooms': np.random.uniform(1, 4, n_samples),
    'year_built': np.random.randint(1980, 2024, n_samples),
    'lot_size': np.random.uniform(2000, 15000, n_samples),
    'garage': np.random.randint(0, 4, n_samples),
    'location': np.random.choice(['urban', 'suburban', 'rural'], n_samples),
}

# Create DataFrame
df = pd.DataFrame(data)

# Target variable: price
# Formula: base price + factors
base_price = 200000
df['price'] = (
    base_price +
    df['square_feet'] * 150 +
    df['bedrooms'] * 50000 +
    df['bathrooms'] * 30000 -
    (2024 - df['year_built']) * 1000
)

# Apply location multiplier
location_map = {'urban': 1.3, 'suburban': 1.1, 'rural': 0.9}
df['price'] = df['price'] * df['location'].map(location_map)

# Add some noise
df['price'] += np.random.normal(0, 20000, n_samples)

# Prepare features
X = df.drop('price', axis=1).copy()
y = df['price']

# Encode location
X['location_encoded'] = X['location'].map(location_map)
X = X.drop('location', axis=1)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train Gradient Boosting model
model = GradientBoostingRegressor(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=5,
    random_state=42
)
model.fit(X_train_scaled, y_train)

# Evaluate
y_pred = model.predict(X_test_scaled)
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)

print(f"Model R² Score: {r2:.4f}")
print(f"Mean Absolute Error: ${mae:,.2f}")

# Save model and scaler
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)

with open('scaler.pkl', 'wb') as f:
    pickle.dump(scaler, f)

# Feature importance
feature_importance = {
    'square_feet': float(model.feature_importances_[0]),
    'bedrooms': float(model.feature_importances_[1]),
    'bathrooms': float(model.feature_importances_[2]),
    'year_built': float(model.feature_importances_[3]),
    'lot_size': float(model.feature_importances_[4]),
    'garage': float(model.feature_importances_[5]),
    'location': float(model.feature_importances_[6]),
}

print("\nFeature Importance:")
for feature, importance in sorted(feature_importance.items(), key=lambda x: x[1], reverse=True):
    print(f"{feature}: {importance:.4f}")

with open('feature_importance.json', 'w') as f:
    json.dump(feature_importance, f, indent=2)

print("\n✓ Model training complete!")
print("✓ Files saved: model.pkl, scaler.pkl, feature_importance.json")
