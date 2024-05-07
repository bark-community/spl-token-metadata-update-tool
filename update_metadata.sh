#!/bin/bash

# Define the mint address
MINT_ADDRESS="TEST9FiwnEDrP2r9zFsHVNow62VfgYA5hkQ496rjqzY"

# Define metadata extensions
declare -A EXTENSIONS=(
 ["website"]="https://example.com"
 ["governance"]="https://example.com/governance"
 ["twitter"]="https://twitter.com/example"
 ["discord"]="https://discord.gg/example"
 ["telegram"]="https://t.me/example"
 ["medium"]="https://medium.com/@example"
)

# Loop through metadata extensions and update metadata
for key in "${!EXTENSIONS[@]}"; do
    echo "Updating $key..."
    solana tokens update-metadata "$MINT_ADDRESS" "$key" "${EXTENSIONS[$key]}"
done
