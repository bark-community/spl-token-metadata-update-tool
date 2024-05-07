import { exec } from 'child_process';
import { promises as fs } from 'fs';

// Define metadata configuration file path
const CONFIG_FILE_PATH: string = 'metadata-config.json';

// Define the Solana token program ID
const TOKEN_2022_PROGRAM_ID: string = 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';

// Function to read metadata configuration from file
async function readMetadataConfig(): Promise<{ mintAddress: string, extensions: Record<string, string> }> {
    try {
        const data = await fs.readFile(CONFIG_FILE_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error(`Error reading metadata configuration file: ${(error as Error).message}`);
    }
}

// Function to update metadata extension
async function updateMetadata(mintAddress: string, extension: string, url: string): Promise<void> {
    try {
        const command: string = `solana tokens update-metadata ${mintAddress} ${extension} ${url} --program-id ${TOKEN_2022_PROGRAM_ID}`;
        await exec(command);
        console.log(`Updated ${extension} metadata.`);
    } catch (error) {
        console.error(`Error updating ${extension} metadata: ${(error as Error).message}`);
        throw new Error(`Error updating ${extension} metadata: ${(error as Error).message}`);
    }
}

// Function to update metadata for all extensions
async function updateAllMetadata(): Promise<void> {
    try {
        console.log('Reading metadata configuration...');
        const { mintAddress, extensions } = await readMetadataConfig();
        console.log('Metadata configuration read successfully.');
        
        console.log('Updating metadata extensions...');
        for (const [extension, url] of Object.entries(extensions)) {
            await updateMetadata(mintAddress, extension, url);
        }
        console.log('Metadata extensions updated successfully.');
    } catch (error) {
        console.error(`Error updating metadata: ${(error as Error).message}`);
    }
}

// Call the function to update metadata for all extensions
updateAllMetadata();
