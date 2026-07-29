const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('pageNavbar');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navMenu?.classList.toggle('open');
});

// Close the mobile menu after tapping any link inside it
navMenu?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navMenu.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
});

window.addEventListener('scroll', () => {
  if (!navbar) return;
  if (window.scrollY > 30) {
    navbar.classList.add('navbar--active');
  } else {
    navbar.classList.remove('navbar--active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.fade-up');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealItems.forEach(el => el.classList.add('show'));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    });

    revealItems.forEach(el => observer.observe(el));
  }
});

/* ---------------- Services section ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('[data-service-grid]');
  const filterBar = document.querySelector('[data-service-filter]');
  const countEl = document.querySelector('[data-service-count]');
  if (!grid || !filterBar) return;

  const categories = [
    { id: 'all', label: 'All services' },
    { id: 'fire', label: 'Detection & Suppression' },
    { id: 'water', label: 'Hydrants, Storage & Pumps' },
    { id: 'protect', label: 'Passive, Equipment & Signage' },
    { id: 'comply', label: 'Design, Compliance & Service' },
    { id: 'security', label: 'Security & Electrical' }
  ];

  const services = [
    { cat: 'fire', name: 'Fire Detection Systems',
      desc: 'Early warning is the foundation of any fire strategy. We design and install conventional and addressable detection systems that identify smoke, heat or flame the moment it appears and raise the alarm before a fire can spread. From aspirating (VESDA) systems that sample the air in sensitive spaces to beam detectors covering large open areas, every system is engineered for reliable, false-alarm-resistant coverage and clear evacuation signalling.',
      includes: ['Conventional & Addressable Fire Alarm Systems', 'Aspirating Smoke Detection (VESDA)', 'Beam Smoke Detection', 'Smoke, Heat & Flame Detection', 'Manual Call Points & Alarm Devices'],
      applications: 'Commercial buildings, offices, warehouses, shopping centres, schools, hospitals, hotels, factories, data centres and industrial facilities.' },
    { cat: 'fire', name: 'Fire Sprinkler Systems',
      desc: 'Sprinklers control or extinguish a fire automatically at its source, buying time for people to escape and limiting damage to property. We install wet, dry, pre-action and specialised high-challenge systems such as ESFR and in-rack sprinklers, each matched to the building\u2019s hazard level, occupancy and stored contents for dependable, code-compliant protection.',
      includes: ['Wet Pipe Systems', 'Dry Pipe Systems', 'Pre-Action Systems', 'ESFR Sprinkler Systems', 'In-Rack Sprinkler Systems'],
      applications: 'Warehouses, distribution centres, factories, shopping centres, offices, residential developments, hospitals and high-rise buildings.' },
    { cat: 'fire', name: 'Gas Suppression Systems',
      desc: 'Where water would cause unacceptable damage, clean-agent gas suppression protects critical equipment and irreplaceable assets. Systems like FM-200, Novec 1230 and inert gas flood a protected space and extinguish fire in seconds without leaving residue or harming electronics. We also carry out room integrity testing to confirm the enclosure will hold the agent long enough to work.',
      includes: ['FM-200 Systems', 'Novec 1230 Systems', 'Inert Gas Systems', 'CO\u2082 Systems', 'Room Integrity Testing'],
      applications: 'Data centres, server rooms, control rooms, electrical switch rooms, substations, telecommunications facilities, museums, archives and critical infrastructure.' },
    { cat: 'fire', name: 'Foam Fire Protection Systems',
      desc: 'Flammable liquids need more than water. Foam systems blanket a fuel surface to smother the fire and suppress dangerous vapours, preventing re-ignition. We design low-, medium- and high-expansion foam systems, monitors and proportioning equipment sized to the specific hazard and liquid being stored or handled.',
      includes: ['Low, Medium & High Expansion Foam Systems', 'Foam Monitors', 'Foam Proportioning Systems'],
      applications: 'Fuel depots, solvent plants, chemical plants, oil & gas facilities, aviation hangars, tank farms and hazardous liquid storage areas.' },
    { cat: 'fire', name: 'Deluge Systems',
      desc: 'For the highest-hazard areas, deluge systems release a large volume of water through open nozzles the instant a fire is detected, drenching the entire protected zone at once. They are ideal for cooling and protecting high-value equipment and areas where fire can spread with extreme speed.',
      includes: ['Deluge Valve Systems', 'Water Spray Systems', 'Open Nozzle Systems'],
      applications: 'Power stations, transformers, conveyor systems, petrochemical facilities, turbine rooms, fuel loading bays and other high-hazard industrial areas.' },

    { cat: 'water', name: 'Fire Hydrant & Hose Reel Systems',
      desc: 'First-response firefighting equipment gives occupants and fire services the means to tackle a fire directly. We supply and install hydrants, hose reels, landing valves and hose cabinets, correctly positioned and pressure-tested so they are ready and reliable when they are needed most.',
      includes: ['Fire Hydrants', 'Fire Hose Reels', 'Landing Valves', 'Layflat Hose Systems', 'Hose Cabinets'],
      applications: 'Commercial buildings, factories, warehouses, schools, hospitals, shopping centres, industrial plants and residential developments.' },
    { cat: 'water', name: 'Fire Water Storage Systems',
      desc: 'Every fire protection system depends on a guaranteed water supply. We design and build dedicated fire water storage \u2014 above-ground and underground tanks, ring mains and reticulation \u2014 that ensures the required volume and pressure are always available to feed sprinklers, hydrants and pumps.',
      includes: ['Fire Water Storage Tanks', 'Underground Water Storage', 'Fire Water Ring Mains', 'Fire Water Reticulation'],
      applications: 'Industrial facilities, warehouses, manufacturing plants, logistics centres, commercial developments and remote sites.' },
    { cat: 'water', name: 'Fire Pumps & Pump Houses',
      desc: 'Fire pumps deliver the flow and pressure that make a water-based system effective. We install complete electric and diesel pump sets, jockey pumps and controllers, and build turnkey pump houses \u2014 all tested and commissioned to ensure they start on demand and perform to specification.',
      includes: ['Electric Fire Pumps', 'Diesel Fire Pumps', 'Jockey Pumps', 'Pump Controllers', 'Complete Pump House Installations'],
      applications: 'Any facility requiring dedicated fire water supply, including warehouses, factories, commercial buildings, industrial plants and high-rise developments.' },

    { cat: 'protect', name: 'Passive Fire Protection',
      desc: 'Passive protection is built into the structure itself, containing fire and smoke so it cannot spread between compartments and keeping escape routes clear. We carry out fire stopping, penetration sealing, fire damper installation and compartmentation, and fit fire-rated doors \u2014 the measures that give people time to evacuate safely.',
      includes: ['Fire Stopping', 'Fire-Rated Doors', 'Penetration Sealing', 'Fire Dampers', 'Fire & Smoke Compartmentation'],
      applications: 'Hospitals, hotels, office buildings, apartment blocks, factories, shopping centres and data centres.' },
    { cat: 'protect', name: 'Fire Equipment',
      desc: 'The right portable equipment, correctly placed and maintained, stops small fires becoming large ones. We supply and service extinguishers, fire blankets, hose reels and cabinets, matching each unit to the fire risk in that area and keeping everything within service date and ready for use.',
      includes: ['Fire Extinguishers', 'Fire Blankets', 'Hose Reels', 'Fire Hydrants', 'Cabinets & Accessories'],
      applications: 'Suitable for all commercial, industrial, residential, healthcare, hospitality and educational facilities.' },
    { cat: 'protect', name: 'Fire Safety Signage',
      desc: 'Clear signage guides people to safety when every second counts. We supply and install photoluminescent exit and equipment signs, directional markers and safety notices that stay visible in smoke or power failure and keep your premises compliant.',
      includes: ['Photoluminescent Signs', 'Emergency Exit Signs', 'Fire Equipment Signs', 'Directional Safety Signs'],
      applications: 'All workplaces, public buildings, industrial facilities, schools, hospitals, shopping centres and residential complexes.' },

    { cat: 'comply', name: 'Emergency Evacuation Plans',
      desc: 'A fire system is only as good as the plan behind it. We produce clear evacuation drawings, fire action plans and assembly-point layouts, and document the procedures your staff need to follow so that everyone knows exactly what to do and where to go in an emergency.',
      includes: ['Evacuation Drawings', 'Fire Action Plans', 'Assembly Point Layouts', 'Emergency Procedures'],
      applications: 'Offices, factories, warehouses, schools, hospitals, hotels, shopping centres and public buildings.' },
    { cat: 'comply', name: 'Fire Risk Assessments',
      desc: 'A thorough risk assessment identifies the fire hazards specific to your site and shows you how to address them. Our assessors survey the premises, evaluate the level of risk and provide clear, prioritised recommendations to bring you into compliance and keep people safe.',
      includes: ['Fire Hazard Identification', 'Site Risk Assessments', 'Compliance Recommendations', 'Fire Safety Surveys'],
      applications: 'Commercial, industrial, healthcare, educational, hospitality and residential properties.' },
    { cat: 'comply', name: 'Fire Safety Audits & Compliance',
      desc: 'Regulators and insurers expect proof that your fire protection meets the required standards. We carry out SANS and insurance compliance audits, assess installed systems and provide the documented reporting you need to satisfy inspections, renew cover and demonstrate due diligence.',
      includes: ['SANS Compliance Audits', 'Insurance Compliance Inspections', 'Fire System Assessments', 'Compliance Reporting'],
      applications: 'Businesses requiring regulatory compliance, insurance approvals and routine fire safety inspections.' },
    { cat: 'comply', name: 'System Design & Hydraulic Calculations',
      desc: 'Sound engineering underpins every reliable fire system. Our team prepares full fire protection designs, hydraulic calculations, shop drawings and system layouts \u2014 verifying that pipework, pumps and coverage will perform correctly before a single component is installed.',
      includes: ['Hydraulic Calculations', 'Fire Protection Design', 'Shop Drawings', 'System Layouts', 'Engineering Calculations'],
      applications: 'New developments, building upgrades, industrial plants, warehouses, commercial buildings and specialised fire protection projects.' },
    { cat: 'comply', name: 'Installation, Testing & Commissioning',
      desc: 'We install every system to specification and prove it works before handover. Pressure testing, functional testing and full commissioning confirm that each component performs as designed, and a structured client handover ensures you understand and can operate your new system with confidence.',
      includes: ['System Installation', 'Pressure Testing', 'Functional Testing', 'System Commissioning', 'Client Handover'],
      applications: 'Applicable to all fire protection systems across commercial, industrial and residential developments.' },
    { cat: 'comply', name: 'Inspection, Servicing & Maintenance',
      desc: 'Fire systems must work on the one day they are needed, which is why regular servicing is essential and legally required. We provide routine inspections, preventative maintenance, annual servicing and compliance testing, along with repairs and upgrades that keep your systems dependable year after year.',
      includes: ['Routine Inspections', 'Preventative Maintenance', 'Annual Servicing', 'Repairs & Upgrades', 'Compliance Testing'],
      applications: 'Existing fire protection systems in commercial, industrial, healthcare, educational and residential facilities.' },
    { cat: 'comply', name: '24/7 Emergency Call-Out Services',
      desc: 'When something goes wrong, fast expert response keeps you protected and compliant. Our emergency team is available around the clock for fault finding, repairs and system restoration, minimising downtime and making sure your protection is never left offline.',
      includes: ['Emergency Repairs', 'Fault Finding', 'System Restoration', 'Breakdown Response', 'Technical Support'],
      applications: 'Emergency support for all installed fire protection systems, ensuring minimal downtime and continuous compliance.' },

    { cat: 'security', name: 'CCTV Systems',
      desc: 'Modern surveillance both deters intruders and gives you a clear record when incidents occur. We install IP and HD camera systems, thermal cameras for low-light and perimeter use, and video analytics that turn footage into useful alerts \u2014 all viewable remotely from wherever you are.',
      includes: ['IP & HD CCTV', 'Thermal Cameras', 'Video Analytics'],
      applications: 'Commercial buildings, warehouses, factories, shopping centres, schools, hospitals, residential estates and industrial facilities.' },
    { cat: 'security', name: 'Access Control Systems',
      desc: 'Control who goes where, and keep a record of every entry. From card and biometric readers to facial recognition, turnstiles and boom gates, we design access control that secures your premises without slowing legitimate movement, and integrates with your wider security setup.',
      includes: ['Card Access', 'Biometric Readers', 'Facial Recognition', 'Turnstiles', 'Boom Gates'],
      applications: 'Office buildings, factories, warehouses, hospitals, schools, gated estates and high-security facilities.' },
    { cat: 'security', name: 'Intruder Alarm Systems',
      desc: 'A well-designed alarm system detects intrusion early and triggers an immediate response. We install wired and wireless alarms, perimeter detection and outdoor beams, and integrate monitoring so that any breach is escalated fast \u2014 protecting your property around the clock.',
      includes: ['Wired & Wireless Alarm Systems', 'Perimeter Detection', 'Outdoor Beams', 'Alarm Monitoring Integration'],
      applications: 'Residential properties, offices, retail stores, warehouses, factories and commercial premises.' },
    { cat: 'security', name: 'Electrical Systems',
      desc: 'Reliable electrical infrastructure keeps your fire and security systems \u2014 and your operations \u2014 running. We handle industrial electrical installations, control panels, power distribution and cable installation, backed by ongoing electrical maintenance to keep everything safe and compliant.',
      includes: ['Industrial Electrical Installations', 'Control Panels', 'Power Distribution', 'Cable Installation', 'Electrical Maintenance'],
      applications: 'Commercial buildings, industrial facilities, warehouses, manufacturing plants and infrastructure projects.' }
  ];

  const catLabel = (id) => (categories.find(c => c.id === id) || {}).label || '';

  let activeCat = 'all';

  // Build filter tabs
  filterBar.innerHTML = categories.map(c => `
    <button class="services-tab${c.id === 'all' ? ' is-active' : ''}"
      type="button" role="tab" data-cat="${c.id}"
      aria-selected="${c.id === 'all' ? 'true' : 'false'}">${c.label}</button>
  `).join('');

  const escapeHtml = (str) => str.replace(/[&<>"']/g, ch => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
  ));

  const cardMarkup = (s, i) => `
    <article class="service-item" data-cat="${s.cat}">
      <button class="service-item__head" type="button" aria-expanded="false" aria-controls="svc-panel-${i}" id="svc-head-${i}">
        <span class="service-item__tag">${escapeHtml(catLabel(s.cat))}</span>
        <span class="service-item__name">${escapeHtml(s.name)}</span>
        <span class="service-item__chev" aria-hidden="true"></span>
      </button>
      <div class="service-item__panel" id="svc-panel-${i}" role="region" aria-labelledby="svc-head-${i}" hidden>
        <div class="service-item__panel-inner">
          <p class="service-item__desc">${escapeHtml(s.desc)}</p>
          <h4>Includes</h4>
          <ul class="service-item__includes">
            ${s.includes.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
          <h4>Applications</h4>
          <p class="service-item__apps">${escapeHtml(s.applications)}</p>
        </div>
      </div>
    </article>
  `;

  const COLLAPSED_LIMIT = 6;
  let showAll = false;

  // Build the show-more toggle and insert it right after the grid
  const toggleWrap = document.createElement('div');
  toggleWrap.className = 'services-more';
  toggleWrap.hidden = true;
  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'services-more__btn';
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleWrap.appendChild(toggleBtn);
  grid.insertAdjacentElement('afterend', toggleWrap);

  const render = () => {
    const full = services.filter(s => activeCat === 'all' || s.cat === activeCat);
    const limited = !showAll && full.length > COLLAPSED_LIMIT;
    const list = limited ? full.slice(0, COLLAPSED_LIMIT) : full;

    grid.innerHTML = list.map((s) => cardMarkup(s, services.indexOf(s))).join('');

    if (countEl) {
      countEl.textContent = activeCat === 'all'
        ? `Showing all ${services.length} services`
        : `${full.length} service${full.length === 1 ? '' : 's'} in ${catLabel(activeCat)}`;
    }

    // Show-more / show-less toggle
    if (toggleWrap) {
      if (full.length > COLLAPSED_LIMIT) {
        toggleWrap.hidden = false;
        toggleBtn.textContent = showAll
          ? 'Show fewer services'
          : `Show all ${full.length} services`;
        toggleBtn.setAttribute('aria-expanded', String(showAll));
      } else {
        toggleWrap.hidden = true;
      }
    }
  };

  render();

  // Filter clicks
  filterBar.addEventListener('click', (event) => {
    const tab = event.target.closest('[data-cat]');
    if (!tab) return;
    activeCat = tab.dataset.cat;
    showAll = false;
    filterBar.querySelectorAll('.services-tab').forEach(t => {
      const on = t === tab;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
    });
    render();
  });

  // Show more / fewer
  toggleBtn.addEventListener('click', () => {
    showAll = !showAll;
    render();
    if (!showAll) {
      // Scroll the section back into view so the user isn't stranded mid-page
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Expand / collapse cards (event delegation)
  grid.addEventListener('click', (event) => {
    const head = event.target.closest('.service-item__head');
    if (!head) return;
    const panel = document.getElementById(head.getAttribute('aria-controls'));
    const isOpen = head.getAttribute('aria-expanded') === 'true';
    head.setAttribute('aria-expanded', String(!isOpen));
    if (isOpen) {
      panel.style.maxHeight = null;
      panel.addEventListener('transitionend', function te() {
        panel.hidden = true;
        panel.removeEventListener('transitionend', te);
      });
    } else {
      panel.hidden = false;
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
    head.closest('.service-item').classList.toggle('is-open', !isOpen);
  });
});

/* ---------------- Contact form (Web3Forms) ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const statusEl = document.getElementById('formStatus');
  const submitBtn = document.getElementById('contactSubmit');
  const btnLabel = submitBtn ? submitBtn.querySelector('.btn-label') : null;
  const defaultLabel = btnLabel ? btnLabel.textContent : 'Send Message';

  const setStatus = (msg, type) => {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = 'form-status' + (type ? ' form-status--' + type : '');
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Guard: remind to set the access key
    const key = form.querySelector('input[name="access_key"]');
    if (key && key.value.trim() === 'YOUR_ACCESS_KEY_HERE') {
      setStatus('Form not configured yet: add your Web3Forms access key.', 'error');
      return;
    }

    setStatus('Sending your message…', 'loading');
    if (submitBtn) submitBtn.disabled = true;
    if (btnLabel) btnLabel.textContent = 'Sending…';

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("Thanks — your message has been sent. We'll be in touch shortly.", 'success');
        form.reset();
      } else {
        setStatus(data.message || 'Something went wrong. Please try again or call us directly.', 'error');
      }
    } catch (err) {
      setStatus('Network error. Please check your connection or call us directly.', 'error');
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (btnLabel) btnLabel.textContent = defaultLabel;
    }
  });
});

/* ---------------- About: "More about us" toggle ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('aboutToggle');
  const panel = document.getElementById('aboutMore');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      requestAnimationFrame(() => { panel.style.maxHeight = '0px'; });
      panel.addEventListener('transitionend', function te() {
        panel.hidden = true;
        panel.style.maxHeight = '';
        panel.removeEventListener('transitionend', te);
      });
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'More about us →';
    } else {
      panel.hidden = false;
      panel.style.maxHeight = '0px';
      requestAnimationFrame(() => { panel.style.maxHeight = panel.scrollHeight + 'px'; });
      panel.addEventListener('transitionend', function te() {
        panel.style.maxHeight = 'none';
        panel.removeEventListener('transitionend', te);
      });
      toggle.setAttribute('aria-expanded', 'true');
      toggle.textContent = 'Show less ↑';
    }
  });
});