webpackJsonp([7,262],{912:function(e,n,s){e.exports={frontmatter:s(293),content:s(1515)}},1515:function(e,n,s){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>En viktig del av det å lage app-er er å utforme skjerminnholdet, dvs. alt app-en inneholder av grafikk, knapper, lister, osv. Formålet til denne leksjonen er å lære hvordan du kan bruke <strong>FXML</strong> for å lage skjerminnhold, og <strong>to måter</strong> å lage slikt innhold. I tillegg skal du lære hvordan du får app-en til å last inn og vise frem innholdet i FXML-filer. App-en er ikke så komplisert, den skal bare vise frem logoene til Kodeklubben og NTNU (eller andre logoer, hvis du ønsker det):</p> <p>| Kodeklubben | NTNU | |:--------:|:---------:| | <img src="+s(2059)+" style=margin:20px;height:168px /> | <img src="+s(2065)+" style=margin:20px;height:168px /> |</p> <p>I leksjonen <a href=../helloworld/helloworld.html>Hello world</a> lærte du om hvordan du kan lage en app som viste et vindu med et tekst-objekt (av type <strong>Text</strong>). Da skrev du Java-kode som <em>laget</em> tekst-objektet, <em>satte grafiske egenskaper</em> for tekst-objektet og <em>la det til</em> app-vinduet. Slik kode kan fort bli lang og uoversiktlig, og det kan være vanskelig å skrive kode som har ønsket effekt og se for seg hvordan skjerminnholdet vil bli seende ut.</p> <p>For å gjøre arbeidet med skjerminnhold enklere, så finnes det en egen kode-type kalt <strong>FXML</strong> for å lage skjerminnhold. FXML ligner på HTML ved at det bruker XML-elementer, f.eks. <code>&lt;Text ...&gt; ... &lt;/Text&gt;</code> og attributter, f.eks. <code>fill=&quot;blue&quot;</code> for å beskrive innholdet. Når en skal lage FXML-filer, kan en enten redigere FXML som tekst i en egen FXML-editor eller bruke en egen tegne-app som leser og skriver FXML-filer. Vi skal se på begge disse teknikkene i denne leksjonen.</p> </section> <section class=activity id=steg-1-opprette-app-pakke-app-klasse-og-fxml-fil> <h1 class=activity id=steg-1-opprette-app-pakke-app-klasse-og-fxml-fil>Steg 1: Opprette app-pakke, app-klasse og FXML-fil</h1> <ul> <li> <p>Lag først en ny app-pakke og app-klasse som forklart i <a href=../helloworld/helloworld.html>Hello world-leksjonen</a>. Bruk <strong>fxmllogo</strong> som navn på pakken og <strong>FxmlLogoApp</strong> som navn på app-klassen.</p> </li> <li> <p>Høyreklikk på <strong>fxmllogo</strong>-pakken og velg <code>New &gt; Other...</code> så du får opp en liste med såkalte <em>veivisere</em> (eng: <em>wizards</em>). Vi skal bruke den som heter <strong>New FXML Document</strong>. Det enkleste er å skrive inn 'fx' i søkefeltet, for å snevre inn utvalget:</p> <figure><img src="+s(2066)+' alt="" title="New FXML document"/></figure> <figure>Trykk <code>Next</code> for å velge veiviseren. Du vil da få opp følgende skjema:</figure> <figure><img src='+s(2067)+' alt="" title="New FXML file"/></figure> <p>Fyll inn <code>FxmlLogoApp</code> og trykk <code>Finish</code>. Du vil da få opp en FXML-editor med den nye FXML-fila:</p> <figure><img src='+s(2063)+' alt="" title="Initial FxmlLogoApp.fxml"/></figure> </li> <li> <p>Denne FXML-en gir bare et tomt panel (av typen <strong>AnchorPane</strong>), så for å få noe å jobbe med, så trenger vi Rediger teksten slik at den blir som følger:</p> <pre><code class=language-xml></code></pre> </li> </ul> <anchorpane xmlns:fx=http://javafx.com/fxml/1 prefwidth=500 prefheight=400> <rectangle layoutx=100 layouty=20 width=80 height=80 fill=black arcwidth=25 archeight=25 /> <text layoutx=140 layouty=60 text=k fill=white> <font> <font name=Courier size=72 /> </font> </text> <circle layoutx=150 layouty=150 radius=40 fill=blue /> <text layoutx=10 layouty=120 text=NTNU> <font> <font name=Arial size=36 /> </font> </text> </anchorpane> ``` <p>FXML-editoren har samme type kode-komplettering som Java-editoren. Når du f.eks. har skrevet inn <code>&lt;Rect</code>, kan du trykk ctrl-mellomrom og editoren vil både fylle ut resten av <strong>Rectangle</strong>-navnet og legge til en import-setning øverst i fila (tilsvarende import-setningen i Java):</p> <p><code>&lt;?import javafx.scene.shape.Rectangle?&gt;</code></p> <p>(Hvis du ikke bruker kode-kompletteringsfunksjonen, så må du skrive inn import-setningen selv.) Tilsvarende kan du bruke kode-komplettering på attributt-navnene <strong>layoutX</strong>, <strong>layoutY</strong>, <strong>width</strong>, <strong>height</strong>, <strong>fill</strong> osv.</p> <ul> <li> <p>Mens du redigerer FXML-koden, så kan det være kjekt å se hvordan innholdet vil bli seende ut, når det lastes inn og vises frem. Eclipse har et eget panel kalt <strong>JavaFX preview</strong> som hele tiden laster inn FXML-koden du redigerer og viser frem innholdet. Dette åpnes ved å velge <code>Window &gt; Show View...</code> og så finne panelet i lista. Bruk søkefeltet for å filtrere lista (skriv \'pre\', så panelet blir enklere å finne.</p> <figure><img src='+s(2062)+' alt="" title="FXML-editor med preview-panel"/></figure> <p>Som du ser så inneholder FXML-fila allerede mange av de grafiske elementene som trengs for å lage begge logoene, men ikke alle. Din jobb blir å justere på FXML-koden, så logoene blir omtrent som vist øverst i denne leksjonen.</p> </li> </ul> <section id=litt-om-fxml> <h2 id=litt-om-fxml>Litt om FXML</h2> <p>Du har kanskje kjent igjen mange av ordene i FXML-fila fra Java-koden du skrev i <a href=../helloworld/helloworld.html>Hello world-leksjonen</a>, og det er ikke tilfeldig. Enkelt sagt så tilsvarer elementnavnene i FXML-koden (ordet etter <code>&lt;</code> og <code>&lt;/</code>), f.eks. <strong>Text</strong> og <strong>Rectangle</strong> Java-klasser, og attributtnavnene tilsvarer egenskaper, f.eks. <strong>layoutX</strong>, <strong>width</strong> og <strong>fill</strong>. Det er også noen elementnavn som tilsvarer egenskaper, f.eks. <strong>font</strong>. Når FXML-koden blir lest inn, så vil hvert element som tilsvarer en Java-klasse bli til en instans (et Java-objekt) av den klassen, og hvert attributt bli brukt til å sette en egenskap, som om en brukte tilsvarende <strong>set</strong>-metode. Følgende Java- og FXML-kode betyr omtrent det samme:</p> <pre><code class=language-java>Circle circle = <span class=hljs-keyword>new</span> Circle();\ncircle.setLayoutX(<span class=hljs-number>150</span>);\ncircle.setLayoutY(<span class=hljs-number>150</span>);\ncircle.setRadius(<span class=hljs-number>40</span>);\ncircle.setFill(Color.BLUE);\n</code></pre> <pre><code class=language-xml><span class=hljs-tag>&lt;<span class=hljs-title>Circle</span> <span class=hljs-attribute>layoutX</span>=<span class=hljs-value>"150"</span> <span class=hljs-attribute>layoutY</span>=<span class=hljs-value>"150"</span> <span class=hljs-attribute>radius</span>=<span class=hljs-value>"40"</span> <span class=hljs-attribute>fill</span>=<span class=hljs-value>"blue"</span>/&gt;</span>\n</code></pre> <p>Noen typer objekter, f.eks. paneler (typene <strong>Pane</strong>, <strong>HBox</strong>, <strong>VBox</strong> og <strong>AnchorPane</strong>), <em>inneholder</em> andre objekter. I Java-koden må en legge den ene til <strong>children</strong>-lista til den andre, mens en i FXML legger det ene elementet inni det andre:</p> <pre><code class=language-java>Pane pane = <span class=hljs-keyword>new</span> Pane();\nCircle circle = <span class=hljs-keyword>new</span> Circle();\n...\npane.getChildren().add(circle);\n</code></pre> <pre><code class=language-xml><span class=hljs-tag>&lt;<span class=hljs-title>Pane</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-title>Circle</span> <span class=hljs-attribute>layoutX</span>=<span class=hljs-value>"150"</span> <span class=hljs-attribute>layoutY</span>=<span class=hljs-value>"150"</span> <span class=hljs-attribute>radius</span>=<span class=hljs-value>"40"</span> <span class=hljs-attribute>fill</span>=<span class=hljs-value>"blue"</span>/&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-title>Pane</span>&gt;</span>\n</code></pre> </section> </section> <section class=activity id=steg-2-apne-og-redigere-fxml-fil-med-scenebuilder> <h1 class=activity id=steg-2-apne-og-redigere-fxml-fil-med-scenebuilder>Steg 2: Åpne og redigere FXML-fil med SceneBuilder</h1> <p>Det går greit å bruke FXML-editoren for enkel redigering (eller mer kompliserte ting, når en får erfaring), men det finnes et enklere alternativ, nemlig en grafisk editor kalt <strong>SceneBuilder</strong>. En kan faktisk åpne og redigere FXML-fila direkte i JavaFX Scene Builder (ofte bare kalt SceneBuilder), siden den bruker FXML som lagringsformat.</p> <ul> <li> <p>Høyreklikk på FXML-fila og velg <code>Open with SceneBuilder</code></p> <figure><img src='+s(2068)+' alt="" title="Åpne med SceneBuilder"/></figure> <p>Hvis du har installer SceneBuilder riktig, så skal du etter litt venting få opp følgende</p> <figure><img src='+s(2069)+' alt="" title="FxmlLogoApp.fxml åpnet med SceneBuilder"/></figure> <p>Som du ser så inneholder panelet i midten de samme grafiske elementene som JavaFX Preview-panelet. Her kan du imidlertid <em>redigere</em> på dem, ved å velge, dra og slippe, som i vanlige tegneprogrammer.</p> <p>Nederst til venstre ser du trestrukturen av objekter, med et panel (<strong>AnchorPane</strong>) som inneholder et rektangel (<strong>Rectangle</strong>), en sirkel (<strong>Circle</strong>) og to tekst-objekter (<strong>Text</strong>).</p> <p>Øverst til venstre ser du en kategorisert liste med elementer som kan dras og slippes inn i redigeringspanelet i midten. I figuren vises bare såkalte <strong>Containers</strong>, som inneholder andre elementer, men (hvis du scroller) lenger ned finner du bl.a. <strong>Controls</strong> (interaktive elementer) og <strong>Shapes</strong> (grafiske elementer). Prøv å finne <strong>Line</strong>-typen og dra og slipp den litt til høyre for det svarte rektangelet. Hvis du vil endre på hvordan streken ser ut, så kan du redigere ulike <em>egenskaper</em> i panelet til høyre. Prøv f.eks. å gjøre streken tykkere (<strong>Stroke Width</strong> = 10), endre fargen til grønn (<strong>Stroke</strong> = #569900) og enden til avrundet (<strong>Stroke Line Cap</strong> = <strong>ROUND</strong>). Da skal det se omtrent slik ut:</p> <figure><img src='+s(2070)+' alt="" title="FxmlLogoApp.fxml åpnet med SceneBuilder"/></figure> <p>Dette er omtrent de grafiske elementen du trenger for å lage Kodeklubben- og NTNU-logoene. Prøv å bruke redigeringsmulighetene til å få tegningen til å bli seende omtrent slik ut:</p> <figure><img src='+s(2071)+' alt="" title="Logoer redigert med SceneBuilder"/></figure> <p>Her er noen tips om nyttige redigeringsfunksjoner som du kan bruke for å få laget og redigert grafikken:</p> <ul> <li>Du kan raskt lage en kopi (duplisere) et element med <code>Edit &gt; Duplicate</code></li> <li>Du kan runde av hjørnene på et rektangel ved å endre <strong>Arc Height</strong> og <strong>Arc Width</strong></li> <li>Når du klikker på <strong>Stroke</strong>- og <strong>Fill</strong>-egenskapene, så kommer det opp et nytt vindu med mulighet til å velge farge på flere måter (se under til venstre)</li> <li>Tilsvarende kan du stille inn navn og størrelsen på font-en til tekst-objekter ved å klikke på <strong>Font</strong>-egenskapen (se under til høyre)</li> </ul> <p>| Valg av farge | Valg av font | |:-------------:|:------------:| |<img src='+s(2060)+' alt=""/>|<img src='+s(2061)+' alt=""/>|</p> <p>Spesielt fin-innstillingen av plassering og dimensjoner kan være vanskelig. Nede til høyre i SceneBuilder-vinduet finner du egenskaper med kategorien <strong>Layout</strong>, bl.a. koordinater og størrelse. Akkurat hvilke egenskaper du kan endre avhenger av hvilket grafisk element som er valgt. I figuren under ser du hva som kan endre på et rektangel.</p> <p>| Layout-egenskaper | | |:-------------:|------------| |<img src='+s(2064)+' alt=""/>| Det er egentlig disse egenskapene du endrer, når du velger, drar og slipper de grafiske elementene og de små hjørne-boksene. Ved å redigere tallene, så kan du styre dem helt presist.|</p> </li> </ul> </section> <section class=activity id=steg-3-fa-appen-til-a-vise-frem-innholdet-i-fxml-fila> <h1 class=activity id=steg-3-fa-appen-til-a-vise-frem-innholdet-i-fxml-fila>Steg 3: Få appen til å vise frem innholdet i FXML-fila </h1> <p>Det siste trinnet i denne leksjonen er å få app-en til å vise frem det grafiske innholdet i app-vinduet. For å få dette til må du redigere koden i app-klassen din, som du laget i trinn én og heter <strong>FxmlLogoApp</strong>.</p> <ul> <li>Husk å lagre FXML-fila i SceneBuilder før du går tilbake til Eclipse.</li> <li>Klikk i FXML-editoren. Den skal da vise frem det nye innholdet, som er resultatet av all redigeringen du gjorde i SceneBuilder.</li> <li>Det er greit å gjøre endringer rett i FXML-koden i editor. Når du går tilbake til SceneBuilder, så sjekk om du ser de samme endringene der. Hvis ikke så må du kanskje lukke den og åpne den igjen med <code>Open with SceneBuilder</code>.</li> <li>Velg editoren med <strong>FxmlLogoApp</strong>-klassen i (eller åpne den ved å dobbel-klikke på <strong>FxmlLogoApp.java</strong>) og rediger slik at du får følgende kode:<pre><code class=language-java><span class=hljs-keyword>package</span> fxmllogoapp;\n\n<span class=hljs-keyword>import</span> java.io.IOException;\n\n<span class=hljs-keyword>import</span> javafx.application.Application;\n<span class=hljs-keyword>import</span> javafx.fxml.FXMLLoader;\n<span class=hljs-keyword>import</span> javafx.scene.Scene;\n<span class=hljs-keyword>import</span> javafx.scene.layout.Pane;\n<span class=hljs-keyword>import</span> javafx.stage.Stage;\n\n<span class=hljs-keyword>public</span> <span class=hljs-class><span class=hljs-keyword>class</span> <span class=hljs-title>FxmlLogoApp</span> <span class=hljs-keyword>extends</span> <span class=hljs-title>Application</span> </span>{\n\n  <span class=hljs-function><span class=hljs-keyword>public</span> <span class=hljs-keyword>void</span> <span class=hljs-title>start</span><span class=hljs-params>(Stage primaryStage)</span> <span class=hljs-keyword>throws</span> IOException </span>{\n    FXMLLoader fxmlLoader = <span class=hljs-keyword>new</span> FXMLLoader(FxmlLogoApp.class.getResource(<span class=hljs-string>"FxmlLogoApp.fxml"</span>));\n    Pane root = fxmlLoader.load();\n        primaryStage.setScene(<span class=hljs-keyword>new</span> Scene(root));\n        primaryStage.show();\n  }\n\n  <span class=hljs-function><span class=hljs-keyword>public</span> <span class=hljs-keyword>static</span> <span class=hljs-keyword>void</span> <span class=hljs-title>main</span><span class=hljs-params>(String[] args)</span> </span>{\n    launch(FxmlLogoApp.class, args);\n  }\n}\n</code></pre> </li> </ul> <pre><code>\n  Trikset her er å lage et **FXMLLoader**-objekt (første linje i start-metoden, og be denne laste inn FXML-fila med load-metoden (andre linje).\n+ Kjør <span class=hljs-keyword>app</span>-<span class=hljs-keyword>en</span> ved å <span class=hljs-keyword>h</span>øyre-klikke på fila eller i editoren og velge `<span class=hljs-keyword>Run</span> <span class=hljs-keyword>as</span> &gt; Java Application`. Da skal det (etter litt venting) dukke opp et vindu som dette:\n\n  ![](<span class=hljs-keyword>run</span>-FxmlLogoApp-<span class=hljs-keyword>as</span>-java-application.png)\n\n# Hva har du <span class=hljs-keyword>l</span>ært?\n\n+ lage <span class=hljs-keyword>en</span> FXML-fil med Eclipse sin veiviser\n+ redigere FXML i Eclipse sin FXML-editor.\n+ <span class=hljs-keyword>se</span> forhåndsvisning av FXML-innholdet i JavaFX Preview-panelet\n+ åpne FXML-fila i JavaFX Scene Builder med `<span class=hljs-keyword>Open</span> with SceneBuilder`\n+ legge nye elementer til FXML-fila ved å dra og slippe fra SceneBuilder sin paletten\n+ redigere grafiske egenskaper i SceneBuilder\n+ skrive <span class=hljs-keyword>app</span>-kode som laster inn og viser frem FXML-fila i et <span class=hljs-keyword>app</span>-vindu\n\nI leksjonen KalkulatorFX (to be continued) vil du <span class=hljs-keyword>l</span>ære hvordan du kan koble FXML-koden til Java-koden og gjøre <span class=hljs-keyword>app</span>-<span class=hljs-keyword>en</span> levende (interaktiv)!\n</code></pre> </section>'},2059:function(e,n){e.exports="data:image/png;base64,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"},2060:function(e,n,s){e.exports=s.p+"_/oppgaver/src/javafx/fxmllogo/color-picker.ed8b1b.png"},2061:function(e,n,s){e.exports=s.p+"_/oppgaver/src/javafx/fxmllogo/font-picker.6e7624.png"},2062:function(e,n,s){e.exports=s.p+"_/oppgaver/src/javafx/fxmllogo/fxml-editor-with-preview-pane.8866a4.png"},2063:function(e,n,s){e.exports=s.p+"_/oppgaver/src/javafx/fxmllogo/initial-FxmlLogoApp.fxml.362a45.png"},2064:function(e,n,s){e.exports=s.p+"_/oppgaver/src/javafx/fxmllogo/layout-properties.436136.png"},2065:function(e,n){e.exports="data:image/gif;base64,R0lGODlhPABUANU/AG+s0Nva2s3JypGHhry5vLCrqMHZ6CMKBUaYxQB7s+/u7nl4evv7/JqXm2dnafLy8uTk4+Xv9gBVoFdUVZzD3UVBRgBQnvX3+QBpqol+fABFmO3z+Nbl8Me+vrGvr3xpZpCMjdLPzl1HQpKEgW1bVoJzbgBKmjssKqOcm2JOS5OQkeDf4EtLTZqTk6mlp11cXgBHmcjEw+no6KGhpG9scGJhY4OChMHBwXRzdfj4+U9OUHRiX9HR0djV1beztQAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQxRjcwQzlDNUU3RDExRTM4NDA5QkQ1REQxQzVFNzdDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQxRjcwQzlENUU3RDExRTM4NDA5QkQ1REQxQzVFNzdDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDFGNzBDOUE1RTdEMTFFMzg0MDlCRDVERDFDNUU3N0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDFGNzBDOUI1RTdEMTFFMzg0MDlCRDVERDFDNUU3N0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAA/ACwAAAAAPABUAEAG/8CfcDhkUBAJiWXJbDqf0KYkgaDkiNgfQMPter/gsHhM1gB+ljLXkm273xK1Zim3bIQRudjCEF7ianSBdxx6Y3w/f3Vpg20IMGQSZ1mKgQiGmJlkCEQMCZqgZQkXb6Wmp6inPCNCAQcHPj8BGW0ZBwNZDAMyQq8lQiMBQzKvClkjMVgxBR4FAlkdWALMHs0hQz3MBQRZArydPgsZAy0oEG+XoephMAlEn+vxahiMZXZYERhy7ZSA9vVk7lGQxyGRv4AAD90Rkk4ThSGV/tW5kgoVg4OHfuSRxxFMBFQXOBgYSbKkyZMoS3IglepBiRMHPhBRQOtHiQPCfoy4JYTHAf9WP1DAPIFlgDEhOV61GXENyyosKHzV4olF1zchPV5V6COE2IGjRAZEc0MBY0c5Eh62GXi2o1q2bdtSSDjGhN27ePPq3WtXjyB7C7NwAKDvSwIAgbFERFgncWFD/CCaDfM34MLJhtwZXNRYizwDmwPRpbywISi1iw+NBnNvSATMYjAohu2lskJTIilQMPCxVOo9tOOCknABkvCOgeEdB6XZjQHly8MkAF2xuvXrWAWskMFVSAgBAWKQktGjQ4ce5M2j/6EgRgAZYGW51/6jhzcZApr+gOA+RM4hPOBiywEszSJEBh4MYQsuQqBACwOsxPAKD0MM8J9X8QGTjFNACVH/wQEk/MAgFgvmsssQC7zCgAsXFnPMhkSsAEIWChwgQhsDHKBCGyp0N4RSRMBUABYB7MASdkgm6cYFAAQXlySJuWFadGVw4giVmlgpBAOrYVmGCaRw6WUofEw5JiYIOHmmGErUwUEEcMYp55x01slBl7Xh2UVrb+S2W29v/EaZnmtEKcQWkUwyG2eNuKZmF7IRIShrhM4RmJl6qBWaRI1iaghqatq2ByHxIDLpF6KSpoVx6oB2ap6dwaVOQa/uWWlrj4qhWa1r3LrQRqAgsiljjQrxWGaShuorPseS0ZxkjALmBgcINAsDBogtqWwdPio5xLZqXIvBuOSWa+656GLA/2pAza6pBwayupvpD57KG4aWiNpLhqJDtKuvBhh0S0S9Y2p5ymBJUGnBYdR56/DDEEcs8cRtxODCK0QN4YMKKRTwQAEHnJBBCykckEILAxIAQQEf4jTENBOocM0NLbyCQixYFTBBBjAKIYAPK7wyliw17SDTgVT9QMIvDBTgVYcitvjVi1k89QNMIRLd1QMKJq0AL7oY80HIFUqdoU4999QhCK/kwEBNJCZdxIk/CPBKMsEM4yIWyFQNNQS+DJlFiVXRLQRMHxSwgt5T832D31mIAOJUI859lRA5ZizEA3sTwRQWPbQgwnkkat5KB5Kn0MF/K3TQ8TNESBhfDzCV4A5BBwQ0kELaFPfuO8RBAAA7"},2066:function(e,n,s){e.exports=s.p+"_/oppgaver/src/javafx/fxmllogo/new-fxml-document.1769ba.png"},2067:function(e,n,s){e.exports=s.p+"_/oppgaver/src/javafx/fxmllogo/new-fxml-file-wizard.01b114.png"},2068:function(e,n,s){e.exports=s.p+"_/oppgaver/src/javafx/fxmllogo/open-with-scenebuilder.b7698e.png"},2069:function(e,n,s){e.exports=s.p+"_/oppgaver/src/javafx/fxmllogo/scene-builder-FxmlLogoApp-1.bcdffb.png"},2070:function(e,n,s){e.exports=s.p+"_/oppgaver/src/javafx/fxmllogo/scene-builder-FxmlLogoApp-2.fe3539.png"},2071:function(e,n,s){e.exports=s.p+"_/oppgaver/src/javafx/fxmllogo/scene-builder-FxmlLogoApp-3.294491.png"}});