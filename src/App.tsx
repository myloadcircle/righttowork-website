import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0B0C0C] antialiased selection:bg-[#F3F2F1] selection:text-black">

      {/* NAVBAR */}
      <nav className="w-full border-b border-[#F3F2F1] bg-white">
        <div className="max-w-[960px] mx-auto px-4 h-24 flex items-center">
          <span className="text-[22px] font-bold tracking-tight text-[#0B0C0C]">
            Right to Work Check
          </span>
        </div>
      </nav>

      <main className="max-w-[960px] mx-auto px-4 py-16">

        {/* HERO */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block bg-[#F7F9FC] text-[#0B0C0C] text-sm font-bold px-3 py-1 mb-8 uppercase tracking-wider">
            Statutory Service
          </div>
          <h1 className="text-[52px] font-semibold text-[#0B0C0C] leading-[1.2] mb-8 tracking-tight">
            Right to Work Checks, Done Properly
          </h1>
          <p className="text-[28px] font-normal text-[#505A5F] leading-[1.4] mb-10 max-w-2xl">
            Employers are legally required to verify every worker’s eligibility before employment begins.
            We provide a clear, compliant process aligned with current Home Office guidance.
          </p>

          <button className="bg-[#1BAA5A] hover:bg-[#158f4a] text-white text-[24px] font-bold leading-[1.4] px-10 py-5 shadow-[0_2px_0_#12703a] active:translate-y-[2px] active:shadow-none transition-all rounded-sm">
            Start Verification
          </button>
        </div>

        {/* WHY IT MATTERS */}
        <div className="mb-20">
          <h2 className="text-[36px] font-semibold leading-[1.3] text-[#0B0C0C] mb-8">Why Right to Work Checks Matter</h2>
          <p className="text-[#0B0C0C] text-[22px] font-normal leading-[1.6] max-w-3xl">
            Every employer in the UK has a legal duty to confirm that each worker has the right to work before employment begins.
            Failure to carry out compliant checks exposes organisations to financial penalties, reputational damage, and operational disruption.
            A clear, consistent process protects your business and ensures every hire is verified correctly.
          </p>
        </div>

        {/* COMPLIANCE & PENALTIES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* What Employers Miss */}
          <div className="md:col-span-12 bg-[#F7F9FC] border-l-8 border-[#0B0C0C] p-10">
            <h3 className="text-[28px] font-bold text-[#0B0C0C] mb-6 leading-[1.3]">What Employers Often Miss</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[#0B0C0C] list-disc list-inside mb-8 font-normal text-[22px] leading-[1.6]">
              <li>Civil penalties of up to £45,000 per illegal worker for a first breach</li>
              <li>Up to £60,000 per worker for repeat breaches</li>
              <li>Loss of statutory excuse if checks are incomplete or stored incorrectly</li>
              <li>Increased scrutiny during Home Office audits or inspections</li>
              <li>Delays onboarding staff due to unclear documentation</li>
              <li>Risk exposure when relying on outdated or informal processes</li>
            </ul>
            <p className="font-bold text-[#0B0C0C] pt-6 border-t border-[#b1b4b6] text-[22px] leading-[1.6]">
              Our process ensures every check is completed, recorded, and stored in a compliant format.
            </p>
          </div>

          {/* Cost of Getting It Wrong */}
          <div className="md:col-span-12">
            <h3 className="text-[28px] font-bold text-[#0B0C0C] mb-6 leading-[1.3]">The Cost of Getting It Wrong</h3>
            <ul className="space-y-4 text-[#0B0C0C] list-disc list-inside font-normal text-[22px] leading-[1.6]">
              <li>Significant financial penalties under updated Home Office rules</li>
              <li>Potential criminal liability in severe cases</li>
              <li>Operational disruption during audits or investigations</li>
              <li>Reputational damage from non-compliance findings</li>
              <li>Inconsistent checks across teams leading to risk exposure</li>
            </ul>
          </div>
        </div>

        {/* ENFORCEMENT CASES (UPDATED) */}
        <div className="mb-24 border-t border-[#F3F2F1] pt-16">
          <h2 className="text-[36px] font-semibold leading-[1.3] text-[#0B0C0C] mb-8">Real Enforcement Cases</h2>
          <p className="text-[#0B0C0C] text-[22px] leading-[1.6] max-w-4xl mb-12">
            Right to Work penalties are actively enforced across the UK. The Home Office regularly publishes enforcement data, and multiple businesses have received substantial fines for failing to complete compliant checks. These cases are public record and demonstrate the real consequences of non-compliance.
          </p>

          <div className="grid grid-cols-1 gap-10">
            {/* CASE 1 */}
            <div className="border border-[#b1b4b6] p-10 bg-white">
              <h3 className="text-[28px] font-bold text-[#0B0C0C] mb-4">117 London Businesses Fined</h3>
              <p className="text-[22px] text-[#0B0C0C] mb-6 font-bold">In a six-month period, 117 businesses across London were fined for employing workers without the right to work.</p>
              <ul className="list-disc list-inside text-[#0B0C0C] text-[22px] space-y-2 mb-6 text-[#505A5F]">
                <li>Total fines issued: £6.7 million</li>
                <li>More than one-third of the penalties were issued to restaurants</li>
                <li>This followed £4.6 million in fines issued in the previous six months</li>
              </ul>
              <p className="text-[22px] italic text-[#505A5F]">Note: This case highlights how frequently the Home Office conducts enforcement activity, particularly in sectors with high staff turnover.</p>
            </div>

            {/* CASE 2 */}
            <div className="border border-[#b1b4b6] p-10 bg-white">
              <h3 className="text-[28px] font-bold text-[#0B0C0C] mb-4">Penalties Tripled in 2024</h3>
              <p className="text-[22px] text-[#0B0C0C] mb-6 font-bold">The Home Office increased the maximum civil penalty to £45,000 for a first breach and £60,000 for repeat breaches.</p>
              <ul className="list-disc list-inside text-[#0B0C0C] text-[22px] space-y-2 mb-6 text-[#505A5F]">
                <li>Penalties were tripled to deter non-compliance</li>
                <li>SMEs were specifically warned about the financial impact</li>
                <li>The new penalty structure applies across all sectors</li>
              </ul>
              <p className="text-[22px] italic text-[#505A5F]">Note: This change reflects the government's focus on employer responsibility and the importance of proper checks.</p>
            </div>

            {/* CASE 3 */}
            <div className="border border-[#b1b4b6] p-10 bg-white">
              <h3 className="text-[28px] font-bold text-[#0B0C0C] mb-4">Criminal Liability for Knowing Employment</h3>
              <p className="text-[22px] text-[#0B0C0C] mb-6 font-bold">Employers who knowingly hire workers without the right to work can face criminal sanctions.</p>
              <ul className="list-disc list-inside text-[#0B0C0C] text-[22px] space-y-2 mb-6 text-[#505A5F]">
                <li>Unlimited fines</li>
                <li>Up to 5 years in prison</li>
                <li>Applies when employers had 'reasonable cause to believe' the worker was not eligible</li>
              </ul>
              <p className="text-[22px] italic text-[#505A5F]">Note: This is the highest level of enforcement and demonstrates the seriousness of Right to Work compliance.</p>
            </div>
          </div>

          <p className="text-[22px] text-[#0B0C0C] mt-12 bg-[#F7F9FC] p-6 border-l-4 border-[#1BAA5A]">
            These cases show that Right to Work compliance is not optional. A clear, consistent verification process protects your organisation from financial, operational, and reputational risk.
          </p>
        </div>

        {/* HOW IT WORKS / WHAT WE PROVIDE */}
        <div className="mb-24 border-t border-[#F3F2F1] pt-16">
          <h2 className="text-[36px] font-semibold leading-[1.3] text-[#0B0C0C] mb-10">A Simple, Compliant Verification Flow</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            <div className="space-y-10">
              <div className="flex gap-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B0C0C] text-white flex items-center justify-center font-bold text-[22px]">1</span>
                <div>
                  <h4 className="font-bold text-[#0B0C0C] text-[24px] leading-[1.4]">Capture Documentation</h4>
                  <p className="text-[#505A5F] pt-2 text-[22px] leading-[1.6]">Upload or capture the worker’s documents.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B0C0C] text-white flex items-center justify-center font-bold text-[22px]">2</span>
                <div>
                  <h4 className="font-bold text-[#0B0C0C] text-[24px] leading-[1.4]">Confirm Identity</h4>
                  <p className="text-[#505A5F] pt-2 text-[22px] leading-[1.6]">Confirm identity and match details.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B0C0C] text-white flex items-center justify-center font-bold text-[22px]">3</span>
                <div>
                  <h4 className="font-bold text-[#0B0C0C] text-[24px] leading-[1.4]">Validate Eligibility</h4>
                  <p className="text-[#505A5F] pt-2 text-[22px] leading-[1.6]">Validate eligibility based on Home Office categories.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B0C0C] text-white flex items-center justify-center font-bold text-[22px]">4</span>
                <div>
                  <h4 className="font-bold text-[#0B0C0C] text-[24px] leading-[1.4]">Receive Outcome</h4>
                  <p className="text-[#505A5F] pt-2 text-[22px] leading-[1.6]">Receive a clear pass/fail outcome.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B0C0C] text-white flex items-center justify-center font-bold text-[22px]">5</span>
                <div>
                  <h4 className="font-bold text-[#0B0C0C] text-[24px] leading-[1.4]">Store Evidence</h4>
                  <p className="text-[#505A5F] pt-2 text-[22px] leading-[1.6]">Store evidence in an audit-ready format.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F7F9FC] p-10 h-full flex flex-col justify-center rounded-sm">
              <h3 className="font-bold text-[#0B0C0C] mb-6 text-[24px] leading-[1.3]">What This Service Provides</h3>
              <ul className="space-y-4 text-[#0B0C0C] list-disc list-outside ml-5 text-[22px] leading-[1.6]">
                <li>A structured, compliant Right to Work verification flow</li>
                <li>Clear pass/fail outcomes aligned with Home Office guidance</li>
                <li>Audit-ready evidence stored in a consistent format</li>
                <li>A simple process suitable for all employer sizes</li>
                <li>Reduced ambiguity when reviewing worker documentation</li>
              </ul>

              <h3 className="font-bold text-[#0B0C0C] mt-10 mb-6 text-[24px] leading-[1.3]">Benefits for Employers</h3>
              <ul className="space-y-4 text-[#0B0C0C] list-disc list-outside ml-5 text-[22px] leading-[1.6]">
                <li>Faster onboarding with fewer delays</li>
                <li>Reduced compliance risk</li>
                <li>Clear, structured documentation</li>
                <li>Consistent checks across all hires</li>
                <li>Confidence during audits or inspections</li>
              </ul>
            </div>
          </div>
          <p className="text-[#505A5F] mt-10 italic text-[22px] leading-[1.6]">
            The process is designed to remove uncertainty and ensure every check is completed consistently.
          </p>
        </div>

        {/* DOCUMENT TYPES & LEGAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 border-t border-[#F3F2F1] pt-16">
          <div className="space-y-8">
            <h3 className="text-[36px] font-semibold leading-[1.3] text-[#0B0C0C]">Supported Document Types</h3>
            <p className="text-[#505A5F] text-[22px] leading-[1.6]">The verification process supports all standard Right to Work documentation categories, including:</p>
            <ul className="space-y-3 text-[#0B0C0C] list-disc list-inside text-[22px] leading-[1.6]">
              <li>UK and Irish passports</li>
              <li>Biometric Residence Permits</li>
              <li>Share Codes for online checks</li>
              <li>Birth or adoption certificates with proof of National Insurance</li>
              <li>Certificates of naturalisation or registration</li>
              <li>Home Office immigration status documents</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-[36px] font-semibold leading-[1.3] text-[#0B0C0C]">Legal Context</h3>
            <div className="bg-[#fff] border-2 border-[#F3F2F1] p-8">
              <p className="text-[#0B0C0C] text-[22px] leading-[1.6]">
                Right to Work checks are governed by Home Office guidance and form part of an employer’s statutory duty to prevent illegal working. Completing checks correctly provides a <strong>statutory excuse</strong> against civil penalties. This service helps employers follow the required steps in a clear, compliant manner.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-24 border-t border-[#F3F2F1] pt-16">
          <h2 className="text-[36px] font-semibold leading-[1.3] text-[#0B0C0C] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-10 max-w-4xl">
            <div>
              <h4 className="font-bold text-[#0B0C0C] mb-3 text-[24px] leading-[1.4]">Is this a replacement for Home Office checks?</h4>
              <p className="text-[#505A5F] text-[22px] leading-[1.6]">No. This service helps employers follow the required steps and store evidence in a compliant format.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#0B0C0C] mb-3 text-[24px] leading-[1.4]">Do I still need to review original documents?</h4>
              <p className="text-[#505A5F] text-[22px] leading-[1.6]">Yes, unless the worker provides a valid share code for an online check.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#0B0C0C] mb-3 text-[24px] leading-[1.4]">Does this work for remote hires?</h4>
              <p className="text-[#505A5F] text-[22px] leading-[1.6]">Yes. The process supports digital capture and verification.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#0B0C0C] mb-3 text-[24px] leading-[1.4]">Is the outcome legally binding?</h4>
              <p className="text-[#505A5F] text-[22px] leading-[1.6]">The outcome reflects eligibility based on the documentation provided. Employers remain responsible for completing checks correctly.</p>
            </div>
          </div>
        </div>

        {/* CTA BLOCK & CONTACT */}
        <div className="bg-[#0B0C0C] text-white p-16 text-center rounded-sm">
          <h3 className="text-[36px] font-semibold mb-6 leading-[1.3]">Begin a Right to Work Check</h3>
          <p className="text-[#b1b4b6] leading-[1.6] mb-10 max-w-2xl mx-auto text-[22px]">
            Ensure your organisation meets its legal obligations and maintains a compliant onboarding process.
          </p>
          <button className="bg-[#1BAA5A] hover:bg-[#158f4a] text-white text-[24px] font-bold leading-[1.4] px-10 py-5 shadow-[0_2px_0_#12703a] active:translate-y-[2px] active:shadow-none transition-all rounded-sm">
            Start Verification
          </button>

          <div className="mt-16 pt-10 border-t border-[#333]">
            <h4 className="font-bold mb-3 text-[22px]">Need Support?</h4>
            <p className="text-[#b1b4b6] mb-3 text-[22px] leading-[1.6]">If you have questions about the process or need assistance, contact:</p>
            <a href="mailto:right2workuk@protonmail.com" className="text-white underline hover:no-underline font-bold text-[22px]">right2workuk@protonmail.com</a>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#F7F9FC] border-t border-[#b1b4b6] py-16 mt-16">
        <div className="max-w-[960px] mx-auto px-4">
          <div className="text-[18px] leading-[1.5] text-[#0B0C0C]">
            <p className="font-bold mb-3">Right to Work Compliance</p>
            <p className="text-[#505A5F] mb-6">
              Contact: <a href="mailto:right2workuk@protonmail.com" className="underline hover:decoration-2">right2workuk@protonmail.com</a>
            </p>
            <p className="text-[#505A5F]">
              © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
