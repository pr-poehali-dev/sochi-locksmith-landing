import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PHONE, PHONE_RAW, services, reviews, whyUs } from "./constants";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="Star" size={14} className="star-gold fill-current" />
      ))}
    </div>
  );
}

function Divider() {
  return <div className="section-divider mx-8" />;
}

function HeroSection() {
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

function WhyMasterSection() {
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

function ServicesSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-foreground mb-2">
          ЦЕНЫ НА <span className="gold-text">УСЛУГИ</span>
        </h2>
        <p className="font-golos text-muted-foreground text-sm">Называем цену по телефону — на месте она не меняется</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, idx) => (
          <div key={s.label}
               className={`relative bg-card border rounded-2xl p-6 card-hover flex flex-col gap-4 overflow-hidden
                 ${idx === 0 ? "border-primary/50 sm:col-span-2 lg:col-span-1" : "border-border"}`}>
            {idx === 0 && (
              <span className="absolute top-3 right-3 bg-primary text-primary-foreground font-oswald text-xs font-bold px-2.5 py-0.5 rounded-full tracking-wide">
                ХИТ
              </span>
            )}
            <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0">
              <Icon name={s.icon} size={22} className="text-background" />
            </div>
            <div className="flex-1">
              <div className="font-oswald text-xl font-bold text-foreground mb-1">{s.label}</div>
              <div className="font-golos text-muted-foreground text-sm mb-3">{s.desc}</div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="font-oswald text-2xl font-bold text-primary">{s.price}</span>
              <a href={`tel:${PHONE_RAW}`}
                 className="flex items-center gap-1.5 text-xs font-golos font-medium text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={13} className="" />
                Вызвать
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DocumentsSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-foreground mb-3">
          НЕОБХОДИМЫЕ <span className="gold-text">ДОКУМЕНТЫ</span>
        </h2>
        <p className="font-golos text-muted-foreground text-sm max-w-xl mx-auto">
          Для защиты ваших интересов мастер обязан убедиться, что вы являетесь
          владельцем или имеете право доступа к объекту
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          { icon: "IdCard",    title: "Паспорт гражданина РФ",         desc: "Основной документ, удостоверяющий личность. Обязателен в любом случае." },
          { icon: "FileText",  title: "Документ на квартиру / объект", desc: "Свидетельство о праве собственности, выписка из ЕГРН или договор аренды." },
          { icon: "Car",       title: "Документы на автомобиль",        desc: "СТС или ПТС с совпадающим VIN-номером — для вскрытия замка авто." },
          { icon: "UserCheck", title: "Доверенность (если не владелец)", desc: "Нотариальная доверенность, если вы действуете от имени собственника." },
        ].map((doc) => (
          <div key={doc.title} className="bg-card border border-border rounded-2xl p-5 card-hover flex gap-4 items-start">
            <div className="w-11 h-11 rounded-xl gold-gradient flex items-center justify-center shrink-0 mt-0.5">
              <Icon name={doc.icon} size={20} className="text-background" />
            </div>
            <div>
              <div className="font-oswald font-semibold text-base text-foreground mb-1">{doc.title}</div>
              <div className="font-golos text-muted-foreground text-sm leading-relaxed">{doc.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-2xl px-6 py-4 flex gap-3 items-start">
        <Icon name="AlertTriangle" size={20} className="text-primary shrink-0 mt-0.5" />
        <p className="font-golos text-sm text-foreground/80 leading-relaxed">
          <strong className="text-foreground">Важно:</strong> без документов мастер вынужден отказать в работе —
          это требование закона и гарантия вашей безопасности. Подготовьте документы заранее,
          чтобы не терять время на месте.
        </p>
      </div>
    </section>
  );
}

function GuaranteesSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-foreground mb-2">
          НАШИ <span className="gold-text">ГАРАНТИИ</span>
        </h2>
        <p className="font-golos text-muted-foreground text-sm">Работаем честно — от звонка до результата</p>
      </div>

      {/* Timeline-схема */}
      <div className="relative">
        <div className="hidden md:block absolute top-10 left-[calc(10%+24px)] right-[calc(10%+24px)] h-px bg-gradient-to-r from-primary/60 via-primary to-primary/60 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {[
            { step: "01", icon: "Phone",       title: "Цена по телефону",  desc: "Называем стоимость ДО выезда. На месте цена не меняется." },
            { step: "02", icon: "ShieldCheck", title: "Без повреждений",   desc: "Вскрываем аккуратно — замок и дверь остаются целыми." },
            { step: "03", icon: "Clock3",      title: "Время — деньги",    desc: "Мастер приедет за 15–30 минут в любое время суток." },
            { step: "04", icon: "Receipt",     title: "Документы на руки", desc: "Выдаём чек и акт выполненных работ по вашему запросу." },
          ].map((g) => (
            <div key={g.step} className="flex flex-col items-center text-center gap-3">
              <div className="relative">
                <div className="w-[52px] h-[52px] rounded-full gold-gradient flex items-center justify-center shadow-lg shadow-primary/25">
                  <Icon name={g.icon} size={22} className="text-background" />
                </div>
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-background border border-border text-primary font-oswald font-bold text-[10px] flex items-center justify-center">
                  {g.step}
                </span>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 w-full card-hover">
                <div className="font-oswald font-semibold text-base text-foreground mb-1">{g.title}</div>
                <div className="font-golos text-muted-foreground text-sm leading-relaxed">{g.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ложный вызов */}
      <div className="mt-8 bg-card border border-destructive/30 rounded-2xl px-6 py-5 flex gap-4 items-start">
        <div className="w-10 h-10 rounded-xl bg-destructive/15 flex items-center justify-center shrink-0 mt-0.5">
          <Icon name="TriangleAlert" size={20} className="text-destructive" />
        </div>
        <div>
          <div className="font-oswald font-semibold text-base text-foreground mb-1">Ложный вызов — 1 000 ₽</div>
          <p className="font-golos text-sm text-muted-foreground leading-relaxed">
            Если мастер выехал, а в услуге было отказано по инициативе клиента (дверь открыли самостоятельно,
            передумали и т.п.) — выезд оплачивается по тарифу <strong className="text-foreground">1 000 рублей</strong>.
            Это компенсация за потраченное время и топливо.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceZonesSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-foreground mb-2">
          ЗОНЫ <span className="gold-text">ВЫЕЗДА</span>
        </h2>
        <p className="font-golos text-muted-foreground text-sm">Работаем по всему Большому Сочи</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Реалистичная карта SVG */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden relative">
          <svg viewBox="0 0 480 420" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(210,55%,14%)" />
                <stop offset="100%" stopColor="hsl(215,60%,9%)" />
              </linearGradient>
              <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(150,12%,20%)" />
                <stop offset="100%" stopColor="hsl(140,10%,13%)" />
              </linearGradient>
              <linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(100,8%,18%)" />
                <stop offset="100%" stopColor="hsl(90,7%,14%)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* Фон — море */}
            <rect width="480" height="420" fill="url(#seaGrad)" />

            {/* Текстура моря — волны */}
            <path d="M 0 310 Q 40 305 80 310 Q 120 315 160 308 Q 200 302 240 308 Q 280 314 320 306 Q 360 298 400 305 Q 440 312 480 306" stroke="hsl(210,40%,20%)" strokeWidth="1" fill="none" opacity="0.5"/>
            <path d="M 0 330 Q 50 324 100 330 Q 150 336 200 328 Q 250 320 300 327 Q 350 334 400 326 Q 440 320 480 326" stroke="hsl(210,40%,18%)" strokeWidth="1" fill="none" opacity="0.4"/>
            <path d="M 0 355 Q 60 348 120 355 Q 180 362 240 353 Q 300 344 360 352 Q 420 360 480 352" stroke="hsl(210,40%,17%)" strokeWidth="1" fill="none" opacity="0.35"/>
            <text x="60" y="380" fill="hsl(210,35%,28%)" fontSize="11" fontFamily="Golos Text, sans-serif" letterSpacing="3" opacity="0.8">Ч Ё Р Н О Е   М О Р Е</text>

            {/* Горы — задний план */}
            <path d="M -10 0 L 30 55 L 70 20 L 110 65 L 155 15 L 195 70 L 240 10 L 285 60 L 330 5 L 370 50 L 415 8 L 460 45 L 490 10 L 490 0 Z"
                  fill="hsl(150,10%,12%)" opacity="0.9"/>
            {/* Горы — передний план с рельефом */}
            <path d="M -10 80 L 20 45 L 55 75 L 90 30 L 130 68 L 170 28 L 210 58 L 255 18 L 300 55 L 340 22 L 385 60 L 420 28 L 460 62 L 490 38 L 490 110 L -10 110 Z"
                  fill="url(#mountainGrad)" />
            {/* Снежные шапки */}
            <path d="M 90 30 L 100 38 L 110 30 L 120 40 L 130 28" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3"/>
            <path d="M 245 18 L 258 30 L 268 16 L 278 28" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3"/>
            <path d="M 338 22 L 348 32 L 358 20 L 368 30" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3"/>
            <text x="195" y="28" fill="hsl(140,15%,38%)" fontSize="8" fontFamily="Golos Text, sans-serif" letterSpacing="1.5" textAnchor="middle" opacity="0.8">КАВКАЗСКИЕ ГОРЫ</text>

            {/* Суша — основная полоса Сочи */}
            <path d="M -10 108
                     C 20 112, 50 115, 90 118
                     C 130 121, 155 119, 185 122
                     C 210 124, 235 126, 260 128
                     C 290 130, 315 132, 345 135
                     C 375 137, 405 138, 435 136
                     C 455 135, 470 134, 490 133
                     L 490 290
                     C 465 282, 440 270, 415 262
                     C 385 252, 355 248, 325 252
                     C 295 256, 270 262, 245 268
                     C 218 274, 192 280, 162 278
                     C 132 276, 105 268, 78 262
                     C 52 256, 28 252, 0 256
                     L -10 256 Z"
                  fill="url(#landGrad)" />

            {/* Береговая линия */}
            <path d="M -10 256
                     C 28 252, 52 256, 78 262
                     C 105 268, 132 276, 162 278
                     C 192 280, 218 274, 245 268
                     C 270 262, 295 256, 325 252
                     C 355 248, 385 252, 415 262
                     C 440 270, 465 282, 490 290"
                  stroke="hsl(200,50%,35%)" strokeWidth="2" fill="none" opacity="0.8"/>

            {/* Река Мзымта (от гор к Адлеру) */}
            <path d="M 310 55 Q 318 90 322 120 Q 326 150 330 175 Q 334 200 338 225 Q 342 248 348 258"
                  stroke="hsl(210,55%,38%)" strokeWidth="2" fill="none" opacity="0.6"/>
            <text x="352" y="200" fill="hsl(210,45%,42%)" fontSize="7" fontFamily="Golos Text, sans-serif" transform="rotate(85,352,200)" opacity="0.7">р. Мзымта</text>

            {/* Трасса А-147 (федеральная дорога вдоль берега) */}
            <path d="M 10 232 Q 50 228 90 230 Q 130 232 165 234 Q 200 236 230 238 Q 262 240 295 240 Q 325 240 355 238 Q 385 236 415 234 Q 445 232 475 230"
                  stroke="hsl(38,70%,42%)" strokeWidth="3" fill="none" opacity="0.85"/>
            <path d="M 10 232 Q 50 228 90 230 Q 130 232 165 234 Q 200 236 230 238 Q 262 240 295 240 Q 325 240 355 238 Q 385 236 415 234 Q 445 232 475 230"
                  stroke="hsl(38,90%,55%)" strokeWidth="1" fill="none" strokeDasharray="8,5" opacity="0.5"/>
            <text x="75" y="224" fill="hsl(38,65%,48%)" fontSize="7.5" fontFamily="Golos Text, sans-serif" opacity="0.9">А-147</text>

            {/* Дорога в горы (к Красной Поляне) */}
            <path d="M 335 237 Q 330 210 326 185 Q 322 160 316 135 Q 312 112 308 88 Q 304 65 300 45"
                  stroke="hsl(38,50%,32%)" strokeWidth="1.5" fill="none" strokeDasharray="5,4" opacity="0.6"/>

            {/* Зоны покрытия районов */}
            <ellipse cx="155" cy="215" rx="52" ry="28" fill="hsl(38,92%,50%)" opacity="0.08"/>
            <ellipse cx="78" cy="220" rx="42" ry="22" fill="hsl(280,70%,60%)" opacity="0.07"/>
            <ellipse cx="248" cy="218" rx="38" ry="22" fill="hsl(160,70%,45%)" opacity="0.08"/>
            <ellipse cx="360" cy="215" rx="55" ry="28" fill="hsl(200,80%,55%)" opacity="0.08"/>
            <ellipse cx="300" cy="55" rx="30" ry="20" fill="hsl(0,70%,55%)" opacity="0.1"/>

            {/* ДАГОМЫС */}
            <circle cx="78" cy="220" r="5" fill="hsl(280,70%,65%)" filter="url(#glow)"/>
            <circle cx="78" cy="220" r="10" fill="hsl(280,70%,65%)" opacity="0.2"/>
            <rect x="30" y="195" width="68" height="18" rx="3" fill="hsl(20,10%,8%)" opacity="0.75"/>
            <text x="64" y="207" fill="hsl(280,70%,72%)" fontSize="9" fontFamily="Oswald, sans-serif" fontWeight="600" textAnchor="middle">ДАГОМЫС</text>
            <text x="78" y="244" fill="hsl(280,40%,50%)" fontSize="7" fontFamily="Golos Text, sans-serif" textAnchor="middle">~15 мин</text>

            {/* СОЧИ центр */}
            <circle cx="155" cy="215" r="7" fill="hsl(38,92%,55%)" filter="url(#glow)"/>
            <circle cx="155" cy="215" r="14" fill="hsl(38,92%,50%)" opacity="0.2"/>
            <rect x="118" y="189" width="75" height="18" rx="3" fill="hsl(20,10%,8%)" opacity="0.75"/>
            <text x="155" y="201" fill="hsl(38,92%,70%)" fontSize="10" fontFamily="Oswald, sans-serif" fontWeight="700" textAnchor="middle">СОЧИ</text>
            <text x="155" y="238" fill="hsl(38,65%,48%)" fontSize="7" fontFamily="Golos Text, sans-serif" textAnchor="middle">от 15 мин</text>

            {/* ХОСТА */}
            <circle cx="248" cy="218" r="5" fill="hsl(160,70%,55%)" filter="url(#glow)"/>
            <circle cx="248" cy="218" r="10" fill="hsl(160,70%,45%)" opacity="0.2"/>
            <rect x="208" y="196" width="62" height="18" rx="3" fill="hsl(20,10%,8%)" opacity="0.75"/>
            <text x="239" y="208" fill="hsl(160,65%,60%)" fontSize="9.5" fontFamily="Oswald, sans-serif" fontWeight="600" textAnchor="middle">ХОСТА</text>
            <text x="248" y="240" fill="hsl(160,45%,42%)" fontSize="7" fontFamily="Golos Text, sans-serif" textAnchor="middle">~20 мин</text>

            {/* АДЛЕР */}
            <circle cx="360" cy="215" r="6" fill="hsl(200,80%,62%)" filter="url(#glow)"/>
            <circle cx="360" cy="215" r="12" fill="hsl(200,80%,55%)" opacity="0.2"/>
            <rect x="322" y="192" width="60" height="18" rx="3" fill="hsl(20,10%,8%)" opacity="0.75"/>
            <text x="352" y="204" fill="hsl(200,70%,68%)" fontSize="10" fontFamily="Oswald, sans-serif" fontWeight="600" textAnchor="middle">АДЛЕР</text>
            <text x="360" y="238" fill="hsl(200,50%,45%)" fontSize="7" fontFamily="Golos Text, sans-serif" textAnchor="middle">~30 мин</text>

            {/* Иконка аэропорта Адлера */}
            <rect x="335" y="248" width="36" height="16" rx="2" fill="hsl(20,10%,10%)" opacity="0.8"/>
            <text x="353" y="259" fill="hsl(200,50%,55%)" fontSize="7.5" textAnchor="middle" fontFamily="Golos Text, sans-serif">✈ аэропорт</text>

            {/* КРАСНАЯ ПОЛЯНА */}
            <circle cx="300" cy="55" r="6" fill="hsl(0,75%,62%)" filter="url(#glow)"/>
            <circle cx="300" cy="55" r="12" fill="hsl(0,70%,55%)" opacity="0.2"/>
            <rect x="256" y="68" width="90" height="28" rx="3" fill="hsl(20,10%,8%)" opacity="0.75"/>
            <text x="301" y="80" fill="hsl(0,70%,68%)" fontSize="8.5" fontFamily="Oswald, sans-serif" fontWeight="600" textAnchor="middle">КРАСНАЯ</text>
            <text x="301" y="91" fill="hsl(0,70%,68%)" fontSize="8.5" fontFamily="Oswald, sans-serif" fontWeight="600" textAnchor="middle">ПОЛЯНА ~45 мин</text>

            {/* Компас */}
            <g transform="translate(446,22)">
              <circle cx="0" cy="0" r="18" fill="hsl(220,12%,10%)" stroke="hsl(220,10%,25%)" strokeWidth="1"/>
              <polygon points="0,-11 4,0 0,-4 -4,0" fill="hsl(38,92%,55%)"/>
              <polygon points="0,11 4,0 0,4 -4,0" fill="hsl(220,10%,40%)"/>
              <text x="0" y="-13" fill="hsl(38,92%,65%)" fontSize="7" fontFamily="Oswald,sans-serif" fontWeight="700" textAnchor="middle">С</text>
              <text x="0" y="22" fill="hsl(220,10%,50%)" fontSize="6" fontFamily="Oswald,sans-serif" textAnchor="middle">Ю</text>
              <text x="-16" y="4" fill="hsl(220,10%,50%)" fontSize="6" fontFamily="Oswald,sans-serif" textAnchor="middle">З</text>
              <text x="16" y="4" fill="hsl(220,10%,50%)" fontSize="6" fontFamily="Oswald,sans-serif" textAnchor="middle">В</text>
            </g>

            {/* Масштабная линейка */}
            <line x1="18" y1="400" x2="78" y2="400" stroke="hsl(220,10%,45%)" strokeWidth="1.5"/>
            <line x1="18" y1="396" x2="18" y2="404" stroke="hsl(220,10%,45%)" strokeWidth="1.5"/>
            <line x1="78" y1="396" x2="78" y2="404" stroke="hsl(220,10%,45%)" strokeWidth="1.5"/>
            <text x="48" y="412" fill="hsl(220,10%,45%)" fontSize="7" fontFamily="Golos Text, sans-serif" textAnchor="middle">~10 км</text>
          </svg>
        </div>

        {/* Список районов */}
        <div className="flex flex-col gap-3">
          {[
            { dot: "bg-amber-400",   name: "Сочи (центр)",   time: "от 15 мин", note: "Центральный район, Макензи, Светлана" },
            { dot: "bg-purple-400",  name: "Дагомыс",        time: "~15 мин",   note: "Северная часть Большого Сочи" },
            { dot: "bg-emerald-400", name: "Хоста",           time: "~20 мин",   note: "Хостинский район, Кудепста" },
            { dot: "bg-sky-400",     name: "Адлер",           time: "~30 мин",   note: "Адлерский район, аэропорт, Имеретинка" },
            { dot: "bg-red-400",     name: "Красная Поляна", time: "~45 мин",   note: "Горный курорт, Эсто-Садок, Роза Хутор" },
          ].map((z) => (
            <div key={z.name} className="bg-card border border-border rounded-xl px-5 py-4 card-hover flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full shrink-0 ${z.dot}`} />
              <div className="flex-1">
                <div className="font-oswald font-semibold text-base text-foreground">{z.name}</div>
                <div className="font-golos text-muted-foreground text-xs">{z.note}</div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Icon name="Clock" size={13} className="text-muted-foreground" />
                <span className="font-oswald text-sm font-semibold text-primary">{z.time}</span>
              </div>
            </div>
          ))}
          <div className="bg-primary/10 border border-primary/30 rounded-xl px-5 py-3 flex gap-2 items-center">
            <Icon name="MapPin" size={16} className="text-primary shrink-0" />
            <p className="font-golos text-xs text-foreground/70">
              Не нашли свой район? Позвоните — скорее всего, мы туда выезжаем.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-foreground mb-3">
          ОТЗЫВЫ <span className="gold-text">КЛИЕНТОВ</span>
        </h2>
        <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4">
          <span className="font-oswald text-5xl font-bold text-primary">5.0</span>
          <div className="flex flex-col items-start gap-1">
            <Stars />
            <span className="font-golos text-muted-foreground text-xs">48 отзывов · Яндекс Карты</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card border border-border rounded-2xl p-5 card-hover flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center font-oswald font-bold text-background text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-oswald font-semibold text-sm text-foreground">{r.name}</div>
                  <div className="font-golos text-xs text-muted-foreground">{r.date}</div>
                </div>
              </div>
              <Stars count={r.rating} />
            </div>
            <p className="font-golos text-sm text-foreground/80 leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OrderFormSection() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="order" className="max-w-5xl mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-foreground mb-2">
            ОСТАВИТЬ <span className="gold-text">ЗАЯВКУ</span>
          </h2>
          <p className="font-golos text-muted-foreground text-sm">Перезвоним в течение 2 минут · Работаем <strong className="text-primary">24/7</strong></p>
        </div>

        {sent ? (
          <div className="bg-card border border-primary/40 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={28} className="text-background" />
            </div>
            <h3 className="font-oswald text-2xl font-bold text-foreground mb-2">Заявка принята!</h3>
            <p className="font-golos text-muted-foreground text-sm">Мастер перезвонит вам в течение 2 минут</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-golos text-sm text-muted-foreground">Ваше имя</label>
              <input
                type="text"
                placeholder="Иван"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-golos text-sm placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-golos text-sm text-muted-foreground">Телефон *</label>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-golos text-sm placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <button
              type="submit"
              className="gold-gradient text-background font-oswald font-semibold text-base py-4 rounded-xl mt-1 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Icon name="Send" size={17} className="text-background" />
              Отправить заявку
            </button>
            <p className="font-golos text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

export default function LandingSections() {
  return (
    <>
      <HeroSection />
      <WhyMasterSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <DocumentsSection />
      <Divider />
      <GuaranteesSection />
      <Divider />
      <ServiceZonesSection />
      <Divider />
      <ReviewsSection />
      <Divider />
      <OrderFormSection />
    </>
  );
}