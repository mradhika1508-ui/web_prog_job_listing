// ─────────────────────────────────────────
// DATA — Indian locations & INR salaries
// ─────────────────────────────────────────
const JOBS = [
  { id:"j-001", title:"Senior Frontend Engineer", company:"Razorpay", location:"Bengaluru, Karnataka", remote:true, type:"full-time", category:"Engineering", level:"senior", salary:{min:2800000,max:3400000,currency:"INR"}, posted:"2025-06-18", tags:["React","TypeScript","CSS"], description:"Join our core web team building the fastest payment developer experience platform in India. You'll work on everything from our dashboard UI to open-source tooling.", responsibilities:["Architect and build scalable React components","Collaborate closely with design and product","Lead performance optimisation efforts","Mentor junior engineers","Contribute to open-source projects"], requirements:["5+ years frontend experience","Expert-level React & TypeScript","Deep CSS knowledge","Experience with Next.js","Strong opinions about UX"], benefits:["Flexible WFH policy","₹15,000/mo home office stipend","Top-tier health insurance","Annual team retreat","ESOPs"], bio:"Razorpay is India's leading payments solution, offering a full-stack financial services suite including payment gateway, neo-banking, payroll and more." },
  { id:"j-002", title:"Product Designer", company:"Figma India", location:"Mumbai, Maharashtra", remote:false, type:"full-time", category:"Design", level:"mid", salary:{min:2200000,max:2700000,currency:"INR"}, posted:"2025-06-17", tags:["Figma","Prototyping","User Research"], description:"Design experiences used by millions of designers worldwide. You'll own end-to-end design for key product areas, from initial research to polished final specs.", responsibilities:["Lead design for a core product area","Conduct user research and usability tests","Create detailed interaction specs","Collaborate with engineers on implementation","Build and extend the design system"], requirements:["3+ years product design","Expert Figma skills","Strong portfolio","Experience with complex B2B tools","Research background a plus"], benefits:["Competitive salary","Equity package","Flexible hours","Learning budget","Full medical/dental/vision"], bio:"Figma is the collaborative interface design tool. We're building tools for everyone to design at professional quality." },
  { id:"j-003", title:"Growth Marketing Manager", company:"Zepto", location:"Remote", remote:true, type:"full-time", category:"Marketing", level:"mid", salary:{min:1900000,max:2400000,currency:"INR"}, posted:"2025-06-16", tags:["SEO","Content","Analytics"], description:"Drive top-of-funnel growth for one of India's fastest-growing quick-commerce companies. You'll own content strategy, SEO, and paid acquisition.", responsibilities:["Develop and execute content strategy","Own SEO and organic growth","Run paid acquisition experiments","Build marketing analytics stack","Create case studies and testimonials"], requirements:["4+ years B2B or D2C marketing","Strong analytical skills","SEO expertise","Content creation ability","Familiarity with growth tools"], benefits:["100% remote","₹50,000 equipment budget","Health & dental","Annual bonus","Team summits twice a year"], bio:"Zepto is India's fastest growing quick-commerce platform, delivering groceries and essentials in 10 minutes across 10+ cities." },
  { id:"j-004", title:"Backend Engineer (Go)", company:"Cred", location:"Bengaluru, Karnataka", remote:true, type:"full-time", category:"Engineering", level:"senior", salary:{min:3000000,max:3700000,currency:"INR"}, posted:"2025-06-15", tags:["Go","PostgreSQL","Kubernetes"], description:"Work on the infrastructure powering India's most innovative fintech platform. Help scale distributed systems to handle millions of daily transactions.", responsibilities:["Build and maintain high-performance Go services","Design distributed fintech features","Improve reliability and observability","Participate in on-call rotation","Write technical documentation"], requirements:["5+ years backend engineering","Strong Go or Rust skills","Distributed systems experience","Database internals knowledge","Experience with Kubernetes"], benefits:["Fully remote","Competitive ESOPs","₹30,000 learning budget","Open source time","Premium health benefits"], bio:"CRED is a member-only credit card bill payment platform that rewards creditworthy individuals for timely payments." },
  { id:"j-005", title:"Data Analyst", company:"PhonePe", location:"Bengaluru, Karnataka", remote:false, type:"full-time", category:"Data", level:"mid", salary:{min:2000000,max:2500000,currency:"INR"}, posted:"2025-06-14", tags:["SQL","Python","Metabase"], description:"Join PhonePe's analytics team to help unlock insights across payments, fraud, and user growth. You'll partner with every team to make data-driven decisions.", responsibilities:["Build dashboards and reports in Metabase","Write complex SQL queries","Collaborate with product teams","Define and track key metrics","Identify growth opportunities through data"], requirements:["3+ years data analysis","Expert SQL skills","Python for data analysis","Experience with BI tools","Strong communication skills"], benefits:["Competitive salary","Full benefits","NPS contribution","Free meals","Parental leave"], bio:"PhonePe is India's leading digital payments platform with over 500 million registered users processing billions of transactions every month." },
  { id:"j-006", title:"iOS Engineer", company:"Swiggy", location:"Bengaluru, Karnataka", remote:false, type:"full-time", category:"Engineering", level:"senior", salary:{min:2900000,max:3500000,currency:"INR"}, posted:"2025-06-13", tags:["Swift","SwiftUI","iOS"], description:"Build the Swiggy mobile experience for millions of users. You'll work across the full iOS stack, from core ordering functionality to platform integrations.", responsibilities:["Build and ship major iOS features","Optimise performance and memory usage","Collaborate with design on interactions","Maintain high code quality","Participate in architecture decisions"], requirements:["5+ years iOS development","Expert Swift & SwiftUI","UIKit experience","Performance tuning skills","App Store submission experience"], benefits:["ESOPs","NPS","Health insurance","Flexible work","Annual learning stipend"], bio:"Swiggy is India's leading on-demand delivery platform, connecting millions of consumers with restaurants and stores for food, grocery, and more." },
  { id:"j-007", title:"Sales Development Representative", company:"Freshworks", location:"Chennai, Tamil Nadu", remote:false, type:"full-time", category:"Sales", level:"entry", salary:{min:600000,max:800000,currency:"INR"}, posted:"2025-06-12", tags:["CRM","Outbound","SaaS"], description:"Kick-start your sales career at one of India's most successful SaaS companies. You'll generate and qualify leads, setting the stage for account executives.", responsibilities:["Prospect and qualify leads","Execute outbound email and call campaigns","Use Freshsales CRM effectively","Book meetings for AEs","Maintain accurate pipeline records"], requirements:["0–2 years sales or customer-facing experience","Excellent written and verbal communication","Coachable and curious mindset","Comfort with technology","Bachelor's degree or equivalent"], benefits:["Clear promotion path","Full training programme","Health & dental","NPS","Fun team culture"], bio:"Freshworks provides businesses with SaaS customer engagement solutions — from CRM to helpdesk — serving over 60,000 customers globally." },
  { id:"j-008", title:"DevOps Engineer", company:"Atlassian India", location:"Hyderabad, Telangana", remote:true, type:"full-time", category:"Engineering", level:"senior", salary:{min:2700000,max:3200000,currency:"INR"}, posted:"2025-06-11", tags:["Terraform","AWS","CI/CD"], description:"Help build and maintain the infrastructure powering one of the world's largest developer tool companies from our Hyderabad hub.", responsibilities:["Manage multi-cloud infrastructure with Terraform","Improve CI/CD pipelines","Drive SRE culture and practices","Build internal developer tooling","Respond to incidents and run post-mortems"], requirements:["5+ years DevOps/SRE","Expert Terraform & IaC","AWS or GCP experience","Scripting in Python/Go/Bash","Kubernetes administration"], benefits:["Remote-friendly","Top health benefits","Home office stipend","Team events","Stock grants"], bio:"Atlassian makes team collaboration software. Products like Jira, Confluence, and Bitbucket are used by hundreds of thousands of organisations worldwide." },
  { id:"j-009", title:"UX Researcher", company:"Meesho", location:"Bengaluru, Karnataka", remote:true, type:"full-time", category:"Design", level:"mid", salary:{min:2100000,max:2600000,currency:"INR"}, posted:"2025-06-10", tags:["User Research","Interviews","Qualtrics"], description:"Shape the future of social commerce for 100M+ users across Tier 2 and 3 India. You'll lead research studies and help teams make evidence-based product decisions.", responsibilities:["Plan and run usability studies","Conduct in-depth user interviews","Synthesise research into clear insights","Evangelize user research across the org","Partner with design and product"], requirements:["3+ years UX research","Mixed methods expertise","Survey design skills","Experience with research ops","Strong presentation skills"], benefits:["Remote-first","Generous PTO","Equity","Annual wellness budget","Meal allowance"], bio:"Meesho is India's fastest-growing internet commerce platform, enabling small businesses and individuals to sell online via social channels." },
  { id:"j-010", title:"Frontend Engineer Intern", company:"Razorpay", location:"Remote", remote:true, type:"internship", category:"Engineering", level:"entry", salary:{min:50000,max:70000,currency:"INR/mo"}, posted:"2025-06-09", tags:["React","JavaScript","CSS"], description:"Join our engineering team for a 3-month programme where you'll work on real projects used by millions of developers. Great foot in the door for a full-time role.", responsibilities:["Build UI components under senior guidance","Fix bugs and improve performance","Participate in design reviews","Write tests for your code","Document your work"], requirements:["Pursuing B.Tech/BE or related degree","Solid JavaScript fundamentals","Basic React knowledge","Eagerness to learn","Strong communication skills"], benefits:["Competitive monthly stipend","Mentorship","Real-world experience","Flexible hours","Potential for return offer"], bio:"Razorpay is India's leading payments solution, offering a full-stack financial services suite including payment gateway, neo-banking, payroll and more." },
  { id:"j-011", title:"Product Manager — Platform", company:"Zepto", location:"Mumbai, Maharashtra", remote:true, type:"full-time", category:"Product", level:"senior", salary:{min:2800000,max:3300000,currency:"INR"}, posted:"2025-06-08", tags:["Roadmap","API","B2B"], description:"Define and drive the platform strategy for Zepto's seller API, integrations ecosystem, and enterprise capabilities.", responsibilities:["Own platform roadmap and vision","Work with enterprise partners to define needs","Collaborate with engineering on API design","Track adoption and success metrics","Write clear product specs"], requirements:["5+ years PM experience","Experience with developer platforms","Technical background preferred","Strong analytical skills","Excellent written communication"], benefits:["Fully remote","ESOPs","₹50,000 home office budget","Health insurance","Team retreats"], bio:"Zepto is India's fastest growing quick-commerce platform, delivering groceries and essentials in 10 minutes across 10+ cities." },
  { id:"j-012", title:"Financial Analyst", company:"PhonePe", location:"Bengaluru, Karnataka", remote:false, type:"full-time", category:"Finance", level:"mid", salary:{min:1800000,max:2300000,currency:"INR"}, posted:"2025-06-07", tags:["Excel","Financial Modelling","SQL"], description:"Support PhonePe's financial planning and analysis team with deep financial modelling, reporting, and business performance analysis.", responsibilities:["Build financial models and forecasts","Prepare monthly variance reports","Partner with business teams on planning","Support investor reporting","Automate reporting processes"], requirements:["3+ years FP&A experience","Expert financial modelling skills","SQL proficiency","CA or MBA a plus","Strong attention to detail"], benefits:["Competitive salary","ESOPs","Full benefits","Free meals","Generous leave policy"], bio:"PhonePe is India's leading digital payments platform with over 500 million registered users processing billions of transactions every month." },
  { id:"j-013", title:"Head of Operations", company:"Cred", location:"Bengaluru, Karnataka", remote:true, type:"full-time", category:"Operations", level:"lead", salary:{min:3200000,max:4000000,currency:"INR"}, posted:"2025-06-06", tags:["Ops","Scaling","Process"], description:"Lead and scale Cred's internal operations function as we grow rapidly. You'll own hiring ops, vendor management, legal workflows, and more.", responsibilities:["Lead a team of ops professionals","Own vendor contracts and negotiations","Improve company-wide processes","Manage legal and compliance workflows","Report to the COO"], requirements:["8+ years operations experience","Management experience","Startup or hyper-growth background","Strong legal/compliance familiarity","Excellent cross-functional communication"], benefits:["Executive comp package","Full remote","ESOPs","Premium healthcare","Generous benefits"], bio:"CRED is a member-only credit card bill payment platform that rewards creditworthy individuals for timely payments." },
  { id:"j-014", title:"Contract Technical Writer", company:"Atlassian India", location:"Remote", remote:true, type:"contract", category:"Operations", level:"mid", salary:{min:4000,max:5500,currency:"INR/hr"}, posted:"2025-06-05", tags:["Technical Writing","API Docs","Markdown"], description:"Create clear, accurate, and developer-friendly documentation for Atlassian's suite of products from our India team. This is a 6-month contract with potential to convert.", responsibilities:["Write and update product documentation","Interview engineers to gather technical details","Audit existing docs for accuracy","Create API reference content","Work with the Developer Experience team"], requirements:["4+ years technical writing","Experience with API documentation","Markdown / MDX proficiency","Developer tooling familiarity","Strong attention to detail"], benefits:["Competitive hourly rate","Flexible schedule","Remote work","Potential for FTE conversion"], bio:"Atlassian makes team collaboration software. Products like Jira, Confluence, and Bitbucket are used by hundreds of thousands of organisations worldwide." },
  { id:"j-015", title:"Staff Software Engineer", company:"Swiggy", location:"Bengaluru, Karnataka", remote:false, type:"full-time", category:"Engineering", level:"lead", salary:{min:4400000,max:5400000,currency:"INR"}, posted:"2025-06-04", tags:["Java","Microservices","System Design"], description:"Work on the core Swiggy platform — one of the most complex real-time logistics engines in India. You'll lead major architectural initiatives and mentor engineers.", responsibilities:["Lead cross-team technical initiatives","Architect complex distributed systems","Drive engineering culture and standards","Mentor and grow senior engineers","Represent engineering in leadership forums"], requirements:["10+ years software engineering","Deep distributed systems experience","Track record of large-scale technical leadership","Java or Go expertise","Strong communication skills"], benefits:["Top-of-market compensation","Significant ESOPs","Premium health benefits","₹30,000 learning budget","Relocation support"], bio:"Swiggy is India's leading on-demand delivery platform, connecting millions of consumers with restaurants and stores for food, grocery, and more." },
  { id:"j-016", title:"Marketing Data Analyst", company:"Freshworks", location:"Chennai, Tamil Nadu", remote:false, type:"full-time", category:"Data", level:"entry", salary:{min:700000,max:900000,currency:"INR"}, posted:"2025-06-03", tags:["SQL","Marketing Analytics","Excel"], description:"Join Freshworks' marketing analytics team and help measure and optimise campaigns across all channels. Great opportunity for someone starting their data career.", responsibilities:["Build weekly and monthly reporting dashboards","Analyse campaign performance","Track attribution and conversion data","Present findings to stakeholders","Maintain data quality"], requirements:["1+ years analytics experience","Solid SQL skills","Excel/Sheets proficiency","Attention to detail","Studying or graduated in a quantitative field"], benefits:["Full training","Health benefits","NPS","Career development","Fun culture"], bio:"Freshworks provides businesses with SaaS customer engagement solutions — from CRM to helpdesk — serving over 60,000 customers globally." },
  { id:"j-017", title:"Design Systems Engineer", company:"Meesho", location:"Remote", remote:true, type:"full-time", category:"Design", level:"senior", salary:{min:2600000,max:3200000,currency:"INR"}, posted:"2025-06-02", tags:["React","Storybook","Design Tokens"], description:"Build and maintain the Meesho design system — a set of reusable components, tokens, and patterns used by 50+ engineers and designers.", responsibilities:["Build and document design system components","Maintain token and theme infrastructure","Partner closely with design","Write comprehensive Storybook stories","Lead design system office hours"], requirements:["4+ years frontend engineering","React expert","Design system experience","Strong design sensibility","TypeScript proficiency"], benefits:["Fully remote","ESOPs","Stipends","Full medical","Annual retreats"], bio:"Meesho is India's fastest-growing internet commerce platform, enabling small businesses and individuals to sell online via social channels." },
  { id:"j-018", title:"Enterprise Account Executive", company:"Freshworks", location:"Bengaluru, Karnataka", remote:false, type:"full-time", category:"Sales", level:"senior", salary:{min:2400000,max:3000000,currency:"INR"}, posted:"2025-06-01", tags:["Enterprise Sales","CRM","SaaS"], description:"Drive new enterprise revenue for Freshworks' suite of products. You'll own the full sales cycle from prospecting to close on large accounts.", responsibilities:["Own a territory of enterprise accounts","Run complex multi-stakeholder deals","Forecast accurately in Freshsales","Collaborate with solutions engineering","Build relationships with CTO and IT buyers"], requirements:["5+ years enterprise SaaS sales","Track record of large-ticket deals","Experience selling to IT or operations","Strong executive presence","CRM proficiency"], benefits:["Base + uncapped commission","ESOPs","Full benefits","President's Club","Excellent culture"], bio:"Freshworks provides businesses with SaaS customer engagement solutions — from CRM to helpdesk — serving over 60,000 customers globally." },
  { id:"j-019", title:"Site Reliability Engineer", company:"Razorpay", location:"Bengaluru, Karnataka", remote:true, type:"full-time", category:"Engineering", level:"senior", salary:{min:2600000,max:3100000,currency:"INR"}, posted:"2025-05-31", tags:["SRE","Prometheus","AWS"], description:"Ensure the reliability, scalability, and performance of Razorpay's core payment infrastructure serving hundreds of millions of transactions.", responsibilities:["Own reliability for core payment services","Build alerting and observability tooling","Conduct blameless post-mortems","Reduce toil through automation","Participate in on-call rotation"], requirements:["5+ years SRE or DevOps","AWS or GCP expertise","Prometheus, Grafana experience","Go or Python scripting","Strong incident management skills"], benefits:["Remote-first","Relocation support","ESOPs","Generous leave","Meal allowance"], bio:"Razorpay is India's leading payments solution, offering a full-stack financial services suite including payment gateway, neo-banking, payroll and more." },
  { id:"j-020", title:"Customer Success Manager", company:"Zepto", location:"Mumbai, Maharashtra", remote:true, type:"full-time", category:"Operations", level:"mid", salary:{min:1700000,max:2100000,currency:"INR"}, posted:"2025-05-30", tags:["Customer Success","SaaS","Onboarding"], description:"Help Zepto's growing partner base get maximum value from the platform. You'll own onboarding, adoption, and renewal for a portfolio of seller accounts.", responsibilities:["Own a book of mid-market accounts","Drive onboarding and adoption programmes","Run quarterly business reviews","Identify expansion opportunities","Advocate for partners internally"], requirements:["3+ years customer success in e-commerce or SaaS","Strong relationship management","Data-driven approach to success","Excellent written and verbal communication","Hindi and English fluency preferred"], benefits:["Fully remote","Health benefits","₹20,000 learning budget","ESOPs","Team retreats"], bio:"Zepto is India's fastest growing quick-commerce platform, delivering groceries and essentials in 10 minutes across 10+ cities." }
];

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let allJobs = [...JOBS];
let filteredJobs = [...JOBS];
let savedJobs = new Set(JSON.parse(localStorage.getItem('jb_saved') || '[]'));
let appliedJobs = new Set(JSON.parse(localStorage.getItem('jb_applied') || '[]'));
let currentView = 'listings';
let currentJobId = null;
let searchTerm = '';
let debounceTimer = null;

// ─────────────────────────────────────────
// COMPANY COLORS
// ─────────────────────────────────────────
const companyColors = {
  'Razorpay':       '#2d6ae0',
  'Figma India':    '#a259ff',
  'Zepto':          '#7c3aed',
  'Cred':           '#1a1a2e',
  'PhonePe':        '#5f259f',
  'Swiggy':         '#fc8019',
  'Freshworks':     '#25c16f',
  'Atlassian India':'#0052cc',
  'Meesho':         '#e91e8c',
};
function getColor(company) {
  return companyColors[company] || '#4a5568';
}
function getInitials(company) {
  return company.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
}

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  showSkeletons();
  setTimeout(() => { loadJobs(); }, 400);
  updateSavedBadge();
  initKeyboard();
  window.addEventListener('hashchange', handleHash);
  handleHash();
});

function handleHash() {
  const hash = window.location.hash;
  if (!hash || hash === '#' || hash === '#listings') {
    navigate('listings');
  } else if (hash === '#saved') {
    navigate('saved');
  } else if (hash.startsWith('#job/')) {
    const id = hash.replace('#job/','');
    showDetail(id);
  } else if (hash.startsWith('#apply/')) {
    const id = hash.replace('#apply/','');
    openModal(id);
  }
}

function loadJobs() {
  document.getElementById('error-banner').classList.remove('visible');
  showSkeletons();
  setTimeout(() => {
    allJobs = [...JOBS];
    filteredJobs = [...JOBS];
    populateLocationFilter();
    applyFilters();
  }, 200);
}

function showSkeletons() {
  const grid = document.getElementById('jobs-grid');
  grid.innerHTML = Array(6).fill(0).map(()=>`
    <div class="skel-card">
      <div style="display:flex;gap:12px;align-items:flex-start">
        <div class="skel-block" style="width:40px;height:40px;border-radius:8px;flex-shrink:0"></div>
        <div style="flex:1">
          <div class="skel-block" style="height:14px;width:70%;border-radius:4px;margin-bottom:6px"></div>
          <div class="skel-block" style="height:12px;width:50%;border-radius:4px"></div>
        </div>
      </div>
      <div class="skel-block" style="height:12px;width:80%;border-radius:4px"></div>
      <div style="display:flex;gap:6px">
        <div class="skel-block" style="height:20px;width:70px;border-radius:3px"></div>
        <div class="skel-block" style="height:20px;width:55px;border-radius:3px"></div>
      </div>
      <div class="skel-block" style="height:32px;border-radius:4px"></div>
    </div>
  `).join('');
}

function populateLocationFilter() {
  const locs = [...new Set(allJobs.map(j=>j.location))].sort();
  const sel = document.getElementById('loc-filter');
  const cur = sel.value;
  sel.innerHTML = '<option value="">All Locations</option>' +
    locs.map(l=>`<option value="${l}" ${l===cur?'selected':''}>${l}</option>`).join('');
}

// ─────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────
function navigate(view) {
  currentView = view;
  document.getElementById('listings-view').style.display = view==='listings' ? '' : 'none';
  document.getElementById('detail-view').classList.toggle('active', view==='detail');
  document.getElementById('saved-view').classList.toggle('active', view==='saved');
  document.getElementById('nav-listings').classList.toggle('active', view==='listings'||view==='detail');
  document.getElementById('nav-saved').classList.toggle('active', view==='saved');
  if (view==='saved') renderSavedView();
  closeSidebar();
}

// ─────────────────────────────────────────
// SEARCH & FILTER
// ─────────────────────────────────────────
function debouncedSearch() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    const clearBtn = document.getElementById('search-clear');
    clearBtn.classList.toggle('visible', searchTerm.length > 0);
    applyFilters();
  }, 300);
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  searchTerm = '';
  document.getElementById('search-clear').classList.remove('visible');
  applyFilters();
}

function applyFilters() {
  const loc = document.getElementById('loc-filter').value;
  const cat = document.getElementById('cat-filter').value;
  const remoteOnly = document.getElementById('remote-filter').checked;
  const typeBoxes = [...document.querySelectorAll('#type-filters input:checked')].map(i=>i.value);
  const levelBoxes = [...document.querySelectorAll('#level-filters input:checked')].map(i=>i.value);
  const sort = document.getElementById('sort-select').value;

  filteredJobs = allJobs.filter(j => {
    if (loc && j.location !== loc) return false;
    if (cat && j.category !== cat) return false;
    if (remoteOnly && !j.remote) return false;
    if (typeBoxes.length && !typeBoxes.includes(j.type)) return false;
    if (levelBoxes.length && !levelBoxes.includes(j.level)) return false;
    if (searchTerm) {
      const hay = `${j.title} ${j.company} ${j.description} ${j.tags.join(' ')}`.toLowerCase();
      if (!hay.includes(searchTerm)) return false;
    }
    return true;
  });

  filteredJobs.sort((a,b) => {
    if (sort === 'newest') return new Date(b.posted) - new Date(a.posted);
    if (sort === 'salary-high') return (b.salary.max||0) - (a.salary.max||0);
    if (sort === 'salary-low') return (a.salary.min||0) - (b.salary.min||0);
    if (sort === 'alpha') return a.title.localeCompare(b.title);
    return 0;
  });

  renderJobs(filteredJobs);
  updateFilterBadges(loc, cat, remoteOnly, typeBoxes, levelBoxes);
}

function updateFilterBadges(loc, cat, remoteOnly, typeBoxes, levelBoxes) {
  let count = 0;
  if (loc) count++;
  if (cat) count++;
  if (remoteOnly) count++;
  count += typeBoxes.length + levelBoxes.length;

  const badge = document.getElementById('filter-count-badge');
  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);

  const clearBtn = document.getElementById('clear-all-btn');
  clearBtn.classList.toggle('visible', count > 0);
}

function clearFilters() {
  document.getElementById('loc-filter').value = '';
  document.getElementById('cat-filter').value = '';
  document.getElementById('remote-filter').checked = false;
  document.querySelectorAll('#type-filters input, #level-filters input').forEach(i=>i.checked=false);
  applyFilters();
}

// ─────────────────────────────────────────
// RENDER JOBS
// ─────────────────────────────────────────
function renderJobs(jobs) {
  const grid = document.getElementById('jobs-grid');
  const count = document.getElementById('results-count');
  const live = document.getElementById('live-region');

  count.innerHTML = `<strong>${jobs.length}</strong> job${jobs.length!==1?'s':''} found`;
  live.textContent = `${jobs.length} job${jobs.length!==1?'s':''} found`;

  if (jobs.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🔍</div>
      <div class="empty-title">No jobs found</div>
      <p class="empty-desc">Try adjusting your filters or search term.</p>
      <button class="empty-cta" onclick="clearFilters();clearSearch()">Clear All Filters</button>
    </div>`;
    return;
  }

  grid.innerHTML = jobs.map((j,i) => renderCard(j, i)).join('');
}

function highlight(text, term) {
  if (!term) return text;
  const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

function formatSalary(s) {
  if (!s) return '';
  const sym = '₹';
  if (s.currency === 'INR/hr') return `${sym}${s.min}–${sym}${s.max}/hr`;
  if (s.currency === 'INR/mo') return `${sym}${(s.min/1000).toFixed(0)}k–${sym}${(s.max/1000).toFixed(0)}k/mo`;
  if (s.currency === 'INR/hr') return `${sym}${s.min}–${sym}${s.max}/hr`;
  // Annual INR — format as LPA
  const toLPA = n => {
    if (n >= 10000000) return `${(n/10000000).toFixed(1)}Cr`;
    if (n >= 100000) return `${(n/100000).toFixed(1)}L`;
    return `${sym}${n}`;
  };
  return `${toLPA(s.min)}–${toLPA(s.max)} p.a.`;
}

function timeAgo(dateStr) {
  const d = new Date(dateStr);
  const diff = Math.floor((Date.now() - d) / 86400000);
  if (diff === 0) return 'Today';
  if (diff === 1) return '1d ago';
  if (diff < 7) return `${diff}d ago`;
  if (diff < 30) return `${Math.floor(diff/7)}w ago`;
  return `${Math.floor(diff/30)}mo ago`;
}

function renderCard(j, idx) {
  const saved = savedJobs.has(j.id);
  const applied = appliedJobs.has(j.id);
  const color = getColor(j.company);
  const initials = getInitials(j.company);
  return `
  <article class="job-card ${saved?'saved':''} ${applied?'applied':''}" style="animation-delay:${idx*30}ms"
    data-id="${j.id}">
    <div class="card-header">
      <div class="company-logo" style="background:${color}">${initials}</div>
      <div class="card-title-group">
        <div class="card-title">${highlight(j.title, searchTerm)}</div>
        <div class="card-company">${highlight(j.company, searchTerm)}</div>
      </div>
      <button class="save-btn ${saved?'saved':''}" onclick="toggleSave(event,'${j.id}')" aria-label="${saved?'Remove from saved':'Save job'}" aria-pressed="${saved}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="${saved?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
      </button>
    </div>
    <div class="card-tags">
      <span class="tag tag-type">${j.type}</span>
      ${j.remote ? '<span class="tag tag-remote">Remote</span>' : ''}
      <span class="tag tag-level">${j.level}</span>
      ${applied ? '<span class="tag tag-applied">✓ Applied</span>' : ''}
    </div>
    <div class="card-meta">
      <span class="card-location">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${j.location}
      </span>
      ${j.salary ? `<span class="card-salary">${formatSalary(j.salary)}</span>` : ''}
      <span class="card-date">${timeAgo(j.posted)}</span>
    </div>
    ${j.tags.length ? `<div class="card-skills">${j.tags.map(t=>`<span class="skill-chip">${t}</span>`).join('')}</div>` : ''}
    <div class="card-footer">
      <button class="apply-btn-card ${applied?'applied-state':''}" onclick="event.stopPropagation(); openModal('${j.id}')">
        ${applied ? '✓ Applied' : 'Apply Now'}
      </button>
      <button class="view-btn-card" onclick="event.stopPropagation();showDetail('${j.id}')">View</button>
    </div>
  </article>`;
}

// ─────────────────────────────────────────
// DETAIL VIEW
// ─────────────────────────────────────────
function showDetail(id) {
  const j = allJobs.find(x=>x.id===id);
  if (!j) return;
  currentJobId = id;
  const saved = savedJobs.has(id);
  const applied = appliedJobs.has(id);
  const color = getColor(j.company);

  navigate('detail');
  window.location.hash = `#job/${id}`;

  const el = document.getElementById('detail-view');
  el.innerHTML = `
    <button class="detail-back" onclick="navigate('listings');window.location.hash=''" aria-label="Back to listings">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      Back to listings
    </button>
    <div class="detail-top">
      <div class="detail-header-left">
        <div class="detail-logo" style="background:${color}">${getInitials(j.company)}</div>
        <div>
          <div class="detail-company">${j.company} · Posted ${timeAgo(j.posted)}</div>
          <h1 class="detail-title">${j.title}</h1>
          <div class="detail-tags">
            <span class="tag tag-type">${j.type}</span>
            ${j.remote?'<span class="tag tag-remote">Remote</span>':''}
            <span class="tag tag-level">${j.level}</span>
            ${applied?'<span class="tag tag-applied">✓ Applied</span>':''}
          </div>
        </div>
      </div>
      <div class="detail-actions">
        <button class="detail-apply-btn ${applied?'applied-state':''}" id="detail-apply-btn"
          onclick="openModal('${j.id}')">
          ${applied?'✓ Applied':'Apply Now'}
        </button>
        <button class="detail-save-btn ${saved?'saved':''}" id="detail-save-btn" onclick="toggleSave(null,'${j.id}',true)" aria-pressed="${saved}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="${saved?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          ${saved?'Saved':'Save Job'}
        </button>
      </div>
    </div>
    <div class="detail-meta-strip">
      <div class="detail-meta-item"><label>Location</label><span>${j.location}</span></div>
      <div class="detail-meta-item"><label>Type</label><span>${j.type}</span></div>
      <div class="detail-meta-item"><label>Level</label><span>${j.level}</span></div>
      <div class="detail-meta-item"><label>Category</label><span>${j.category}</span></div>
      ${j.salary?`<div class="detail-meta-item"><label>Salary</label><span style="color:var(--green);font-weight:600">${formatSalary(j.salary)}</span></div>`:''}
      ${j.tags.length?`<div class="detail-meta-item"><label>Skills</label><span>${j.tags.join(', ')}</span></div>`:''}
    </div>
    <div class="detail-section">
      <div class="detail-section-title">About the Role</div>
      <p>${j.description}</p>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Responsibilities</div>
      <ul class="detail-list">${j.responsibilities.map(r=>`<li><span>${r}</span></li>`).join('')}</ul>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Requirements</div>
      <ul class="detail-list">${j.requirements.map(r=>`<li><span>${r}</span></li>`).join('')}</ul>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Benefits</div>
      <ul class="detail-list">${j.benefits.map(r=>`<li><span>${r}</span></li>`).join('')}</ul>
    </div>
    <div class="company-bio">
      <div class="company-bio-logo" style="background:${color}">${getInitials(j.company)}</div>
      <div>
        <div class="company-bio-name">${j.company}</div>
        <div class="company-bio-desc">${j.bio}</div>
      </div>
    </div>
  `;
  el.scrollTop = 0;
  document.title = `${j.title} at ${j.company} — JobBoard`;
  window.scrollTo(0,0);
}

// ─────────────────────────────────────────
// SAVED VIEW
// ─────────────────────────────────────────
function renderSavedView() {
  const grid = document.getElementById('saved-grid');
  const jobs = allJobs.filter(j=>savedJobs.has(j.id));
  if (jobs.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🔖</div>
      <div class="empty-title">No saved jobs yet</div>
      <p class="empty-desc">Browse listings and click the bookmark icon to save jobs you're interested in.</p>
      <button class="empty-cta" onclick="navigate('listings')">Browse Listings</button>
    </div>`;
    return;
  }
  grid.innerHTML = jobs.map((j,i)=>renderCard(j,i)).join('');
}

// ─────────────────────────────────────────
// SAVE TOGGLE
// ─────────────────────────────────────────
function toggleSave(e, id, fromDetail=false) {
  if (e) e.stopPropagation();
  if (savedJobs.has(id)) {
    savedJobs.delete(id);
    showToast('Job removed from saved');
  } else {
    savedJobs.add(id);
    showToast('Job saved! 🔖');
  }
  localStorage.setItem('jb_saved', JSON.stringify([...savedJobs]));
  updateSavedBadge();

  document.querySelectorAll(`[data-id="${id}"]`).forEach(card => {
    const isSaved = savedJobs.has(id);
    card.classList.toggle('saved', isSaved);
    const btn = card.querySelector('.save-btn');
    if (btn) {
      btn.classList.toggle('saved', isSaved);
      btn.setAttribute('aria-pressed', isSaved);
      btn.setAttribute('aria-label', isSaved ? 'Remove from saved' : 'Save job');
      btn.querySelector('svg').setAttribute('fill', isSaved ? 'currentColor' : 'none');
    }
  });

  if (fromDetail) {
    const dsb = document.getElementById('detail-save-btn');
    if (dsb) {
      const isSaved = savedJobs.has(id);
      dsb.classList.toggle('saved', isSaved);
      dsb.setAttribute('aria-pressed', isSaved);
      dsb.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="${isSaved?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> ${isSaved?'Saved':'Save Job'}`;
    }
  }
}

function updateSavedBadge() {
  const badge = document.getElementById('saved-badge');
  const count = savedJobs.size;
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

// ─────────────────────────────────────────
// MODAL / APPLICATION
// ─────────────────────────────────────────
let modalJobId = null;

function openModal(id) {
  modalJobId = id;
  const j = allJobs.find(x=>x.id===id);
  if (!j) return;
  document.getElementById('modal-job-title').textContent = j.title + ' — ' + j.company;
  showForm();
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('f-name').focus(), 100);
  window.location.hash = `#apply/${id}`;
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  resetForm();
  if (currentView === 'detail' && currentJobId) {
    window.location.hash = `#job/${currentJobId}`;
  } else {
    window.location.hash = '';
  }
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

function showForm() {
  document.getElementById('modal-form-wrap').style.display = '';
  document.getElementById('modal-success').classList.remove('visible');
  document.getElementById('modal-error').classList.remove('visible');
}

function resetForm() {
  document.getElementById('application-form').reset();
  document.getElementById('char-counter').textContent = '0 / 1000';
  document.getElementById('file-chosen').textContent = '';
  document.querySelectorAll('.form-error').forEach(e=>e.classList.remove('visible'));
  document.querySelectorAll('.form-input,.form-textarea').forEach(e=>e.classList.remove('error'));
  document.getElementById('form-error-summary').classList.remove('visible');
  document.getElementById('error-list').innerHTML = '';
  resetSubmitBtn();
}

function resetSubmitBtn() {
  const btn = document.getElementById('submit-btn');
  btn.disabled = false;
  btn.classList.remove('loading');
  document.getElementById('submit-label').textContent = 'Submit Application';
}

function updateCharCount() {
  const ta = document.getElementById('f-cover');
  const counter = document.getElementById('char-counter');
  const len = ta.value.length;
  counter.textContent = `${len} / 1000`;
  counter.className = 'char-counter' + (len > 900 ? ' warning' : '') + (len >= 1000 ? ' over' : '');
}

function handleFileChange() {
  const file = document.getElementById('f-resume').files[0];
  const chosen = document.getElementById('file-chosen');
  const errEl = document.getElementById('e-resume');
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      errEl.textContent = 'File must be under 5 MB.';
      errEl.classList.add('visible');
      chosen.textContent = '';
    } else {
      errEl.classList.remove('visible');
      chosen.textContent = `✓ ${file.name}`;
    }
  }
}

function validateForm() {
  const errors = [];
  const nameEl = document.getElementById('f-name');
  const emailEl = document.getElementById('f-email');
  const linkedinEl = document.getElementById('f-linkedin');

  document.querySelectorAll('.form-error').forEach(e=>e.classList.remove('visible'));
  document.querySelectorAll('.form-input,.form-textarea').forEach(e=>e.classList.remove('error'));

  if (!nameEl.value.trim()) {
    errors.push('Full name is required.');
    nameEl.classList.add('error');
    document.getElementById('e-name').classList.add('visible');
  }
  const email = emailEl.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('A valid email address is required.');
    emailEl.classList.add('error');
    document.getElementById('e-email').classList.add('visible');
  }
  const li = linkedinEl.value.trim();
  if (li && !/^https?:\/\/.+/.test(li)) {
    errors.push('LinkedIn URL must start with https://');
    linkedinEl.classList.add('error');
    document.getElementById('e-linkedin').classList.add('visible');
  }
  return errors;
}

function submitApplication() {
  const errors = validateForm();
  if (errors.length > 0) {
    const summary = document.getElementById('form-error-summary');
    const list = document.getElementById('error-list');
    list.innerHTML = errors.map(e=>`<li>${e}</li>`).join('');
    summary.classList.add('visible');
    summary.scrollIntoView({behavior:'smooth', block:'nearest'});
    return;
  }

  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.classList.add('loading');
  document.getElementById('submit-label').textContent = 'Submitting…';

  setTimeout(() => {
    const success = Math.random() > 0.1;
    if (success) {
      appliedJobs.add(modalJobId);
      localStorage.setItem('jb_applied', JSON.stringify([...appliedJobs]));
      const j = allJobs.find(x=>x.id===modalJobId);
      document.getElementById('modal-success-desc').textContent =
        `Your application for "${j?.title || 'the role'}" has been submitted. We'll be in touch soon!`;
      document.getElementById('modal-form-wrap').style.display = 'none';
      document.getElementById('modal-success').classList.add('visible');
      document.querySelectorAll(`[data-id="${modalJobId}"]`).forEach(card=>{
        card.classList.add('applied');
        const applyBtn = card.querySelector('.apply-btn-card');
        if (applyBtn) { applyBtn.textContent = '✓ Applied'; applyBtn.classList.add('applied-state'); }
        const tagsEl = card.querySelector('.card-tags');
        if (tagsEl && !tagsEl.querySelector('.tag-applied')) {
          tagsEl.insertAdjacentHTML('beforeend','<span class="tag tag-applied">✓ Applied</span>');
        }
      });
      showToast('Application submitted! 🎉');
    } else {
      document.getElementById('modal-form-wrap').style.display = 'none';
      document.getElementById('modal-error').classList.add('visible');
      resetSubmitBtn();
    }
  }, 1800);
}

// ─────────────────────────────────────────
// SIDEBAR (mobile)
// ─────────────────────────────────────────
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const btn = document.getElementById('filter-toggle-btn');
  const open = sidebar.classList.toggle('open');
  overlay.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
  document.getElementById('filter-toggle-btn').setAttribute('aria-expanded','false');
}

// ─────────────────────────────────────────
// KEYBOARD
// ─────────────────────────────────────────
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('modal-overlay').classList.contains('open')) closeModal();
      else if (document.getElementById('sidebar').classList.contains('open')) closeSidebar();
    }
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      document.getElementById('search-input').focus();
    }
  });
}

// ─────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────
let toastTimeout;
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  clearTimeout(toastTimeout);
  const t = document.createElement('div');
  t.className = 'toast';
  t.setAttribute('role','status');
  t.textContent = msg;
  document.body.appendChild(t);
  toastTimeout = setTimeout(() => {
    t.classList.add('hide');
    setTimeout(() => t.remove(), 300);
  }, 2500);
}