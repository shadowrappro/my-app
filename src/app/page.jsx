import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <a href="/">
            <Image
              className="header-logo"
              src="/image/logo.svg"
              alt="Akademnashr logo"
              width={227}
              height={60}
              data-aos="fade-down-right"
              data-aos-duration="1000"
            />
          </a>

          <div className="header-links-wrapper">
            <nav className="header-nav">
              <ul className="header-links">
                <li
                  className="header-link"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <a href="#">Bosh Sahifa</a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <a href="#">Kitoblar</a>
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <a href="#">Aksiyalar</a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <a href="#">Kontaktlar</a>
                </li>
              </ul>
            </nav>

            <a
              className="orange-button header-button"
              data-aos="fade-down-left"
              data-aos-duration="1000"
              href="#"
            >
              Ro'yhatdan o'tish
            </a>
          </div>

          <a href="#" className="burger-menu">
            <svg
              data-aos="fade-down-left"
              data-aos-duration="1000"
              width={32}
              height={32}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 12.85H1V14.15H14V12.85ZM14 8.85H1V10.15H14V8.85ZM1 4.85H14V6.15H1V4.85ZM14 0.85H1V2.15H14V0.85Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </header>

      {/* Main */}
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="orange-line hero-line"></div>

              <h2
                className="hero-title"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Pythonda dasturlash asoslari
              </h2>

              <p
                className="hero-text"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Dasturlash asoslariga oid o'zbek tilidagi ilk eng mukammal
                qo'llanma. Kitobning har bir bo'limi uchun maxsus video darslar
                yozilgan bo'lib, ularga kitobda ko'rsatilgan QR kod orqali
                o'tish mumkin
              </p>

              <a
                className="orange-button hero-button"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="600"
                href="#"
              >
                Buyurtma berish
              </a>
            </div>

            <Image
              className="hero-img"
              src="/image/python-book.jpg"
              alt="Python book"
              width={510}
              height={510}
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>
        </section>

        {/* Why */}
        <section className="why">
          <div className="container why-container">
            <div
              className="orange-line why-line"
              data-aos="zoom-in"
              data-aos-duration="1500"
            ></div>

            <h1
              className="why-title"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              Nega aynan <br /> Akademnashr?
            </h1>

            <ul className="cards">
              {[
                { img: "cursor.svg", title: "Oson buyurtma berish" },
                { img: "stars.svg", title: "Eng sara kitoblar" },
                { img: "thunder.svg", title: "Tez yetkazib berish" },
              ].map((card, i) => (
                <li
                  key={i}
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={i * 400}
                >
                  <span className="circle">
                    <Image
                      src={`/image/${card.img}`}
                      alt={card.title}
                      width={40}
                      height={40}
                    />
                  </span>
                  <h3 className="card-title">{card.title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="cta container">
          <div className="cta-content">
            <h2
              className="cta-title"
              data-aos="flip-up"
              data-aos-duration="1500"
            >
              Bolalar kitoblari uchun ajoyib aksiya!
            </h2>

            <p data-aos="flip-up" data-aos-duration="1500" data-aos-delay="300">
              Ertaklar, she'rlar, sarguzasht asarlar va komikslar.
            </p>

            <p
              className="cta-text"
              data-aos="flip-up"
              data-aos-duration="1500"
              data-aos-delay="600"
            >
              <strong className="orange-text">50 ta kitob</strong> —
              <strong className="orange-text"> 350 ming</strong> so'm
            </p>

            <a
              className="orange-button"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-delay="900"
              href="#"
            >
              Buyurtma berish
            </a>
          </div>

          <Image
            className="cta-img"
            src="/image/sale-img.jpg"
            alt="Lots of books"
            width={500}
            height={400}
            data-aos="flip-down"
            data-aos-duration="1500"
          />
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          {/* TOP */}
          <div className="footer-top">
            {/* Logo */}
            <a href="/">
              <Image
                src="/image/logo.svg"
                alt="Akademnashr logo"
                width={227}
                height={60}
                data-aos="fade-right"
              />
            </a>

            {/* Socials */}
            <ul className="socials" data-aos="fade-left">
              <li>
                <a href="https://ilhomlandim.uz">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM17.568 8.16C17.388 10.056 16.608 14.664 16.212 16.788C16.044 17.688 15.708 17.988 15.396 18.024C14.7 18.084 14.172 17.568 13.5 17.124C12.444 16.428 11.844 15.996 10.824 15.324C9.636 14.544 10.404 14.112 11.088 13.416C11.268 13.236 14.34 10.44 14.4 10.188C14.412 10.152 14.412 10.044 14.34 9.972C14.268 9.912 14.172 9.936 14.088 9.948C13.98 9.972 12.3 11.088 9.024 13.296C8.544 13.62 8.112 13.788 7.728 13.776C7.296 13.764 6.48 13.536 5.868 13.332C5.112 13.092 4.524 12.96 4.572 12.54C4.596 12.324 4.896 12.108 5.46 11.88C8.964 10.356 11.292 9.348 12.456 8.868C15.792 7.476 16.476 7.236 16.932 7.236C17.028 7.236 17.256 7.26 17.4 7.38C17.52 7.476 17.556 7.608 17.568 7.704C17.556 7.776 17.58 7.992 17.568 8.16Z"
                      fill="#252420"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a href="/">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0Z"
                      fill="#252420"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a href="https://ilhomlandim.uz">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
                      fill="#252420"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <hr />

          {/* BOTTOM */}
          <div className="footer-bottom">
            <ul
              className="footer-links"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <li>
                <a className="footer-link" href="#">
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Kitoblar
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Aksiyalar
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Yangiliklar
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Kontaktlar
                </a>
              </li>
            </ul>

            <ul
              className="footer-links"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <li>
                <a className="footer-link" href="#">
                  Ilmiy nashrlar
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Ilmiy ommabop nashrlar
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Ma'rifiy nashrlar
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Lug'atlar
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Adabiy-badiiy nashrlar
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Abituriyentlar uchun
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Bolalar uchun
                </a>
              </li>
            </ul>

            <ul
              className="footer-links"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <li>
                <a className="footer-link" href="#">
                  Ko'p so'raladigan savollar
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Yetkazib berish haqida
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  To'lov usullari haqida
                </a>
              </li>
            </ul>

            <ul
              className="footer-links"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <li>
                <a className="footer-link" href="#">
                  Bo'sh ish o'rinlari
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Biz bilan bog'lanish
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Maxfiylik nizomi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
