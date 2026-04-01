"""
Prepare and validate your house price CSV dataset
Run this before using the app to ensure data is in correct format
"""

import csv
import sys
from pathlib import Path

def validate_csv(csv_path):
    """Validate CSV has all required columns"""
    required_columns = ['square_feet', 'bedrooms', 'bathrooms', 'year_built', 'location', 'price']
    
    try:
        with open(csv_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            headers = reader.fieldnames or []
            
            print(f"CSV file: {csv_path}")
            print(f"Found columns: {headers}")
            print(f"Required columns: {required_columns}")
            
            # Check if all required columns exist
            missing = [col for col in required_columns if col not in headers]
            if missing:
                print(f"❌ Missing columns: {missing}")
                return False
            
            # Validate data rows
            row_count = 0
            errors = 0
            
            for row_num, row in enumerate(reader, start=2):
                try:
                    float(row['square_feet'])
                    float(row['bedrooms'])
                    float(row['bathrooms'])
                    float(row['year_built'])
                    float(row['price'])
                    
                    if row['location'] not in ['urban', 'suburban', 'rural']:
                        print(f"⚠️  Row {row_num}: Invalid location '{row['location']}'")
                        errors += 1
                    
                    row_count += 1
                except ValueError as e:
                    print(f"⚠️  Row {row_num}: Invalid numeric value - {e}")
                    errors += 1
            
            print(f"\n✓ Total valid rows: {row_count}")
            if errors == 0:
                print("✓ CSV validation passed!")
                return True
            else:
                print(f"⚠️  Found {errors} warnings")
                return True
                
    except FileNotFoundError:
        print(f"❌ File not found: {csv_path}")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

def create_sample_csv():
    """Create a sample CSV file for testing"""
    sample_path = Path('public/data/sample_house_prices.csv')
    sample_path.parent.mkdir(parents=True, exist_ok=True)
    
    sample_data = [
        ['square_feet', 'bedrooms', 'bathrooms', 'year_built', 'location', 'price'],
        ['2500', '3', '2', '2000', 'urban', '5000000'],
        ['3000', '4', '2.5', '2005', 'suburban', '6500000'],
        ['2000', '2', '1', '1995', 'rural', '3500000'],
        ['3500', '4', '3', '2010', 'urban', '7200000'],
        ['2200', '3', '2', '2002', 'suburban', '4800000'],
        ['4000', '5', '3.5', '2015', 'urban', '8500000'],
        ['1800', '2', '1.5', '1990', 'rural', '2800000'],
        ['3200', '3', '2.5', '2008', 'suburban', '6200000'],
    ]
    
    with open(sample_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerows(sample_data)
    
    print(f"\n✓ Sample CSV created: {sample_path}")

if __name__ == '__main__':
    # Check if CSV file path is provided
    if len(sys.argv) > 1:
        csv_file = sys.argv[1]
        validate_csv(csv_file)
    else:
        print("Usage: python scripts/prepare_csv.py <path_to_csv>")
        print("\nExample: python scripts/prepare_csv.py public/data/house_prices.csv")
        print("\nCreating sample CSV for testing...")
        create_sample_csv()
