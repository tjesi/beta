webpackJsonp([179,262],{977:function(e,s,n){e.exports={frontmatter:n(358),content:n(1579)}},1579:function(e,s){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Denne oppgaven handler om <em>lister</em>, altså å samle flere ting i en og samme variabel. Ettersom lister og løkker henger tett sammen i Python, bør du se på <a href=../repetisjon/repetisjon.html#l%C3%B8kker>løkker i repetisjonsoppgaven</a> dersom du har glemt hvordan løkker fungerer.</p> </section> <section class=activity id=hvordan-lage-lister> <h1 class=activity id=hvordan-lage-lister>Hvordan lage lister?</h1> </section> <section class=protip id=\"\"> <h1 class=protip id=\"\"></h1> <p>Hver ting i en liste kalles et <em>element</em>. En liste lages ved å skrive elementer inni <code>[]</code>, med <code>,</code> mellom elementene:</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>lst = [<span class=hljs-string>'egg'</span>, <span class=hljs-string>'ham'</span>, <span class=hljs-string>'spam'</span>]\n<span class=hljs-prompt>&gt;&gt;&gt; </span>lst\n[<span class=hljs-string>'egg'</span>, <span class=hljs-string>'ham'</span>, <span class=hljs-string>'spam'</span>]\n</code></pre> <p>Vi har nå ei liste som inneholder ordene <code>'egg'</code>, <code>'ham'</code> og <code>'spam'</code>. Vanskeligere er det ikke! Vi kan også lage tomme lister:</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>lst = []\n<span class=hljs-prompt>&gt;&gt;&gt; </span>lst\n[]\n</code></pre> <p>Ei liste kan inneholde alt mulig - tall, strenger og også andre lister:</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>lst = [ <span class=hljs-number>3</span>, <span class=hljs-string>'komma'</span>, [<span class=hljs-number>1</span> , <span class=hljs-number>4</span>] ]\n<span class=hljs-prompt>&gt;&gt;&gt; </span>lst\n[<span class=hljs-number>3</span>, <span class=hljs-string>'komma'</span>, [<span class=hljs-number>1</span>, <span class=hljs-number>4</span>]]\n</code></pre> </section> <section class=activity id=legge-til-og-fjerne-elementer> <h1 class=activity id=legge-til-og-fjerne-elementer>Legge til og fjerne elementer</h1> </section> <section class=protip id=-2> <h1 class=protip id=-2></h1> <p>Hva om vi ønsker å legge til eller fjerne elementene fra lista vi vår? Da kan vi bruke de to funksjonene <code>lst.append(elm)</code> og <code>lst.remove(elm)</code>, der <code>lst</code> er lista og <code>elm</code> er elementet vi ønsker å legge til eller fjerne.</p> <p><code>lst.append(elm)</code> legger til <code>elm</code> på slutten av <code>lst</code>, slik som illustrert i eksempelet:</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>lst = []\n<span class=hljs-prompt>&gt;&gt;&gt; </span>lst.append(<span class=hljs-string>'Per'</span>)\n<span class=hljs-prompt>&gt;&gt;&gt; </span>lst\n[<span class=hljs-string>'Per'</span>]\n<span class=hljs-prompt>&gt;&gt;&gt; </span>lst.append(<span class=hljs-string>'Ada'</span>)\n<span class=hljs-prompt>&gt;&gt;&gt; </span>lst.append(<span class=hljs-string>'Kim'</span>)\n<span class=hljs-prompt>&gt;&gt;&gt; </span>lst\n[<span class=hljs-string>'Per'</span>, <span class=hljs-string>'Ada'</span>, <span class=hljs-string>'Kim'</span>]\n</code></pre> <p><code>lst.remove(elm)</code> sletter det første elementet <code>elm</code> fra <code>lst</code>. Det vil si at dersom <code>elm</code> ligger flere ganger i <code>lst</code> slettes bare det første elementet lik <code>elm</code>:</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>lst = [<span class=hljs-string>'Per'</span>, <span class=hljs-string>'Ada'</span>, <span class=hljs-string>'Kim'</span>, <span class=hljs-string>'Ada'</span>]\n<span class=hljs-prompt>&gt;&gt;&gt; </span>lst.remove(<span class=hljs-string>\"Ada\"</span>)\n<span class=hljs-prompt>&gt;&gt;&gt; </span>lst\n[<span class=hljs-string>'Per'</span>, <span class=hljs-string>'Kim'</span>, <span class=hljs-string>'Ada'</span>]\n</code></pre> </section> <section class=check id=-3> <h1 class=check id=-3></h1> <p>Vi skal nå lage et handleliste-program. Programmet skal be brukeren skrive inn matvarer, og deretter skrive ut matvarene når <code>ferdig</code> skrives inn. Programmet skal fungere slik:</p> <pre>\n>>>\nSkriv inn en gjenstand: <font color=green>ost</font>\nSkriv inn en gjenstand: <font color=green>melk</font>\nSkriv inn en gjenstand: <font color=green>brød</font>\nSkriv inn en gjenstand: <font color=green>ferdig</font>\nost\nmelk\nbrød\n</pre> <p>Dette må du gjøre:</p> <ul> <li> <p>Lag ei tom liste.</p> </li> <li> <p>Be om input.</p> </li> <li> <figure>Så lenge input ikke er lik <code>ferdig</code>, legg til det nye elementet i lista.</figure> <p><strong>Hint:</strong> Hva slags løkke kan vi bruke her?</p> </li> <li> <p>Skriv ut hvert hvert element i lista.</p> <p><strong>Hint:</strong> Hva slags løkke kan vi bruke her?</p> </li> </ul> </section> <section class=activity id=indekser> <h1 class=activity id=indekser>Indekser</h1> </section> <section class=protip id=-4> <h1 class=protip id=-4></h1> <p>Tenk deg at vi har ei liste, og ønsker å hente ut det andre elementet i lista. Hvordan skal vi klare det? Da bruker vi noe kalt <em>indeks</em>. Indeks er plassen til elementet og skrives mellom <code>[]</code> rett etter variabelen: <code>lst[index]</code>. Her er et eksempel på en liste med tall:</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>lst = [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>, <span class=hljs-number>4</span>, <span class=hljs-number>5</span>]\n<span class=hljs-prompt>&gt;&gt;&gt; </span>lst[<span class=hljs-number>1</span>]\n<span class=hljs-number>2</span>\n</code></pre> <p>Du la kanskje merke til at vi skrev <code>1</code>, men fikk ut det andre elementet i lista? Det er fordi vi begynner å telle fra <code>0</code>. Dermed har det første elementet i lista indeks <code>0</code>, og det andre har indeks <code>1</code>. Datamaskiner begynner å telle på null! Du husker kanskje at det samme skjer når vi bruker <code>range()</code>?</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>list(range(<span class=hljs-number>5</span>))\n[<span class=hljs-number>0</span>, <span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>, <span class=hljs-number>4</span>]\n</code></pre> <p>Til nå har vi brukt <code>for element in lst</code> for å gå igjennom elementene i lista, men noen ganger kan det i tillegg være praktisk å telle hvor langt vi er kommet i lista. Til dette kan vi bruke <code>enumerate()</code>, som gir oss både verdien og indeksen:</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>lst = [<span class=hljs-string>'Per'</span>, <span class=hljs-string>'Kim'</span>, <span class=hljs-string>'Ada'</span>]\n<span class=hljs-prompt>&gt;&gt;&gt; </span><span class=hljs-keyword>for</span> i, value <span class=hljs-keyword>in</span> enumerate(lst):\n        print(i, value)\n\n<span class=hljs-number>0</span> Per\n<span class=hljs-number>1</span> Kim\n<span class=hljs-number>2</span> Ada\n</code></pre> <p>I eksempelet over får <code>i</code> verdien av indeksen, og <code>value</code> får verdien av elementet. Det er nesten som ei vanlig <code>for</code>-løkke, men vi får indeksen i tillegg.</p> </section> <section class=check id=-5> <h1 class=check id=-5></h1> <figure>Modifiser nå programmet fra forrige oppgave til å skrive ut indekser ved siden gjenstandene i handlelista. Slik skal det fungere:</figure> <pre>\n>>>\nSkriv inn en gjenstand: <font color=green>ost</font>\nSkriv inn en gjenstand: <font color=green>melk</font>\nSkriv inn en gjenstand: <font color=green>brød</font>\nSkriv inn en gjenstand: <font color=green>ferdig</font>\n0 ost\n1 melk\n2 brød\n</pre> <p>Dette må du gjøre:</p> <ul> <li>Bruk programmet fra oppgaven over.</li> <li>Bruk <code>enumerate</code> til for å få indeksen til hver element.</li> <li>Skriv ut indeksen på samme linje som elementet i lista.</li> </ul> <section class=challenge id=indekstrening> <h2 class=challenge id=indekstrening>Indekstrening</h2> <figure>Vi vil nå la brukeren selv velge hvor mange gjenstander som skal skrives ut. Slik som i eksempelet:</figure> <pre>\n>>>\nSkriv inn en gjenstand: <font color=green>ost</font>\nSkriv inn en gjenstand: <font color=green>melk</font>\nSkriv inn en gjenstand: <font color=green>brød</font>\nSkriv inn en gjenstand: <font color=green>ferdig</font>\nHvor mange gjenstander vil du skrive ut? <font color=green>2</font>\n0 ost\n1 melk\n</pre> <p>Dette må du gjøre:</p> <ul> <li>Begynn med programmet du allerede har.</li> <li>Før gjenstandene skrives ut, spør om hvor mye som skal skrives ut.</li> <li>Avbryt utskriften når antallet er lik det brukeren ba om.</li> </ul> </section> </section> <section class=activity id=strenger-og-indekser> <h1 class=activity id=strenger-og-indekser>Strenger og indekser</h1> </section> <section class=protip id=-6> <h1 class=protip id=-6></h1> <p>Vi kan også bruke indekser på strenger. For eksempel:</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>s = <span class=hljs-string>\"Ada\"</span>\n<span class=hljs-prompt>&gt;&gt;&gt; </span>s[<span class=hljs-number>0</span>]\n<span class=hljs-string>'A'</span>\n</code></pre> </section> <section class=check id=-7> <h1 class=check id=-7></h1> <figure>Vi skal nå skrive et program som henter input fra brukeren og skriver ut annenhver bokstav. Det skal fungere som dette:</figure> <pre>\n>>>\nSkriv inn en setning: <font color=green>Hei på deg!</font>\nH\ni\np\n\ne\n!\n</pre> <p>Dette må du gjøre:</p> <ul> <li> <p>Hent input fra brukeren.</p> </li> <li> <p>Bruk en løkke for å hente ut hver bokstav og dens indeks.</p> </li> <li> <p>Hvis indeksen er et partall, skriv ut bokstaven.</p> <p><strong>Hint:</strong> <code>tall%2</code> er <em>resten</em> av <code>tall</code> delt på <code>2</code>, hva gir <code>tall%2</code> når <code>tall</code> er et partall?</p> </li> </ul> </section>"}});