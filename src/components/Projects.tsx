import { Pill } from "./Pill";
import Icon from "@/components/ui/icon";

const projects = [
  {
    title: "Веб-платформа",
    category: "Frontend · Backend",
    desc: "Полноценное веб-приложение с личным кабинетом и аналитикой.",
  },
  {
    title: "Мобильный сервис",
    category: "UI/UX · React",
    desc: "Адаптивный сервис с интуитивным интерфейсом для пользователей.",
  },
  {
    title: "Корпоративный сайт",
    category: "Дизайн · Вёрстка",
    desc: "Премиальный лендинг с анимациями и фирменным стилем.",
  },
  {
    title: "Дашборд аналитики",
    category: "Данные · Визуализация",
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
        <div className="text-center mb-16">
          <Pill className="mb-8">ПРОЕКТЫ</Pill>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient">
            Избранные <i className="font-light">работы</i>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-background hover:bg-[#0a0a0a] transition-colors duration-300 p-8 md:p-10"
            >
              <div className="font-mono text-xs uppercase text-primary mb-4">
                {project.category}
              </div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-sentient">
                  {project.title}
                </h3>
                <Icon
                  name="ArrowUpRight"
                  size={24}
                  className="text-foreground/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0"
                />
              </div>
              <p className="font-mono text-sm text-foreground/50 mt-4 leading-relaxed">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
