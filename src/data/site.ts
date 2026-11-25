// Everything on the site comes from this file: practice details, services,
// team, new patient information and the appointment form's options.

export const site = {
  name: "Linden Family Dental",
  tagline: "Family and cosmetic dentistry in Maple Hollow",
  description:
    "Linden Family Dental cares for kids and adults in Maple Hollow: cleanings, fillings, crowns, clear aligners and same-day emergency visits. New patients welcome.",
  phone: "(555) 013-6400",
  emergencyPhone: "(555) 013-6401",
  email: "frontdesk@lindendental.example",
  address: { street: "48 Linden Avenue, Suite 200", city: "Maple Hollow", region: "WI", postal: "53009" },
  mapsUrl: "https://www.openstreetmap.org/search?query=48%20Linden%20Avenue",
  // Optional: an online scheduling page (NexHealth, LocalMed, Zocdoc...). Leave empty to use the request form only.
  bookingUrl: "",
  hours: [
    { days: "Monday", time: "8am to 5pm" },
    { days: "Tuesday", time: "7am to 4pm" },
    { days: "Wednesday", time: "8am to 7pm" },
    { days: "Thursday", time: "7am to 4pm" },
    { days: "Friday", time: "8am to 1pm" },
    { days: "Saturday and Sunday", time: "Closed" },
  ],
  social: [
    { label: "Facebook", url: "https://facebook.com/" },
    { label: "Instagram", url: "https://instagram.com/" },
  ],
};

export const emergency = {
  text: "Dental emergency? Same-day appointments for pain, swelling or a broken tooth.",
  after: "After hours, call and follow the prompt to reach the dentist on call.",
};

export const home = {
  title: "Unhurried dental care for the whole family",
  text: "Cleanings, fillings, crowns and clear aligners in one bright office on Linden Avenue. We explain every option and its cost before we start, and we see emergencies the same day.",
  // Sample openings for the hero card. Replace with your own, or link to live scheduling.
  openings: {
    note: "Sample openings, for illustration",
    days: [
      { day: "Tue", date: "Dec 1", slots: ["7:00am", "10:30am", "2:15pm"] },
      { day: "Wed", date: "Dec 2", slots: ["4:30pm", "6:00pm"] },
      { day: "Thu", date: "Dec 3", slots: ["7:30am", "11:00am"] },
      { day: "Fri", date: "Dec 4", slots: ["8:00am"] },
    ],
  },
  reasons: [
    { title: "Evening and early hours", text: "Open at 7am twice a week and until 7pm on Wednesdays." },
    { title: "Prices before treatment", text: "A written estimate with your insurance share before any work beyond a cleaning." },
    { title: "Kids from their first tooth", text: "Gentle first visits, sealants and a prize drawer that never runs out." },
  ],
};

export const services = [
  {
    id: "preventive",
    name: "Cleanings and checkups",
    summary: "Twice-yearly cleanings, digital X-rays at low dose and an oral cancer screening at every exam.",
    expect: ["About 60 minutes", "Cleaning with a hygienist, then an exam with the dentist", "A written plan if anything needs attention"],
  },
  {
    id: "restorative",
    name: "Fillings, crowns and bridges",
    summary: "Tooth-colored fillings and same-week crowns, with numbing that's checked before we begin.",
    expect: ["Fillings in one visit", "Crowns in two visits, a week apart", "Temporary crown in between"],
  },
  {
    id: "cosmetic",
    name: "Whitening and veneers",
    summary: "In-office or take-home whitening, bonding for chips and gaps, and porcelain veneers.",
    expect: ["A shade check and photos first", "Take-home trays ready in a week", "Veneers after a smile preview"],
  },
  {
    id: "aligners",
    name: "Clear aligners",
    summary: "Straighten teeth with clear aligners, planned from a 3D scan with no messy impressions.",
    expect: ["A free consultation and scan", "Check-ins every 8 weeks", "Retainers included"],
  },
  {
    id: "emergency",
    name: "Emergency care",
    summary: "Toothaches, swelling, broken teeth and knocked-out teeth seen the same day when you call before noon.",
    expect: ["Call first so we can hold a chair", "Pain relief at the first visit", "A plan for any follow-up"],
  },
  {
    id: "kids",
    name: "Children's dentistry",
    summary: "First visits by age one, fluoride and sealants, and a calm room with ceiling screens.",
    expect: ["Parents welcome in the room", "Short, friendly visits", "Tips on brushing and snacks"],
  },
  {
    id: "gums",
    name: "Gum care",
    summary: "Deep cleanings and regular maintenance for gum disease, and referrals to a specialist when needed.",
    expect: ["Gum measurements at each exam", "Deep cleaning in two visits", "Maintenance every 3 to 4 months"],
  },
];

export const team = [
  { name: "Dr. Mara Lindqvist, DDS", role: "Dentist and owner", bio: "Opened the practice in 2012. Treats nervous patients with a lot of patience and a weighted blanket.", group: "Dentists" },
  { name: "Dr. Kwame Osei, DMD", role: "Dentist", bio: "Leads clear aligner and cosmetic cases. Coaches his daughter's soccer team on Saturdays.", group: "Dentists" },
  { name: "Rosa Delgado, RDH", role: "Hygienist", bio: "Fifteen years of cleanings and a gift for making kids laugh mid-polish.", group: "Hygienists" },
  { name: "Jamie Holt, RDH", role: "Hygienist", bio: "Our gum care lead, and the person to ask about electric toothbrushes.", group: "Hygienists" },
  { name: "Priscilla Nwosu", role: "Office manager", bio: "Knows every insurance plan by heart and will call yours so you don't have to.", group: "Front desk" },
  { name: "Ben Arceneaux", role: "Patient coordinator", bio: "Books your visits, sends reminders and answers the phone with a smile you can hear.", group: "Front desk" },
];

export const newPatients = {
  steps: [
    { title: "Request a visit", text: "Use the form or call. We'll confirm a time within one business day." },
    { title: "Fill in your forms", text: "We text you a secure link to your health history and insurance details before the visit." },
    { title: "Your first visit", text: "About 90 minutes: X-rays, a cleaning, an exam and time to talk through anything you've noticed." },
    { title: "A clear plan", text: "If you need treatment, you leave with a written plan, the cost and what insurance is expected to pay." },
  ],
  bring: ["Photo ID", "Insurance card, if you have one", "A list of medicines you take", "Previous X-rays, if you have them"],
  forms: [
    { name: "New patient form", note: "PDF placeholder", url: "#" },
    { name: "Medical history", note: "PDF placeholder", url: "#" },
    { name: "Privacy notice (HIPAA)", note: "PDF placeholder", url: "#" },
  ],
  // Sample list for this template. Replace with the plans your office really accepts.
  insurance: ["Delta Dental PPO", "Cigna Dental PPO", "MetLife", "Aetna Dental PPO", "Guardian", "United Concordia", "Ameritas", "Humana Dental"],
  insuranceNote: "Sample list for this template. We file claims for you with most PPO plans; call us to check yours.",
  payment: ["Cash, card and HSA or FSA cards", "Monthly payment plans for treatment over $500", "A 5% discount when you pay in full before treatment"],
  plan: {
    name: "Linden Care Plan",
    price: "$29 a month",
    text: "For people without dental insurance: two cleanings and exams a year, all routine X-rays, one emergency exam and 15% off other treatment.",
  },
};

export const appointmentForm = {
  reasons: ["Cleaning and checkup", "Tooth pain or emergency", "Filling or crown", "Whitening or cosmetic", "Clear aligners", "Child's first visit", "Something else"],
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  times: ["Early morning", "Late morning", "Afternoon", "Evening (Wednesday)"],
};
