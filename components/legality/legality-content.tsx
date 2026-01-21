interface LegalitySection {
  heading: string;
  content: string[];
}

const legalitySections: LegalitySection[] = [
  {
    heading: "About Us",
    content: [],
  },
  {
    heading: "The Legality of Playing at House 52",
    content: [
      "Poker is recognized as a game of skill, and playing poker offline, whether for real money or free, is entirely legal in India. Engaging in skill-based games like poker for monetary stakes is legally considered a business activity and is safeguarded under Article 19(1)(g) of the Constitution of India.",
      "In the landmark judgment K.R. Lakshmanan v. State of Tamil Nadu (AIR 1996 SC 1153), the Hon'ble Supreme Court of India established that a game is classified as one of chance or skill based on the predominant element. If skill outweighs chance, the game is deemed one of skill, and vice versa.",
      "Similarly, in State of Andhra Pradesh v. K. Satyanarayana (AIR 1968 SC 825), the Hon'ble Supreme Court acknowledged that while all card games involve an element of chance, this alone does not negate the role of skill in such games.",
      "Additionally, in R.M.D. Chamarbaugwala v. Union of India ((1957) 1 SCR 930), the Hon'ble Supreme Court ruled that competitions requiring a significant degree of skill do not constitute gambling. The Court further affirmed that skill-based games qualify as legitimate business activities protected under Article 19(1)(g).",
      "In light of these rulings, poker games available at House 52 qualify as games of skill and are thus entirely legal and safe to play in most parts of India.",
      "However, residents of or users logging in from the states of Telangana, Assam, Nagaland, Sikkim, Gujarat, and Andhra Pradesh are strictly prohibited from participating in real money games or tournaments at House 52 due to local restrictions. Players from these states are also barred from depositing funds into or withdrawing from their House 52 accounts. That said, they are welcome to enjoy free games at our facility.",
    ],
  },
];

export function LegalityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="space-y-8">
        {legalitySections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight">
              {section.heading}
            </h2>
            {section.content.length > 0 && (
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
