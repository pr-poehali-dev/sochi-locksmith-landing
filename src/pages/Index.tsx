import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 (800) 000-00-00";
const PHONE_RAW = "78000000000";

const services = [
  { icon: "DoorOpen",   label: "Дверной замок",     price: "от 1 900 ₽", desc: "Входные, межкомнатные, металлические двери" },
  { icon: "Car",        label: "Замок авто",         price: "от 1 700 ₽", desc: "Любые марки и модели автомобилей" },
  { icon: "Archive",    label: "Сейф",               price: "от 1 800 ₽", desc: "Взломостойкие и огнезащитные сейфы" },
  { icon: "Lock",       label: "Амбарный замок",     price: "от 1 200 ₽", desc: "Навесные замки любого типа и размера" },
  { icon: "Home",       label: "Замок квартиры",     price: "от 1 600 ₽", desc: "Открытие без повреждения двери и замка" },
];

const reviews = [
  {
    name: "Андрей К.",
    date: "12 апреля 2026",
    rating: 5,
    text: "Вызвал мастера в 2 ночи — приехал за 18 минут. Вскрыл дверь быстро и аккуратно, замок остался целым. Очень доволен!",
  },
  {
    name: "Марина С.",
    date: "3 апреля 2026",
    rating: 5,
    text: "Застряла у машины с покупками. Мастер приехал через 20 минут, открыл без царапин. Профессионал своего дела.",
  },
  {
    name: "Дмитрий Е.",
    date: "28 марта 2026",
    rating: 5,
    text: "Вскрывали сейф — документы от предыдущих владельцев без ключа. Справились быстро и по адекватной цене.",
  },
  {
    name: "Ольга В.",
    date: "15 марта 2026",
    rating: 5,
    text: "Оперативно, вежливо, цена совпала с тем, что назвали по телефону. Буду рекомендовать всем знакомым.",
  },
];

const whyUs = [
  { icon: "Clock",        title: "Приедем за 15–30 мин", desc: "Работаем круглосуточно без выходных по всему Сочи" },
  { icon: "ShieldCheck",  title: "Без повреждений",       desc: "Профессиональный инструмент — замок и дверь остаются целыми" },
  { icon: "BadgeCheck",   title: "Фиксированная цена",    desc: "Называем стоимость по телефону и не меняем её на месте" },
  { icon: "Wrench",       title: "Опыт 10+ лет",          desc: "Открываем замки любой сложности: от простых до взломостойких" },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="Star" size={14} className="star-gold fill-current" />
      ))}
    </div>
  );
}

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-md gold-gradient flex items-center justify-center">
              <Icon name="KeyRound" size={17} className="text-background" />
            </div>
            <div className="leading-tight">
              <div className="font-oswald text-sm font-semibold tracking-wide text-foreground">ЗАМОК.СОЧИ</div>
              <div className="text-[10px] text-muted-foreground leading-none">Мастер 24/7</div>
            </div>
          </div>

          {/* Messengers */}
          <div className="flex items-center gap-2">
            <a href="https://t.me/" target="_blank" rel="noopener"
               className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
               title="Telegram">
              <span className="text-sm">✈️</span>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener"
               className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
               title="WhatsApp">
              <span className="text-sm">💬</span>
            </a>
            <a href="https://ok.ru/" target="_blank" rel="noopener"
               className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
               title="Одноклассники">
              <span className="text-sm">👥</span>
            </a>
          </div>

          {/* Phone CTA */}
          <a href={`tel:${PHONE_RAW}`}
             className="flex items-center gap-2 gold-gradient text-background font-oswald font-semibold text-sm px-4 py-2 rounded-lg pulse-gold shrink-0">
            <Icon name="Phone" size={15} className="text-background" />
            <span className="hidden xs:inline">{PHONE}</span>
            <span className="xs:hidden">Звонок</span>
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/80be030c-e210-49fd-9712-8534587fb661/files/0a7ee531-18cf-4cb0-8c30-0fe10a6980f9.jpg"
          alt="Мастер вскрытия замков"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary text-xs font-golos px-3 py-1.5 rounded-full mb-6 animate-fade-up">
            <Icon name="MapPin" size={12} className="text-primary" />
            Сочи · Выезд за 15–30 минут
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

        {/* scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/40 text-xs">
          <Icon name="ChevronDown" size={20} className="animate-bounce text-foreground/40" />
        </div>
      </section>

      {/* ─── WHY MASTER ─── */}
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

      <div className="section-divider mx-8" />

      {/* ─── PRICES ─── */}
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

      <div className="section-divider mx-8" />

      {/* ─── DOCUMENTS ─── */}
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
            { icon: "IdCard",       title: "Паспорт гражданина РФ",          desc: "Основной документ, удостоверяющий личность. Обязателен в любом случае." },
            { icon: "FileText",     title: "Документ на квартиру / объект",  desc: "Свидетельство о праве собственности, выписка из ЕГРН или договор аренды." },
            { icon: "Car",          title: "Документы на автомобиль",         desc: "СТС или ПТС с совпадающим VIN-номером — для вскрытия замка авто." },
            { icon: "UserCheck",    title: "Доверенность (если не владелец)", desc: "Нотариальная доверенность, если вы действуете от имени собственника." },
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

      <div className="section-divider mx-8" />

      {/* ─── REVIEWS ─── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-foreground mb-3">
            ОТЗЫВЫ <span className="gold-text">КЛИЕНТОВ</span>
          </h2>

          {/* Rating summary */}
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

      <div className="section-divider mx-8" />

      {/* ─── ORDER FORM ─── */}
      <section id="order" className="max-w-5xl mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-foreground mb-2">
              ОСТАВИТЬ <span className="gold-text">ЗАЯВКУ</span>
            </h2>
            <p className="font-golos text-muted-foreground text-sm">Перезвоним в течение 2 минут</p>
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

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md gold-gradient flex items-center justify-center">
              <Icon name="KeyRound" size={14} className="text-background" />
            </div>
            <span className="font-oswald text-sm text-foreground font-semibold">ЗАМОК.СОЧИ</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://t.me/" target="_blank" rel="noopener"
               className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors text-base">
              ✈️
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener"
               className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors text-base">
              💬
            </a>
            <a href="https://ok.ru/" target="_blank" rel="noopener"
               className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors text-base">
              👥
            </a>
          </div>

          <a href={`tel:${PHONE_RAW}`} className="font-oswald font-semibold text-primary text-sm">
            {PHONE}
          </a>
        </div>
        <div className="border-t border-border">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-center">
            <p className="font-golos text-xs text-muted-foreground text-center">
              © 2026 Вскрытие замков в Сочи · Работаем круглосуточно
            </p>
          </div>
        </div>
      </footer>

      {/* ─── MOBILE STICKY CALL ─── */}
      <div className="fixed bottom-4 left-0 right-0 px-4 z-50 sm:hidden">
        <a href={`tel:${PHONE_RAW}`}
           className="flex items-center justify-center gap-3 gold-gradient text-background font-oswald font-bold text-base py-4 rounded-2xl shadow-2xl pulse-gold">
          <Icon name="Phone" size={20} className="text-background" />
          Позвонить мастеру
        </a>
      </div>

    </div>
  );
}