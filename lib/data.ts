export const COMPANY = {
  name: "National As Built Inc.",
  phone: "972-342-7070",
  phoneHref: "tel:9723427070",
  email: "info@nationalasbuilt.com",
  hrEmail: "hr@nationalasbuilt.com",
  address: "Plano, TX 75093",
  founded: 2004,
  tagline: "One Rate — Any Where",
  coverage: "All 50 states, Puerto Rico & Canada",
} as const;

export const SERVICES = [
  { id: "architectural", title: "Architectural As-Built Surveys", short: "Commercial & Residential", desc: "Laser-measured floor plans, reflected ceiling plans, elevations, sections, and site plans aligned to AIA guidelines. Delivered in DWG and PDF." },
  { id: "scan-to-cad", title: "Scan-to-CAD", short: "Field data to AutoCAD files", desc: "We convert LEICA laser measurements into clean, fully usable AutoCAD DWG files ready for design, coordination, or permit submission." },
  { id: "matterport", title: "3D Virtual Tours", short: "Powered by Matterport", desc: "Dollhouse views, floor plan overlays, and immersive walkthroughs so architects, engineers, and contractors can visit remotely." },
  { id: "structural", title: "Structural, Roof & Equipment", short: "Discipline-specific surveys", desc: "Documentation of structural systems, roof conditions, and equipment layouts for renovation planning, MEP coordination, and facility management." },
  { id: "ada", title: "ADA Surveys", short: "Compliance documentation", desc: "Detailed documentation of accessible routes, clearances, and facilities for ADA compliance reviews, retrofits, and barrier removal." },
  { id: "lease", title: "Lease Area & Permits", short: "Verification & permit assistance", desc: "Precise square footage calculations for leasing negotiations, BOMA compliance, and building permit applications." },
] as const;

export const PROCESS = [
  { num: "01", title: "Request a Quote", desc: "Tell us your project type, square footage, and location. We respond within 2 business hours with a clear cost range and schedule your survey within 48 hours." },
  { num: "02", title: "On-Site Survey", desc: "Our field specialists capture all existing conditions using LEICA laser measurement technology, achieving accuracy to +/-1/32 inch over 300 feet." },
  { num: "03", title: "Receive Your Drawings", desc: "Clean AutoCAD DWG and PDF files delivered via Dropbox, aligned to AIA standards and ready for design, permitting, or construction immediately." },
] as const;

export const PRICING = [
  { tier: "Essentials", price: "$0.20-$0.40", unit: "per sq ft", desc: "Straightforward spaces and early-stage planning.", featured: false, features: ["Field measurement & data capture","Floor plans (DWG + PDF)","Dropbox delivery","Standard turnaround"] },
  { tier: "Professional", price: "$0.40-$0.80", unit: "per sq ft", desc: "Most commercial and residential renovation projects.", featured: true, features: ["Everything in Essentials","Reflected ceiling plans","Elevations & key sections","Detailed annotations","Priority production"] },
  { tier: "Enterprise", price: "Custom", unit: "portfolio pricing", desc: "Multi-site rollouts and recurring programs.", featured: false, features: ["Dedicated project manager","Standardized templates","Portfolio scheduling","Volume discounts","Executive reporting"] },
] as const;

export const CITIES = [
  { slug: "dallas", name: "Dallas", state: "TX", metro: "Dallas-Fort Worth", heroLine: "As-Built Surveys in Dallas, TX", intro: "From Uptown towers to Deep Ellum renovations, National As Built serves the full DFW market with laser-accurate as-built drawings and fast turnaround.", keyAreas: ["Downtown Dallas","Uptown","Deep Ellum","Oak Lawn","Design District","Victory Park"], population: "1.3M", projects: "Commercial, Retail, Hospitality" },
  { slug: "houston", name: "Houston", state: "TX", metro: "Greater Houston", heroLine: "As-Built Surveys in Houston, TX", intro: "Houston's energy, medical, and commercial sectors demand precise documentation. We provide fast, accurate surveys across Harris County and the greater metro.", keyAreas: ["Downtown Houston","Medical Center","Midtown","The Woodlands","Sugar Land","Pearland"], population: "2.3M", projects: "Industrial, Commercial, Medical" },
  { slug: "new-york-city", name: "New York City", state: "NY", metro: "New York Metro", heroLine: "As-Built Surveys in New York City", intro: "NYC's dense, complex building stock requires the most precise documentation available. We serve Manhattan, Brooklyn, Queens, and the broader tri-state area.", keyAreas: ["Manhattan","Brooklyn","Queens","The Bronx","Jersey City","Hoboken"], population: "8.3M", projects: "High-Rise, Mixed-Use, Historic" },
  { slug: "los-angeles", name: "Los Angeles", state: "CA", metro: "Los Angeles Metro", heroLine: "As-Built Surveys in Los Angeles, CA", intro: "From Hollywood studios to Westside commercial corridors, we deliver permit-ready as-built drawings across LA County and greater Southern California.", keyAreas: ["Downtown LA","Hollywood","Culver City","Santa Monica","Burbank","Long Beach"], population: "4M", projects: "Entertainment, Commercial, Residential" },
  { slug: "chicago", name: "Chicago", state: "IL", metro: "Chicagoland", heroLine: "As-Built Surveys in Chicago, IL", intro: "Chicago's landmark architecture and active construction market demand the highest accuracy. We serve the Loop, neighborhoods, and suburban Cook County.", keyAreas: ["The Loop","River North","Wicker Park","West Loop","South Loop","Evanston"], population: "2.7M", projects: "Historic, Commercial, Mixed-Use" },
  { slug: "miami", name: "Miami", state: "FL", metro: "Miami-Fort Lauderdale", heroLine: "As-Built Surveys in Miami, FL", intro: "South Florida's fast-growing commercial and luxury residential sectors need precise documentation. We serve Miami, Broward, and Palm Beach counties.", keyAreas: ["Brickell","Wynwood","Coral Gables","Doral","Fort Lauderdale","Miami Beach"], population: "470K", projects: "Luxury Residential, Commercial, Hospitality" },
  { slug: "atlanta", name: "Atlanta", state: "GA", metro: "Metro Atlanta", heroLine: "As-Built Surveys in Atlanta, GA", intro: "Atlanta's rapid commercial growth and dense renovation pipeline make accurate documentation essential. We cover Fulton, DeKalb, and surrounding counties.", keyAreas: ["Midtown","Buckhead","Downtown","Decatur","Sandy Springs","Marietta"], population: "500K", projects: "Commercial, Mixed-Use, Retail" },
  { slug: "phoenix", name: "Phoenix", state: "AZ", metro: "Greater Phoenix", heroLine: "As-Built Surveys in Phoenix, AZ", intro: "The Valley of the Sun's explosive commercial growth demands reliable documentation. We deliver fast, accurate surveys across Maricopa County.", keyAreas: ["Downtown Phoenix","Scottsdale","Tempe","Mesa","Chandler","Glendale"], population: "1.6M", projects: "Commercial, Retail, Medical" },
  { slug: "seattle", name: "Seattle", state: "WA", metro: "Greater Seattle", heroLine: "As-Built Surveys in Seattle, WA", intro: "Seattle's tech-driven commercial boom and historic building stock create constant demand for precise as-built documentation across King County.", keyAreas: ["Downtown Seattle","South Lake Union","Capitol Hill","Bellevue","Redmond","Kirkland"], population: "750K", projects: "Tech Campus, Commercial, Historic" },
  { slug: "denver", name: "Denver", state: "CO", metro: "Denver Metro", heroLine: "As-Built Surveys in Denver, CO", intro: "Denver's thriving commercial real estate and renovation market needs accurate, permit-ready documentation. We serve the metro, Boulder, and Front Range.", keyAreas: ["LoDo","RiNo","Cherry Creek","Aurora","Lakewood","Boulder"], population: "750K", projects: "Commercial, Mixed-Use, Hospitality" },
] as const;

export const FAQS = [
  { q: "What exactly is an as-built survey?", a: "An as-built survey is a precise documentation of a building's existing conditions - walls, doors, windows, columns, ceiling heights, and architectural features - exactly as they stand today. It's essential when original drawings are unavailable, outdated, or inaccurate, and is used for renovation planning, permitting, leasing, and ADA compliance." },
  { q: "How long does a survey take?", a: "Most projects are scheduled within 48 hours of your request. The on-site survey takes a few hours to a full day depending on size and complexity. Drafting is completed and deliverables sent via Dropbox within a few business days. We'll give you a specific timeline when you quote." },
  { q: "What file formats do you deliver?", a: "Standard deliverables are DWG (AutoCAD) and PDF via Dropbox. We use the latest AutoCAD version. If you need a specific version or additional formats, let us know at quote time and we'll accommodate your team." },
  { q: "How accurate are your measurements?", a: "We use professional LEICA laser devices achieving +/-1/32 inch accuracy over 300 feet per manufacturer specifications - far beyond tape measure tolerances. All plans are general references for design and should be verified by licensed professionals for structural or engineering use." },
  { q: "What if there's an error in my drawings?", a: "If an error occurs in our drawings, we return to the site at no additional charge to verify measurements and issue corrected plans. We stand behind our work completely." },
  { q: "Do you handle multi-site rollouts?", a: "Yes - it's a significant part of our business. We work with retail chains, franchise operators, and portfolio managers on standardized programs with dedicated PM, consistent templates, and coordinated scheduling. Contact us to discuss your rollout." },
  { q: "What does 'one rate anywhere' mean?", a: "We don't charge extra for remote or out-of-state locations. Travel costs are built into our flat rate - whether your project is in downtown Manhattan or rural Montana, you get the same competitive pricing." },
] as const;

export type City = typeof CITIES[number];
