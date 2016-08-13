webpackJsonp([38,262],{916:function(e,s,n){e.exports={frontmatter:n(297),content:n(1518)}},1518:function(e,s,n){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Nå skal vi lære hvordan vi kan koble en skjerm til datamaskinen. Med en ekstra skjerm kan vi bruke datamaskinen til å kommunisere med verden rundt oss. Kanskje Minecraft-verden blir fyllt med store reklamebannere?</p> <figure><img src="+n(2062)+' alt=""/></figure> </section> <section class=activity id=steg-1-koble-en-skjerm-til-datamaskinen> <h1 class=activity id=steg-1-koble-en-skjerm-til-datamaskinen>Steg 1: Koble en skjerm til datamaskinen</h1> <figure>La oss som vanlig begynne helt enkelt. La oss koble en skjerm til en datamaskin og se om vi får til å skrive noe på skjermen.</figure> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Bygg en <strong>Computer</strong>. Du kan også bruke en <strong>Advanced Computer</strong> om du foretrekker det.</p> </li> <li> <p>Bygg så en <strong>Monitor</strong> inntil datamaskinen du nettopp bygget, omtrent som på bildet.</p> <figure><img src='+n(2057)+' alt=""/></figure> </li> <li> <p>Start datamaskinen. Den enkleste måten å skrive noe til skjermen er ved hjelp av programmet <code>monitor</code>. Om du skriver <code>help monitor</code> vil du kunne lese at <code>monitor</code> kan kjøre andre programmer på en tilkoblet skjerm.</p> <p>La oss for eksempel prøve programmet <code>hello</code>. Dette er et enkelt program som vi såvidt har sett litt på tidligere. Det skriver bare teksten <em>Hello World!</em>. Kjør først programmet på datamaskinen:</p> <pre><code><span class=hljs-blockquote>&gt; hello</span>\nHello World!\n</code></pre> <p>Nå kan vi prøve å få dette til å kjøre på skjermen. Med skjermen koblet til på høyre (<em>right</em>) side av datamaskinen (som på bildet over) skriver vi bare</p> <pre><code>&gt;<span class=hljs-instruction> monitor </span>right hello\n</code></pre> <p>Du kan nå trykke <code>Esc</code> for å gå ut av datamaskinen og se på skjermen. Står det <em>Hello World!</em>?</p> <figure><img src='+n(2058)+' alt=""/></figure> </li> <li> <p>Kult! Da er vi igang med skjermene! Men - det ble jo veldig dårlig plass på den skjermen! Det er det heldigvis lett å gjøre noe med. Om du setter en <strong>Monitor</strong> ved siden av den du allerede har vil de to skjermene smelte sammen til en større skjerm. På denne måten kan du lage en stor skjerm! Prøv å kjør <code>hello</code>-programmet på den store skjermen.</p> <figure><img src='+n(2059)+' alt=""/></figure> </li> <li> <p>Trikset med <code>monitor</code> fungerer selvsagt også med programmer vi skriver selv. La oss lage et enkelt program som vi kaller <code>ku</code>:</p> <pre><code class=language-lua><span class=hljs-built_in>print</span>(<span class=hljs-string>"^__^"</span>)\n<span class=hljs-built_in>print</span>(<span class=hljs-string>"(oo)_______"</span>)\n<span class=hljs-built_in>print</span>(<span class=hljs-string>"(__)       )"</span>)\n<span class=hljs-built_in>print</span>(<span class=hljs-string>"   ||----W |"</span>)\n<span class=hljs-built_in>print</span>(<span class=hljs-string>"   ||     ||"</span>)\n</code></pre> <p>Det er ikke så farlig om din ku ikke ser ut akkurat som her. Du kan også gjerne tegne noe helt annet. Vi vil bare teste at også vårt eget program kan skrives på skjemen.</p> </li> <li> <figure>Nå kan vi kjøre programmet: <code>monitor right ku</code>.</figure> <figure><img src='+n(2060)+' alt=""/></figure> </li> </ul> </section> <section class=protip id=cowsay> <h2 class=protip id=cowsay>Cowsay</h2> <p>Denne kuen er basert på et morsomt lite program som heter <strong>Cowsay</strong>, og som ble laget av Tony Monroe på slutten av 1990-tallet. En web-variant av programmet finnes nå på <a href=http://cowsay.morecode.org/ >http://cowsay.morecode.org/</a>.</p> </section> </section> <section class=activity id=steg-2-en-annen-metode> <h1 class=activity id=steg-2-en-annen-metode>Steg 2: En annen metode</h1> <p>I stedet for at vi bruker <code>monitor</code>-programmet for å skrive til skjermen kan vi skrive direkte til skjermen i programmer vi selv lager. Dette er ganske enkelt med et bibliotek som heter <code>peripheral</code> (<em>peripheral</em> betyr i denne sammenhengen <em>tillegg</em>, altså skjermen er et tillegg til datamaskinen).</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <figure>Lag et enkelt program som heter <code>skjerm</code> og ser slik ut:</figure> <pre><code class=language-lua>skjerm = peripheral.wrap(<span class=hljs-string>"right"</span>)\nskjerm.write(<span class=hljs-string>"Heisann!"</span>)\n</code></pre> <p>Som vanlig kan du bytte ut <em>right</em> med for eksempel <em>left</em> eller <em>top</em> om du har plassert skjermen annerledes.</p> </li> <li> <p>Kjør programmet ditt ved å skrive <code>skjerm</code>. Selv uten <code>monitor</code> skal programmet skrive til skjermen ved siden av datamaskinen.</p> </li> <li> <p>I stedet for <code>peripheral.wrap</code> kan vi bruke <code>peripheral.find</code>. Da trenger vi ikke å spesifisere hvilken side av datamaskinen skjermen er på. Endre programmet ditt som følger:</p> <pre><code class=language-lua><span class=hljs-keyword>local</span> skjerm = peripheral.find(<span class=hljs-string>"monitor"</span>)     <span class=hljs-comment>-- endret linje</span>\nskjerm.write(<span class=hljs-string>"Heisann!"</span>)\n</code></pre> </li> <li> <p>Vi kan også sjekke om det er noen skjerm koblet til. Dette gjør vi enkelt i en <em>if</em>-test:</p> <pre><code class=language-lua><span class=hljs-keyword>local</span> skjerm = peripheral.find(<span class=hljs-string>"monitor"</span>)\n\n<span class=hljs-keyword>if</span> skjerm <span class=hljs-keyword>then</span>                                <span class=hljs-comment>-- ny linje</span>\n    skjerm.write(<span class=hljs-string>"Heisann!"</span>)\n<span class=hljs-keyword>else</span>                                          <span class=hljs-comment>-- ny linje</span>\n    <span class=hljs-built_in>print</span>(<span class=hljs-string>"Ingen skjerm er koblet til"</span>)       <span class=hljs-comment>-- ny linje</span>\n<span class=hljs-keyword>end</span>                                           <span class=hljs-comment>-- ny linje</span>\n</code></pre> <p>Prøv å kjør dette nye programmet. Det kan hende du vil gjøre <code>monitor right clear</code> innimellom for å tømme skjermen. Prøv også å koble fra (ødelegge) skjermen. Får du melding om at ingen skjerm er koblet til når du prøver å kjøre programmet ditt?</p> </li> </ul> </section> </section> <section class=activity id=steg-3-en-ball-faller-over-skjermen> <h1 class=activity id=steg-3-en-ball-faller-over-skjermen>Steg 3: En ball faller over skjermen</h1> <p>Vi skal nå begynne på en enkel animasjon som vi kan kjøre på skjermen.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Lag et nytt program som heter <code>sprettball</code>. Det begynner ganske likt programmet vi jobbet med tidligere, så om du vil kan du kopiere det ved å skrive <code>copy skjerm sprettball</code>. Programmet <code>sprettball</code> skal se ut som følger:</p> <pre><code class=language-lua><span class=hljs-keyword>local</span> skjerm = peripheral.find(<span class=hljs-string>"monitor"</span>)\n\n<span class=hljs-keyword>if</span> skjerm <span class=hljs-keyword>then</span>\n    skjerm.clear()\n    skjerm.write(<span class=hljs-string>"O"</span>)\n<span class=hljs-keyword>else</span>\n    <span class=hljs-built_in>print</span>(<span class=hljs-string>"Ingen skjerm er koblet til"</span>)\n<span class=hljs-keyword>end</span>\n</code></pre> <p>Dette skal tegne en ball øverst på skjermen.</p> </li> <li> <p>Vi kan nå bruke en enkel <em>for</em>-løkke til å animere ballen. Endre koden din:</p> <pre><code class=language-lua><span class=hljs-keyword>local</span> skjerm = peripheral.find(<span class=hljs-string>"monitor"</span>)\n\n<span class=hljs-keyword>if</span> skjerm <span class=hljs-keyword>then</span>\n    <span class=hljs-keyword>for</span> rad = <span class=hljs-number>1</span>, <span class=hljs-number>10</span> <span class=hljs-keyword>do</span>                        <span class=hljs-comment>-- ny linje</span>\n        skjerm.clear()\n        skjerm.setCursorPos(<span class=hljs-number>3</span>, rad)           <span class=hljs-comment>-- ny linje</span>\n        skjerm.write(<span class=hljs-string>"O"</span>)\n        sleep(<span class=hljs-number>1</span>)                              <span class=hljs-comment>-- ny linje</span>\n    <span class=hljs-keyword>end</span>                                       <span class=hljs-comment>-- ny linje</span>\n<span class=hljs-keyword>else</span>\n    <span class=hljs-built_in>print</span>(<span class=hljs-string>"Ingen skjerm er koblet til"</span>)\n<span class=hljs-keyword>end</span>\n</code></pre> <p>For at vi skal rekke å se at ballen flytter seg har vi lagt inn en <code>sleep</code>-kommando som bare venter litt (1-tallet betyr 1 sekund) mellom hver gang ballen flyttes.</p> </li> <li> <p>Dette er ikke så spennende enda, men før vi lager noe mer avansert vil vi gjøre en liten omstrukturering av koden, som gjør det enklere for oss å holde oversikten senere. Vi flytter alt som har med animering av ballen inn i en egen funksjon <code>tegnBall</code>. Flytt kodelinjene rundt slik at de blir som dette:</p> <pre><code class=language-lua><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>tegnBall</span><span class=hljs-params>(skjerm)</span></span>                     <span class=hljs-comment>-- ny linje</span>\n    <span class=hljs-keyword>for</span> rad = <span class=hljs-number>1</span>, <span class=hljs-number>10</span> <span class=hljs-keyword>do</span>                        <span class=hljs-comment>-- flyttet linje</span>\n        skjerm.clear()                        <span class=hljs-comment>-- flyttet linje</span>\n        skjerm.setCursorPos(<span class=hljs-number>3</span>, rad)           <span class=hljs-comment>-- flyttet linje</span>\n        skjerm.write(<span class=hljs-string>"O"</span>)                     <span class=hljs-comment>-- flyttet linje</span>\n        sleep(<span class=hljs-number>1</span>)                              <span class=hljs-comment>-- flyttet linje</span>\n    <span class=hljs-keyword>end</span>                                       <span class=hljs-comment>-- flyttet linje</span>\n<span class=hljs-keyword>end</span>                                           <span class=hljs-comment>-- ny linje</span>\n\nskjerm = peripheral.find(<span class=hljs-string>"monitor"</span>)\n\n<span class=hljs-keyword>if</span> skjerm <span class=hljs-keyword>then</span>\n    tegnBall(skjerm)                          <span class=hljs-comment>-- ny linje</span>\n<span class=hljs-keyword>else</span>\n    <span class=hljs-built_in>print</span>(<span class=hljs-string>"Ingen skjerm er koblet til"</span>)\n<span class=hljs-keyword>end</span>\n</code></pre> </li> </ul> </section> </section> <section class=activity id=steg-4-hvor-stor-er-skjermen> <h1 class=activity id=steg-4-hvor-stor-er-skjermen>Steg 4: Hvor stor er skjermen</h1> <p>En liten utfordring med skjermer er at de kan ha forskjellig størrelse. Hvis du for eksempel setter tre skjermer oppå hverandre slik at du får en veldig høy skjerm vil ikke ballen i <code>sprettball</code>-programmet ditt falle helt til bunnen av skjermen. Dette kan vi løse ved å bruke funksjonen <code>getSize</code>.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Funksjonen <code>getSize</code> forteller oss hvor bred og hvor høy skjermen er. Endre funksjonen <code>tegnBall</code> slik at ballen faller over hele skjermen:</p> <pre><code class=language-lua><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>tegnBall</span><span class=hljs-params>(skjerm)</span></span>\n    <span class=hljs-keyword>local</span> bredde, hoyde = skjerm.getSize()    <span class=hljs-comment>-- ny linje</span>\n    <span class=hljs-keyword>for</span> rad = <span class=hljs-number>1</span>, hoyde <span class=hljs-keyword>do</span>                     <span class=hljs-comment>-- endret linje</span>\n        skjerm.clear()\n        skjerm.setCursorPos(<span class=hljs-number>3</span>, rad)\n        skjerm.write(<span class=hljs-string>"O"</span>)\n        sleep(<span class=hljs-number>1</span>)\n    <span class=hljs-keyword>end</span>\n<span class=hljs-keyword>end</span>\n</code></pre> </li> <li> <figure>Prøv å lag skjermen høyere eller lavere. Faller ballen hele veien ned når du kjører programmet ditt?</figure> </li> <li> <figure>Klarer du å sentrere ballen, slik at den faller nedover midt på skjermen uansett hvor stor skjermen er? Prøv selv!</figure> </li> </ul> </section> </section> <section class=activity id=steg-5-sprettball> <h1 class=activity id=steg-5-sprettball>Steg 5: Sprettball</h1> <p>Nå vil vi få ballen til å oppføre seg mer som en sprettball. For å få til dette vil vi innføre noen nye variabler. Vi vil la <code>X</code> og <code>Y</code> betegne hvor ballen er, mens <code>fartX</code> og <code>fartY</code> forteller hvor fort ballen flytter på seg.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>I tillegg til de nye variablene bytter vi ut <em>for</em>-løkken med en <em>while</em>-løkke. Denne gjør at ballen skal sprette for alltid. Husk at du bruker <code>Ctrl-T</code> for å avslutte programmet.</p> <pre><code class=language-lua><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>tegnBall</span><span class=hljs-params>(skjerm)</span></span>\n    <span class=hljs-keyword>local</span> bredde, hoyde = skjerm.getSize()\n    <span class=hljs-keyword>local</span> X, Y = <span class=hljs-number>1</span>, <span class=hljs-number>2</span>                         <span class=hljs-comment>-- ny linje</span>\n    <span class=hljs-keyword>local</span> fartX, fartY = <span class=hljs-number>1</span>, <span class=hljs-number>1</span>                 <span class=hljs-comment>-- ny linje</span>\n\n    <span class=hljs-keyword>while</span> <span class=hljs-keyword>true</span> <span class=hljs-keyword>do</span>                             <span class=hljs-comment>-- endret linje</span>\n        skjerm.clear()\n        skjerm.setCursorPos(X, Y)             <span class=hljs-comment>-- endret linje</span>\n        skjerm.write(<span class=hljs-string>"O"</span>)\n        sleep(<span class=hljs-number>1</span>)\n\n        X = X + fartX                         <span class=hljs-comment>-- ny linje</span>\n        Y = Y + fartY                         <span class=hljs-comment>-- ny linje</span>\n    <span class=hljs-keyword>end</span>\n<span class=hljs-keyword>end</span>\n</code></pre> <p>Ballen vil nå bevege seg på skrå over skjermen. Ser du hvorfor?</p> </li> <li> <p>Vi vil nå la ballen sprette når den treffer kanten. Dette gjør vi ved å &quot;snu farten&quot; når vi beveger oss ut av skjermen. Legg til et par tester nederst i funksjonen din:</p> <pre><code class=language-lua><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>tegnBall</span><span class=hljs-params>(skjerm)</span></span>\n    <span class=hljs-keyword>local</span> bredde, hoyde = skjerm.getSize()\n    <span class=hljs-keyword>local</span> X, Y = <span class=hljs-number>1</span>, <span class=hljs-number>2</span>\n    <span class=hljs-keyword>local</span> fartX, fartY = <span class=hljs-number>1</span>, <span class=hljs-number>1</span>\n\n    <span class=hljs-keyword>while</span> <span class=hljs-keyword>true</span> <span class=hljs-keyword>do</span>\n        skjerm.clear()\n        skjerm.setCursorPos(X, Y)\n        skjerm.write(<span class=hljs-string>"O"</span>)\n        sleep(<span class=hljs-number>1</span>)\n\n        X = X + fartX\n        Y = Y + fartY\n\n        <span class=hljs-keyword>if</span> X &lt;= <span class=hljs-number>1</span> <span class=hljs-keyword>or</span> X &gt;= bredde <span class=hljs-keyword>then</span>         <span class=hljs-comment>-- ny linje</span>\n            fartX = -fartX                    <span class=hljs-comment>-- ny linje</span>\n        <span class=hljs-keyword>end</span>                                   <span class=hljs-comment>-- ny linje</span>\n        <span class=hljs-keyword>if</span> Y &lt;= <span class=hljs-number>1</span> <span class=hljs-keyword>or</span> Y &gt;= hoyde <span class=hljs-keyword>then</span>          <span class=hljs-comment>-- ny linje</span>\n            fartY = -fartY                    <span class=hljs-comment>-- ny linje</span>\n        <span class=hljs-keyword>end</span>                                   <span class=hljs-comment>-- ny linje</span>\n    <span class=hljs-keyword>end</span>\n<span class=hljs-keyword>end</span>\n</code></pre> <p>Spretter ballen tilbake når den treffer kanten av skjermen? Lag gjerne en ganske stor skjerm. Du kan også endre pausen mellom hver gang ballen flytter seg. For eksempel bytt ut <code>sleep(1)</code> med <code>sleep(0.1)</code>.</p> </li> <li> <p>Tilslutt kan vi lage en mer naturlig sprettball-bevegelse ved å ta med en variabel for gravitasjon. Vi kan tenke at gravitasjonen gjør at ballen faller stadig raskere ned mot bakken, altså den øker <code>fartY</code>.</p> <pre><code class=language-lua><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>tegnBall</span><span class=hljs-params>(skjerm)</span></span>\n    <span class=hljs-keyword>local</span> bredde, hoyde = skjerm.getSize()\n    <span class=hljs-keyword>local</span> X, Y = <span class=hljs-number>1</span>, <span class=hljs-number>2</span>\n    <span class=hljs-keyword>local</span> fartX, fartY = <span class=hljs-number>1</span>, <span class=hljs-number>0</span>                 <span class=hljs-comment>-- endret linje</span>\n    <span class=hljs-keyword>local</span> gravitasjon = <span class=hljs-number>0.2</span>                   <span class=hljs-comment>-- ny linje</span>\n\n    <span class=hljs-keyword>while</span> <span class=hljs-keyword>true</span> <span class=hljs-keyword>do</span>\n        skjerm.clear()\n        skjerm.setCursorPos(X, Y)\n        skjerm.write(<span class=hljs-string>"O"</span>)\n        sleep(<span class=hljs-number>0.1</span>)\n\n        fartY = fartY + gravitasjon           <span class=hljs-comment>-- ny linje</span>\n        X = X + fartX\n        Y = Y + fartY\n\n        <span class=hljs-keyword>if</span> X &lt;= <span class=hljs-number>1</span> <span class=hljs-keyword>or</span> X &gt;= bredde <span class=hljs-keyword>then</span>\n            fartX = -fartX\n        <span class=hljs-keyword>end</span>\n        <span class=hljs-keyword>if</span> Y &gt;= hoyde <span class=hljs-keyword>then</span>                    <span class=hljs-comment>-- endret linje</span>\n            fartY = -(fartY + gravitasjon)    <span class=hljs-comment>-- endret linje</span>\n        <span class=hljs-keyword>end</span>\n    <span class=hljs-keyword>end</span>\n<span class=hljs-keyword>end</span>\n</code></pre> <p>Vi endret også litt i sjekken om <code>Y</code> er slik at ballen skal sprette, siden gravitasjonen gjør at vi ikke trenger å sprette i taket lengre.</p> </li> </ul> </section> </section> <section class=activity id=steg-6-reklamebanner> <h1 class=activity id=steg-6-reklamebanner>Steg 6: Reklamebanner</h1> <p>Vi tar nå en liten pause fra sprettballen vår for å se på hvordan vi kan bruke skjermene til å lage enkle tekstplakater eller reklamebannere.</p> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <ul> <li> <p>Lag et nytt program som du kaller <code>reklame</code>. Vi begynner helt enkelt med kommandoer du allerede kjenner:</p> <pre><code class=language-lua><span class=hljs-keyword>local</span> skjerm = peripheral.find(<span class=hljs-string>"monitor"</span>)\n\n<span class=hljs-keyword>if</span> skjerm <span class=hljs-keyword>then</span>\n    skjerm.clear()\n    skjerm.setCursorPos(<span class=hljs-number>1</span>, <span class=hljs-number>1</span>)\n    skjerm.write(<span class=hljs-string>"ComputerCraft"</span>)\n<span class=hljs-keyword>else</span>\n    <span class=hljs-built_in>print</span>(<span class=hljs-string>"Ingen skjerm er koblet til"</span>)\n<span class=hljs-keyword>end</span>\n</code></pre> <p>Kjør programmet. Skriver det til skjermen som det skal?</p> </li> <li> <p>Et problem hvis dette skal være et reklamebanner er at teksten er alt for liten! Du må jo nesten gå helt fram til skjermen for å kunne lese den.</p> <p>For skjermer kan vi bruke <code>setTextScale</code> for å endre tekststørrelsen. Legg til linjen</p> <pre><code class=language-lua>skjerm.setTextScale(<span class=hljs-number>3</span>)\n</code></pre> <p>rett før linjen <code>skjerm.clear()</code>, og kjør programmet ditt på nytt. Ble teksten større?</p> <figure><img src='+n(2061)+' alt=""/></figure> <p>Tallet <code>3</code> i <code>setTextScale(3)</code> indikererer størrelsen på teksten. Her kan vi bruke tall mellom 0.5 og 5, hvor 5 gir oss den største mulige teksten. Etter at vi har brukt <code>setTextScale</code> må vi bruke <code>clear</code> før tekststørrelsen blir oppdatert.</p> </li> <li> <p>Prøv å endre verdien i <code>setTextScale</code>. Forandrer størrelsen på teksten seg? Hva skjer hvis du bruker et tall større enn 5? Eller mindre enn 0.5?</p> </li> <li> <p>Vi vil nå la programmet selv bestemme tekststørrelsen. Siden vi vil at dette skal være en reklameplakat ønsker vi at teksten skal være så stor som mulig.</p> <p>En måte å gjøre dette på er å lage en løkke hvor vi tester alle tekststørrelsene fra størst til minst, helt til vi finner en størrelse hvor all teksten får plass på skjermen.</p> <figure>Legg inn denne funksjonen øverst i <code>reklame</code>-koden:</figure> <pre><code class=language-lua><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>brukStorTekst</span><span class=hljs-params>(skjerm, tekst)</span></span>\n    <span class=hljs-keyword>local</span> lengde = #tekst\n\n    <span class=hljs-keyword>for</span> skala = <span class=hljs-number>5</span>, <span class=hljs-number>0.5</span>, -<span class=hljs-number>0.5</span> <span class=hljs-keyword>do</span>\n        skjerm.setTextScale(skala)\n        skjerm.clear()\n        bredde, hoyde = skjerm.getSize()\n        <span class=hljs-keyword>if</span> lengde &lt;= bredde <span class=hljs-keyword>then</span>\n            <span class=hljs-keyword>break</span>\n        <span class=hljs-keyword>end</span>\n    <span class=hljs-keyword>end</span>\n<span class=hljs-keyword>end</span>\n</code></pre> <figure>Skjønner du hvordan denne koden fungerer? Vi bruker noen nye triks her som du kanskje ikke har sett før.</figure> <p>Tegnet <code>#</code> brukes for å telle ting. For eksempel betyr <code>#tekst</code> rett og slett bare antall tegn i (lengden av) <code>tekst</code>. Dette må vi vite når vi senere skal sjekke om skjermen er stor nok.</p> <p>I <em>for</em>-løkken bruker vi tre tall i stedet for to som vanlig. Det siste tallet, i dette tilfellet -0.5 bestemmer hvor store steg vi tar i løkken. Siden vi her ville telle ned fra 5 til 0.5 må vi bruke et negativt steg.</p> <p>Til slutt, <code>break</code> sier at vi vil avslutte <em>for</em>-løkken før den egentlig er ferdig. Dermed avslutter vi letingen etter tekststørrelser når vi finner en som passer. Tidligere har vi brukt <code>break</code> for å for eksempel avslutte <code>skattejakt</code> når man fant skatten.</p> </li> <li> <p>Nå vil vi bruke denne funksjonen for å sette tekststørrelsen. Prøv selv om du finner ut hvor og hvordan funksjonen bør kalles! Skal noen av de opprinnelige linjene slettes? Sjekk om programmet ditt virker ved å endre størrelsen på skjermen (bygg eller ødelegg noen enkeltskjermer) og kjøre det på nytt.</p> </li> <li> <p>En ting du kanskje ser er at du må skrive teksten som skal stå på skjermen to ganger? Først for at <code>brukStorTekst</code> trenger den for å finne riktig størrelse på skjermen, og deretter for at <code>skjerm.write</code> skal skrive den til skjermen. Da er det lurt å i stedet lage en variabel. Med denne variabelen vil koden din (under funksjonen <code>brukStorTekst</code>) se omtrent slik ut:</p> <pre><code class=language-lua><span class=hljs-keyword>local</span> tekst = <span class=hljs-string>"ComputerCraft"</span>\n<span class=hljs-keyword>local</span> skjerm = peripheral.find(<span class=hljs-string>"monitor"</span>)\n\n<span class=hljs-keyword>if</span> skjerm <span class=hljs-keyword>then</span>\n    brukStorTekst(skjerm, tekst)\n    skjerm.setCursorPos(<span class=hljs-number>1</span>, <span class=hljs-number>1</span>)\n    skjerm.write(tekst)\n<span class=hljs-keyword>else</span>\n    <span class=hljs-built_in>print</span>(<span class=hljs-string>"Ingen skjerm er koblet til"</span>)\n<span class=hljs-keyword>end</span>\n</code></pre> </li> </ul> <section class=try id=prov-selv> <h3 class=try id=prov-selv>Prøv selv</h3> <p>Det er flere måter å gjøre <code>reklame</code>-programmet enda bedre på. Her er to forslag:</p> <p>Kan du midtstille teksten på skjermen? Du må da endre tallene i <code>setCursorPos</code> ut ifra lengden på teksten og størrelsen på skjermen.</p> <p>Om du endrer størrelsen på skjermen blir teksten borte. Vi kan heller få teksten til å bli skrevet i ny og riktig størrelse når skjermen blir endret. Du kan bruke <code>os.pullEvent</code> til å lytte på hendelser som heter <code>monitor_resize</code> og skrive teksten på nytt når disse skjer.</p> </section> </section> </section> <section class=activity id=steg-7-en-skikkelig-ticker> <h1 class=activity id=steg-7-en-skikkelig-ticker>Steg 7: En skikkelig ticker!</h1> <p>Dessverre er det en begrensning på hvor stor en skjerm kan være. Du kan maksimalt sette sammen 8 x 6 skjermer til en stor skjerm. Dette begrenser hvor lange tekster vi kan skrive, ihvertfall om vi vil bruke stor og godt synlig tekst.</p> <figure>Et alternativ for lengre tekster er å bruke en ticker, hvor vi animerer teksten slik at den ruller over skjermen.</figure> </section> <section class=check id=sjekkliste-7> <h1 class=check id=sjekkliste-7>Sjekkliste</h1> <ul> <li> <p>Lag et nytt program som heter <code>ticker</code>. Vi begynner programmet på en velkjent måte:</p> <pre><code class=language-lua><span class=hljs-keyword>local</span> tekst = <span class=hljs-string>"Jeg er en lang tekst. Bytt meg gjerne ut!"</span>\n<span class=hljs-keyword>local</span> skjerm = peripheral.find(<span class=hljs-string>"monitor"</span>)\n\n<span class=hljs-keyword>if</span> skjerm <span class=hljs-keyword>then</span>\n    skjerm.setTextScale(<span class=hljs-number>5</span>)\n    skjerm.clear()\n\n    skjerm.setCursorPos(<span class=hljs-number>1</span>, <span class=hljs-number>1</span>)\n    skjerm.write(tekst)\n<span class=hljs-keyword>else</span>\n    <span class=hljs-built_in>print</span>(<span class=hljs-string>"Ingen skjerm er koblet til"</span>)\n<span class=hljs-keyword>end</span>\n</code></pre> <p>Her setter vi bare størrelsen på teksten fast til <code>5</code>, siden vi vil bruke så stor tekst som mulig. Hva skjer når du kjører dette programmet?</p> </li> <li> <p>I stedet for å prøve å skrive hele teksten til skjermen vil vi nå bare skrive så mye tekst som faktisk får plass. Da bruker vi igjen <code>skjerm.getSize()</code> for å finne ut hvor stor skjermen er. Videre vil vi bruke funksjonen <code>string.sub</code> i <code>string</code>-biblioteket (<em>sub</em> betyr i denne sammenhengen <em>del</em>, den brukes til å finne deltekster).</p> <pre><code class=language-lua><span class=hljs-keyword>local</span> tekst = <span class=hljs-string>"Jeg er en lang tekst. Bytt meg gjerne ut!"</span>\n<span class=hljs-keyword>local</span> skjerm = peripheral.find(<span class=hljs-string>"monitor"</span>)\n\n<span class=hljs-keyword>if</span> skjerm <span class=hljs-keyword>then</span>\n    skjerm.setTextScale(<span class=hljs-number>5</span>)\n    skjerm.clear()\n    <span class=hljs-keyword>local</span> bredde, hoyde = skjerm.getSize()         <span class=hljs-comment>-- ny linje</span>\n\n    <span class=hljs-keyword>local</span> deltekst = <span class=hljs-built_in>string</span>.sub(tekst, <span class=hljs-number>1</span>, bredde)  <span class=hljs-comment>-- ny linje</span>\n    skjerm.setCursorPos(<span class=hljs-number>1</span>, <span class=hljs-number>1</span>)\n    skjerm.write(deltekst)                         <span class=hljs-comment>-- endret linje</span>\n<span class=hljs-keyword>else</span>\n    <span class=hljs-built_in>print</span>(<span class=hljs-string>"Ingen skjerm er koblet til"</span>)\n<span class=hljs-keyword>end</span>\n</code></pre> <p>I linjen <code>string.sub(tekst, 1, bredde)</code> sier vi at vi vil ta ut en deltekst fra <code>tekst</code> fra tegn nummer <code>1</code> til tegn nummer <code>bredde</code>. Prøv å endre på disse tallene for å se effekten, slik at du skjønner hvordan denne funksjonen virker.</p> </li> <li> <p>Vi kan nå animere teksten ved hjelp av en <em>for</em>-løkke.</p> <pre><code class=language-lua><span class=hljs-keyword>local</span> tekst = <span class=hljs-string>"Jeg er en lang tekst. Bytt meg gjerne ut!"</span>\n<span class=hljs-keyword>local</span> skjerm = peripheral.find(<span class=hljs-string>"monitor"</span>)\n\n<span class=hljs-keyword>if</span> skjerm <span class=hljs-keyword>then</span>\n    skjerm.setTextScale(<span class=hljs-number>5</span>)\n    skjerm.clear()\n    <span class=hljs-keyword>local</span> bredde, hoyde = skjerm.getSize()\n    <span class=hljs-keyword>local</span> lengde = #tekst                     <span class=hljs-comment>-- ny linje</span>\n\n    <span class=hljs-keyword>for</span> i = <span class=hljs-number>0</span>, lengde - bredde <span class=hljs-keyword>do</span>             <span class=hljs-comment>-- ny linje</span>\n        <span class=hljs-keyword>local</span> deltekst = <span class=hljs-built_in>string</span>.sub(tekst, i+<span class=hljs-number>1</span>, i+bredde)\n                                  <span class=hljs-comment>-- deltekstlinjen er endret</span>\n        skjerm.setCursorPos(<span class=hljs-number>1</span>, <span class=hljs-number>1</span>)\n        skjerm.clear()                        <span class=hljs-comment>-- ny linje</span>\n        skjerm.write(deltekst)\n    <span class=hljs-keyword>end</span>                                       <span class=hljs-comment>-- ny linje</span>\n<span class=hljs-keyword>else</span>\n    <span class=hljs-built_in>print</span>(<span class=hljs-string>"Ingen skjerm er koblet til"</span>)\n<span class=hljs-keyword>end</span>\n</code></pre> <p>Skjønner du hvordan tellevariabelen <code>i</code> virker? Enkelt sagt teller den hvor langt fra det første tegnet i teksten vi har kommet.</p> </li> <li> <p>Kjør programmet. Ser du animasjonen? Hvis du bare ser slutten av teksten på skjermen er det fordi datamaskinen animerer for raskt. Prøv å legg inn en <code>sleep</code>-kommando nederst i <em>for</em>-løkken. Ble det bedre nå?</p> </li> <li> <p>Hvis dette skal være en ticker som står og går vil vi at teksten skal rullere hele tiden, ikke bare en gang. Prøv også å lag en <code>while true do</code>-løkke rundt <em>for</em>-løkken. Gjentas animasjonen? Husk at du kan bruke <code>Ctrl-T</code> for å stoppe programmet ditt.</p> </li> <li> <p>Når animasjonen kommer til slutten av teksten, bare hopper den rett til begynnelsen igjen. Dette ser ikke så bra ut. Vi kan forbedre dette ved å legge på litt luft før og etter teksten.</p> <p>Hvor mye luft vi legger på vil ideelt sett avhenge av hvor stor skjermen er. Til dette kan vi bruke <code>string.rep</code> som kan repetere tekststrenger. For eksempel er <code>string.rep(&quot;Hei&quot;, 4)</code> det samme som <code>HeiHeiHeiHei</code>. Vi kan legge på litt luft rundt teksten før vi begynner å animere den.</p> <pre><code class=language-lua><span class=hljs-keyword>local</span> tekst = <span class=hljs-string>"Jeg er en lang tekst. Bytt meg gjerne ut!"</span>\n<span class=hljs-keyword>local</span> skjerm = peripheral.find(<span class=hljs-string>"monitor"</span>)\n\n<span class=hljs-keyword>if</span> skjerm <span class=hljs-keyword>then</span>\n    skjerm.setTextScale(<span class=hljs-number>5</span>)\n    skjerm.clear()\n    <span class=hljs-keyword>local</span> bredde, hoyde = skjerm.getSize()\n    <span class=hljs-keyword>local</span> luft = <span class=hljs-built_in>string</span>.rep(<span class=hljs-string>" "</span>, bredde)      <span class=hljs-comment>-- ny linje</span>\n    tekst = luft .. tekst .. luft             <span class=hljs-comment>-- ny linje</span>\n\n    <span class=hljs-keyword>local</span> lengde = #tekst\n    <span class=hljs-keyword>while</span> <span class=hljs-keyword>true</span> <span class=hljs-keyword>do</span>\n        <span class=hljs-keyword>for</span> i = <span class=hljs-number>0</span>, lengde - bredde <span class=hljs-keyword>do</span>\n            <span class=hljs-keyword>local</span> deltekst = <span class=hljs-built_in>string</span>.sub(tekst, i+<span class=hljs-number>1</span>, i+bredde)\n            skjerm.setCursorPos(<span class=hljs-number>1</span>, <span class=hljs-number>1</span>)\n            skjerm.clear()\n            skjerm.write(deltekst)\n            sleep(<span class=hljs-number>0.2</span>)\n        <span class=hljs-keyword>end</span>\n    <span class=hljs-keyword>end</span>\n<span class=hljs-keyword>else</span>\n    <span class=hljs-built_in>print</span>(<span class=hljs-string>"Ingen skjerm er koblet til"</span>)\n<span class=hljs-keyword>end</span>\n</code></pre> <figure>Pass på at det er et mellomromstegn i <code>string.rep(&quot; &quot;, bredde)</code>.</figure> </li> </ul> </section>';
},2057:function(e,s,n){e.exports=n.p+"_/oppgaver/src/computercraft/sprettball/enkelskjerm.dc1087.png"},2058:function(e,s,n){e.exports=n.p+"_/oppgaver/src/computercraft/sprettball/helloworld_liten.64a6d8.png"},2059:function(e,s,n){e.exports=n.p+"_/oppgaver/src/computercraft/sprettball/helloworld_stor.e35fdd.png"},2060:function(e,s,n){e.exports=n.p+"_/oppgaver/src/computercraft/sprettball/ku.789816.png"},2061:function(e,s,n){e.exports=n.p+"_/oppgaver/src/computercraft/sprettball/reklame.12cb17.png"},2062:function(e,s,n){e.exports=n.p+"_/oppgaver/src/computercraft/sprettball/sprettball.8e56fa.png"}});