import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0B0C0C] antialiased selection:bg-[#F3F2F1] selection:text-black">

      {/* 
        NAVBAR: 
        Extremely minimal. No logos. Just the service name.
      */}
      <nav className="w-full border-b border-[#F3F2F1] bg-white">
        <div className="max-w-[960px] mx-auto px-4 h-16 flex items-center">
          <span className="text-lg font-bold tracking-tight text-[#0B0C0C]">
            Right to Work Check
          </span>
        </div>
      </nav>

      <main className="max-w-[960px] mx-auto px-4 py-16">

        {/* 
          HERO SECTION: 
          Factual. Direct. No marketing.
        */}
        <div className="max-w-2xl mb-16">
          <div className="inline-block bg-[#F3F2F1] text-[#0B0C0C] text-xs font-bold px-3 py-1 mb-6 uppercase tracking-wider">
            Statutory Compliance Service
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0B0C0C] leading-[1.1] mb-8 tracking-tight">
            Verify employee Right to Work status in the UK.
          </h1>
          <p className="text-lg lg:text-xl text-[#505A5F] leading-relaxed mb-10 max-w-xl">
            Conduct Home Office compliant verification checks (IDSP).
            Generate a statutory excuse against liability for a civil penalty under the Immigration, Asylum and Nationality Act 2006.
          </p>

          <button className="bg-[#00703C] hover:bg-[#005a30] text-white font-bold text-lg px-8 py-3.5 shadow-[0_2px_0_#003618] active:translate-y-[2px] active:shadow-none transition-all">
            Start a Check
          </button>
        </div>

        {/* 
          COMPLIANCE BLOCK: 
          Grey background. Bullet points. Serious tone.
        */}
        <div className="bg-[#F8F8F8] border-l-4 border-[#0B0C0C] p-8 mb-16">
          <h2 className="text-xl font-bold text-[#0B0C0C] mb-4">Employer Obligations</h2>
          <p className="text-[#0B0C0C] mb-6 leading-relaxed">
            You must verify that a job applicant is allowed to work for you in the UK before you employ them.
            You must inspect and retain copies of the original documents.
          </p>
          <ul className="space-y-3 text-[#0B0C0C] list-disc list-inside">
            <li>Obtain original documents from the Home Office acceptable list (List A or List B).</li>
            <li>Check that the documents are genuine and belong to the holder.</li>
            <li>Make a clear copy of each document in a format which cannot be altered.</li>
            <li>Retain the copy securely (GDPR compliant).</li>
          </ul>
        </div>

        {/* 
           CTA / PRICING BLOCK: 
           Simple text. No "cards" or "pricing tables". Direct.
        */}
        <div className="border-t border-[#F3F2F1] pt-12">
          <h3 className="text-2xl font-bold text-[#0B0C0C] mb-4">Immediate Processing</h3>
          <p className="text-[#505A5F] leading-relaxed mb-8 max-w-2xl">
            Checks are processed immediately. A downloadable compliance certificate is generated upon successful verification of identity and eligibility.
            <br /><br />
            <strong>Cost: £5.00 per check.</strong> No subscription required.
          </p>
          <button className="bg-[#00703C] hover:bg-[#005a30] text-white font-bold text-base px-6 py-3 shadow-[0_2px_0_#003618] active:translate-y-[2px] active:shadow-none transition-all">
            Proceed
          </button>
        </div>

      </main>

      {/* 
        FOOTER: 
        Proton email only.
      */}
      <footer className="bg-[#F3F2F1] border-t border-[#b1b4b6] py-12 mt-12">
        <div className="max-w-[960px] mx-auto px-4">
          <div className="text-sm text-[#0B0C0C]">
            <p className="font-bold mb-2">Right to Work Verification</p>
            <p className="text-[#505A5F]">
              Contact: <a href="mailto:rtw.compliance@proton.me" className="underline hover:decoration-2">rtw.compliance@proton.me</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
