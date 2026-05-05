import Icon from "@/components/ui/icon";
import { PHONE_RAW, whyUs } from "./constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://cdn.poehali.dev/projects/80be030c-e210-49fd-9712-8534587fb661/files/0a7ee531-18cf-4cb0-8c30-0fe10a6980f9.jpg"
        alt="Мастер вскрытия замков"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary text-xs font-golos px-3 py-1.5 rounded-full">
            <Icon name="MapPin" size={12} className="text-primary" />
            Сочи · Выезд за 15–30 минут
          </div>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary text-xs font-golos px-3 py-1.5 rounded-full">
            <Icon name="Clock" size={12} className="text-primary" />
            Работаем 24/7 · Без выходных
          </div>
        </div>

        <h1 className="font-oswald text-4xl sm:text-6xl font-bold tracking-wide text-foreground leading-tight mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
          ВСКРЫТИЕ ЗАМКОВ
          <br />
          <span className="gold-text">В СОЧИ</span>
        </h1>

        <p className="font-golos text-base sm:text-lg text-foreground/80 max-w-xl mx-auto mb-8 animate-fade-up"
           style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
          Профессиональный мастер откроет любой замок без повреждений.
          Работаем <strong className="text-foreground">24/7</strong>, цена известна заранее.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up"
             style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}>
          <a href={`tel:${PHONE_RAW}`}
             className="flex items-center justify-center gap-2 gold-gradient text-background font-oswald font-semibold text-base px-8 py-4 rounded-xl pulse-gold shadow-lg">
            <Icon name="Phone" size={18} className="text-background" />
            Позвонить сейчас
          </a>
          <a href="#order"
             className="flex items-center justify-center gap-2 bg-secondary border border-border text-foreground font-oswald font-medium text-base px-8 py-4 rounded-xl hover:border-primary/60 transition-colors">
            <Icon name="MessageSquare" size={18} className="text-foreground" />
            Оставить заявку
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/40 text-xs">
        <Icon name="ChevronDown" size={20} className="animate-bounce text-foreground/40" />
      </div>
    </section>
  );
}

export function WhyMasterSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-foreground mb-3">
          ПОЧЕМУ ВАЖНО ВЫЗВАТЬ <span className="gold-text">МАСТЕРА</span>
        </h2>
        <p className="font-golos text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Попытки самостоятельно вскрыть замок часто заканчиваются поломкой — сломанный
          штифт, повреждённый цилиндр или погнутый ригель означают замену замка за 3–10
          тысяч рублей. Мастер открывает без повреждений за фиксированную цену — это
          выгоднее и надёжнее.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {whyUs.map((item) => (
          <div key={item.title}
               className="bg-card border border-border rounded-xl p-5 card-hover flex flex-col gap-3">
            <div className="w-11 h-11 rounded-lg gold-gradient flex items-center justify-center shrink-0">
              <Icon name={item.icon} size={20} className="text-background" />
            </div>
            <div>
              <div className="font-oswald font-semibold text-base text-foreground mb-1">{item.title}</div>
              <div className="font-golos text-muted-foreground text-sm leading-relaxed">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
