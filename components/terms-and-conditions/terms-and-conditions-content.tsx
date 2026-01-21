interface TermsSection {
  heading: string;
  content: string[];
  subsections?: {
    number: string;
    content: string[];
  }[];
}

const termsSections: TermsSection[] = [
  {
    heading: "Introduction",
    content: [
      "These Terms and Conditions (\"Terms\") govern your use of House 52 services and facilities. By accessing or using our Services, you agree to be bound by these Terms. Please read these Terms carefully before using our Services.",
      "House 52 is a brand owned by SSG Skills Arena Private Limited (hereinafter referred to as \"House 52,\" \"we,\" \"us,\" or \"our\"). These Terms constitute a legally binding agreement between you and House 52.",
      "If you do not agree with any part of these Terms, you must not use our Services. Your continued use of our Services constitutes your acceptance of these Terms and any amendments thereto.",
    ],
  },
  {
    heading: "Real Money Transaction Processing",
    content: [
      "The User agrees and acknowledges that:",
    ],
    subsections: [
      {
        number: "1.1",
        content: [
          "We will make reasonable efforts to ensure that deposits and withdrawals are processed in a timely manner. We give no warranties regarding the amount of time needed to complete processing. We cannot be held responsible for delays in the banking networks, failures on part of the processor or actions of other parties involved in the processing of funds that may result in processing delays, reprocessing or reversal of transactions or the seizure or freezing of funds, nor will we be liable for any actual or consequential damages arising from any claim of delay or seizure.",
        ],
      },
      {
        number: "1.2",
        content: [
          "We will not be liable for any actual or consequential damages arising from any claim of delay or loss as a result of invalid, incomplete or erroneous financial or personal data provided by the User with their deposit or withdrawal request.",
        ],
      },
      {
        number: "1.3",
        content: [
          "As part of our licensing agreement and in compliance with anti-money laundering legislation, Users need to be aware they may be required to produce personal documentation (such as Government issued ID, bank statements and utility bills) upon request in order for their deposit or withdrawal to be processed. This allows us to help protect the Users and prevents our platform from being used as a vehicle for money laundering or fraud.",
        ],
      },
    ],
  },
  {
    heading: "User Responsibilities",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.",
      "You must be at least 18 years of age to use our Services. By using our Services, you represent and warrant that you are of legal age and have the legal capacity to enter into these Terms.",
      "You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.",
    ],
  },
  {
    heading: "Prohibited Activities",
    content: [
      "You agree not to use our Services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our Services or interfere with any other party's use of our Services.",
      "You agree not to attempt to gain unauthorized access to any portion of our Services, other accounts, computer systems, or networks connected to our Services, through hacking, password mining, or any other means.",
      "You agree not to use any automated system, including but not limited to robots, spiders, or offline readers, to access our Services without our prior written consent.",
    ],
  },
  {
    heading: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable law, House 52 shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our Services.",
      "Our total liability to you for all claims arising out of or relating to the use of or inability to use our Services shall not exceed the amount you paid to us in the twelve (12) months prior to the event giving rise to the liability.",
    ],
  },
  {
    heading: "Modifications to Terms",
    content: [
      "We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the \"Last Updated\" date.",
      "Your continued use of our Services after any such modifications constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must discontinue your use of our Services.",
    ],
  },
  {
    heading: "Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
      "Any disputes arising out of or relating to these Terms or our Services shall be subject to the exclusive jurisdiction of the courts located in Noida, Uttar Pradesh, India.",
    ],
  },
  {
    heading: "Contact Information",
    content: [
      "If you have any questions about these Terms, please contact us at house52noida@gmail.com or visit our location at G/F, Hotel Chhavvi, Sector 104, Hajipur, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201304.",
    ],
  },
];

export function TermsAndConditionsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="space-y-8">
        {termsSections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              {section.subsections && (
                <div className="space-y-6 mt-6">
                  {section.subsections.map((subsection) => (
                    <div key={subsection.number} className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        {subsection.number}
                      </h3>
                      {subsection.content.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
