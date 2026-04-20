import Icon from "@/components/ui/icon";
import { PHONE, PHONE_RAW } from "./constants";

export default function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <img
              src="https://thb.tildacdn.com/tild3263-3735-4935-b361-646237366532/-/resize/504x/noroot.png"
              alt="Вскрытие замков Сочи"
              className="h-10 w-auto object-contain"
            />
            <div className="text-[10px] text-primary font-oswald font-semibold leading-none tracking-wide">24/7</div>
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

      {/* Mobile sticky call button */}
      <div className="fixed bottom-4 left-0 right-0 px-4 z-50 sm:hidden">
        <a href={`tel:${PHONE_RAW}`}
           className="flex items-center justify-center gap-3 gold-gradient text-background font-oswald font-bold text-base py-4 rounded-2xl shadow-2xl pulse-gold">
          <Icon name="Phone" size={20} className="text-background" />
          Позвонить мастеру
        </a>
      </div>
    </>
  );
}