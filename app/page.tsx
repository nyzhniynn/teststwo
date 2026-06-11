import Image from "next/image";

const navItems = ["О курсе", "Программа", "Автор", "Отзывы"];

const facts = ["7 недель", "уроки в записи", "поддержка", "доступ 1,5 года"];

const notes = [
  "Синтез современной психологии и восточных знаний",
  "Авторская трансформационная методика и гипнопрактики",
  "Быстрые заметные изменения во время прохождения курса",
];

const audience = [
  "Постоянно повторяешь одни и те же сценарии",
  "Сложно строить здоровые отношения с близкими",
  "Есть тревога, внутреннее напряжение и ощущение тупика",
  "Чувствуешь, что живешь не своей жизнью",
];

const journey = [
  ["Конфликт", "Увидеть внутреннее противоречие, которое управляет реакциями."],
  ["Родители", "Разобрать ранние связи и сценарии взрослой жизни."],
  ["Внутренний ребенок", "Вернуть контакт с чувствами, потребностями и опорой."],
  ["Партнер", "Учиться близости без спасения, контроля и отстранения."],
  ["Доверие миру", "Снизить напряжение и перестать жить в постоянной защите."],
  ["Перерождение", "Собрать новый способ быть с собой, людьми и будущим."],
];

const authorStats = [
  "150 000+ учеников",
  "Более 10 лет практики",
  "Авторские гипнопрактики",
];

export default function Home() {
  return (
    <main className="bg-[#F8F5E9] text-[#494949]">
      <section className="hero-stage min-h-screen px-5 pb-8 pt-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex min-h-[calc(100vh-52px)] max-w-[1440px] flex-col">
          <header className="hero-nav relative z-50 grid grid-cols-[1fr_auto] items-center gap-6 pb-4 pt-2 lg:grid-cols-[minmax(260px,0.8fr)_auto_minmax(220px,0.8fr)]">
            <a
              href="#"
              className="hero-mark group grid w-fit gap-1 text-[#5D001F]"
            >
              <span className="[font-family:Georgia,serif] text-[30px] font-normal leading-none tracking-[0.04em] sm:text-[34px]">
                Соль жизни
              </span>
              <span className="hidden h-px w-24 bg-[#5D001F]/38 transition-all duration-300 group-hover:w-full sm:block" />
            </a>

            <nav className="hero-menu hidden items-center gap-9 text-[14px] font-medium text-[#494949] lg:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hero-nav-link group grid gap-1.5 transition-colors duration-300 hover:text-[#5D001F]"
                >
                  <span>{item}</span>
                  <span className="h-px w-0 bg-[#5D001F]/55 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <a
              href="#final-cta"
              className="hero-cta group justify-self-end rounded-[8px] bg-[#5D001F] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(93,0,31,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#4b0019] sm:px-6"
            >
              <span className="flex items-center gap-3">
                Записаться
                <span className="h-px w-5 bg-white/70 transition-all duration-300 group-hover:w-8" />
              </span>
            </a>
          </header>

          <div className="relative py-8 lg:h-[calc(100vh-112px)] lg:min-h-[640px] lg:max-h-[760px] lg:py-0">
            <div className="relative z-30 max-w-[760px] pt-14 lg:pt-16">
              <p className="hero-kicker mb-6 max-w-[300px] text-[11px] font-semibold uppercase leading-5 tracking-[0.34em] text-[#5D001F] lg:mb-8">
                Флагманский онлайн-курс · старт 20 июля
              </p>

              <h1 className="hero-title max-w-[1040px] text-[clamp(92px,14.9vw,214px)] font-semibold leading-[0.755] tracking-[-0.08em] text-[#5D001F]">
                Соль
                <span className="hero-title-italic relative z-40 block pl-[0.48em] font-light italic tracking-[-0.1em] lg:-mt-3">
                  жизни
                </span>
              </h1>

              <p className="hero-deck mt-5 max-w-[520px] text-[clamp(23px,2.45vw,34px)] font-medium leading-[1.07] tracking-[-0.05em] text-[#494949]">
                Фундаментальный курс о взаимоотношениях с собой, миром и
                другими людьми
              </p>
            </div>

            <div className="hero-portrait-wrap group relative z-20 mt-10 w-full max-w-[540px] lg:absolute lg:bottom-11 lg:left-[47.5%] lg:mt-0 lg:w-[29vw] lg:max-w-[430px] lg:-translate-x-1/2">
              <div className="hero-portrait relative aspect-[0.705] overflow-hidden bg-[#CCCAC2] shadow-[0_34px_80px_rgba(73,73,73,0.15)]">
                <Image
                  src="/editorial-portrait.png"
                  alt="Editorial portrait for the course"
                  fill
                  priority
                  unoptimized
                  sizes="(min-width: 1024px) 29vw, 92vw"
                  className="hero-portrait-image scale-[1.075] object-cover object-[52%_42%]"
                />
              </div>
              <div className="hero-photo-caption mt-3 flex justify-between border-b border-[#494949]/18 pb-3 text-[9px] uppercase tracking-[0.38em] text-[#494949]/54">
                <span>premium psychology</span>
                <span>online course</span>
              </div>
            </div>

            <aside className="hero-invite relative z-40 mt-10 border border-[#CCCAC2] bg-white p-6 shadow-[0_30px_70px_rgba(73,73,73,0.12)] lg:absolute lg:bottom-11 lg:right-0 lg:mt-0 lg:w-[300px]">
              <div className="mb-6 flex items-start justify-between gap-6 border-b border-[#494949]/14 pb-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5D001F]">
                  invite
                </span>
                <span className="text-right text-xs leading-5 text-[#494949]/62">
                  старт
                  <br />
                  20 июля
                </span>
              </div>

              <h2 className="text-[32px] font-semibold leading-[0.92] tracking-[-0.07em] text-[#5D001F]">
                Курс
                <br />
                «Соль жизни»
              </h2>

              <p className="mt-5 text-[12.5px] leading-[1.72] text-[#494949]/74">
                Для тех, кто устал ходить по психологам и хочет разобраться со
                своей жизнью раз и навсегда.
              </p>

              <dl className="mt-5 grid gap-2 border-y border-[#494949]/14 py-4">
                {facts.map((fact, index) => (
                  <div
                    key={fact}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <dt className="text-xs text-[#494949]/48">
                      {String(index + 1).padStart(2, "0")}
                    </dt>
                    <dd className="text-right font-medium text-[#494949]">
                      {fact}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 grid gap-3">
                <a
                  href="#for-whom"
                  className="hero-primary-button rounded-[8px] bg-[#5D001F] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#4b0019]"
                >
                  Узнать подробнее
                </a>
                <a
                  href="#journey"
                  className="hero-secondary-button rounded-[8px] border border-[#5D001F]/30 px-5 py-3 text-center text-sm font-semibold text-[#5D001F] transition hover:border-[#5D001F]"
                >
                  Смотреть программу
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] border-y border-[#494949]/14 lg:grid-cols-3">
          {notes.map((note, index) => (
            <article
              key={note}
              className="group grid gap-6 border-[#494949]/12 py-7 transition duration-500 hover:bg-white/35 lg:border-r lg:px-8 lg:last:border-r-0"
            >
              <div className="flex items-center justify-between gap-6">
                <p className="text-xs font-semibold text-[#5D001F]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span className="h-px flex-1 bg-[#CCCAC2]/75 transition duration-500 group-hover:bg-[#5D001F]/28" />
              </div>
              <h3 className="max-w-sm text-xl font-medium leading-7 tracking-[-0.035em] text-[#494949] transition duration-500 group-hover:text-[#5D001F]">
                {note}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section id="for-whom" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 border-t border-[#494949]/14 pt-8 lg:grid-cols-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5D001F]">
              Для кого
            </p>
            <h2 className="max-w-5xl text-[clamp(38px,4.7vw,68px)] font-semibold leading-[0.98] tracking-[-0.052em] text-[#5D001F] lg:col-span-2 lg:col-start-3">
              Для тех, кто хочет разобраться со своей жизнью глубже
            </h2>
          </div>

          <div className="mt-12 grid gap-px bg-[#CCCAC2] lg:grid-cols-4">
            {audience.map((item, index) => (
              <article key={item} className="min-h-[260px] bg-[#F8F5E9] p-6">
                <span className="text-sm font-semibold text-[#5D001F]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-20 max-w-[260px] text-2xl font-medium leading-[1.08] tracking-[-0.035em]">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] bg-[#5D001F] px-6 py-8 text-white sm:px-10 sm:py-11 lg:px-14 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex flex-col justify-between gap-12 border-b border-white/16 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/58">
                  Программа
                </p>
                <h2 className="mt-8 max-w-md text-[clamp(42px,5vw,76px)] font-semibold leading-[0.94] tracking-[-0.065em]">
                  Путь, который проходят участники курса
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-7 text-white/58">
                Шесть смысловых глав, которые постепенно переводят внимание от
                внешних конфликтов к внутренней опоре.
              </p>
            </div>

            <div className="grid">
              <p className="mb-8 max-w-xl text-xl font-medium leading-8 tracking-[-0.03em] text-white/82">
                Программа выстроена как последовательный маршрут: каждый этап
                раскрывает один слой отношений с собой, близкими и миром.
              </p>

              <div className="grid border-t border-white/18">
                {journey.map(([title, text], index) => (
                  <article
                    key={title}
                    className="group grid gap-5 border-b border-white/18 py-6 transition duration-500 hover:bg-white/[0.045] sm:grid-cols-[72px_0.65fr_1fr] sm:px-4"
                  >
                    <span className="text-sm font-semibold text-white/46 transition duration-500 group-hover:text-white/82">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-medium leading-none tracking-[-0.04em] transition duration-500 group-hover:translate-x-1">
                      {title}
                    </h3>
                    <p className="max-w-md text-sm leading-6 text-white/64 transition duration-500 group-hover:text-white/84">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] border-y border-[#494949]/14 py-12">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative pr-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#5D001F]">
                Автор
              </p>
              <h2 className="mt-8 max-w-xl text-[clamp(48px,6.1vw,92px)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#5D001F]">
                Екатерина Прохорцева
              </h2>
              <div className="mt-8 max-w-sm border-t border-[#494949]/14 pt-5">
                <p className="text-xl leading-8 tracking-[-0.025em]">
                  Автор курса и трансформационной методики
                </p>
              </div>
            </div>

            <div>
              <div className="grid gap-8 lg:grid-cols-[1fr_240px] lg:items-start">
                <p className="max-w-3xl text-[clamp(26px,2.65vw,40px)] font-medium leading-[1.12] tracking-[-0.048em]">
                  Екатерина соединяет психологическую практику, работу с
                  подсознательными сценариями и бережные гипнопрактики в
                  цельную методику трансформации.
                </p>
                <p className="border-l border-[#CCCAC2] pl-5 text-sm leading-7 text-[#494949]/68">
                  В основе подхода — не быстрые обещания, а последовательная
                  работа с внутренними опорами, отношениями и повторяющимися
                  сценариями.
                </p>
              </div>

              <div className="mt-11 grid border-y border-[#494949]/14 sm:grid-cols-3">
                {authorStats.map((stat, index) => (
                  <div
                    key={stat}
                    className="group border-[#494949]/12 py-6 transition duration-500 hover:bg-white/35 sm:border-r sm:px-5 sm:last:border-r-0"
                  >
                    <p className="mb-8 text-xs font-semibold text-[#5D001F]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="max-w-[220px] text-xl font-medium leading-6 tracking-[-0.03em] transition duration-500 group-hover:text-[#5D001F]">
                      {stat}
                    </p>
                  </div>
                ))}
              </div>

              <div
                id="final-cta"
                className="mt-10 grid items-center gap-7 bg-[#5D001F] p-7 text-white sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
                    Следующий шаг
                  </p>
                  <h3 className="text-[clamp(32px,3vw,46px)] font-semibold leading-none tracking-[-0.06em]">
                    Готовы начать путь к себе?
                  </h3>
                </div>
                <a
                  href="#"
                  className="rounded-[8px] bg-white px-6 py-4 text-center text-sm font-semibold text-[#5D001F] transition hover:bg-[#F8F5E9]"
                >
                  Записаться на курс
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
