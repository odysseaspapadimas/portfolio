import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Υπηρεσίες για Επιχειρήσεις - Odysseas Papadimas",
  description: "Στήνω ψηφιακά συστήματα που φέρνουν πελάτες. Ιστοσελίδες, κρατήσεις και αυτοματισμοί για μικρές επιχειρήσεις. Portfolio του Odysseas Papadimas.",
  alternates: {
    hreflang: [
      { href: "https://odysseas.tech/business", hreflang: "el" },
      { href: "https://odysseas.tech/founders", hreflang: "en" },
    ],
  },
};

const businessOffers = [
  {
    title: "Ιστοσελίδα που μετατρέπει",
    subtitle: "Landing page με στόχο μετατροπών",
    bullets: [
      "Σελίδα στα ελληνικά με ξεκάθαρες παροτρύνσεις για δράση",
      "Ρύθμιση blog/SEO για να βρίσκουν οι πελάτες τις υπηρεσίες σου",
      "Ενσωμάτωση Google Analytics και Meta Pixel για μετρήσεις",
    ],
  },
  {
    title: "Online κρατήσεις & ραντεβού",
    subtitle: "Ροές κρατήσεων και αυτοματισμοί",
    bullets: [
      "Φόρμες ραντεβού με επιβεβαιώσεις μέσω email/SMS",
      "Σύνδεση με Google Calendar ή Calendly",
      "Τρόποι πληρωμής με κάρτα ή τραπεζικό έμβασμα, με τιμολόγηση",
      "Αυτόματες υπενθυμίσεις για μη προσέλευση και προτάσεις επιπλέον υπηρεσιών",
    ],
  },
];

const businessCapabilities = [
  {
    label: "Ιστοσελίδες με στόχο μετατροπών",
    description:
      "Landing pages που οδηγούν τον επισκέπτη στο επόμενο βήμα με καθαρά κουμπιά δράσης.",
  },
  {
    label: "Αυτοματοποιημένες ροές κρατήσεων",
    description:
      "Online προγραμματισμός με επιβεβαιώσεις, υπενθυμίσεις και συγχρονισμό ημερολογίου.",
  },
  {
    label: "Μετρήσεις και αναλύσεις",
    description:
      "Παρακολούθηση μετατροπών, προέλευσης υποψήφιων πελατών και εσόδων με κατανοητές αναφορές.",
  },
];

const processSteps = [
  {
    title: "1. Διάγνωση",
    detailEL:
      "Κάνουμε γρήγορο έλεγχο: τι λειτουργεί, τι χάνεται και ποια συστήματα λείπουν.",
    detailEN:
      "Ελέγχουμε τα υπάρχοντα εργαλεία και εντοπίζουμε τα κενά που εμποδίζουν κρατήσεις ή πωλήσεις.",
  },
  {
    title: "2. Στήσιμο",
    detailEL:
      "Χτίζουμε το site και τους αυτοματισμούς, με συνεχή προεπισκόπηση για σχόλια.",
    detailEN:
      "Στήνουμε λειτουργικό πρωτότυπο, το δοκιμάζουμε σε μικρό κύκλο και ζητάμε feedback πριν το go-live.",
  },
  {
    title: "3. Υποστήριξη",
    detailEL:
      "Παρακολουθούμε μετρήσεις, κάνουμε βελτιώσεις και μένουμε διαθέσιμοι για την ομάδα σου.",
    detailEN:
      "Κοιτάμε analytics, προσαρμόζουμε κείμενα και flows και παραμένουμε on-call για ενημερώσεις.",
  },
];

export default function BusinessPage() {
  return (
    <main className="mx-auto flex flex-col gap-20 py-20">
      <section className="space-y-8 text-balance">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Υπηρεσίες για επιχειρήσεις
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Στήνω ψηφιακά συστήματα που φέρνουν πελάτες.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Ιστοσελίδες, κρατήσεις και αυτοματισμοί για μικρές επιχειρήσεις που θέλουν να
            κλείνουν ραντεβού και πωλήσεις χωρίς χαμένο χρόνο. Χτίζονται με σύγχρονα εργαλεία
            και παραδίδονται με ξεκάθαρα βήματα, τεκμηριωμένα στα ελληνικά.
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Σχεδιάζω έτοιμες για μετατροπές landing pages, ροές κρατήσεων και συστήματα
            πληρωμών ώστε η ομάδα σου να εστιάζει στους πελάτες — όχι σε χειροκίνητες
            επανενέργειες.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Κλείσε ραντεβού
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
            >
              Στείλε μου τις ανάγκες σου
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {businessCapabilities.map((item) => (
            <article
              key={item.label}
              className="space-y-2 rounded-2xl border border-border/60 bg-card/30 p-5 text-sm text-muted-foreground"
            >
              <h2 className="text-base font-semibold text-foreground">{item.label}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Τι αναλαμβάνω</h2>
          <p className="text-sm text-muted-foreground">
            Λύσεις με προκαθορισμένη τιμολόγηση — ξέρεις από την αρχή τι θα παραλάβεις.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {businessOffers.map((offer) => (
            <article
              key={offer.title}
              className="flex h-full flex-col justify-between gap-5 rounded-3xl border border-border/60 bg-card/20 p-6 backdrop-blur"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground">{offer.subtitle}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={site.calendly}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "secondary" }), "w-fit")}
              >
                Ζήτησε προσφορά
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-border/60 bg-card/20 p-8 backdrop-blur">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Απόδειξη: BrainrotAI</h2>
          <p className="text-sm text-muted-foreground">
            Εργαλείο δημιουργίας βίντεο με AI που χρησιμοποιούν 2.200+ δημιουργοί και κατέλαβε
            τη θέση #11 στο Product Hunt (Product of the Day).
            Πλήρες SaaS με πιστοποίηση χρηστών, τιμολόγηση, σύστημα απόδοσης βίντεο και μετρήσεις —
            υλοποιημένο end-to-end.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <Link
            href="/case-studies/brainrot"
            className={cn(buttonVariants({ size: "sm" }), "gap-1")}
          >
            Δες το case study
          </Link>
          <Link
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
          >
            Κλείσε εισαγωγική κλήση 20′
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Πώς συνεργαζόμαστε</h2>
          <p className="text-sm text-muted-foreground">
            Διαδικασία που μιλάει τόσο τη γλώσσα της επιχείρησης όσο και της τεχνολογίας.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.title}
              className="space-y-3 rounded-2xl border border-border/60 bg-card/20 p-6 text-sm text-muted-foreground"
            >
              <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              <p>{step.detailEL}</p>
              <p className="text-muted-foreground/80">{step.detailEN}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/40 bg-primary/10 p-10 text-center">
        <h2 className="text-2xl font-semibold">Έτοιμος/η να αυξήσεις τις online κρατήσεις;</h2>
        <p className="text-sm text-muted-foreground">
          Στείλε μου το link του site ή μια σύντομη περιγραφή. Απαντώ εντός 24 ωρών.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            Κλείσε ραντεβού
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
          >
            Επικοινώνησε μαζί μου
          </Link>
        </div>
      </section>
    </main>
  );
}
