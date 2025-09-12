# MuatParts Plus - Seller

Next.js application for MuatParts Plus seller platform.

## Getting Started

### Prerequisites

- Node.js >= 18
- npm 11.5.2

### First Time Setup

1. Clone the repository:

```bash
git clone [repository-url]
cd muatpartsplus-seller
```

2. Initialize the packages submodule (automatically checks out packages-root branch):

```bash
npm run packages:sync
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

```bash
cp .example.env .env.local
# Edit .env.local with your configuration
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Working with Packages Submodule

The `packages/` directory is a git submodule containing shared components and utilities. It's configured to track the `packages-root` branch.

### Common Commands

#### First time setup or after cloning:

```bash
npm run packages:sync  # Syncs and checks out packages-root branch
```

#### Update packages to latest version:

```bash
npm run packages:update
```

#### After pulling changes from main repo:

```bash
npm run packages:sync
```

### Manual Submodule Management

If you need more control over the submodule:

```bash
# Check current submodule status
git submodule status

# Update to specific commit
cd packages
git checkout [commit-hash]
cd ..
git add packages
git commit -m "Update packages to specific version"

# View submodule changes
cd packages
git log --oneline -5
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run storybook` - Start Storybook for UI components
- `npm run packages:update` - Update packages submodule to latest
- `npm run packages:sync` - Sync and initialize packages submodule

## Project Structure

```
/
├── src/              # Application source code
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   ├── hooks/        # Custom React hooks
│   └── utils/        # Utility functions
├── packages/         # Shared packages (submodule)
│   ├── ui/           # Shared UI components
│   ├── hooks/        # Shared React hooks
│   ├── lib/          # Shared utilities
│   └── ...           # Other shared packages
├── public/           # Static files
└── scripts/          # Build and utility scripts
```

## Team Collaboration

### Working with Package Updates

1. **Before making changes to packages:**
   - Communicate with the team about planned changes
   - Ensure changes are backward compatible when possible

2. **After updating packages:**
   - Commit the submodule reference in this repo
   - Notify other team members of the update
   - Document any breaking changes

3. **Handling conflicts:**
   - If package versions differ between seller/buyer repos
   - Coordinate with team to align on a stable version
   - Use branches in packages repo for different app requirements

## Troubleshooting

### Submodule not initialized

```bash
npm run packages:sync
```

### Package imports not resolving

```bash
# Ensure submodule is initialized and up to date
git submodule update --init --recursive
npm install
```

### Different package versions needed

Contact the team to coordinate package updates across repositories.
