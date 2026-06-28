import { Pill } from "./Pill";
import Icon from "@/components/ui/icon";

const skills = [
  {
    icon: "Code2",
    title: "Frontend-разработка",
    desc: "React, TypeScript, Tailwind CSS — современные интерфейсы.",
    color: "primary",
  },
  {
    icon: "Server",
    title: "Backend-разработка",
    desc: "Python, API, базы данных и серверная логика.",
    color: "teal",
  },
  {
    icon: "Palette",
    title: "UI/UX дизайн",
    desc: "Продумываю удобные и красивые интерфейсы.",
    color: "violet",
  },
  {
    icon: "Smartphone",
    title: "Адаптивная вёрстка",
    desc: "Сайты, которые отлично выглядят на любом экране.",
    color: "teal",
  },
  {
    icon: "Database",
    title: "Работа с данными",
    desc: "Проектирование, оптимизация и аналитика.",
    color: "violet",
  },
  {
    icon: "Rocket",
    title: "Запуск продуктов",
    desc: "От идеи до публикации и поддержки.",
    color: "primary",
  },
];

const colorMap: Record<string, { text: string; shadow: string }> = {
  primary: { text: "text-primary", shadow: "group-hover:shadow-primary/40" },
  teal: { text: "text-teal", shadow: "group-hover:shadow-teal/40" },
  violet: { text: "text-violet", shadow: "group-hover:shadow-violet/40" },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 bg-muted/40 border-t border-border py-24 md:py-36 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <Pill className="mb-8">НАВЫКИ</Pill>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient">
              Что я <i className="font-light">умею</i>
            </h2>
          </div>
          <p className="font-mono text-sm text-foreground/40 max-w-[280px] md:text-right">
            Стек, который позволяет вести проект от идеи до запуска
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {skills.map((skill, i) => (
            <div
              key={skill.title}
              className="group relative bg-card hover:bg-background transition-colors duration-300 p-8 overflow-hidden"
            >
              <span className="absolute -top-4 right-1 text-8xl font-sentient text-foreground/[0.04] group-hover:text-primary/10 transition-colors duration-300 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className={`relative size-12 flex items-center justify-center border border-border mb-6 group-hover:shadow-glow transition-shadow duration-300 ${colorMap[skill.color].text} ${colorMap[skill.color].shadow}`}
              >
                <Icon name={skill.icon} size={22} />
              </div>
              <h3 className="relative text-xl font-sentient mb-3">
                {skill.title}
              </h3>
              <p className="relative font-mono text-sm text-foreground/50 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}