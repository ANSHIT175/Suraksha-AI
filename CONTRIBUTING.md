# Contributing to Suraksha AI

Thank you for your interest in contributing to Suraksha AI! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Report issues responsibly

## How to Contribute

### 1. Report Bugs

If you find a bug, please create an issue with:
- Clear title describing the bug
- Detailed description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots or error logs if applicable
- Your environment (OS, browser, Node version)

### 2. Suggest Features

Feature suggestions are welcome! Please include:
- Clear title and description
- Use case and motivation
- Possible implementation approach
- Examples or mockups if applicable

### 3. Submit Code Changes

#### Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Suraksha-AI.git
cd Suraksha-AI

# Install dependencies
pnpm install

# Create feature branch
git checkout -b feature/your-feature-name
```

#### Development Workflow

1. **Make your changes**
   - Follow existing code style
   - Write clear, descriptive commit messages
   - Add comments for complex logic
   - Update tests if applicable

2. **Test your changes**
   ```bash
   pnpm check        # Type checking
   pnpm build        # Build verification
   pnpm dev          # Manual testing
   ```

3. **Format your code**
   ```bash
   pnpm format       # Auto-format with Prettier
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Add feature: description"
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Use clear PR title
   - Describe changes and motivation
   - Reference related issues (#123)
   - Add screenshots for UI changes

### 4. Documentation

Help improve documentation by:
- Fixing typos or unclear explanations
- Adding examples
- Improving code comments
- Updating API documentation

## Coding Standards

### TypeScript
- Use strict mode
- Add type annotations
- Avoid `any` type
- Use interfaces for objects

### React
- Use functional components with hooks
- Keep components focused and reusable
- Use proper prop typing
- Add JSDoc comments for complex components

### Styling
- Use Tailwind CSS utilities
- Follow existing color scheme
- Maintain responsive design
- Test on multiple devices

### Commits
- Use clear, descriptive messages
- Reference issues when applicable
- Use imperative mood ("Add feature" not "Added feature")
- Keep commits focused and atomic

## Pull Request Process

1. **Before submitting:**
   - Ensure code passes all checks
   - Update documentation if needed
   - Add tests for new features
   - Verify no breaking changes

2. **PR Description should include:**
   - What changes were made
   - Why these changes were needed
   - How to test the changes
   - Related issues or PRs

3. **Review process:**
   - Maintainers will review your PR
   - Address feedback and suggestions
   - Be open to constructive criticism
   - Update PR based on feedback

4. **Merge:**
   - PR will be merged after approval
   - Your changes will be live on next release

## Project Structure

```
client/                 # Frontend React app
├── src/
│   ├── pages/         # Page components
│   ├── components/    # Reusable components
│   ├── hooks/         # Custom React hooks
│   ├── contexts/      # React contexts
│   └── lib/           # Utility functions
├── public/            # Static assets
└── index.html         # HTML template

server/               # Backend (optional)
shared/               # Shared types
```

## Development Tips

### Running Development Server
```bash
pnpm dev
# Server runs at http://localhost:3000
```

### Building for Production
```bash
pnpm build
pnpm preview  # Preview production build
```

### Type Checking
```bash
pnpm check
```

### Code Formatting
```bash
pnpm format
```

## Common Issues

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build errors
```bash
# Clean build
pnpm build --force
```

### Port already in use
```bash
# Use different port
pnpm dev -- --port 3001
```

## Areas for Contribution

- **Frontend:** UI improvements, new components, animations
- **Backend:** API endpoints, database integration, authentication
- **Documentation:** README, guides, examples
- **Testing:** Unit tests, integration tests, E2E tests
- **DevOps:** CI/CD improvements, deployment optimization
- **Translations:** Multi-language support

## Getting Help

- **Questions:** Create a discussion or issue
- **Documentation:** Check README and docs folder
- **Examples:** Look at existing code patterns
- **Community:** Join our discussions

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Suraksha AI! Together we're building a safer digital India. 🇮🇳
