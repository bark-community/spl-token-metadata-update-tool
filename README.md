# Solana Token Metadata Updater

This script allows you to update the metadata extensions for a Solana token in one go.

## Installation

1. **Install Node.js and npm**: 
   - Visit [Node.js website](https://nodejs.org/) to download and install Node.js and npm.

2. **Clone this repository**:
   ```bash
   git clone https://github.com/bark-community/solana-token-metadata-updater.git
   cd solana-token-metadata-updater
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. Create a JSON file named `metadata-config.json` with the following structure:
   ```json
   {
       "mintAddress": "YOUR_MINT_ADDRESS",
       "extensions": {
           "website": "https://example.com",
           "governance": "https://example.com/governance",
           "twitter": "https://twitter.com/example",
           "discord": "https://discord.gg/example",
           "telegram": "https://t.me/example",
           "medium": "https://medium.com/@example"
       }
   }
   ```

   Replace `YOUR_MINT_ADDRESS` with the mint address of your Solana token.

2. Run the script:
   ```bash
   npm start
   ```

This script will update the metadata extensions for the Solana token with the specified mint address using the URLs provided in the `metadata-config.json` file.

Make sure you have the necessary permissions and SOL balance to perform these operations.

## License

[MIT License](LICENSE).