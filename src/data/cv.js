// To publish a new CV: run `npm run cv -- "/path/to/djebari_cv.tex"` (or
// replace public/cv/djebari-cv.pdf by hand) and update cvVersion below.
export const cvPdfPath = "/cv/djebari-cv.pdf";
export const cvVersion = "October 2026";

// Keyed by arXiv ID without the version suffix (e.g. "2507.15046", not "2507.15046v2").
export const workingPaperStatus = {
  "2507.15046": "Revise & Resubmit at the Journal of Forecasting",
};

export function statusForArxivId(arxivId) {
  return workingPaperStatus[arxivId?.replace(/v\d+$/, "")];
}

export const doctoralThesis = {
  title:
    "The Dynamics of Oil and Financial Markets: Essays on Volatility, Interconnectedness, and Inequality",
  mainSupervisor: "Dr. Kahina Mehidi, Associate Professor, University of Béjaïa",
  coSupervisor: "Prof. Khelifa Mazouz, Full Professor, Cardiff University & University of Béjaïa",
  hostSupervisors: [
    "Prof. Juan Francisco Muñoz Rosas, Full Professor, Universidad de Granada",
    "Prof. María Ángeles Sánchez Domínguez, Full Professor, Universidad de Granada",
    "Prof. Philipp Otto, Full Professor, School of Mathematics and Statistics, University of Glasgow",
  ],
  laboratory: "Economics and Development Laboratory (LED), University of Béjaïa · Feb 2023 – Present",
};

export const workInProgress = [
  {
    title: "Oil Rent, Institutions and Inequality: Effects of the Resource Curse",
    collaborators:
      "With Juan Francisco Muñoz Rosas & María Ángeles Sánchez Domínguez (Universidad de Granada)",
  },
  {
    title:
      "Structural Breaks in Transatlantic Equity Market Integration: A Generalized Fisher Transformation Approach",
    collaborators: "With Prof. Khelifa Mazouz (Cardiff University)",
  },
  {
    title:
      "Forecasting Financial Markets Using Mixed-Frequency Macroeconomic Data within a Network MIDAS Log-ARCH Framework",
    collaborators:
      "With Prof. Raffaele Mattera (University of Campania Luigi Vanvitelli), Prof. Philipp Otto (University of Glasgow) & Prof. Khelifa Mazouz (Cardiff University)",
  },
];

export const conferencePresentations = [
  {
    authors: "Mehidi, K. & Djebari, F.",
    year: "2023",
    title:
      "Startups, rente, et qualité institutionnelle : Quels impacts sur la diversification économique en Algérie?",
    venue:
      "National Conference on SMEs, Startups and Economic Diversification beyond Hydrocarbons in Algeria, University of Béjaïa · May 30, 2023",
  },
  {
    authors: "Djebari, F.",
    year: "2026",
    title: "Presentation of doctoral research in the research networking sessions",
    venue:
      "II International Week, Faculty of Economics and Business, University of Granada · May 4–8, 2026",
  },
];

export const peerReviewActivities = [
  "Journal of Statistical Computation and Simulation (Taylor & Francis)",
];

export const thesisSupervision = [
  {
    title:
      "Network Volatility Analysis of Stock Market Characteristics: Evidence from the Algiers and London Stock Exchanges",
    students: "Marina Talbi & Kenza Djaoud",
    meta:
      "Master's thesis, University of Béjaïa · June 2026 · co-supervised with Dr. Moussa Maamri, Associate Professor, University of Béjaïa",
  },
];

export const technicalSkills = {
  programming: ["R", "Python", "JavaScript"],
  software: ["EViews", "SPSS", "RStudio", "LaTeX", "Microsoft Office"],
};

export const languages = [
  { language: "French", level: "Fluent (C2, TCF certified)" },
  { language: "English", level: "Proficient" },
  { language: "Arabic", level: "Fluent" },
  { language: "Kabyle", level: "Native" },
  { language: "Spanish", level: "Basic" },
];
