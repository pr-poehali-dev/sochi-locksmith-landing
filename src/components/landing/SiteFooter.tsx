import Icon from "@/components/ui/icon";
import { PHONE, PHONE_RAW } from "./constants";

export default function SiteFooter() {
  return (
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
