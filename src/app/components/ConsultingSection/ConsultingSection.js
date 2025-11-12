import { consultingServices, additionalInfo } from "./consultingData";

export default function ConsultingSection() {

  return (
    <section
      className="py-16 px-4 w-full"
      id="consulting"
      aria-labelledby="consulting-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          id="consulting-heading"
          className="text-4xl font-bold text-center mb-4 text-seasalt"
        >
          Digital Product Development & Consulting
        </h2>
        <p className="text-center text-seasalt text-lg mb-12 max-w-3xl mx-auto">
          Specialized in frontend development, user experience design, and web accessibility.
          Helping teams build inclusive, high-quality digital products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultingServices.map((service, index) => (
            <article
              key={service.title}
              className="bg-seasalt rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-raisin-black mb-6">
                {service.title}
              </h3>

              <ul className="space-y-4" role="list">
                {service.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-3 text-raisin-black"
                  >
                    <svg
                      className="w-6 h-6 text-carrot-orange flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-seasalt rounded-lg p-8 shadow-lg border-l-4 border-carrot-orange">
          <h3 className="text-2xl font-semibold text-raisin-black mb-4 text-center">
            {additionalInfo.title}
          </h3>
          <p className="text-raisin-black text-lg text-center leading-relaxed">
            {additionalInfo.description}
          </p>
        </div>
      </div>
    </section>
  );
}
