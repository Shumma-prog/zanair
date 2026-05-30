import { homepage } from "@/lib/content";

export default function Experience() {
  const { experience } = homepage;

  const isOffset = (i: number) => i === 1 || i === 3;
  const isWide = (i: number) => i === 4;

  const headlineParts = experience.headline.split("\\n");

  return (
    <section
      className="bg-page-off py-24 md:py-32"
      aria-label="The ZanAir difference"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
          {experience.eyebrow}
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-normal italic text-deep-ocean max-w-2xl">
          {headlineParts.map((line, i) => (
            <span key={i}>
              {line}
              {i < headlineParts.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </div>

      {/* Staggered items grid */}
      <ul
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E3] border border-[#E5E5E3]"
        role="list"
      >
        {experience.items.map((item, i) => {
          if (isWide(i)) {
            return (
              <li key={item.number} className="bg-white p-10 md:col-span-2">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                  <span
                    className="font-body text-xs tracking-widest text-zanair-blue/40 shrink-0 mt-1"
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-normal italic text-deep-ocean mb-4">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-gray-600 leading-relaxed max-w-sm">
                      {item.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li
              key={item.number}
              className={[
                "p-10",
                isOffset(i) ? "bg-page-off md:mt-16 hover:bg-page-light" : "bg-white hover:bg-page-off",
                "transition-colors duration-200",
              ].join(" ")}
            >
              <span
                className="font-body text-xs tracking-widest text-zanair-blue/40 mb-6 block"
                aria-hidden="true"
              >
                {item.number}
              </span>
              <h3 className="font-display text-2xl font-normal italic text-deep-ocean mb-4">
                {item.title}
              </h3>
              <p className="font-body text-sm text-gray-600 leading-relaxed max-w-sm">
                {item.body}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
