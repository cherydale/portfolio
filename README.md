* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #070b14;
    color: #ffffff;
    line-height: 1.6;
}


/* =========================
   NAVIGATION
========================= */

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

.navbar {
    width: 100%;
    padding: 20px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(7, 11, 20, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #1c2638;
}

.logo {
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
}

.logo span {
    color: #00e5ff;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 25px;
}

.nav-links a {
    color: #c8d1df;
    text-decoration: none;
    font-size: 14px;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #00e5ff;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;
    padding: 150px 8% 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;

    background:
        radial-gradient(
            circle at 20% 30%,
            #123150 0%,
            #070b14 45%
        );
}

.hero-text {
    max-width: 750px;
}

.small-title {
    color: #00e5ff;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(45px, 7vw, 75px);
    line-height: 1.1;
    margin-bottom: 20px;
}

.hero h1 span {
    color: #00e5ff;
}

.hero h2 {
    color: #b8c4d5;
    font-size: 24px;
    margin-bottom: 25px;
}

.intro {
    color: #aeb9ca;
    font-size: 18px;
    max-width: 700px;
    margin-bottom: 35px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.button {
    display: inline-block;
    padding: 13px 25px;
    background: #00e5ff;
    color: #061018;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

.button:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 25px #00e5ff;
}

.button.secondary {
    background: transparent;
    color: #00e5ff;
    border: 1px solid #00e5ff;
}


/* PROFILE CARD */

.hero-card {
    min-width: 300px;
    padding: 40px;
    text-align: center;
    background: rgba(17, 24, 39, 0.85);
    border: 1px solid #26364d;
    border-radius: 25px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.profile-circle {
    width: 130px;
    height: 130px;
    margin: auto;
    margin-bottom: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: #00e5ff;
    color: #061018;

    font-size: 42px;
    font-weight: bold;
}

.hero-card h3 {
    font-size: 24px;
    margin-bottom: 8px;
}

.hero-card p {
    color: #9daabd;
}

.status {
    margin-top: 25px;
    color: #aeb9ca;
    font-size: 14px;
}

.status span {
    display: inline-block;
    width: 9px;
    height: 9px;
    background: #00e5ff;
    border-radius: 50%;
    margin-right: 6px;
}


/* =========================
   SECTIONS
========================= */

.section {
    padding: 110px 8%;
}

.dark-section {
    background: #0b111d;
}

.section-heading {
    text-align: center;
    margin-bottom: 60px;
}

.section-heading p {
    color: #00e5ff;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 10px;
}

.section-heading h2 {
    font-size: 42px;
}

.section-heading h2 span {
    color: #00e5ff;
}


/* =========================
   ABOUT
========================= */

.about-grid {
    max-width: 1100px;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.info-card {
    padding: 35px;
    background: #111827;
    border: 1px solid #202d41;
    border-radius: 20px;
    transition: 0.3s;
}

.info-card:hover {
    transform: translateY(-8px);
    border-color: #00e5ff;
}

.card-icon {
    font-size: 40px;
    margin-bottom: 20px;
}

.info-card h3 {
    color: #00e5ff;
    margin-bottom: 15px;
}

.info-card p {
    color: #aeb9ca;
}


/* =========================
   EDUCATION
========================= */

.education-card {
    max-width: 900px;
    margin: auto;

    display: flex;
    align-items: center;
    gap: 30px;

    padding: 40px;

    background: #111827;
    border: 1px solid #202d41;
    border-radius: 22px;
}

.education-icon {
    font-size: 60px;
}

.education-card h3 {
    font-size: 27px;
    margin-bottom: 5px;
}

.education-grade {
    color: #00e5ff;
    font-weight: bold;
    margin-bottom: 15px;
}

.education-card p {
    color: #aeb9ca;
}


/* =========================
   SKILLS
========================= */

.skills-grid {
    max-width: 1100px;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.skill-card {
    padding: 35px;
    background: #111827;
    border: 1px solid #202d41;
    border-radius: 20px;
    transition: 0.3s;
}

.skill-card:hover {
    transform: translateY(-7px);
    border-color: #00e5ff;
}

.skill-icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.skill-card h3 {
    color: #00e5ff;
    margin-bottom: 10px;
}

.skill-card p {
    color: #aeb9ca;
    margin-bottom: 20px;
}

.progress {
    height: 7px;
    background: #202b3d;
    border-radius: 10px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background: #00e5ff;
    border-radius: 10px;
}

.python {
    width: 55%;
}

.html {
    width: 70%;
}

.css {
    width: 60%;
}

.cyber {
    width: 35%;
}


/* =========================
   ACHIEVEMENTS
========================= */

.achievement-container {
    max-width: 900px;
    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 20px;
}

.achievement-card {
    display: flex;
    align-items: flex-start;
    gap: 25px;

    padding: 30px;

    background: #111827;
    border: 1px solid #202d41;
    border-radius: 20px;

    transition: 0.3s;
}

.achievement-card:hover {
    border-color: #00e5ff;
    transform: translateX(5px);
}

.achievement-number {
    min-width: 55px;
    height: 55px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 15px;

    background: #00e5ff;
    color: #061018;

    font-weight: bold;
}

.achievement-card h3 {
    margin-bottom: 8px;
    color: #00e5ff;
}

.achievement-card p {
    color: #aeb9ca;
}


/* =========================
   GOALS
========================= */

.goals-section {
    background:
        radial-gradient(
            circle at center,
            #102942,
            #070b14 65%
        );
}

.goal-box {
    max-width: 1000px;
    margin: auto;

    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 40px;

    padding: 50px;

    background: #111827;
    border: 1px solid #26364d;
    border-radius: 25px;
}

.goal-main {
    text-align: center;
}

.lock-icon {
    font-size: 60px;
    margin-bottom: 20px;
}

.goal-main h3 {
    color: #00e5ff;
    font-size: 27px;
    margin-bottom: 15px;
}

.goal-main p {
    color: #aeb9ca;
}

.goal-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
}

.goal-list div {
    color: #c4cedd;
    padding: 12px 15px;
    background: #0b111d;
    border-radius: 10px;
}

.goal-list span {
    color: #00e5ff;
    font-weight: bold;
    margin-right: 8px;
}


/* =========================
   CONTACT
========================= */

.contact {
    padding: 90px 8%;
    text-align: center;
    background: #0b111d;
}

.contact h2 {
    font-size: 35px;
    margin-bottom: 15px;
}

.contact p {
    color: #aeb9ca;
    margin-bottom: 30px;
}


/* =========================
   FOOTER
========================= */

footer {
    text-align: center;
    padding: 30px;
    background: #050810;
    color: #7f8b9e;
    border-top: 1px solid #1b2638;
}

footer p:first-child {
    margin-bottom: 5px;
}

footer span {
    color: #00e5ff;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 950px) {

    .nav-links {
        gap: 12px;
    }

    .nav-links a {
        font-size: 12px;
    }

    .hero {
        flex-direction: column;
        text-align: center;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-card {
        width: 100%;
        max-width: 400px;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .goal-box {
        grid-template-columns: 1fr;
    }
}


@media (max-width: 650px) {

    .navbar {
        flex-direction: column;
        gap: 15px;
    }

    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero {
        padding-top: 180px;
    }

    .hero h1 {
        font-size: 45px;
    }

    .hero h2 {
        font-size: 19px;
    }

    .section {
        padding: 80px 6%;
    }

    .section-heading h2 {
        font-size: 34px;
    }

    .education-card {
        flex-direction: column;
        text-align: center;
    }

    .goal-box {
        padding: 30px 20px;
    }

    .achievement-card {
        flex-direction: column;
    }
}
