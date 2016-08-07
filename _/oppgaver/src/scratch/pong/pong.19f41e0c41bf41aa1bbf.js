webpackJsonp([73,262],{1067:function(e,A,n){e.exports={frontmatter:n(448),content:n(1670)}},1670:function(e,A,n){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Pong er et av de aller første dataspillene som ble laget, og det første dataspillet som ble en kommersiell suksess. Selve spillet er en forenklet variant av tennis hvor to spillere slår en ball frem og tilbake. Hvis en av spillerne ikke klarer å returnere ballen får den andre spilleren poeng.</p> <figure><img src="+n(2305)+' alt=""/></figure> </section> <section class=activity id=oversikt-over-prosjektet> <h1 class=activity id=oversikt-over-prosjektet>Oversikt over prosjektet</h1> <p><em>Mesteparten av kodingen av Pong skal du gjøre på egen hånd. Men vi vil gi litt tips underveis. Spesielt vil vi se litt på hvordan vi kontrollerer en ballfigur mens den spretter rundt på skjermen. I resten av leksjonen vil du finne følgende:</em></p> <section class=check id=plan> <h2 class=check id=plan>Plan</h2> <ul> <li> <p>Hvordan lage en sprettende ball-figur</p> </li> <li> <p>Litt mer kontroll på hvordan ballen spretter</p> </li> <li> <p>Racketer som spillerne kan styre</p> </li> <li> <p>Poeng, lyder og slikt</p> </li> </ul> </section> </section> <section class=activity id=steg-1-en-sprettende-ball> <h1 class=activity id=steg-1-en-sprettende-ball>Steg 1: En sprettende ball</h1> <p><em>Når man lager nye programmer og spill er det alltid lurt å begynne med en enkel versjon som gjør litt av det det ferdige programmet skal gjøre. Da kan du begynne og teste at programmet virker som det skal nesten med en gang.</em></p> <p>I vår enkle versjon skal vi bare få en ball til å sprette over skjermen. Ingen spillere, ingen poeng, ingenting annet enn en sprettende ball!</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Start et nytt prosjekt. Slett kattefiguren.</p> </li> <li> <figure>Lag en ny ball-figur. Du kan enten finne en i biblioteket, eller tegne en selv.</figure> </li> <li> <p>Vi vil ha muligheten til senere enkelt å endre hastigheten til ballen. Lag derfor en ny variabel <code class=blockdata>hastighet</code> som gjelder for ball-figuren.</p> </li> <li> <p>Vår enkle kode for en sprettende ball består essensielt av to deler: Den første delen passer på at ballen starter riktig (riktig hastighet, riktig sted, riktig retning), mens den andre delen er løkken som gjør at ballen beveger seg og snur når den treffer kanten av skjermen.</p> <pre class=blocks>når jeg mottar [Ny ball v]\nsett [hastighet v] til [7]\ngå til x: (0) y: (0)\npek i retning (tilfeldig tall fra (1) til (360))\nfor alltid\n    gå (hastighet) steg\n    sprett tilbake ved kanten\nslutt\n</pre> <p>Les koden nøye mens du legger den til på ball-figuren. Pass på at du skjønner hva hver enkelt kloss gjør, fordi denne koden skal du endre selv etterhvert.</p> </li> <li> <figure>Klikk på kodeblokken din for at den skal kjøre, og for at ballen skal begynne å bevege seg. Ser det bra ut?</figure> </li> </ul> <section class=protip id=en-bedre-mate-a-starte-programmet-pa> <h3 class=protip id=en-bedre-mate-a-starte-programmet-pa>En bedre måte å starte programmet på</h3> <p>Vi har laget meldingen <code>Ny ball</code> siden vi tenker at i selve spillet vil vi at ballen begynner fra midten av skjermen etter hver gang en spiller har gjort poeng. I denne enkle versjonen kan vi sende meldingen <code>Ny ball</code> hver gang det grønne flagget klikkes, for å enklere starte spillet.</p> <ul> <li> <p>Legg denne enkle kodesnutten til på scenen:</p> <pre class=blocks>når grønt flagg klikkes\nsend melding [Ny ball v]\n</pre> </li> </ul> </section> </section> </section> <section class=activity id=steg-2-litt-mer-kontroll-pa-ballen> <h1 class=activity id=steg-2-litt-mer-kontroll-pa-ballen>Steg 2: Litt mer kontroll på ballen</h1> <p><em>Klossen <code class=blockmotion>sprett tilbake ved kanten</code> er veldig enkel å bruke, men dessverre gir den oss ikke så mye kontroll. For eksempel kan vi ikke bruke den om vi vil at ballen skal sprette andre steder enn ved kanten (for eksempel i en racket). Den er også vanskelig å bruke om vi vil at andre ting skal skje når ballen spretter, kanskje vi vil spille en lyd, endring på hastigheten eller endre litt i retningen.</em></p> <p>Vi vil bruke <code class=blocksensing>sansning</code>-klosser for å bedre kontrollere hvordan ballen spretter. Da kan vi oppdage når ballen berører andre figurer (som for eksempel racketene til spillerene), eller når den berører spesielle farger.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Legg til din egen bakgrunn hvor du bruker forskjellige farger der du vil at ballen skal sprette (vi har brukt lyseblått) og der du vil gi poeng (vi har brukt mørkeblått).</p> <figure><img src='+n(2304)+' alt=""/></figure> </li> <li> <figure>Om ballen treffer mål (mørkeblå) vil vi at den stopper, og etterhvert skal vi telle poeng. Dette kan vi gjøre ved å bytte ut</figure> <pre class=blocks>for alltid\nslutt\n</pre> <p>med</p> <pre class=blocks>gjenta til &lt;berører fargen [#0000FF]&gt;\nslutt\nsend melding [Poeng v]\n</pre> </li> <li> <p>For at ballen skal sprette når den treffer veggen (lyseblå) vil vi endre retningen på ballen selv. Igjen undersøker vi om ballen berører en spesiell farge ved å bytte ut</p> <pre class=blocks>sprett tilbake ved kanten\n</pre> <p>med for eksempel</p> <pre class=blocks>hvis &lt;berører fargen [#9999FF]&gt;\n    pek i retning ((180) - (retning))\n    trommeslag (15 v) som varer (0.01) takter\nslutt\n</pre> <p>Skjønner du hva tallet <code>180</code> gjør? Prøv å tenk på hvordan en ball spretter i en vegg, og hvordan retningen på ballen endrer seg.</p> </li> </ul> </section> </section> <section class=activity id=steg-3-racketer-til-spillerene> <h1 class=activity id=steg-3-racketer-til-spillerene>Steg 3: Racketer til spillerene</h1> <p><em>Nå som ballen spretter fint kan vi lage racketene som spillerene skal styre. Disse vil være veldig like hverandre, slik at vi kan først lage den ene racketen og deretter kopiere denne.</em></p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Tegn en ny figur. Lag for eksempel et rektangel som kan fungere som racket.</p> </li> <li> <p>Skriv kode som starter på meldingen <code>Ny ball</code>. På samme måte som for ballen skal denne bestå av to deler: Først må koden passe på at racketen starter på riktig sted. Deretter går koden inn i en løkke hvor racketen flyttes opp og ned (<code class=blockmotion>endre y</code>) når for eksempel tastene <code>W</code> og <code>S</code> trykkes.</p> </li> <li> <p>Test at du kan flytte racketen. Du vil kanskje også legge inn en begrensning slik at ikke racketen kan forsvinne ut av skjermen? Det kan du gjøre for eksempel med en test som ser omtrent slik ut:</p> <pre class=blocks>hvis &lt;&lt;tast [w v] trykket&gt; og &lt;(y-posisjon) &lt; [150]&gt;&gt;\nslutt\n</pre> </li> <li> <figure>Når du er fornøyd med hvordan denne racketen styres kan du kopiere den.</figure> </li> <li> <p>Endre litt på den nye racket-figuren. Du kan for eksempel endre fargen på den om du vil? Du må også endre litt i koden, slik at den starter på andre siden av skjermen og slik at den reagerer på andre taster, for eksempel <code>pil opp</code> og <code>pil ned</code>.</p> </li> <li> <p>Til slutt må vi legge til kode på ball-figuren slik at ballen spretter når den berører en racket. Dette kan gjøres veldig likt hvordan vi fikk ballen til å sprette på veggen. Du må bare bruke <code class=blocksensing>berører farge</code> i stedet for <code class=blocksensing>berører</code>.</p> </li> <li> <p>Siden ballen nå treffer en vertikal racket i stedet for en horisontal vegg må vi også bytte ut tallet <code>180</code> i <code class=blockmotion>pek i retning</code>-klossen. Hvilket tall kan du bruke? Prøv deg fram, eller tenk gjennom hvordan en ball spretter når den treffer en vegg.</p> </li> <li> <p>Sjekk at spillet nå fungerer! Ballen spretter fram og tilbake mellom de to racketene. For å slippe å stadig starte spillet på nytt kan du lage litt enkel kode for ballen når den mottar meldingen <code>Poeng</code>. La denne koden spille en passende poeng-lyd til den er ferdig. Deretter kan den sende meldingen <code>Ny ball</code> igjen.</p> </li> <li> <p>Du vil kanskje oppleve at racketene beveger seg raskere og raskere for hver ny ball? Dette skjer fordi hver gang meldingen <code>Ny ball</code> blir sendt startes en ny løkke som flytter racketene. For å fikse dette kan du <code class=blockcontrol>stoppe andre skript i figuren</code> for de to racketene når meldingen <code>Poeng</code> mottas.</p> </li> </ul> </section> </section> <section class=activity id=steg-4-videreutvikling-av-spillet> <h1 class=activity id=steg-4-videreutvikling-av-spillet>Steg 4: Videreutvikling av spillet</h1> <p><em>Vi har nå laget en enkel versjon av et av de første dataspillene i historien. Men det er mange muligheter for videreutvikling av spillet.</em></p> <figure>Du står helt fritt i hvordan du vil jobbe videre med spillet ditt, men her er noen ideer som kan gjøre spillet enda morsommere å spille:</figure> <section class=check id=ideer-til-videreutvikling> <h2 class=check id=ideer-til-videreutvikling>Ideer til videreutvikling</h2> <ul> <li> <p>Legg til en poeng-teller. Dette kan du gjøre for eksempel med to variabler, en for hver spiller. Når meldingen <code>Poeng</code> mottas kan du sjekke <code>x</code>-posisjonen av ball-figuren for å finne ut hvem som skal få poeng.</p> </li> <li> <p>La hastigheten øke etterhvert som ballen går frem og tilbake. For eksempel kan du la hastigheten øke hver gang ballen berører en av de to racketene.</p> </li> <li> <p>Det kan være et problem at ballen bare går opp og ned, og ikke sidelengs (eller veldig sakte sidelengs) siden vi har satt utgangsretningen til ballen helt tilfeldig. Kan du begrense hvilke retninger ballen starter i slik at den alltid beveger seg noe sidelengs?</p> </li> <li> <p>I stedet for at ballen spretter perfekt på racketene kan du endre retning litt tilfeldig, for eksempel ved å legge til et lite tilfeldig tall (positivt eller negativt) etter at ballen har snudd i racketen.</p> </li> <li> <p>En morsommere, og mer naturlig, sprett på racketen kan du få ved å ta hensyn til hvor på racketen ballen treffer. Dette kan du gjøre for eksempel ved å sammenligne <code>y</code>-posisjonen til ballen og racketen.</p> </li> <li> <p>Hva om man kan flytte racketene sidelengs også? Ikke bare opp og ned? Det kan være lurt å begrense hvor langt racketene kan bevege seg sidelengs, for eksempel kun over halve skjermen. Da vil spillet ligne enda litt mer på tennis.</p> </li> <li> <p>Kanskje du kan videreutvikle hele konseptet, slik at det er mulig å plukke opp power-ups etterhvert som man spiller. For eksempel noe som endrer hastigheten på racketen eller ballen, eller kanskje lager litt skru på ballen. På nettet, for eksempel på <a href=http://www.ponggame.org/ >http://www.ponggame.org/</a> finnes forskjellige Pong-varianter du kan hente inspirasjon fra.</p> </li> <li> <p>Pong er morsomst når man er to spillere. Men av og til er man alene, og da hadde det vært morsomt om man kunne spilt mot datamaskinen. Klarer du å kode en av racketene slik at datamaskinen kan styre den? Det er ikke så veldig vanskelig, du kan for eksempel la datamaskinen flytte racketen sin opp eller ned ved å sammenligne <code>y</code>-posisjonen til ballen med <code>y</code>-posisjonen til racketen til datamaskinen.</p> </li> </ul> </section> </section>'},2304:function(e,A){e.exports="data:image/png;base64,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"},2305:function(e,A,n){e.exports=n.p+"_/oppgaver/src/scratch/pong/pong.bcbf5f.png"}});