# Portfolio

A high-performance, responsive portfolio built with **Astro**, **Tailwind CSS**, and **Native Browser Animations**. Designed to be 100% data-driven and easy to customize as a reusable template.

## 🌟 Highlights
- **Zero-JS by Default:** Leveraging Astro's islands architecture.
- **JSON-First:** Update your information in `src/data/` without touching any code.
- **Built-in Themes**: Switch between multiple professional color palettes and light/dark modes from a single config file.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop.
- **Performance:** Optimized for perfect Lighthouse scores.
- **Contact Form:** Integrated with Netlify serverless function to create GitHub issues.

## 🛠️ Tech Stack
- **Frontend:** [Astro](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Iconify](https://iconify.design/) via `astro-icon`
- **Deployment:** [Netlify](https://www.netlify.com)
- **Contact Form:** Netlify Functions with GitHub API integration

## 🚀 Getting Started
Follow these instructions to get a local copy up and running.

### Prerequisites
Make sure you have **Astro v6** and **Node.js** (v22.12.0 or higher) installed on your machine.

### Installation
1. Click **Use this template** on this repository.
2. Choose **Create a new repository**.
3. Clone your new repository: `git clone <your-repo-url>`
4. Navigate to your repo: `cd <your-repo-name>`
5. Install dependencies: `npm install`
6. Start development server: `npm run dev`
7. Update your content in `/src/data/`
8. Build and deploy on your preferred platform


## 🛠️ How to Customize
To make this portfolio yours, simply edit the JSON files in `src/data/`.

### 🎨 Switching Themes
This template comes with multiple built-in color palettes. To change the theme of your portfolio, open `src/config.ts` and update the `baseTheme` variable to one of the available options:

```typescript
export const SITE_CONFIG = {
  // Options: 'default', 'strategic', 'innovator', 'executive'
  baseTheme: 'strategic', 
};
```
*(The template will automatically handle the dark/light mode toggles for whichever base theme you choose!)*

### 📁 Directory Structure
```
├── public/              # Static assets (placeholder.jpg, favicon)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── data/            # JSON files for project data
│   ├── layouts/         # Layout templates with Meta tags
│   ├── pages/           # Site routes (index.astro)
│   └── styles/          # global css styles
│   └── config.ts        # Global site configuration
├── netlify/             # Netlify serverless functions
├── netlify.toml         # Netlify configuration
├── astro.config.mjs     # Astro configuration
└── tsconfig.json        # Typescript configuration
```

## 📬 Contact Form Setup
The contact form uses a Netlify serverless function to create GitHub issues in your repository.

### Required Environment Variables
Set these in your Netlify dashboard under **Site Settings > Environment Variables**:

1. **GITHUB_TOKEN**: A GitHub Personal Access Token with `repo` scope
   - Create one at: https://github.com/settings/tokens
   - Required permissions: `repo` (full control of private repositories)

2. **GITHUB_OWNER**: Your GitHub username (e.g., `masoudsoleymani`)

3. **GITHUB_REPO**: The repository name where issues should be created (e.g., `portfolio-contact`)

### Deployment to Netlify
1. Connect your repository to Netlify
2. Set the environment variables mentioned above
3. Deploy - Netlify will automatically build and deploy your site
4. The contact form will now create issues in your specified GitHub repository

### Local Development
For local development, the contact form will attempt to call the Netlify function endpoint. To test locally:
- Use Netlify CLI: `npm install -g netlify-cli` then `netlify dev`
- Or deploy to Netlify for testing the contact form functionality


#### Useful commands and links for reference:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Tailwind CSS: `npx astro add tailwind`

Inter font: `npm install @fontsource-variable/inter` 

Space Grotesk font: `npm install @fontsource-variable/space-grotesk`

Astro-icon: `npx astro add astro-icon`

Material Desing Icons: `npm install @iconify-json/mdi`

https://docs.astro.build/en/guides/styling/#add-tailwind-4

https://www.astroicon.dev

https://icon-sets.iconify.design/mdi/?category=Material

## 📝 License
This project is licensed under the [MIT License](LICENSE)
