import styles from "./gdpr.module.css";

export const metadata = {
  title: "Podmienky ochrany osobných údajov | Angličtina WELSAN",
  description:
    "Informácie o spracúvaní osobných údajov spoločnosťou Angličtina WELSAN s.r.o.",
};

export default function GDPRPage() {
  return (
    <main className={styles.container}>
      <article className={styles.card}>
        <p className={styles.label}>GDPR</p>
        <h1>Podmienky ochrany osobných údajov</h1>
        <p className={styles.updated}>Posledná aktualizácia: 4. júla 2026</p>

        <section>
          <h2>1. Prevádzkovateľ osobných údajov</h2>
          <p>
            Prevádzkovateľom osobných údajov podľa článku 4 ods. 7 Nariadenia
            Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR) je:
          </p>

          <p>
            <strong>Angličtina WELSAN s.r.o.</strong>
            <br />
            Maxima Gorkého 4
            <br />
            917 02 Trnava
          </p>

          <p>
            <strong>IČO:</strong> 51842769
            <br />
            <strong>E-mail:</strong>{" "}
            <a href="mailto:infowelsan@gmail.com">infowelsan@gmail.com</a>
            <br />
            <strong>Telefón:</strong> +421 948 592 508
          </p>

          <p>(ďalej len „prevádzkovateľ“)</p>
        </section>

        <section>
          <h2>2. Aké osobné údaje spracúvame</h2>
          <p>
            Prostredníctvom kontaktného formulára na webovej stránke spracúvame
            iba údaje, ktoré nám dobrovoľne poskytnete:
          </p>
          <ul>
            <li>meno,</li>
            <li>e-mailovú adresu,</li>
            <li>telefónne číslo,</li>
            <li>obsah Vašej správy.</li>
          </ul>
          <p>
            Tieto údaje neposkytujete automaticky – spracúvame ich iba po
            odoslaní kontaktného formulára.
          </p>
        </section>

        <section>
          <h2>3. Na aký účel údaje spracúvame</h2>
          <p>Vaše osobné údaje používame výhradne na:</p>
          <ul>
            <li>odpovedanie na Vašu správu,</li>
            <li>komunikáciu s Vami,</li>
            <li>poskytnutie informácií o našich službách,</li>
            <li>dohodnutie termínu výučby alebo inej spolupráce.</li>
          </ul>
          <p>
            Údaje nepoužívame na automatizované rozhodovanie ani profilovanie.
          </p>
        </section>

        <section>
          <h2>4. Právny základ spracúvania</h2>
          <p>Vaše osobné údaje spracúvame na základe:</p>
          <ul>
            <li>
              <strong>článku 6 ods. 1 písm. b) GDPR</strong> – vykonanie
              opatrení pred uzatvorením zmluvy na Vašu žiadosť,
            </li>
            <li>
              <strong>článku 6 ods. 1 písm. f) GDPR</strong> – oprávnený záujem
              prevádzkovateľa spočívajúci v komunikácii s návštevníkmi webovej
              stránky.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Doba uchovávania osobných údajov</h2>
          <p>
            Osobné údaje uchovávame iba počas doby potrebnej na vybavenie Vašej
            požiadavky.
          </p>
          <p>
            Ak medzi nami nevznikne ďalší zmluvný vzťah, údaje uchovávame
            najdlhšie{" "}
            <strong>12 mesiacov od poslednej vzájomnej komunikácie</strong>,
            pokiaľ právne predpisy nevyžadujú ich uchovávanie dlhšie.
          </p>
          <p>Po uplynutí tejto doby budú údaje bezpečne vymazané.</p>
        </section>

        <section>
          <h2>6. Komu môžu byť údaje sprístupnené</h2>
          <p>
            Vaše osobné údaje neposkytujeme tretím osobám na marketingové účely.
          </p>
          <p>
            Na zabezpečenie prevádzky webovej stránky a komunikácie môžu byť
            údaje sprístupnené našim zmluvným partnerom, napríklad:
          </p>
          <ul>
            <li>poskytovateľ e-mailových služieb (Google Gmail),</li>
            <li>poskytovateľ hostingu webovej stránky,</li>
            <li>
              ďalší poskytovatelia IT služieb nevyhnutných na prevádzku webu.
            </li>
          </ul>
          <p>
            Títo poskytovatelia spracúvajú údaje výlučne podľa našich pokynov a
            v súlade s GDPR.
          </p>
        </section>

        <section>
          <h2>7. Prenos údajov do tretích krajín</h2>
          <p>
            Niektorí poskytovatelia služieb, napríklad Google, môžu spracúvať
            osobné údaje mimo Európskej únie.
          </p>
          <p>
            Takéto prenosy prebiehajú v súlade s požiadavkami GDPR, najmä na
            základe rozhodnutia Európskej komisie o primeranosti ochrany alebo
            prostredníctvom štandardných zmluvných doložiek.
          </p>
        </section>

        <section>
          <h2>8. Vaše práva</h2>
          <p>V súvislosti so spracúvaním osobných údajov máte právo:</p>
          <ul>
            <li>požadovať prístup k svojim osobným údajom,</li>
            <li>požiadať o opravu nepresných alebo neaktuálnych údajov,</li>
            <li>požiadať o vymazanie osobných údajov,</li>
            <li>požiadať o obmedzenie spracúvania,</li>
            <li>namietať proti spracúvaniu osobných údajov,</li>
            <li>požiadať o prenos svojich osobných údajov,</li>
            <li>podať sťažnosť na Úrad na ochranu osobných údajov SR.</li>
          </ul>
          <p>
            Ak si želáte uplatniť niektoré zo svojich práv, kontaktujte nás na{" "}
            <a href="mailto:infowelsan@gmail.com">infowelsan@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2>9. Bezpečnosť osobných údajov</h2>
          <p>
            Prijali sme primerané technické a organizačné opatrenia na ochranu
            osobných údajov pred stratou, zneužitím, neoprávneným prístupom,
            zmenou alebo zverejnením.
          </p>
          <p>
            K osobným údajom majú prístup iba osoby, ktoré ich potrebujú na
            zabezpečenie komunikácie s klientmi.
          </p>
        </section>

        <section>
          <h2>10. Kontaktné údaje</h2>
          <p>
            <strong>Angličtina WELSAN s.r.o.</strong>
            <br />
            E-mail:{" "}
            <a href="mailto:infowelsan@gmail.com">infowelsan@gmail.com</a>
            <br />
            Telefón: +421 948 592 508
          </p>
        </section>

        <section>
          <h2>11. Záverečné ustanovenia</h2>
          <p>
            Tieto Podmienky ochrany osobných údajov sú účinné odo dňa ich
            zverejnenia na webovej stránke.
          </p>
          <p>
            Prevádzkovateľ si vyhradzuje právo tieto podmienky primerane
            aktualizovať, najmä v prípade zmien právnych predpisov alebo spôsobu
            spracúvania osobných údajov.
          </p>
        </section>
      </article>
    </main>
  );
}
