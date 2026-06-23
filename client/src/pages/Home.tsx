'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertTriangle,
  Shield,
  Lock,
  TrendingUp,
  Zap,
  Users,
  Github,
  Mail,
  MapPin,
  Download,
  Copy,
  CheckCircle,
  AlertCircle,
  Info,
  Menu,
  X,
} from 'lucide-react';
import { toast } from 'sonner';

// Sample scam data
const SAMPLE_CASES = {
  arrest: {
    tab: 'message',
    text: 'URGENT: Your Aadhar card has been suspended due to suspicious activity. Your bank account will be frozen in 24 hours. Call CBI immediately at +91-XXXX-XXXX-XXXX or visit https://aadhar-verify-secure.tk to verify your identity. Do not ignore this notice.',
  },
  aadhaar: {
    tab: 'message',
    text: 'Your Aadhaar/KYC verification has expired. Update immediately at https://aadhaar-kyc-update-portal.xyz using your 12-digit Aadhaar number. Failure to do so will result in account suspension within 48 hours.',
  },
  url: {
    tab: 'url',
    text: 'https://secure-bank-login-verify.tk/user/dashboard',
  },
  courier: {
    tab: 'message',
    text: 'Your parcel could not be delivered. Please pay ₹99 customs fee at https://courier-payment-verify.tk/pay?id=ABC123 to claim your package. Reference: DHL-2024-567890',
  },
  otp: {
    tab: 'message',
    text: 'Your OTP for bank transaction is: 847392. Do not share this with anyone. If you did not request this, ignore this message. Your account will be locked in 5 minutes.',
  },
};

// Mock scam analysis response
const generateScamReport = (input: string) => {
  return {
    riskScore: Math.floor(Math.random() * 40) + 60,
    riskLevel: 'HIGH',
    scamType: 'Phishing / Social Engineering',
    detectedPatterns: [
      'Urgency indicators (24 hours, immediate action)',
      'Impersonation of government/financial institutions',
      'Suspicious URL patterns',
      'Request for personal information',
      'Threat of account suspension',
    ],
    explanation:
      'This message exhibits multiple characteristics of a phishing scam. It uses urgency tactics, impersonates official institutions, and contains suspicious links designed to steal personal information.',
    recommendations: [
      'Do not click any links in the message',
      'Verify directly with official channels',
      'Report to cybercrime portal',
      'Enable two-factor authentication',
      'Monitor your account for unauthorized access',
    ],
    timestamp: new Date().toLocaleString(),
  };
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('message');
  const [messageInput, setMessageInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [transcriptInput, setTranscriptInput] = useState('');
  const [scamReport, setScamReport] = useState<any>(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showDocumentation, setShowDocumentation] = useState(false);
  const [showApiDocs, setShowApiDocs] = useState(false);
  const [showReportIssue, setShowReportIssue] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSampleCase = (caseKey: keyof typeof SAMPLE_CASES) => {
    const caseData = SAMPLE_CASES[caseKey];
    setActiveTab(caseData.tab);

    if (caseData.tab === 'message') {
      setMessageInput(caseData.text);
    } else if (caseData.tab === 'url') {
      setUrlInput(caseData.text);
    } else if (caseData.tab === 'transcript') {
      setTranscriptInput(caseData.text);
    }
  };

  const handleAnalyze = () => {
    const input = activeTab === 'message' ? messageInput : activeTab === 'url' ? urlInput : transcriptInput;

    if (!input.trim()) {
      toast.error('Please enter content to analyze');
      return;
    }

    const report = generateScamReport(input);
    setScamReport(report);
    setShowReportModal(true);
  };

  const handleCopyReport = () => {
    if (!scamReport) return;

    const reportText = `
SCAM ANALYSIS REPORT
====================
Risk Score: ${scamReport.riskScore}/100
Risk Level: ${scamReport.riskLevel}
Scam Type: ${scamReport.scamType}

Detected Patterns:
${scamReport.detectedPatterns.map((p: string) => `• ${p}`).join('\n')}

AI Explanation:
${scamReport.explanation}

Safety Recommendations:
${scamReport.recommendations.map((r: string) => `✓ ${r}`).join('\n')}

Report Generated: ${scamReport.timestamp}
    `.trim();

    navigator.clipboard.writeText(reportText);
    toast.success('Report copied to clipboard');
  };

  const handleDownloadReport = () => {
    if (!scamReport) return;

    const reportText = `
SCAM ANALYSIS REPORT
====================
Risk Score: ${scamReport.riskScore}/100
Risk Level: ${scamReport.riskLevel}
Scam Type: ${scamReport.scamType}

Detected Patterns:
${scamReport.detectedPatterns.map((p: string) => `• ${p}`).join('\n')}

AI Explanation:
${scamReport.explanation}

Safety Recommendations:
${scamReport.recommendations.map((r: string) => `✓ ${r}`).join('\n')}

Report Generated: ${scamReport.timestamp}
    `.trim();

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(reportText));
    element.setAttribute('download', `scam-report-${Date.now()}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Report downloaded');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Suraksha AI
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection(featuresRef)} className="hover:text-cyan-400 transition">
              Features
            </button>
            <button onClick={() => scrollToSection(demoRef)} className="hover:text-cyan-400 transition">
              Try Demo
            </button>
            <button onClick={() => scrollToSection(architectureRef)} className="hover:text-cyan-400 transition">
              Architecture
            </button>
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-cyan-400 transition">
              About
            </button>
            <a
              href="https://github.com/ANSHIT175/Suraksha-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-cyan-500/20 p-4 space-y-3">
            <button onClick={() => scrollToSection(featuresRef)} className="block w-full text-left hover:text-cyan-400">
              Features
            </button>
            <button onClick={() => scrollToSection(demoRef)} className="block w-full text-left hover:text-cyan-400">
              Try Demo
            </button>
            <button onClick={() => scrollToSection(architectureRef)} className="block w-full text-left hover:text-cyan-400">
              Architecture
            </button>
            <button onClick={() => scrollToSection(aboutRef)} className="block w-full text-left hover:text-cyan-400">
              About
            </button>
            <a
              href="https://github.com/ANSHIT175/Suraksha-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left hover:text-cyan-400"
            >
              GitHub
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10">
            <span className="text-cyan-400 text-sm font-semibold">AI-Powered Threat Detection</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Threats Detected. Instantly.
          </h1>

          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Real-time AI-powered protection against digital fraud, counterfeit currency, and scams. Designed for citizens,
            banks, telecom teams, and law enforcement workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection(demoRef)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold"
            >
              Try Live Demo
            </Button>
            <Button
              onClick={() => scrollToSection(contactRef)}
              variant="outline"
              className="border-cyan-500/50 hover:bg-cyan-500/10 px-8 py-6 text-lg font-semibold"
            >
              Contact Team
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Multi-Layered Protection</h2>
          <p className="text-center text-slate-400 mb-16">
            Comprehensive AI-powered security across multiple threat vectors
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: 'Digital Arrest Scams',
                desc: 'Real-time detection of spoofed calls and scam patterns using voice analysis and AI classification.',
              },
              {
                icon: TrendingUp,
                title: 'Counterfeit Currency',
                desc: 'Computer vision AI identifies counterfeit notes by analyzing security features, watermarks, and microprints.',
              },
              {
                icon: Users,
                title: 'Fraud Network Intelligence',
                desc: 'Graph AI maps relationships and transaction patterns to uncover organized fraud rings.',
              },
              {
                icon: Lock,
                title: 'Phishing & Malware',
                desc: 'NLP-powered detection of phishing messages and malicious links in SMS and email.',
              },
              {
                icon: Zap,
                title: 'Voice Spoofing Detection',
                desc: 'AI-voice detection identifies deepfakes and spoofed caller IDs in real-time.',
              },
              {
                icon: Shield,
                title: 'Citizen Fraud Shield',
                desc: 'WhatsApp and mobile app for citizens to report scams and receive instant risk assessments.',
              },
            ].map((feature, i) => (
              <Card key={i} className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition">
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-cyan-400 mb-2" />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section ref={demoRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Try Live Demo</h2>
          <p className="text-center text-slate-400 mb-12">
            Test our AI analyzers with real scam examples or your own input
          </p>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
            {/* Sample Cases */}
            <div className="mb-8">
              <p className="text-slate-300 font-semibold mb-4">Sample Cases:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { key: 'arrest' as const, label: 'Digital Arrest' },
                  { key: 'aadhaar' as const, label: 'Fake Aadhaar/KYC' },
                  { key: 'url' as const, label: 'Suspicious URL' },
                  { key: 'courier' as const, label: 'Fake Courier' },
                  { key: 'otp' as const, label: 'OTP Fraud' },
                ].map((sample) => (
                  <Button
                    key={sample.key}
                    onClick={() => handleSampleCase(sample.key)}
                    variant="outline"
                    className="border-slate-600 hover:bg-cyan-500/20 hover:border-cyan-500 text-sm"
                  >
                    {sample.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Analyzer Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-slate-700/50">
                <TabsTrigger value="message">Message Scam Checker</TabsTrigger>
                <TabsTrigger value="url">URL / Phishing Checker</TabsTrigger>
                <TabsTrigger value="transcript">Call Transcript Checker</TabsTrigger>
              </TabsList>

              <TabsContent value="message" className="space-y-4">
                <Textarea
                  placeholder="Paste a suspicious message here..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="min-h-32 bg-slate-700/50 border-slate-600 text-white"
                />
              </TabsContent>

              <TabsContent value="url" className="space-y-4">
                <Input
                  placeholder="Enter a suspicious URL..."
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="bg-slate-700/50 border-slate-600 text-white"
                />
              </TabsContent>

              <TabsContent value="transcript" className="space-y-4">
                <Textarea
                  placeholder="Paste a suspicious call transcript here..."
                  value={transcriptInput}
                  onChange={(e) => setTranscriptInput(e.target.value)}
                  className="min-h-32 bg-slate-700/50 border-slate-600 text-white"
                />
              </TabsContent>

              <Button
                onClick={handleAnalyze}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-6 text-lg font-semibold mt-4"
              >
                Analyze {activeTab === 'message' ? 'Message' : activeTab === 'url' ? 'URL' : 'Transcript'}
              </Button>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Architecture Visual Section */}
      <section ref={architectureRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Technical Architecture</h2>
          <p className="text-center text-slate-400 mb-12">
            How Suraksha AI detects and prevents scams in real-time
          </p>

          {/* Architecture Diagram Image */}
          <div className="mb-16 rounded-lg overflow-hidden border border-slate-700/50">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663786685451/RxpAMEHLbFatGicagYRTNV/architecture-diagram-ZB8UDXrc492SPNHsXqQfoi.webp"
              alt="Technical Architecture"
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <Zap className="w-8 h-8 text-cyan-400 mb-2" />
                <CardTitle className="text-white">Multi-Layer AI Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>• <strong>NLP Layer:</strong> Message and transcript analysis</li>
                  <li>• <strong>Computer Vision:</strong> Currency and document verification</li>
                  <li>• <strong>Graph Analysis:</strong> Fraud network mapping</li>
                  <li>• <strong>Voice Analysis:</strong> Deepfake and spoofing detection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-cyan-400 mb-2" />
                <CardTitle className="text-white">Real-time Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">
                  Instant threat detection and risk assessment across multiple channels with sub-second response times.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <Shield className="w-8 h-8 text-cyan-400 mb-2" />
                <CardTitle className="text-white">Future Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>• WhatsApp Bot for instant scam reporting</li>
                  <li>• IVR system for automated threat detection</li>
                  <li>• Cybercrime Portal integration</li>
                  <li>• Bank API for transaction monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Prototype Screens */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Live Prototype Screens</h2>
          <p className="text-center text-slate-400 mb-12">
            Mobile app interface showing real-time scam detection
          </p>

          <div className="flex justify-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663786685451/RxpAMEHLbFatGicagYRTNV/mobile-mockup-CSmC98QGMGdk2PRUpTxRKF.webp"
              alt="Mobile App Mockup"
              className="max-w-sm w-full rounded-lg border border-slate-700/50"
            />
          </div>
        </div>
      </section>

      {/* Real-world Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Real-world Impact</h2>
          <p className="text-center text-slate-400 mb-12">
            Suraksha AI preventing digital arrest scams and counterfeit currency fraud
          </p>

          <div className="rounded-lg overflow-hidden border border-slate-700/50">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663786685451/RxpAMEHLbFatGicagYRTNV/real-world-impact-TQfRwaBWVA6TJjgiw9M6qq.webp"
              alt="Real-world Impact"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Law Enforcement Dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Law Enforcement Dashboard</h2>
          <p className="text-center text-slate-400 mb-12">
            Intelligence platform for cybercrime investigation and prevention
          </p>

          <div className="rounded-lg overflow-hidden border border-slate-700/50">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663786685451/RxpAMEHLbFatGicagYRTNV/law-enforcement-dashboard-2RZmNxjWHjiLB5Yc5nG7TA.webp"
              alt="Law Enforcement Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Comprehensive Monitoring Dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Comprehensive Monitoring Dashboard</h2>
          <p className="text-center text-slate-400 mb-12">
            Real-time analytics and threat intelligence
          </p>

          <div className="rounded-lg overflow-hidden border border-slate-700/50">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663786685451/RxpAMEHLbFatGicagYRTNV/monitoring-dashboard-3hKXeHpeMsezhqNZLWshTH.webp"
              alt="Monitoring Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Fraud Network Graph */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Fraud Network Analysis</h2>
          <p className="text-center text-slate-400 mb-12">
            Visualizing interconnected scam operations and fraud rings
          </p>

          <div className="rounded-lg overflow-hidden border border-slate-700/50">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663786685451/RxpAMEHLbFatGicagYRTNV/fraud-network-graph-GkfkwTKuERhhUhYUrZpUfX.webp"
              alt="Fraud Network Graph"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Suraksha AI</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  To provide real-time, AI-powered protection against digital fraud and scams for citizens, banks, and law
                  enforcement agencies across India.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Real-time threat detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Multi-channel analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Report-ready output
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Law Enforcement dashboard
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm">Project</p>
                  <p className="text-white font-semibold">Suraksha AI</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Team</p>
                  <p className="text-white font-semibold">pandeyanshit82</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white font-semibold">contact.surakshaai@example.com</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">GitHub</p>
                  <a
                    href="https://github.com/ANSHIT175/Suraksha-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    github.com/ANSHIT175/Suraksha-AI
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  Quick Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={() => scrollToSection(demoRef)}
                  variant="outline"
                  className="w-full border-slate-600 hover:bg-cyan-500/20 hover:border-cyan-500 justify-start"
                >
                  Live Demo
                </Button>
                <a
                  href="https://github.com/ANSHIT175/Suraksha-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full border-slate-600 hover:bg-cyan-500/20 hover:border-cyan-500 justify-start">
                    GitHub Repository
                  </Button>
                </a>
                <Button
                  onClick={() => setShowDocumentation(true)}
                  variant="outline"
                  className="w-full border-slate-600 hover:bg-cyan-500/20 hover:border-cyan-500 justify-start"
                >
                  Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <button onClick={() => scrollToSection(featuresRef)} className="hover:text-cyan-400">
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection(demoRef)} className="hover:text-cyan-400">
                    Demo
                  </button>
                </li>
                <li>
                  <a href="https://github.com/ANSHIT175/Suraksha-AI" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <button onClick={() => scrollToSection(aboutRef)} className="hover:text-cyan-400">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowComingSoon(true)} className="hover:text-cyan-400">
                    Blog
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowComingSoon(true)} className="hover:text-cyan-400">
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <button onClick={() => setShowPrivacy(true)} className="hover:text-cyan-400">
                    Privacy
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowTerms(true)} className="hover:text-cyan-400">
                    Terms
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection(contactRef)} className="hover:text-cyan-400">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <button onClick={() => setShowDocumentation(true)} className="hover:text-cyan-400">
                    Documentation
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowApiDocs(true)} className="hover:text-cyan-400">
                    API Docs
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowReportIssue(true)} className="hover:text-cyan-400">
                    Report Issue
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Suraksha AI. All rights reserved. | Secure. Adaptive. Intelligent. Reliable.</p>
          </div>
        </div>
      </footer>

      {/* Scam Report Modal */}
      <Dialog open={showReportModal} onOpenChange={setShowReportModal}>
        <DialogContent className="bg-slate-900 border-slate-700 max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-white">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Scam Analysis Report
            </DialogTitle>
          </DialogHeader>

          {scamReport && (
            <div className="space-y-6">
              {/* Risk Score */}
              <div className="bg-slate-800/50 rounded-lg p-6">
                <p className="text-slate-400 text-sm mb-2">Risk Score</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-red-500">{scamReport.riskScore}/100</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-yellow-500 to-red-500 h-2 rounded-full"
                        style={{ width: `${scamReport.riskScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Level and Type */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-slate-400 text-sm mb-2">Risk Level</p>
                  <p className="text-2xl font-bold text-red-500">{scamReport.riskLevel}</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-slate-400 text-sm mb-2">Scam Type</p>
                  <p className="text-lg font-bold text-cyan-400">{scamReport.scamType}</p>
                </div>
              </div>

              {/* Detected Patterns */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="font-semibold text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  Detected Patterns
                </p>
                <ul className="space-y-2">
                  {scamReport.detectedPatterns.map((pattern: string, i: number) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      {pattern}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Explanation */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-500" />
                  AI Explanation
                </p>
                <p className="text-slate-300 text-sm">{scamReport.explanation}</p>
              </div>

              {/* Safety Recommendations */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Safety Recommendations
                </p>
                <ul className="space-y-2">
                  {scamReport.recommendations.map((rec: string, i: number) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timestamp */}
              <p className="text-slate-400 text-xs text-center">Report Generated: {scamReport.timestamp}</p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={handleCopyReport}
                  variant="outline"
                  className="flex-1 border-slate-600 hover:bg-cyan-500/20 hover:border-cyan-500"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Report
                </Button>
                <Button
                  onClick={handleDownloadReport}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Coming Soon Modal */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="bg-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white">Coming Soon</DialogTitle>
            <DialogDescription className="text-slate-400">
              This feature is currently under development. Stay tuned for updates!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Privacy Modal */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="bg-slate-900 border-slate-700 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white">Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="text-slate-300 text-sm space-y-4">
            <p>
              <strong>Privacy Policy for Suraksha AI</strong>
            </p>
            <p>
              Suraksha AI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information.
            </p>
            <p>
              <strong>Information We Collect:</strong> We collect information you provide directly, such as when you use our
              scam detection services. This may include messages, URLs, and call transcripts for analysis.
            </p>
            <p>
              <strong>How We Use Your Information:</strong> We use your information to provide scam detection services, improve
              our AI models, and generate reports for law enforcement agencies.
            </p>
            <p>
              <strong>Data Security:</strong> We implement industry-standard security measures to protect your data from
              unauthorized access, alteration, and destruction.
            </p>
            <p>
              <strong>Contact Us:</strong> If you have questions about this Privacy Policy, please contact us at
              contact.surakshaai@example.com
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms Modal */}
      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="bg-slate-900 border-slate-700 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white">Terms of Service</DialogTitle>
          </DialogHeader>
          <div className="text-slate-300 text-sm space-y-4">
            <p>
              <strong>Terms of Service for Suraksha AI</strong>
            </p>
            <p>
              By using Suraksha AI, you agree to comply with these Terms of Service. If you do not agree, please do not use
              our services.
            </p>
            <p>
              <strong>Use License:</strong> Permission is granted to use Suraksha AI for lawful purposes only. You may not
              use it to harass, threaten, or harm others.
            </p>
            <p>
              <strong>Disclaimer:</strong> Suraksha AI provides scam detection services on an "as-is" basis. We do not
              guarantee 100% accuracy in threat detection.
            </p>
            <p>
              <strong>Limitation of Liability:</strong> Suraksha AI shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of our services.
            </p>
            <p>
              <strong>Contact Us:</strong> For questions about these Terms, please contact us at contact.surakshaai@example.com
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Documentation Modal */}
      <Dialog open={showDocumentation} onOpenChange={setShowDocumentation}>
        <DialogContent className="bg-slate-900 border-slate-700 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white">Documentation</DialogTitle>
            <DialogDescription className="text-slate-400">
              Learn how to use Suraksha AI for scam detection
            </DialogDescription>
          </DialogHeader>
          <div className="text-slate-300 text-sm space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-2">Getting Started</h3>
              <p>
                Suraksha AI provides three main analyzers: Message Scam Checker, URL/Phishing Checker, and Call Transcript
                Checker.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Message Scam Checker</h3>
              <p>
                Paste any suspicious message to analyze it for phishing, social engineering, and other scam indicators. The
                AI will provide a risk score and detailed analysis.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">URL/Phishing Checker</h3>
              <p>
                Enter a suspicious URL to check if it's a known phishing site or contains malicious content. Get instant
                verification results.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Call Transcript Checker</h3>
              <p>
                Paste a call transcript to detect voice spoofing, deepfakes, and other audio-based scams. Our AI analyzes
                speech patterns and content.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* API Docs Modal */}
      <Dialog open={showApiDocs} onOpenChange={setShowApiDocs}>
        <DialogContent className="bg-slate-900 border-slate-700 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white">API Documentation</DialogTitle>
            <DialogDescription className="text-slate-400">
              Integrate Suraksha AI into your applications
            </DialogDescription>
          </DialogHeader>
          <div className="text-slate-300 text-sm space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-2">Base URL</h3>
              <p className="font-mono bg-slate-800 p-2 rounded">https://api.surakshaai.com/v1</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Authentication</h3>
              <p>Include your API key in the Authorization header: Authorization: Bearer YOUR_API_KEY</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Endpoints</h3>
              <ul className="space-y-2">
                <li>
                  <strong>POST /analyze/message</strong> - Analyze a message for scams
                </li>
                <li>
                  <strong>POST /analyze/url</strong> - Check if a URL is phishing
                </li>
                <li>
                  <strong>POST /analyze/transcript</strong> - Analyze a call transcript
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Response Format</h3>
              <p className="font-mono bg-slate-800 p-2 rounded text-xs">
                {`{
  "riskScore": 85,
  "riskLevel": "HIGH",
  "scamType": "Phishing",
  "detectedPatterns": [...],
  "explanation": "...",
  "recommendations": [...]
}`}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Report Issue Modal */}
      <Dialog open={showReportIssue} onOpenChange={setShowReportIssue}>
        <DialogContent className="bg-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white">Report an Issue</DialogTitle>
            <DialogDescription className="text-slate-400">
              Found a bug or have a suggestion? Let us know!
            </DialogDescription>
          </DialogHeader>
          <div className="text-slate-300 text-sm space-y-4">
            <p>
              Please report any issues or suggestions to our GitHub repository:
              <a
                href="https://github.com/ANSHIT175/Suraksha-AI/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 ml-2"
              >
                github.com/ANSHIT175/Suraksha-AI/issues
              </a>
            </p>
            <p>
              You can also email us at:
              <span className="text-cyan-400 ml-2">contact.surakshaai@example.com</span>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
