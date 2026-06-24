# Suraksha AI - Digital Public Safety Platform

**Real-time AI-powered threat detection against digital fraud, counterfeit currency, and organized scams.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-suraksha--ai--cqso.vercel.app-00C8FF?style=for-the-badge)](https://suraksha-ai-cqso.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-ANSHIT175%2FSuraksha--AI-000000?style=for-the-badge&logo=github)](https://github.com/ANSHIT175/Suraksha-AI)

---

## 🎯 Project Overview

Suraksha AI is an AI-powered digital public safety platform designed to detect and prevent digital fraud before citizens lose money. Unlike traditional fraud systems that act after complaints are filed, Suraksha AI focuses on **real-time prevention at the point of contact**.

The platform analyzes messages, URLs, call transcripts, and documents using multi-layer AI to identify scams including digital arrest fraud, counterfeit currency, phishing, OTP fraud, and organized fraud networks.

**Live Website:** [((https://suraksha-ai-cqso.vercel.app/))](https://suraksha-ai-cqso.vercel.app/)
---

## ✨ Key Features

### 🔍 Multi-Channel Analysis
- **Message Scam Checker:** Detects phishing, social engineering, and fraud in text messages
- **URL/Phishing Checker:** Analyzes suspicious links and malicious websites
- **Call Transcript Checker:** Identifies voice-based scams and deepfake attempts

### 📊 Comprehensive Scam Analysis
- **Risk Score:** 0-100 scale with real-time threat assessment
- **Risk Level Classification:** LOW, MEDIUM, HIGH, CRITICAL
- **Detected Patterns:** AI-identified fraud indicators (urgency, impersonation, suspicious URLs, etc.)
- **AI Explanation:** Clear reasoning behind threat detection
- **Safety Recommendations:** Actionable steps to protect users

### 🎯 Sample Cases
Pre-built demonstrations for common scams:
- Digital Arrest Scams
- Fake Aadhaar/KYC Verification
- Suspicious URL Detection
- Fake Courier Fraud
- OTP Fraud Prevention

### 📈 Premium Dashboards
- Technical Architecture Visualization
- Live Prototype Screens
- Real-world Impact Analysis
- Law Enforcement Intelligence Dashboard
- Comprehensive Monitoring Dashboard
- Fraud Network Graph Analysis

### 📱 Fully Responsive Design
- Mobile-first responsive layout
- Works seamlessly on desktop, tablet, and mobile
- No horizontal overflow on any device
- Touch-friendly interface

### 🔧 Reporting Features
- **Copy Report:** One-click report copying to clipboard
- **Download Report:** Export scam analysis as PDF/document
- **Share Capabilities:** Easy sharing with authorities and contacts

---

## 🏗️ Technical Architecture

### Frontend Stack
- **React 19:** Modern UI library with hooks and concurrent rendering
- **TypeScript:** Type-safe JavaScript for robust development
- **Tailwind CSS 4:** Utility-first CSS framework with OKLCH color support
- **Vite 7:** Lightning-fast build tool and dev server
- **Shadcn/UI:** Pre-built accessible React components
- **Framer Motion:** Smooth animations and transitions
- **Lucide React:** Beautiful icon library

### Backend Stack (Optional)
- **Express.js:** Fast, unopinionated web framework
- **Node.js:** JavaScript runtime for server-side logic
- **TypeScript:** Type-safe server development

### AI/ML Integration Points
- **NLP Layer:** Message and transcript analysis
- **Computer Vision:** Currency and document verification
- **Graph Analysis:** Fraud network mapping
- **Voice Analysis:** Deepfake and voice spoofing detection

### Deployment
- **Manus Platform:** Built-in hosting with auto-scaling
- **Custom Domain:** surakshaai-rxpamehl.manus.space
- **CI/CD Ready:** GitHub integration for automated deployment

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- pnpm 10.4.1+ (or npm/yarn)
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ANSHIT175/Suraksha-AI.git
cd Suraksha-AI
```

2. **Install dependencies:**
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Start development server:**
```bash
pnpm dev
# or
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm start` | Run production build |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |

---

## 📁 Project Structure

```
Suraksha-AI/
├── client/                          # Frontend React application
│   ├── public/                      # Static assets
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Main landing page with all features
│   │   │   └── NotFound.tsx        # 404 page
│   │   ├── components/
│   │   │   ├── ui/                 # Shadcn/UI components
│   │   │   ├── ErrorBoundary.tsx   # Error handling
│   │   │   ├── ManusDialog.tsx     # Custom dialog component
│   │   │   └── Map.tsx             # Google Maps integration
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    # Theme management
│   │   ├── hooks/
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   ├── lib/
│   │   │   └── utils.ts            # Utility functions
│   │   ├── App.tsx                 # Main app component with routing
│   │   ├── main.tsx                # React entry point
│   │   └── index.css               # Global styles and Tailwind
│   └── index.html                  # HTML template
├── server/                          # Backend (optional)
│   └── index.ts                    # Express server
├── shared/                          # Shared types and constants
│   └── const.ts
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── README.md                       # This file
└── LICENSE                         # MIT License
```

---

## 🎨 Design System

### Color Palette
- **Primary:** Cyan (#00C8FF) - Alert and action colors
- **Background:** Dark blue (#001a33) - Professional dark theme
- **Accent:** Cyan gradients - Modern, tech-forward aesthetic
- **Text:** White/Light gray - High contrast for readability

### Typography
- **Display:** Bold sans-serif for headlines
- **Body:** Clean sans-serif for content
- **Mono:** Code font for technical details

### Responsive Breakpoints
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

---

## 🔐 Security Features

- **Input Validation:** All user inputs validated before processing
- **XSS Protection:** React's built-in XSS protection
- **CSRF Protection:** Secure token-based requests
- **Data Privacy:** No personal data stored without consent
- **Secure Links:** All external links validated
- **HTTPS Only:** Encrypted data transmission

---

## 📊 Sample Use Cases

### For Citizens
- Check suspicious messages before clicking links
- Verify URLs before entering credentials
- Analyze call transcripts for fraud indicators
- Get instant safety recommendations
- Download reports for authorities

### For Law Enforcement
- View aggregated fraud patterns
- Identify organized fraud networks
- Track emerging scam trends
- Generate intelligence reports
- Coordinate multi-agency response

### For Banks & Telecom
- Monitor customer interactions
- Flag high-risk transactions
- Prevent account takeovers
- Protect customer data
- Reduce fraud losses

---

## 🧪 Testing

### Unit Tests
```bash
pnpm test
```

### Type Checking
```bash
pnpm check
```

### Build Verification
```bash
pnpm build
```

---

### 🚢 Deployment

### Deploy to Vercel

1. Push the project to GitHub.
2. Go to Vercel and import the GitHub repository.
3. Keep these settings:
   - Framework Preset: Vite
   - Build Command: pnpm run build
   - Output Directory: dist
4. Click Deploy.

Live Website:
https://suraksha-ai-cqso.vercel.app/

### Deploy to Other Platforms

#### Vercel
```bash
npm i -g vercel
vercel
```

#### Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

#### Docker
```bash
docker build -t suraksha-ai .
docker run -p 3000:3000 suraksha-ai
```

---

## 📝 Environment Variables

Create `.env.local` file in project root:

```env
# API Configuration
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key_here

# Analytics
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your_website_id

# OAuth
OAUTH_SERVER_URL=https://oauth.example.com
JWT_SECRET=your_jwt_secret

# App Configuration
VITE_APP_TITLE=Suraksha AI
VITE_APP_ID=suraksha-ai
VITE_APP_LOGO=https://your-logo-url.com/logo.png
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
```bash
git clone https://github.com/ANSHIT175/Suraksha-AI.git
cd Suraksha-AI
```

2. **Create a feature branch**
```bash
git checkout -b feature/your-feature-name
```

3. **Make your changes**
- Follow existing code style
- Add comments for complex logic
- Update README if needed

4. **Commit and push**
```bash
git add .
git commit -m "Add your feature description"
git push origin feature/your-feature-name
```

5. **Create Pull Request**
- Describe your changes
- Reference any related issues
- Wait for review and merge

---

## 🐛 Bug Reports

Found a bug? Please report it:

1. **Check existing issues** to avoid duplicates
2. **Create new issue** with:
   - Clear title
   - Detailed description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

---

## 📞 Contact & Support

- **Team:** pandeyanshit82
- **Email:** contact.surakshaai@example.com
- **GitHub:** [https://github.com/ANSHIT175/Suraksha-AI](https://github.com/ANSHIT175/Suraksha-AI)
- **Live Demo:** [https://surakshaai-rxpamehl.manus.space/](https://surakshaai-rxpamehl.manus.space/)

---

With conditions:
- ⚠️ License and copyright notice required

---

## 🙏 Acknowledgments

- **React Team** for the amazing UI library
- **Tailwind Labs** for utility-first CSS
- **Shadcn** for beautiful UI components
- **Vite Team** for lightning-fast build tooling
- **Community** for feedback and contributions

---

## 📈 Roadmap

### Phase 1 (Current)
- ✅ Multi-channel scam detection
- ✅ Real-time risk assessment
- ✅ Premium dashboard visuals
- ✅ Mobile responsive design

### Phase 2 (Upcoming)
- 🔄 WhatsApp bot integration
- 🔄 IVR system integration
- 🔄 Bank API integration
- 🔄 Law enforcement portal

### Phase 3 (Future)
- 🔄 Advanced ML models
- 🔄 Voice deepfake detection
- 🔄 Blockchain verification
- 🔄 Multi-language support

---

## 💡 Prototype Highlights

- Real-time scam risk scoring
- Multiple scam categories supported
- Mobile-responsive interface
- Sample cases for quick testing
- Copy and download report functionality
- Deployed live prototype on Vercel

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Shadcn/UI Components](https://ui.shadcn.com)

---

## 🙏 Acknowledgements

- React Team for the UI library
- Tailwind CSS for styling
- Vite for fast frontend tooling
- Open-source community resources

---

Built for safer digital public interactions.
---

**Built with ❤️ for a safer digital India**
