import LegalPage from '../components/LegalPage'
import { contact } from '../data/projects'

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung" lastUpdated="Juni 2026">
      <h2>Einleitung</h2>
      <p>
        Diese Datenschutzerklärung informiert Sie als Nutzerin und Nutzer über die Art, den Umfang und den Zweck der Verarbeitung von personenbezogenen Daten durch die {contact.company}, {contact.street}, {contact.city} (im Folgenden „wir" oder „uns") auf dieser Website. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Ihre Daten werden im Einklang mit den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung verarbeitet.
      </p>

      <h2>Verantwortlicher</h2>
      <address>
        {contact.company}<br />
        {contact.street}<br />
        {contact.city}<br />
        Telefon: <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a><br />
        E-Mail: {contact.email}
      </address>

      <h2>Arten der verarbeiteten Daten</h2>
      <ul>
        <li>Bestandsdaten (z. B. Namen, Adressen)</li>
        <li>Kontaktdaten (z. B. E-Mail, Telefonnummern)</li>
        <li>Inhaltsdaten (z. B. Texteingaben in Kontaktformulare)</li>
        <li>Nutzungsdaten (z. B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
        <li>Meta-/Kommunikationsdaten (z. B. Geräte-Informationen, IP-Adressen)</li>
      </ul>

      <h2>Zweck der Verarbeitung</h2>
      <ul>
        <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte</li>
        <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</li>
        <li>Sicherheitsmaßnahmen</li>
        <li>Reichweitenmessung/Marketing</li>
      </ul>

      <h2>Rechtsgrundlagen der Verarbeitung</h2>
      <p>
        Wir informieren Sie entsprechend der Datenschutzgrundverordnung (DSGVO) über die Rechtsgrundlagen unserer Datenverarbeitungen. Sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO, und die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2>Hosting (Vercel)</h2>
      <p>
        Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet. Vercel verarbeitet in unserem Auftrag Daten, die beim Aufruf der Website technisch übermittelt werden, insbesondere die IP-Adresse, Zugriffszeitpunkt, übertragene Datenmenge sowie Browser- und Geräteinformationen (Server-Logfiles). Diese Verarbeitung erfolgt zur Gewährleistung eines sicheren und stabilen Betriebs auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.
      </p>
      <p>
        Soweit Daten in die USA übermittelt werden, stützt sich diese Übermittlung auf die Standardvertragsklauseln der EU-Kommission sowie ggf. das EU-US Data Privacy Framework. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a>
      </p>

      <h2>Datenbank (Supabase)</h2>
      <p>
        Zur Speicherung von Inhalten und Anfragen nutzen wir die Infrastruktur von Supabase, Inc., 970 Toa Payoh North #07-04, Singapur 318992. Sofern Sie über ein Formular Daten an uns übermitteln, werden diese in einer von Supabase bereitgestellten Datenbank gespeichert und verarbeitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b und lit. f DSGVO. Mit Supabase besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Weitere Informationen: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">https://supabase.com/privacy</a>
      </p>

      <h2>Kontaktformular und E-Mail-Versand</h2>
      <p>
        Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben (z. B. Name, E-Mail-Adresse, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet. Für den technischen Versand der über das Formular eingehenden Nachrichten setzen wir einen E-Mail-Versanddienstleister ein. Dabei werden die von Ihnen eingegebenen Daten zum Zweck der Zustellung verarbeitet.
      </p>
      <p>
        Für den technischen Versand der über das Formular eingehenden Nachrichten nutzen wir den Dienst von Resend, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA. Dabei werden die von Ihnen eingegebenen Daten zum Zweck der Zustellung verarbeitet. Soweit hierbei Daten in die USA übermittelt werden, stützt sich diese Übermittlung auf die Standardvertragsklauseln der EU-Kommission. Weitere Informationen: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://resend.com/legal/privacy-policy</a>
      </p>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung vorvertraglicher Anfragen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>Cookies</h2>
      <p>
        Diese Website verwendet Cookies und ähnliche Technologien. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Technisch notwendige Cookies werden auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO eingesetzt. Alle übrigen Cookies (z. B. für Statistik oder Marketing) werden nur mit Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO gesetzt. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen – über den Link „Cookie-Einstellungen" im Footer.
      </p>

      <h2>Google Analytics</h2>
      <p>
        Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland (bzw. Google LLC, USA). Google Analytics verwendet Cookies, die eine Analyse der Nutzung der Website ermöglichen. Die Verarbeitung dient der Reichweitenanalyse und der Verbesserung unseres Angebots.
      </p>
      <p>
        Die Nutzung von Google Analytics erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Ohne Ihre Zustimmung im Cookie-Banner wird Google Analytics nicht geladen und es werden keine Analyse-Cookies gesetzt. Die IP-Anonymisierung ist aktiviert, sodass Ihre IP-Adresse vor der Übertragung gekürzt wird.
      </p>
      <p>
        Bei der Nutzung von Google Analytics kann es zu einer Übermittlung von Daten in die USA kommen. Diese stützt sich auf die Standardvertragsklauseln der EU-Kommission sowie ggf. das EU-US Data Privacy Framework. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
      </p>

      <h2>Übermittlung von Daten an Dritte und Drittanbieter</h2>
      <p>
        Eine Übermittlung Ihrer Daten an Dritte erfolgt nur im Rahmen der gesetzlichen Vorgaben. Wir geben die Daten der Nutzer an Dritte nur dann weiter, wenn dies z. B. auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO für Vertragszwecke oder auf der Grundlage berechtigter Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO an wirtschaftlichem und effektivem Betrieb unseres Geschäftsbetriebes erforderlich ist oder sofern Sie in die Datenübermittlung eingewilligt haben.
      </p>

      <h2>Ihre Rechte</h2>
      <p>
        Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend Art. 15 DSGVO. Sie haben entsprechend Art. 16 DSGVO das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen. Sie haben nach Art. 17 DSGVO das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten zu verlangen.
      </p>
      <p>
        Sie haben das Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO), das Recht auf Datenübertragbarkeit (Art. 20 DSGVO) sowie das Recht, sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Die für uns zuständige Aufsichtsbehörde ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit.
      </p>

      <h2>Widerspruchsrecht</h2>
      <p>
        Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. f DSGVO erfolgt, Widerspruch einzulegen.
      </p>

      <h2>Änderungen der Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, die Datenschutzerklärung zu ändern, um sie an geänderte Rechtslagen oder im Falle von Änderungen des Dienstes sowie der Datenverarbeitung anzupassen. Dies gilt jedoch nur hinsichtlich Erklärungen zur Datenverarbeitung. Sofern Einwilligungen der Nutzer erforderlich sind oder Bestandteile der Datenschutzerklärung Regelungen des Vertragsverhältnisses mit den Nutzern enthalten, erfolgen Änderungen nur mit Zustimmung der Nutzer.
      </p>
      <p>
        Bitte informieren Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung.
      </p>
    </LegalPage>
  )
}
