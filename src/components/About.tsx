import { Pill } from "./Pill";

const stats = [
  { value: "5+", label: "лет опыта" },
  { value: "30+", label: "проектов" },
  { value: "12", label: "технологий" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 bg-background border-t border-border py-24 md:py-36 overflow-hidden"
    >
      <span className="pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2 font-sentient text-[18rem] md:text-[26rem] leading-none text-white/[0.02] select-none">
        ”
      </span>

      <div className="container grid md:grid-cols-2 gap-12 md:gap-20 items-center relative">
        <div className="md:pl-8 md:border-l-2 md:border-primary/40">
          <Pill className="mb-8">ОБО МНЕ</Pill>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient leading-tight">
            Создаю продукты, <br />
            которыми <i className="font-light">пользуются</i>
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/60 mt-8 max-w-[460px] leading-relaxed">
            Я специалист, который превращает идеи в работающие решения. Люблю
            чистый код, продуманный дизайн и продукты, решающие реальные задачи
            людей.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border border-y border-border">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex items-baseline justify-between gap-4 py-6 hover:px-4 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-sentient text-foreground group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-foreground/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}