import { Pill } from "./Pill";
import Icon from "@/components/ui/icon";

const skills = [
  {
    icon: "Code2",
    title: "Frontend-разработка",
    desc: "React, TypeScript, Tailwind CSS — современные интерфейсы.",
  },
  {
    icon: "Server",
    title: "Backend-разработка",
    desc: "Python, API, базы данных и серверная логика.",
  },
  {
    icon: "Palette",
    title: "UI/UX дизайн",
    desc: "Продумываю удобные и красивые интерфейсы.",
  },
  {
    icon: "Smartphone",
    title: "Адаптивная вёрстка",
    desc: "Сайты, которые отлично выглядят на любом экране.",
  },
  {
    icon: "Database",
    title: "Работа с данными",
    desc: "Проектирование, оптимизация и аналитика.",
  },
  {
    icon: "Rocket",
    title: "Запуск продуктов",
    desc: "От идеи до публикации и поддержки.",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 bg-[#050505] border-t border-border py-24 md:py-36"
    >
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-8">НАВЫКИ</Pill>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient">
            Что я <i className="font-light">умею</i>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group bg-background hover:bg-[#0a0a0a] transition-colors duration-300 p-8"
            >
              <div className="size-12 flex items-center justify-center border border-border text-primary mb-6 group-hover:shadow-glow group-hover:shadow-primary/30 transition-shadow duration-300">
                <Icon name={skill.icon} size={22} />
              </div>
              <h3 className="text-xl font-sentient mb-3">{skill.title}</h3>
              <p className="font-mono text-sm text-foreground/50 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
