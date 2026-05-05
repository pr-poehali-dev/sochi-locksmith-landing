import Icon from "@/components/ui/icon";
import { PHONE_RAW, services } from "./constants";

export function ServicesSection() {
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

export function DocumentsSection() {
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

export function GuaranteesSection() {
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
