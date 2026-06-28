import { Pill } from "./Pill";
import Icon from "@/components/ui/icon";

const projects = [
  {
    title: "Веб-платформа",
    category: "Frontend · Backend",
    year: "2025",
    tags: ["React", "Python", "PostgreSQL"],
    desc: "Полноценное веб-приложение с личным кабинетом и аналитикой.",
  },
  {
    title: "Мобильный сервис",
    category: "UI/UX · React",
    year: "2024",
    tags: ["React Native", "Figma"],
    desc: "Адаптивный сервис с интуитивным интерфейсом для пользователей.",
  },
  {
    title: "Корпоративный сайт",
    category: "Дизайн · Вёрстка",
    year: "2024",
    tags: ["Tailwind", "Three.js"],
    desc: "Премиальный лендинг с анимациями и фирменным стилем.",
  },
  {
    title: "Дашборд аналитики",
    category: "Данные · Визуализация",
    year: "2023",
    tags: ["TypeScript", "D3.js"],
    desc: "Интерактивные графики и отчёты в реальном времени.",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-background border-t border-border py-24 md:py-36"
    >
      <div className="container">
        <div className="flex items-end justify-between mb-16">
          <div>
            <Pill className="mb-8">ПРОЕКТЫ</Pill>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient">
              Избранные <i className="font-light text-violet">работы</i>
            </h2>
          </div>
          <span className="hidden md:block font-mono text-sm text-foreground/40">
            {String(projects.length).padStart(2, "0")} кейсов
          </span>
        </div>

        <div className="flex flex-col border border-border-strong rounded-lg overflow-hidden divide-y divide-border-strong">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative grid md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 py-8 md:py-10 hover:bg-muted/50 transition-colors duration-300 px-4 md:px-8"
            >
              <span className="font-sentient text-3xl md:text-5xl text-foreground/20 group-hover:text-violet transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <div className="flex items-center gap-3 font-mono text-xs uppercase text-violet mb-3">
                  {project.category}
                  <span className="text-foreground/30">/ {project.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-sentient">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-foreground/50 mt-3 leading-relaxed max-w-[420px]">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] uppercase text-foreground/40 border border-border px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Icon
                name="ArrowUpRight"
                size={28}
                className="justify-self-end text-foreground/30 group-hover:text-violet group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}