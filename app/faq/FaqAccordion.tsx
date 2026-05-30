"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

interface Props {
  categories: FaqCategory[];
}

export default function FaqAccordion({ categories }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div>
      {categories.map((cat, catIdx) => (
        <div key={cat.category}>
          <h2
            className={[
              "font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-6",
              catIdx > 0 ? "mt-12" : "",
            ].join(" ")}
          >
            {cat.category}
          </h2>

          <dl className="divide-y divide-gray-100">
            {cat.items.map((item) => {
              const id = `${cat.category}::${item.q}`;
              const isOpen = openId === id;

              return (
                <div key={item.q}>
                  <dt>
                    <button
                      type="button"
                      onClick={() => toggle(id)}
                      aria-expanded={isOpen}
                      className="w-full flex justify-between items-center py-5 text-left gap-4 group"
                    >
                      <span
                        className={[
                          "font-body text-base font-medium transition-colors",
                          isOpen ? "text-zanair-blue" : "text-deep-ocean group-hover:text-zanair-blue",
                        ].join(" ")}
                      >
                        {item.q}
                      </span>
                      <span
                        className="font-body text-xl text-zanair-blue shrink-0 leading-none"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </dt>
                  {isOpen && (
                    <dd className="pb-5 font-body text-sm text-gray-600 leading-relaxed">
                      {item.a}
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>
      ))}
    </div>
  );
}
