import { Card } from "../../components";

import { FAQS } from "../../../data/faqs";

export default function FaqPage() {
  return (
    <>
      <section className="flex flex-col items-center mx-auto max-w-3xl space-y-6">
        <h1 className="text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </section>
      <section className="grid gap-4 pt-20 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {FAQS.map((faq) => (
          <Card
            key={faq.title}
            title={faq.title}
            description={faq.description}
          />
        ))}
      </section>
    </>
  );
}
