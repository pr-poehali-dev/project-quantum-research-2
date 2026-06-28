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
      className="relative z-10 bg-background border-t border-border py-24 md:py-36"
    >
      <div className="container grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
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

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-border bg-[#0a0a0a] py-8 px-4 text-center"
            >
              <div className="text-3xl md:text-4xl font-sentient text-primary">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-foreground/50 mt-3 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
