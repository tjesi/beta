webpackJsonp([45,262],{1108:function(e,s,n){e.exports={frontmatter:n(489),content:n(1710)}},1710:function(e,s,n){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>I denne oppgaven blir du introdusert for programmeringsspråket JavaScript. Du skal gjøre den klassiske oppgaven <em>Hei verden</em>, med en katt.</p> <figure><img src="+n(2379)+' alt=""/></figure> </section> <section class=activity id=steg-1-bruke-js-bin> <h1 class=activity id=steg-1-bruke-js-bin>Steg 1: Bruke JS Bin</h1> <p>Du skal bruke en nettside som heter <em>JS Bin</em> for denne oppgaven. JS Bin er en nettside som lar deg programmere JavaScript. Vi kunne også brukt nettleseren din direkte, men i JS Bin blir stegene lik for alle, uansett om du bruker Internet Explorer, Mozilla Firefox, Chrome, Opera, Safari eller en annen nettleser. I tillegg er det med JS Bin mulig å gjøre denne oppgaven på nettbrett.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Åpne JS Bin (http://jsbin.com/?js,console) i et eget vindu.</p> </li> <li> <p>Legg merke til at du får to faner; <strong>JavaScript</strong> og <strong>Console</strong>.</p> </li> <li> <p>Koden skrives i <strong>JavaScript</strong>.</p> </li> <li> <p>Og i <strong>Console</strong> vises tekstbeskjeder som blir skrevet ut.</p> </li> <li> <p>Skriv inn denne koden i fanen <strong>JavaScript</strong>:</p> <pre><code class=language-js><span class=hljs-built_in>console</span>.log(<span class=hljs-string>"hei verden"</span>);\n</code></pre> </li> <li> <p>Trykk <strong>Ctrl</strong> + <strong>Enter</strong> (eller bruk knappen <button>Run</button>) og se hva som skjer i <strong>Console</strong>.</p> </li> <li> <p>Kan du endre koden til å skrive ditt navn?</p> </li> </ul> </section> <section class=tip id=forklaring> <h2 class=tip id=forklaring>Forklaring</h2> <p>Her er en forklaring til koden over:</p> <ul> <li><code>console.log()</code> betyr at vi ønsker å kjøre kommandoen med navnet <code>console.log</code>.</li> <li><code>.log</code> er en av flere utskriftsmetoder. Prøv <code>console.error</code>, ser du hva forskjellen til <code>console.log</code> er?</li> <li>Tekst skrives mellom <code>&quot;</code>, slik som <code>&quot;hei verden&quot;</code>.</li> <li><code>;</code> betyr at kodesetningen er ferdig.</li> </ul> </section> </section> <section class=activity id=steg-2-lage-en-funksjon> <h1 class=activity id=steg-2-lage-en-funksjon>Steg 2: Lage en funksjon</h1> <p>En funksjon er nesten som en oppskrift. Funksjoner brukes når man ønsker å gjenbruke kode flere ganger eller bryte opp et problem til mindre biter. En funksjon kan både ta i mot og returnere data. Din funksjon skal hete <code>hei</code>, ta i mot et <code>navn</code> og skrive navnet til konsollen.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Slett koden din fra steg 1.</p> </li> <li> <p>Skriv inn denne koden:</p> <pre><code class=language-js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>hei</span>(<span class=hljs-params>navn</span>) </span>{\n  <span class=hljs-built_in>console</span>.log(navn);\n}\n</code></pre> </li> <li> <p><code>function hei</code> betyr at funksjonen skal hete <code>hei</code>.</p> </li> <li> <p><code>(navn)</code> betyr at vi kan sende inn data til funksjonen.</p> </li> <li> <p><code>{</code> markerer starten til funksjonen.</p> </li> <li> <p><code>}</code> markerer slutten til funksjonen.</p> </li> <li> <p>Mellom <code>{</code> og <code>}</code> er det som funksjonen skal gjøre.</p> </li> <li> <figure>Akkurat nå gjør ikke funksjonen så mye, men la oss teste den ut. Skriv dette etter funksjonen:</figure> <pre><code class=language-js>hei(<span class=hljs-string>"Emma"</span>);\nhei(<span class=hljs-string>"Jens"</span>);\n</code></pre> </li> <li> <p><code>hei(&quot;Emma&quot;)</code> betyr at vi skal kjøre funksjonen og sende inn <code>&quot;Emma&quot;</code>.</p> </li> <li> <p>Trykk <strong>Ctrl</strong> + <strong>Enter</strong> for å kjøre koden.</p> </li> <li> <p>Ser du både <code>&quot;Emma&quot;</code> og <code>&quot;Jens&quot;</code> i konsollen?</p> </li> </ul> </section> <section class=tip id=tips> <h2 class=tip id=tips>Tips</h2> <p>Du kan slette historien i <strong>Console</strong> ved å trykke på knappen <button>Clear</button>, eller legge inn <code>console.clear();</code> i koden din.</p> </section> </section> <section class=activity id=steg-3-hei-navn> <h1 class=activity id=steg-3-hei-navn>Steg 3: Hei navn!</h1> <p>I steg 2 gjorde vi ikke noe annet enn det som <code>console.log</code> gjør. Nå skal du få <code>hei(&quot;Emma&quot;)</code> til å skrive ut <code>&quot;Hei Emma!&quot;</code>.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <figure>I JavaScript kan vi legge sammen tekst med <code>+</code>.</figure> </li> <li> <figure>Endre <code>hei</code>:</figure> <pre><code class=language-js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>hei</span>(<span class=hljs-params>navn</span>) </span>{\n  <span class=hljs-built_in>console</span>.log(<span class=hljs-string>"Hei "</span> + navn + <span class=hljs-string>"!"</span>);\n}\n</code></pre> </li> <li> <p>Her har vi lagt sammen <code>&quot;Hei &quot;</code>, navnet som sendes inn og <code>&quot;!&quot;</code>.</p> </li> <li> <p>Kjør koden din.</p> </li> <li> <p>Står det <code>&quot;Hei Emma!&quot;</code> og <code>&quot;Hei Jens!&quot;</code> i <strong>Console</strong>?</p> </li> <li> <p>Kan du endre koden slik at den skriver ut navnet ditt?</p> </li> </ul> </section> </section> <section class=activity id=steg-4-katten-sier-hei> <h1 class=activity id=steg-4-katten-sier-hei>Steg 4: Katten sier hei</h1> <p>I dette siste steget skal du lage en katt som sier hei.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <figure>Bytt ut <code>function hei</code> ved å kopiere koden under:</figure> <pre><code class=language-js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>hei</span>(<span class=hljs-params>navn</span>) </span>{\n  <span class=hljs-built_in>console</span>.log(<span class=hljs-string>"&lt; Mjau, "</span> + navn + <span class=hljs-string>"! &gt;                 "</span>);\n  <span class=hljs-built_in>console</span>.log(<span class=hljs-string>"    \\\\                           "</span>);\n  <span class=hljs-built_in>console</span>.log(<span class=hljs-string>"      /\\\\___/\\\\                   "</span>);\n  <span class=hljs-built_in>console</span>.log(<span class=hljs-string>"     (  o o  )                  "</span>);\n  <span class=hljs-built_in>console</span>.log(<span class=hljs-string>"      \\\\ =0= /                   "</span>);\n}\n</code></pre> </li> <li> <figure>Kjør <code>hei</code> med ditt eget navn.</figure> </li> <li> <p>Er det en katt som sier mjau til deg i konsollen?</p> </li> <li> <p>Klarer du lage en hund eller et annet dyr?</p> </li> </ul> </section> <section class=tip id=bakoverstrek> <h2 class=tip id=bakoverstrek>Bakoverstrek</h2> <p><code>\\</code> brukes til spesielle bokstaver. <code>\\n</code> for eksempel betyr <em>ny linje</em>. Derfor må du skrive <code>\\\\</code> dersom du ønsker en vanlig bakoverstrek.</p> </section> <section class=save id=steg-5-dele-prosjektet> <h2 class=save id=steg-5-dele-prosjektet>Steg 5: Dele prosjektet</h2> <figure>Kanskje hadde det vært kult å sende en kattehilsen til noen av dine beste venner? La oss lage en personlig hilsen til hver av de.</figure> </section> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <figure>Sørg for at du kjører <code>hei</code> med navnet til din venn:</figure> <pre><code class=language-js>hei(<span class=hljs-string>"Navnet til din venn"</span>);\n</code></pre> </li> <li> <p>Hold inne <strong>Ctrl</strong> + <strong>s</strong> for å lagre.</p> </li> <li> <figure>Legg merke til at du nå fikk et tall i adressen. Tallet er versjonen til programmet ditt.</figure> <p><strong>Versjon 9:</strong> <img height=25 src='+n(2381)+' title="Versjon 9"></p> <p>Hver gang du endrer programmet og trykker <strong>Ctrl</strong> + <strong>s</strong> får programmet en ny versjon. Slik kan du lagre flere varianter av samme program, med forskjellige navn.</p> </li> <li> <p>Trykk på <strong>JavaScript</strong> slik at kodefanen skjules:</p> <img height=35 src='+n(2378)+"> </li> <li> <p>Trykk på <button>Run</button> og sjekk at det ser riktig ut.</p> </li> <li> <p>Kopier nettaddressen og del med vennen din!</p> </li> <li> <p>Gjenta stegene for flere av vennene dine.</p> </li> <li> <figure>Hvis du senere ønsker å åpne prosjektet, kan du ta vare på en av lenkene du sendte til vennene dine.</figure> </li> </ul> </section> <section class=save id=steg-6-lagre-prosjektet-pa-datamaskinen-din> <h2 class=save id=steg-6-lagre-prosjektet-pa-datamaskinen-din>Steg 6: Lagre prosjektet på datamaskinen din</h2> <p>Det er også mulig å laste ned prosjektet og lagre det på datamaskinen. La oss gjøre det.</p> </section> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <ul> <li> <p>Trykk på <strong>File</strong> &gt; <strong>Download</strong>.</p> </li> <li> <figure>En <code>.html</code>-fil lastes ned.</figure> </li> <li> <p>Når filen er lastet ned, åpne filen.</p> </li> <li> <p>Du får et tomt vindu opp, utskriften av katten blir sendt til konsoll. La oss åpne konsollen i din nettleser.</p> </li> <li> <p><strong>Chrome og Firefox:</strong> Trykk på knappen <strong>F12</strong>. Velg <strong>Console</strong>.</p> </li> <li> <p><strong>Internet Explorer og Microsoft Edge:</strong> Trykk på knappen <strong>F12</strong>. Velg <strong>Konsoll</strong>.</p> </li> <li> <p>I konsollen skal du se katten mjaue til deg.</p> <figure><img src="+n(2380)+' alt=""/></figure> <p>Hvis du ikke ser katten, gjør neste steg.</p> </li> <li> <p>Skriv inn <code>hei(&quot;Ditt navn&quot;);</code> og trykk <strong>Enter</strong>.</p> </li> <li> <p>Hva skjer?</p> </li> </ul> </section> </section>'},2378:function(e,s,n){e.exports=n.p+"_/oppgaver/src/web/hei_js/faner.baf89d.png"},2379:function(e,s,n){e.exports=n.p+"_/oppgaver/src/web/hei_js/jsbin.d6918e.png"},2380:function(e,s,n){e.exports=n.p+"_/oppgaver/src/web/hei_js/konsoll.b3b6bf.png"},2381:function(e,s,n){e.exports=n.p+"_/oppgaver/src/web/hei_js/versjon.ecbf69.png"}});