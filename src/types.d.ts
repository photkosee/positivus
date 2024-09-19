export type Partner = {
  url: string;
  alt: string;
}

export type Service = {
  title1: string;
  title2: string;
  image: string;
  alt: string;
  theme: "primary" | "secondary" | "tertiary";
}

export type CaseStudy = {
  content: string;
}

export type WorkingProcess = {
  index: string;
  title: string;
  description: string;
}

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
}

export type Testimonial = {
  content: string;
  name: string;
  role: string;
}
