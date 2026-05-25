const TEAM = [
  {
    name: "Juliet Lauranne",
    role: "frontend Engineer | Team Lead",
    bio: "clean UIs. React + css the comfort zone.",
    github: "https://github.com/laura19",
    initials: "JL",
    color: "emerald",
  },
  {
    name: "Yvonne Karimi",
    role: "Frontend Engineer",
    bio: "Pixel-perfectionist. If it doesn't look good on mobile, it doesn't exist.",
    github: "https://github.com/yvonnekarimimutwiri",
    initials: "YK",
    color: "sky",
  },
  {
    name: "Rufo Abraham",
    role: "Backend Engineer | AI specialist | Acting Team Lead",
    bio: "Databases, scalability, and dark mode. That's the whole personality.",
    github: "https://github.com/rufoabrahamguyo",
    initials: "RA",
    color: "violet",
  },

  {
    name: "Eng. Belam Muia",
    role: "Backend Engineer",
    bio: "Hocus Pocus❌ I focus✅ I debug random backend errors for 5 hours",
    github: "https://github.com/z-rio",
    initials: "BM",
    color: "amber",
  },
  {
    name: "Gideon Mutuku",
    role: "Frontend expert",
    bio: "Backend developers build the engine. Frontend developers make people want to drive the car.",
    github: "https://github.com/Giddy-10",
    initials: "GM",
    color: "teal",
  },
];

const STATS = { members: 5, projects: 1, commits: 200}
const STACK = [
  "React", "Node.js", "TypeScript", "Python", "React Native", "PostgreSQL",
  "Docker", "Tailwind CSS", "Git",
  "Render", "Figma", "Next.js", "MongoDB", "Postgres", "Mysql", "Springboot"
];



const avatarColors = {
  emerald: "bg-emerald-900/60 text-emerald-400 border-emerald-800",
  sky:     "bg-sky-900/60 text-sky-400 border-sky-800",
  violet:  "bg-violet-900/60 text-violet-400 border-violet-800",
  rose:    "bg-rose-900/60 text-rose-400 border-rose-800",
  amber:   "bg-amber-900/60 text-amber-400 border-amber-800",
  teal:    "bg-teal-900/60 text-teal-400 border-teal-800",
};


function renderTeam() {
  const grid = document.getElementById("team-grid");
  grid.innerHTML = TEAM.map((m, i) => {
    const av = avatarColors[m.color] || avatarColors.emerald;
    return `
    <div class="team-card fade-in bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-2xl p-6" style="transition-delay:${i * 0.07}s">
      <div class="flex items-start gap-4 mb-4">
        <div class="w-12 h-12 rounded-xl border ${av} flex items-center justify-center font-mono font-semibold text-sm flex-shrink-0">
          ${m.initials}
        </div>
        <div>
          <h3 class="font-semibold text-white text-base leading-tight">${m.name}</h3>
          <p class="text-xs text-gray-500 mt-0.5">${m.role}</p>
        </div>
      </div>
      <p class="text-gray-500 text-sm leading-relaxed mb-5">${m.bio}</p>
      <div class="flex gap-3">
        <a href="${m.github}" target="_blank" aria-label="GitHub" class="text-gray-600 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
      </div>
    </div>`;
  }).join("");

  observeFadeIns();
}


function renderStack() {
  const grid = document.getElementById("stack-grid");
  grid.innerHTML = STACK.map(tech => `
    <span class="stack-pill border border-gray-700 text-gray-400 rounded-full px-4 py-2 text-sm font-mono cursor-default">
      ${tech}
    </span>
  `).join("");
}


function animateCounter(el, target, suffix = "") {
  let current = 0;
  const step = Math.ceil(target / 50);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString() + suffix;
    if (current >= target) clearInterval(timer);
  }, 30);
}

function startCounters() {
  animateCounter(document.getElementById("counter-members"), STATS.members);
  animateCounter(document.getElementById("counter-projects"), STATS.projects);
  animateCounter(document.getElementById("counter-commits"), STATS.commits, "+");
}


function observeFadeIns() {
  const els = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}


function observeCounters() {
  const statsSection = document.querySelector(".stat-card");
  if (!statsSection) return;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startCounters();
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  observer.observe(statsSection);
}



function initNavbar() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });
}


function initMobileMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", isOpen);
    iconOpen.classList.toggle("hidden", !isOpen);
    iconClose.classList.toggle("hidden", isOpen);
  });

  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    });
  });
}


document.getElementById("year").textContent = new Date().getFullYear();


renderTeam();
renderStack();
observeFadeIns();
observeCounters();
initNavbar();
initMobileMenu();