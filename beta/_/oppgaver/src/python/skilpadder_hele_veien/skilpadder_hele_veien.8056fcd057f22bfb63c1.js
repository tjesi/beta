webpackJsonp([174,262],{987:function(s,e,n){s.exports={frontmatter:n(368),content:n(1589)}},1589:function(s,e){s.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Hent frem skilpaddene dine, åpne IDLE, det er på tide å tegne igjen.</p> </section> <section class=activity id=steg-1-tegn-et-fjell> <h1 class=activity id=steg-1-tegn-et-fjell>Steg 1: Tegn et fjell</h1> <figure>Men først, la oss se på de følgende tre figurene: Hvordan kan vi tegne dem i Python?</figure> <pre><code><span class=hljs-strong>_____</span><span class=hljs-strong>_____</span><span class=hljs-strong>_____</span><span class=hljs-strong>_____</span><span class=hljs-strong>_____</span>\n\n<span class=hljs-code>            /\\</span>\n<span class=hljs-code>           /  \\</span>\n<span class=hljs-code>          /    \\</span>\n<span class=hljs-strong>_____</span><span class=hljs-strong>____/      \\__</span><span class=hljs-strong>_____</span>_\n\n<span class=hljs-code>            /\\</span>\n<span class=hljs-code>         __/  \\__</span>\n<span class=hljs-code>         \\      /</span>\n<span class=hljs-strong>____/\\__</span><span class=hljs-emphasis>_/      \\_</span><span class=hljs-strong>__/\\__</span>_\n\n</code></pre> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Å tegne den første er lett. Som alltid er den første linjen <code>from turtle import *</code> så Python vet at vi vil tegne. Dette programmet tegner linjen, sjekk at du får det til</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>first</span><span class=hljs-params>()</span>:</span>\n    forward(<span class=hljs-number>30</span>)\n\nfirst()\n</code></pre> <p>Jeg har puttet det inn i en prosedyre fordi jeg liker prosedyrer. Vi kommer til å lage prosedyrer for alle formene, så la oss legge dem til i filen vi lager.</p> </li> <li> <p>Legg til litt kode så koden din blir slik som denne:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>first</span><span class=hljs-params>()</span>:</span>\n    forward(<span class=hljs-number>30</span>)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>second</span><span class=hljs-params>()</span>:</span>\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    right(<span class=hljs-number>120</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n\nsecond()\n</code></pre> </li> <li> <p>Kjør koden din og se hva den gjør, tegner den riktig figur? Det skal se slik ut</p> <pre><code>            /<span class=hljs-string>\\</span>\n           /  <span class=hljs-string>\\</span>\n          /    <span class=hljs-string>\\</span>\n_________/      <span class=hljs-string>\\________</span>\n</code></pre> </li> </ul> </section> </section> <section class=activity id=steg-2-et-fjell-av-fjell> <h1 class=activity id=steg-2-et-fjell-av-fjell>Steg 2: Et fjell av fjell</h1> <p>Hva med den tredje figuren? Selv om den er litt komplisert å programmere om vi må skrive alle stegene vi må ta, er det egentlig bare det første fjellet tegnet fire ganger.</p> <pre><code>            /<span class=hljs-command>\\\n</span>         __/  <span class=hljs-command>\\_</span>_\n         <span class=hljs-command>\\ </span>     /\n____/<span class=hljs-command>\\_</span>__/      <span class=hljs-command>\\_</span>__/<span class=hljs-command>\\_</span>__\n\n</code></pre> <p>Du kan se at vi tegner den andre figuren (det enkle fjellet), deretter snur vi, tegner den igjen, snur, tegner igjen, snur og tegner den en siste gang.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Istedenfor å skrive alle bevegelsene, la oss tegne den tredje figuren ved å kalle <code>second</code></p> <pre><code><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>second</span><span class=hljs-params>()</span>:</span>\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    right(<span class=hljs-number>120</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>third</span><span class=hljs-params>()</span>:</span>\n    second()\n    left(<span class=hljs-number>60</span>)\n    second()\n    right(<span class=hljs-number>120</span>)\n    second()\n    left(<span class=hljs-number>60</span>)\n    second()\n\nthird()\n</code></pre> <p><code>third</code> ser veldig lik ut som <code>second</code>, men istedenfor å kalle <code>forward</code>, kaller vi <code>second</code>. Hvis vi ville, kunne vi til og med skrive en fjerde utgave og kalle <code>third</code> istedenfor. Dette høres fort ut som mye å skrive, det må da være en måte vi kan få datamaskinen til å forstå dette på?</p> <p>Disse figurene er spesielle på den måten at vi tegner dem ved å sette sammen enklere versjon av figurene om igjen og om igjen: Den tredje er laget av den andre, og den andre er laget av den første. Det vi virkelig har lyst til er å be datamaskinen om å tegne dette igjen og igjen helt til det er ferdig.</p> </li> </ul> </section> </section> <section class=activity id=steg-3-igjen-og-igjen> <h1 class=activity id=steg-3-igjen-og-igjen>Steg 3: Igjen og igjen</h1> <figure>Vi får til dette ved å dele problemet i to: Det enkle problemet og spesialtilfellet av problemet. Det enkle problemet er enkelt: Det er bare <code>forward(100)</code>. Spesialtilfellet er litt vanskeligere, det vil si: Tegn spesialtilfellet, men en mindre enn i sted, helt til du kommer til det enkle tilfellet. Det er kanskje enklere å se på programmet enn å forklare.</figure> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Lag en ny fil med koden under:</p> <pre><code><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>mountain</span><span class=hljs-params>(depth)</span>:</span>\n    <span class=hljs-keyword>if</span> depth == <span class=hljs-number>1</span>:\n           forward(<span class=hljs-number>10</span>)\n    <span class=hljs-keyword>else</span>:\n        newdepth = depth -<span class=hljs-number>1</span>\n        mountain(newdepth)\n        left(<span class=hljs-number>60</span>)\n        mountain(newdepth)\n        right(<span class=hljs-number>120</span>)\n        mountain(newdepth)\n        left(<span class=hljs-number>60</span>)\n        mountain(newdepth)\n\nmountain(<span class=hljs-number>3</span>)\n</code></pre> <p>Du kan se at vi har brukt kode som er veldig likt <code>first</code>, <code>second</code> og <code>third</code>. Vi bruker en <code>if</code>-setning for å finne ut om vi skal tegne det enkle tilfellet eller spesialtilfellet. I det spesielle tilfellet ber vi om å tegne et fjell, akkurat slik som <code>third</code> kalte <code>second</code>, men vi ber den om å tegne en enklere hver gang, med en ny verdi for <code>depth</code>, en mindre enn det vi startet med.</p> </li> <li> <p>Kjør det og se hva som skjer. Hva skjer om du prøver <code>mountain(1)</code>, <code>mountain(2)</code>, eller <code>mountain(4)</code>?</p> </li> </ul> </section> </section> <section class=activity id=steg-4-tegn-et-snoflak-av-fjell> <h1 class=activity id=steg-4-tegn-et-snoflak-av-fjell>Steg 4: Tegn et snøflak av fjell</h1> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <figure>La oss bare legge til en siste ting til filen fra i sted, så den ser ut som under. Vi legger til en ny prosedyre <code>snowflake</code>:</figure> <pre><code class=language-python>\n<span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>mountain</span><span class=hljs-params>(depth, length)</span>:</span>\n    <span class=hljs-keyword>if</span> depth == <span class=hljs-number>1</span>:\n           forward(length)\n    <span class=hljs-keyword>else</span>:\n        newdepth = depth -<span class=hljs-number>1</span>\n        mountain(newdepth, length)\n        left(<span class=hljs-number>60</span>)\n        mountain(newdepth, length)\n        right(<span class=hljs-number>120</span>)\n        mountain(newdepth, length)\n        left(<span class=hljs-number>60</span>)\n        mountain(newdepth, length)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>snowflake</span><span class=hljs-params>(depth, length)</span>:</span>\n    mountain(depth, length)\n    right(<span class=hljs-number>120</span>)\n    mountain(depth, length)\n    right(<span class=hljs-number>120</span>)\n    mountain(depth, length)\n    right(<span class=hljs-number>120</span>)\n\nsnowflake(<span class=hljs-number>4</span>,<span class=hljs-number>5</span>)\n</code></pre> <p>Dette bildet heter Kochs snøflak. Hvis du vil kan du forsøke å endre på vinklene og se hva som skjer.</p> <p>Dette heter et fraktal, fordi de små bildene er laget av små versjoner av seg selv.</p> </li> <li> <p>Prøv å kjøre <code>snowflake(1, 50)</code>, <code>snowflake(2, 25)</code>, <code>snowflake(3, 20)</code>. Jo større dybde, jo lenger tar det å tegne, så husk å putte inn <code>speed(11)</code> så skilpadden går så fort den kan!</p> </li> </ul> </section> </section> <section class=activity id=steg-5-bokser-flere-bokser-og-enda-flere-bokser> <h1 class=activity id=steg-5-bokser-flere-bokser-og-enda-flere-bokser>Steg 5: Bokser, flere bokser, og enda flere bokser</h1> <figure>La oss se på en annen figur, en som ligner veldig på snøflaket, men med bokser istedenfor fjell.</figure> <pre><code>\n\n<span class=gherkin>___________________________\n\n        ___________\n        |<span class=hljs-string>         </span>|\n        |<span class=hljs-string>         </span>|\n        |<span class=hljs-string>         </span>|\n        |<span class=hljs-string>         </span>|\n________|<span class=hljs-string>         </span>|________\n\n             _\n        ____|<span class=hljs-string> </span>|____\n        |<span class=hljs-string>         </span>|\n       _|<span class=hljs-string>         </span>|_\n      |<span class=hljs-string>_           _</span>|\n    _   |<span class=hljs-string>         </span>|<span class=hljs-string>   _\n___</span>|<span class=hljs-string> </span>|<span class=hljs-string>__</span>|<span class=hljs-string>         </span>|<span class=hljs-string>__</span>|<span class=hljs-string> </span>|___\n\n\n</span></code></pre> <p>Akkurat som med fjellet er det et enkelt tilfelle: en rett linje, og et spesialtilfelle: Tegn en linje med en firkanthump på. Vi ser også at den tredje er akkurat som før, tegn den andre figuren noen ganger.</p> </section> <section class=check id=sjekkliste-5> <h1 class=check id=sjekkliste-5>Sjekkliste</h1> <ul> <li> <p>La oss åpne en ny fil og forsøke å tegne det andre bildet, som er det vi skal gjenta:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nforward(<span class=hljs-number>30</span>)\nleft(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>30</span>)\nright(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>30</span>)\nright(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>30</span>)\nleft(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>30</span>)\n</code></pre> </li> <li> <p>Kjør det og sjekk at du får denne figuren:</p> <pre><code>\n        ___________\n        |<span class=hljs-string>         </span>|\n        |<span class=hljs-string>         </span>|\n        |<span class=hljs-string>         </span>|\n        |<span class=hljs-string>         </span>|\n________|<span class=hljs-string>         </span>|________\n</code></pre> </li> </ul> <figure>Vi har det enkle tilellet <code>forward(100)</code>, og vi vet hvordan vi skal tegne linjen med firkanthumpen på seg, så la oss hoppe rett til tegningen!</figure> </section> <section class=activity id=steg-6-klumpete-firkanter> <h1 class=activity id=steg-6-klumpete-firkanter>Steg 6: Klumpete firkanter</h1> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <ul> <li> <p>Åpne en ny fil i IDLE og skriv inn følgende:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>box</span><span class=hljs-params>(depth, length)</span>:</span>\n    <span class=hljs-keyword>if</span> depth == <span class=hljs-number>1</span>:\n           forward(length)\n    <span class=hljs-keyword>else</span>:\n        newdepth = depth -<span class=hljs-number>1</span>\n\n        <span class=hljs-comment># Hva skal vi skrive her?</span>\n        <span class=hljs-comment># Kopier inn koden fra steg 5 hit, men</span>\n        <span class=hljs-comment># bruk box(newdepth, length) istedenfor forward(100)</span>\n        <span class=hljs-comment># Spør om hjelp om du ikke forstår helt, men prøv</span>\n        <span class=hljs-comment># deg gjerne frem først.</span>\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>xcurve</span><span class=hljs-params>(depth, length)</span>:</span>\n    box(depth, length)\n    left(<span class=hljs-number>90</span>)\n    box(depth, length)\n    left(<span class=hljs-number>90</span>)\n    box(depth, length)\n    left(<span class=hljs-number>90</span>)\n    box(depth, length)\n    left(<span class=hljs-number>90</span>)\n\nxcurve(<span class=hljs-number>4</span>,<span class=hljs-number>5</span>)\n</code></pre> </li> <li> <figure>Vi har ikke skrevet inn spesialtilfellet, det har vi tenkt å la deg gjøre. Det er ganske likt som å programmere linjen vi hadde før, det burde holde å kalle <code>box(newdepth, length)</code> for å få det til. Koden burde se veldig lik ut som fjellet og snøflaket.</figure> </li> </ul> </section> </section> <section class=activity id=steg-7-trekanter-igjen> <h1 class=activity id=steg-7-trekanter-igjen>Steg 7: Trekanter igjen</h1> <p>La oss tegne et siste fraktal, og som før har vi et enkelt tilfelle og et spesialtilfelle.</p> <p>De første tre versjonene ser ut som dette. Vi tegner et triangel, og så tegner vi det som tre trekanter sammen.</p> <pre><code><span class=hljs-code>       /\\</span>\n<span class=hljs-code>      /  \\</span>\n<span class=hljs-code>     /    \\</span>\n<span class=hljs-code>    /      \\</span>\n<span class=hljs-code>   /        \\</span>\n<span class=hljs-code>  /          \\</span>\n<span class=hljs-header> /            \\\n----------------</span>\n\n<span class=hljs-code>       /\\</span>\n<span class=hljs-code>      /  \\</span>\n<span class=hljs-code>     /    \\</span>\n<span class=hljs-code>    --------</span>\n<span class=hljs-code>   /\\      /\\</span>\n<span class=hljs-code>  /  \\    /  \\</span>\n<span class=hljs-header> /    \\  /    \\\n----------------</span>\n\n\n<span class=hljs-code>       /\\</span>\n<span class=hljs-code>      ----</span>\n<span class=hljs-code>     /\\  /\\</span>\n<span class=hljs-code>    --------</span>\n<span class=hljs-code>   /\\      /\\</span>\n<span class=hljs-code>  ----    ----</span>\n<span class=hljs-header> /\\  /\\  /\\  /\\\n----------------</span>\n</code></pre> <section class=check id=sjekkliste-7> <h2 class=check id=sjekkliste-7>Sjekkliste</h2> <ul> <li> <p>Lag en ny fil og prøv det!</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>triforce</span><span class=hljs-params>(depth, length)</span>:</span>\n\n    <span class=hljs-keyword>if</span> depth == <span class=hljs-number>0</span>:\n        pendown()\n        forward(length)\n        left(<span class=hljs-number>120</span>)\n        forward(length)\n        left(<span class=hljs-number>120</span>)\n        forward(length)\n        left(<span class=hljs-number>120</span>)\n        penup()\n    <span class=hljs-keyword>else</span>:\n        penup()\n        newlength = length/<span class=hljs-number>2</span>\n        newdepth = depth - <span class=hljs-number>1</span>\n\n        triforce(newdepth, newlength)\n        forward(newlength)\n        triforce(newdepth, newlength)\n\n        left(<span class=hljs-number>120</span>)\n        forward(newlength)\n        right(<span class=hljs-number>120</span>)\n        triforce(newdepth, newlength)\n\n        right(<span class=hljs-number>120</span>)\n        forward(newlength)\n        left(<span class=hljs-number>120</span>)\n\nspeed(<span class=hljs-number>11</span>)\npenup()\nsetpos(-<span class=hljs-number>255</span>,-<span class=hljs-number>255</span>)\ntriforce(<span class=hljs-number>7</span>, <span class=hljs-number>512</span>)\n</code></pre> <figure>Du har kanskje lagt merke til at vi bruker en ny kommando <code>setpos</code> for å flytte skilpadden til hjørnet av skjermen.</figure> </li> <li> <p>Kjør det og se hva som skjer. Vi kan se at det enkle tilfellet er bare å tegne en trekant, og at spesialtilfellet er å tegne tre små trekanter.</p> </li> <li> <p>Prøv å endre verdiene vi sender til <code>triforce()</code>, endre den siste linjen til <code>triforce(5, 300)</code>, hva gjør den?</p> </li> </ul> </section> </section> <section class=activity id=steg-8-bobler> <h1 class=activity id=steg-8-bobler>Steg 8: Bobler</h1> <section class=check id=sjekkliste-8> <h2 class=check id=sjekkliste-8>Sjekkliste</h2> <ul> <li> <p>Hvis du vil kan du tegne med sirkler istedenfor trekanter! Åpne en ny fil og skriv inn følgende kode:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>bubble</span><span class=hljs-params>(depth, length)</span>:</span>\n    <span class=hljs-keyword>if</span> depth == <span class=hljs-number>0</span>:\n        pendown()\n        circle(length/<span class=hljs-number>2</span>)\n        penup()\n    <span class=hljs-keyword>else</span>:\n        penup()\n        newlength = length/<span class=hljs-number>2</span>\n        newdepth = depth - <span class=hljs-number>1</span>\n        bubble(newdepth, newlength)\n        forward(newlength)\n        bubble(newdepth, newlength)\n        left(<span class=hljs-number>120</span>)\n        forward(newlength)\n        right(<span class=hljs-number>120</span>)\n        bubble(newdepth, newlength)\n        right(<span class=hljs-number>120</span>)\n        forward(newlength)\n        left(<span class=hljs-number>120</span>)\n\nspeed(<span class=hljs-number>11</span>)\npenup()\nsetpos(-<span class=hljs-number>255</span>,-<span class=hljs-number>255</span>)\nbubble(<span class=hljs-number>6</span>, <span class=hljs-number>512</span>)\n</code></pre> </li> <li> <figure>Hva skjer? Hva ser det ut som? Vi har brukt <code>circle</code> kommandoen for å tegne en sirkel på skjermen, som tar en radius.</figure> </li> <li> <p>Forsøk å endre sirkelens radius, bytt ut <code>circle(length/2)</code> med <code>circle(length)</code>, dette tegner en større sirkel istedenfor.</p> </li> </ul> </section> </section>"}});