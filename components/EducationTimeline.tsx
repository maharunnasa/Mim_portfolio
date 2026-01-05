type EducationItem = {
  degree?: string;
  institution?: string;
  year?: string;
  details?: string;
  logoUrl?: string;
};

type Props = {
  data?: EducationItem[];
};

export default function EducationTimeline({ data }: Props) {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-20 bg-[#1a1325]"
    >
      <h2 className="text-4xl font-bold text-center mb-20 text-white">
        Education
      </h2>

      {!data || data.length === 0 ? (
        <p className="text-center text-gray-400">
          No education data yet
        </p>
      ) : (
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-purple-400/30 -translate-x-1/2" />

          <div className="space-y-16">
            {data.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative md:flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <span className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-purple-400 rounded-full -translate-x-1/2 z-10" />

                  <div
                    className={`bg-white/10 backdrop-blur-lg p-6 rounded-2xl w-full md:w-[45%] border border-white/10 flex flex-col items-center`}
                  >

                    <h3 className="text-xl font-semibold text-white">
                      {item.degree || "Degree Title"}
                    </h3>

                    <p className="text-purple-400 mt-1">
                      {item.institution || "Institution Name"}
                    </p>

                    {item.year && (
                      <p className="text-sm text-gray-400 mt-1">
                        {item.year}
                      </p>
                    )}

                    {item.details && (
                      <p className="text-gray-300 mt-4 leading-relaxed text-sm text-center">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
