import { Pill } from "./Pill";
import { Button } from "./ui/button";
import Icon from "@/components/ui/icon";

const links = [
  { icon: "Mail", label: "Email", value: "hello@example.com", href: "mailto:hello@example.com", color: "text-primary", hover: "hover:border-primary/50" },
  { icon: "Send", label: "Telegram", value: "@username", href: "#", color: "text-teal", hover: "hover:border-teal/50" },
  { icon: "Github", label: "GitHub", value: "github.com/username", href: "#", color: "text-violet", hover: "hover:border-violet/50" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 bg-muted/40 border-t border-border py-24 md:py-36"
    >
      <div className="container text-center">
        <Pill className="mb-8">КОНТАКТЫ</Pill>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient">
          Давайте <i className="font-light text-primary">работать</i> вместе
        </h2>
        <p className="font-mono text-sm sm:text-base text-foreground/60 mt-8 max-w-[440px] mx-auto leading-relaxed">
          Открыт для новых проектов и предложений. Напишите — отвечу в течение
          дня.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group flex items-center gap-3 border border-border bg-card hover:bg-background transition-all duration-300 px-5 py-3 ${link.hover}`}
            >
              <Icon
                name={link.icon}
                size={18}
                className={link.color}
              />
              <span className="font-mono text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                {link.value}
              </span>
            </a>
          ))}
        </div>

        <a className="contents" href="mailto:hello@example.com">
          <Button className="mt-12">[Написать мне]</Button>
        </a>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="font-mono text-xs text-foreground/40">
            © {new Date().getFullYear()} · Моё Портфолио
          </p>
        </div>
      </div>
    </section>
  );
}