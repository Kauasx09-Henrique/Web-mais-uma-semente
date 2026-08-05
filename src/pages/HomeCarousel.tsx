import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

import './styles/homecarousel.css';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop',
        tag: 'Psicoterapia',
        title: 'Cultive o seu bem-estar emocional',
        subtitle: 'Um espaço de escuta para você se conhecer e crescer com mais equilíbrio.',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop',
        tag: 'Psicanálise',
        title: 'Escuta que transforma',
        subtitle: 'Uma abordagem psicanalítica para compreender suas questões mais profundas.',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2000&auto=format&fit=crop',
        tag: 'Adolescentes e adultos',
        title: 'Cuidado em cada fase da vida',
        subtitle: 'Atendimento presencial em Brasília e online para todo o Brasil.',
    }
];

export function HomeCarousel() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [active, setActive] = useState(0);

    const total = slides.length;
    const pad = (n: number) => String(n + 1).padStart(2, '0');

    return (
        <section id="inicio" className="hero-section">
            <div className="hero-brandmark">Psicoterapia · Psicanálise</div>

            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1400}
                autoplay={{ delay: 6500, disableOnInteraction: false }}
                loop={true}
                onSwiper={(s) => (swiperRef.current = s)}
                onSlideChange={(s) => setActive(s.realIndex)}
                className="mySwiper"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide-bg" style={{ backgroundImage: `url(${slide.image})` }}></div>
                        <div className="slide-grain"></div>
                        <div className="slide-overlay">
                            <div className="slide-content">
                                <span className="slide-tag">
                                    <i>{pad(i)}</i>
                                    {slide.tag}
                                </span>
                                <h1 className="slide-title">{slide.title}</h1>
                                <p className="slide-subtitle">{slide.subtitle}</p>
                                <button className="btn-cta">
                                    <span>Começar minha jornada</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="hero-footer">
                <div className="hero-counter">
                    <span className="hero-counter-current">{pad(active)}</span>
                    <span className="hero-counter-bar"><i style={{ width: `${((active + 1) / total) * 100}%` }}></i></span>
                    <span className="hero-counter-total">{pad(total - 1)}</span>
                </div>

                <div className="hero-dots">
                    {slides.map((s, i) => (
                        <button
                            key={s.id}
                            className={`hero-dot ${i === active ? 'is-active' : ''}`}
                            onClick={() => swiperRef.current?.slideToLoop(i)}
                            aria-label={`Ir para slide ${i + 1}`}
                        ></button>
                    ))}
                </div>

                <div className="hero-scroll-cue">
                    <span className="hero-scroll-line"></span>
                    <span>Role</span>
                </div>
            </div>
        </section>
    );
}
