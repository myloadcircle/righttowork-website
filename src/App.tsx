import React from 'react';
import { ShieldCheck, CheckCircle, ArrowRight, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <ShieldCheck size={20} strokeWidth={3} />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">RightToWork</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900">Login</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now Live in the UK
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
              Instant Right to Work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Verification Checks</span>
            </h1>

            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              The fastest, most compliant way to verify employee eligibility in the UK.
              Home Office approved IDSP technology for modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                Start a Check <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                View Documentation
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 text-sm font-medium">
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> GDPR Compliant</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> ISO 27001</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Home Office IDSP</span>
            </div>
          </div>
        </div>
      </main>

      {/* Hero Visual/Mockup Placeholder */}
      <div className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-2 overflow-hidden">
            <div className="bg-gray-50 rounded-xl h-64 lg:h-96 flex items-center justify-center border border-dashed border-gray-200">
              <div className="text-center">
                <Lock className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <p className="text-gray-400 font-medium">Secure Verification Console</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
