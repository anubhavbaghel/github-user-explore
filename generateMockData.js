import { Octokit } from 'octokit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize Octokit (using public API access, no token required for basic requests)
const octokit = new Octokit();

async function generateMockData() {
  try {
    console.log('Fetching mock data from GitHub API...');
    
    // Fetch multiple popular users
    const users = ['torvalds', 'gvanrossum', 'rms0', 'bnoordhuis', 'addyosmani'];
    const mockData = [];

    for (const username of users) {
      console.log(`Fetching data for ${username}...`);
      
      // Get user info
      const { data: userData } = await octokit.rest.users.getByUsername({
        username,
      });

      // Get user's public repos
      const { data: reposData } = await octokit.rest.repos.listForUser({
        username,
        sort: 'stars',
        per_page: 5,
      });

      // Process the data
      const userMockData = {
        id: userData.id,
        login: userData.login,
        name: userData.name || 'Not provided',
        avatar_url: userData.avatar_url,
        bio: userData.bio || 'No bio available',
        location: userData.location || 'Not specified',
        company: userData.company || 'Not specified',
        blog: userData.blog || '',
        twitter_username: userData.twitter_username || null,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        created_at: userData.created_at,
        updated_at: userData.updated_at,
        repositories: reposData.map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || 'No description',
          url: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language || 'Not specified',
          updated_at: repo.updated_at,
        })),
      };

      mockData.push(userMockData);
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Write to mockData.js
    const outputPath = path.join(__dirname, 'src', 'Data', 'mockData.js');
    const mockDataContent = `export const mockUsers = ${JSON.stringify(mockData, null, 2)};

export const defaultMockUser = mockUsers[0];
`;

    fs.writeFileSync(outputPath, mockDataContent, 'utf-8');
    console.log(`✅ Mock data generated successfully at ${outputPath}`);
    console.log(`Generated mock data for ${mockData.length} users`);

  } catch (error) {
    console.error('Error generating mock data:', error.message);
    process.exit(1);
  }
}

generateMockData();
