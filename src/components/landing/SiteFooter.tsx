import { PHONE, PHONE_RAW } from "./constants";

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#26A5E4" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const MaxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 16.875h-2.437l-3.125-4.5-3.125 4.5H6.438l4.374-6.188L6.75 4.5h2.438l2.812 4.125L14.812 4.5H17.25l-4.062 6.187z"/>
  </svg>
);

const LOGO_URL = "https://static.tildacdn.com/tild6166-3331-4163-a337-376239336638/Logo_Lev.svg";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src={LOGO_URL}
            alt="Вскрытие замков Сочи"
            className="h-9 w-auto object-contain"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>

        <div className="flex items-center gap-4">
          <a href="https://t.me/" target="_blank" rel="noopener"
             className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:opacity-80 transition-opacity"
             title="Telegram">
            <TelegramIcon />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener"
             className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:opacity-80 transition-opacity"
             title="WhatsApp">
            <WhatsAppIcon />
          </a>
          <a href="https://max.ru/" target="_blank" rel="noopener"
             className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:opacity-80 transition-opacity"
             title="Max">
            <MaxIcon />
          </a>
        </div>

        <a href={`tel:${PHONE_RAW}`} className="font-oswald font-semibold text-primary text-sm">
          {PHONE}
        </a>
      </div>

      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-golos text-xs text-muted-foreground text-center">
            © 2026 Вскрытие замков в Сочи · Работаем круглосуточно
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("privacy");
              if (el) el.classList.toggle("hidden");
            }}
            className="font-golos text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-2">
            Политика конфиденциальности
          </button>
        </div>

        {/* Политика конфиденциальности */}
        <div id="privacy" className="hidden border-t border-border">
          <div className="max-w-5xl mx-auto px-4 py-6">
            <h3 className="font-oswald text-lg font-semibold text-foreground mb-3">Политика конфиденциальности</h3>
            <div className="font-golos text-xs text-muted-foreground leading-relaxed space-y-2">
              <p><strong className="text-foreground">1. Сбор данных.</strong> При заполнении формы заявки мы собираем имя и номер телефона исключительно для обратной связи с вами.</p>
              <p><strong className="text-foreground">2. Использование данных.</strong> Ваши персональные данные используются только для организации выезда мастера и не передаются третьим лицам.</p>
              <p><strong className="text-foreground">3. Хранение данных.</strong> Данные хранятся на защищённых серверах и удаляются после выполнения заказа по вашему запросу.</p>
              <p><strong className="text-foreground">4. Согласие.</strong> Нажимая кнопку «Отправить заявку» или совершая звонок, вы даёте согласие на обработку персональных данных в соответствии с ФЗ-152 «О персональных данных».</p>
              <p><strong className="text-foreground">5. Контакт.</strong> По вопросам обработки персональных данных обращайтесь по телефону {PHONE}.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}