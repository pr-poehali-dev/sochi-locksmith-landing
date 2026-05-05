import { useState } from "react";
import Icon from "@/components/ui/icon";

const SEND_ORDER_URL = "https://functions.poehali.dev/74562836-f355-4bf6-af04-820abf2a319f";

export function OrderFormSection() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, phone: form.phone }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Ошибка отправки. Позвоните нам напрямую.");
      }
    } catch {
      setError("Нет соединения. Позвоните нам напрямую.");
    } finally {
      setLoading(false);
    }
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
              disabled={loading}
              className="gold-gradient text-background font-oswald font-semibold text-base py-4 rounded-xl mt-1 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60">
              <Icon name={loading ? "Loader" : "Send"} size={17} className={`text-background ${loading ? "animate-spin" : ""}`} />
              {loading ? "Отправляем..." : "Отправить заявку"}
            </button>
            {error && (
              <p className="font-golos text-xs text-red-400 text-center">{error}</p>
            )}
            <p className="font-golos text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
