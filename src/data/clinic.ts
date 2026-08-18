import equipmentImg from "@/assets/jc8bglzi3h.jpg.asset.json";
import waitingImg from "@/assets/26mrhuuja2.jpg.asset.json";
import doctorsBoard1 from "@/assets/6svviiwn6j.jpg.asset.json";
import doctorsBoard2 from "@/assets/uqrfsona68.jpg.asset.json";
import openingImg from "@/assets/m9jsy0jond.jpg.asset.json";
import bannerImg from "@/assets/tc9dsfzir5.jpg.asset.json";
import signboardImg from "@/assets/tl5fuxe2yz.jpg.asset.json";
import eyeTipsImg from "@/assets/uilbnlol8d.jpg.asset.json";

export type GalleryCategory =
  | "Clinic"
  | "Equipment"
  | "Doctors"
  | "Facilities"
  | "Reception";

export interface ClinicImage {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const images = {
  equipment: equipmentImg.url,
  waiting: waitingImg.url,
  doctorsBoard1: doctorsBoard1.url,
  doctorsBoard2: doctorsBoard2.url,
  opening: openingImg.url,
  banner: bannerImg.url,
  signboard: signboardImg.url,
  eyeTips: eyeTipsImg.url,
};

export const heroSlides: ClinicImage[] = [
  { src: images.signboard, alt: "Medica Polyclinic signboard at Kurji More, Patna", category: "Clinic" },
  { src: images.equipment, alt: "Advanced ophthalmology examination equipment at Medica Polyclinic", category: "Equipment" },
  { src: images.banner, alt: "Medica Polyclinic — your partner in health", category: "Clinic" },
  { src: images.waiting, alt: "Clean patient waiting area inside Medica Polyclinic", category: "Facilities" },
];

export const gallery: ClinicImage[] = [
  { src: images.signboard, alt: "Medica Polyclinic clinic signboard, Kurji More, Patna", category: "Clinic" },
  { src: images.banner, alt: "Medica Polyclinic health branding banner", category: "Clinic" },
  { src: images.equipment, alt: "Slit lamp and auto refractometer in the eye examination room", category: "Equipment" },
  { src: images.eyeTips, alt: "Eye care awareness poster with eight healthy-vision tips", category: "Equipment" },
  { src: images.doctorsBoard1, alt: "Specialist doctors board — eye, gynaecology and paediatrics", category: "Doctors" },
  { src: images.doctorsBoard2, alt: "Specialist doctors board — medicine, surgery, anaesthesia and orthopaedics", category: "Doctors" },
  { src: images.waiting, alt: "Reception corridor and seating at Medica Polyclinic", category: "Reception" },
  { src: images.opening, alt: "Medica Polyclinic inauguration announcement", category: "Facilities" },
];

export interface Doctor {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  days: string;
}

export const doctors: Doctor[] = [
  { name: "Dr. Abhilasha", qualification: "MBBS (Gold Medalist), MS Eye (PMCH)", specialization: "Ophthalmology", experience: "10+ years", days: "Mon – Sat" },
  { name: "Dr. Kalpana Jha", qualification: "MBBS (PMCH), MS OBG (Gold Medalist)", specialization: "Obstetrics & Gynaecology", experience: "10+ years", days: "Mon – Sat" },
  { name: "Dr. Shashikant", qualification: "MBBS (PMCH), MD Paediatrics (JLNMCH)", specialization: "Paediatrics", experience: "8+ years", days: "Mon – Sun" },
  { name: "Dr. Rajeev Nayan Prasad", qualification: "MBBS (ANMMCH)", specialization: "General Physician", experience: "12+ years", days: "Mon – Sat" },
  { name: "Dr. Javed Akhtar", qualification: "MBBS (ANMMCH), MS Surgery (DMCH)", specialization: "General Surgery", experience: "10+ years", days: "Tue, Thu, Sat" },
  { name: "Dr. Sunny Kumar", qualification: "MBBS, MS Ortho (PMCH)", specialization: "Orthopaedics", experience: "8+ years", days: "Mon, Wed, Fri" },
  { name: "Dr. Mohit Kumar", qualification: "MBBS (PMCH), MD Pathology (DMCH)", specialization: "Pathology", experience: "8+ years", days: "Mon – Sat" },
  { name: "Dr. Nalin Vilochan", qualification: "MBBS (JJM), MD Anaesthesia (MMU)", specialization: "Anaesthesiology", experience: "10+ years", days: "On call" },
];

export const departments = [
  { name: "General Medicine", desc: "OPD consultation for fever, diabetes, hypertension and everyday health concerns." },
  { name: "Ophthalmology", desc: "Complete eye check-up, vision testing and specialist eye treatment." },
  { name: "Obstetrics & Gynaecology", desc: "Pregnancy care, women's health and gynaecological consultation." },
  { name: "General Surgery", desc: "Surgical consultation, minor procedures and post-operative follow-up." },
  { name: "Orthopaedics", desc: "Bone, joint and injury care with expert orthopaedic guidance." },
  { name: "Paediatrics", desc: "Child health, growth monitoring, vaccination and newborn care." },
] as const;

export const CLINIC = {
  name: "Medica Polyclinic",
  phone: "9729100779",
  altPhone: "8084546297",
  tel: "+919729100779",
  whatsapp: "919729100779",
  address: "Kurji More, Patna, Bihar 800010",
  hours: "Monday – Sunday, 10:00 AM – 8:00 PM",
  mapsQuery: "Medica+Polyclinic+Kurji+More+Patna+800010",
};
