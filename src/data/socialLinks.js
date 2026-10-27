import { FaResearchgate, FaOrcid, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar, SiArxiv } from "react-icons/si";
import { ScopusIcon, WebOfScienceIcon } from "../CustomIcons";

export const contactEmail = "faycal.djebari@univ-bejaia.dz";

export const orcidUrl = "https://orcid.org/0009-0002-9265-9541";
export const scopusUrl = "https://www.scopus.com/authid/detail.uri?authorId=60102009100";
export const webOfScienceUrl = "https://www.webofscience.com/wos/author/record/JMQ-1075-2023";

export const socialLinks = [
  { href: "https://www.researchgate.net/profile/Faycal-Djebari?ev=hdr_xprf", label: "ResearchGate", Icon: FaResearchgate },
  { href: orcidUrl, label: "ORCID", Icon: FaOrcid },
  { href: "https://scholar.google.com/citations?user=A_YUrlYAAAAJ&hl=fr", label: "Google Scholar", Icon: SiGooglescholar },
  { href: "https://arxiv.org/a/djebari_f_1.html", label: "arXiv", Icon: SiArxiv },
  { href: scopusUrl, label: "Scopus", Icon: ScopusIcon },
  { href: webOfScienceUrl, label: "Web of Science", Icon: WebOfScienceIcon },
  { href: "https://www.linkedin.com/in/faycaldjebari06/", label: "LinkedIn", Icon: FaLinkedin },
];
