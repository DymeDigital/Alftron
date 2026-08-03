/* ---------------- Products catalogue ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('[data-product-grid]');
  if (!grid) return;

  const categories = [
    {
      id: 'hose-reels',
      label: 'Fire Hose Reels',
      tagline: 'Fixed, swing and stainless steel hose reels, plus the covers, valve boxes and spares to keep them ready.',
      groups: [
        { title: 'Fire Hose Reels', items: [
          'Fixed Fire Hose Reel (Standard Type)',
          'Swing Type Fire Hose Reel',
          'Stainless Steel Fire Hose Reel'
        ]},
        { title: 'Fire Hose Reel Accessories', items: [
          'Fire Hose Reel PVC Cover',
          'Fire Hose Reel CP Valve Box with Glass',
          'Fire Hose Reel Spares'
        ]}
      ]
    },
    {
      id: 'cabinets',
      label: 'Cabinets',
      tagline: 'Extinguisher, hose reel and marine cabinets in fibreglass, plastic, polyurethane and steel.',
      groups: [
        { title: 'Fiberglass Fire Extinguisher Cabinets', items: [
          '4.5 kg Fiberglass Fire Extinguisher Cabinet',
          '5 kg Fiberglass Fire Extinguisher Cabinet',
          '9 kg Fiberglass Fire Extinguisher Cabinet',
          'Double-Door Fiberglass Fire Extinguisher Cabinet (9 kg)'
        ]},
        { title: 'Plastic Fire Extinguisher Cabinets', items: [
          '4.5 kg Plastic Fire Extinguisher Cabinet',
          '9 kg Plastic Fire Extinguisher Cabinet',
          'Double 9 kg Plastic Fire Extinguisher Cabinet'
        ]},
        { title: 'Polyurethane Fire Extinguisher Cabinets', items: [
          '9 kg Truck Polyurethane Fire Extinguisher Cabinet'
        ]},
        { title: 'Steel Fire Extinguisher Cabinets', items: [
          '4.5 kg Single Steel Fire Extinguisher Cabinet',
          '4.5 kg Double Steel Fire Extinguisher Cabinet',
          '9 kg Single Steel Fire Extinguisher Cabinet',
          '9 kg Double Steel Fire Extinguisher Cabinet'
        ]},
        { title: 'Fire Hose Reel Cabinets', items: [
          'Fiberglass Fire Hose Reel Open Back Cabinet',
          'Fiberglass Fire Hose Reel Closed Back Cabinet',
          'Polyurethane Fire Hose Reel Closed Back Cabinet'
        ]},
        { title: 'Fiberglass Marine Cabinets', items: [
          'Marine Type 1 Fiberglass Cabinet (H: 47 cm | D: 25 cm | W: 56.5 cm)',
          'Marine Type 2 Fiberglass Cabinet (H: 56.5 cm | D: 25 cm | W: 56.5 cm)',
          'Marine Type 3 Fiberglass Cabinet (H: 62 cm | D: 46 cm | W: 59.5 cm)'
        ]},
        { title: 'Plastic Marine Cabinets', items: [
          'Marine Type 1 Plastic Cabinet (H: 52 cm | D: 21 cm | W: 67 cm)',
          'Marine Type 2 Plastic Cabinet (H: 52 cm | D: 27.5 cm | W: 67 cm)',
          'Marine Type 3 Plastic Cabinet (H: 52 cm | D: 34 cm | W: 67 cm)'
        ]}
      ]
    },
    {
      id: 'extinguishers',
      label: 'Fire Extinguishers',
      tagline: 'DCP, CO₂, lithium battery, foam and specialist extinguishers, plus brackets, covers and spares.',
      groups: [
        { title: 'Dry Chemical Powder (DCP) Fire Extinguishers', items: [
          '0.6 kg DCP Fire Extinguisher',
          '1 kg DCP Fire Extinguisher',
          '1.5 kg DCP Fire Extinguisher',
          '2.5 kg DCP Fire Extinguisher',
          '4.5 kg DCP Fire Extinguisher',
          '9 kg DCP Fire Extinguisher',
          '12 kg DCP Fire Extinguisher',
          '25 kg DCP Trolley Unit',
          '50 kg DCP Trolley Unit'
        ]},
        { title: 'Carbon Dioxide (CO₂) Fire Extinguishers', items: [
          '2 kg CO₂ Fire Extinguisher',
          '5 kg CO₂ Fire Extinguisher',
          '10 kg CO₂ Trolley Unit',
          'Twin 10 kg CO₂ Trolley Unit (2 × 10 kg)',
          '30 kg CO₂ Trolley Unit',
          '45 kg CO₂ Trolley Unit'
        ]},
        { title: 'Lithium Battery Fire Extinguishers', items: [
          '500 ml Lithium Battery Fire Extinguisher',
          '1 L Lithium Battery Fire Extinguisher',
          '2 L Lithium Battery Fire Extinguisher',
          '6 L Lithium Battery Fire Extinguisher',
          '9 L Lithium Battery Fire Extinguisher',
          '25 L Lithium Battery Trolley Unit'
        ]},
        { title: 'All Fires Fire Extinguishers', items: [
          '500 ml All Fires Fire Extinguisher',
          '2 L All Fires Fire Extinguisher',
          '6 L All Fires Fire Extinguisher',
          '9 L All Fires Fire Extinguisher'
        ]},
        { title: 'Foam Fire Extinguishers', items: [
          '9 L Foam Fire Extinguisher',
          '25 L Foam Trolley Unit',
          '50 L Foam Trolley Unit',
          '100 L Mobile Foam Unit',
          '200 L Mobile Foam Unit',
          '300 L Mobile Foam Unit'
        ]},
        { title: 'Other Fire Extinguishers', items: [
          '6 L Wet Chemical Fire Extinguisher',
          '9 L Water Fire Extinguisher',
          '6 L Class F Fire Extinguisher',
          '9 kg Class D Fire Extinguisher',
          '50 kg D-Class Powder Trolley Unit'
        ]},
        { title: 'Fire Extinguisher Accessories & Spares', items: [
          'Fire Extinguisher Covers',
          'Fire Extinguisher Wall Brackets',
          'Vehicle Fire Extinguisher Brackets',
          'Fire Extinguisher Backing Boards',
          'Fire Extinguisher Spares'
        ]}
      ]
    },
    {
      id: 'signage',
      label: 'Signage & Photoluminescent Signage',
      tagline: 'Fire, information, mandatory, prohibitory and warning signs, with frames and custom options.',
      groups: [
        { title: 'Types of Signs', items: [
          'Fire Signs', 'Information Signs', 'Mandatory Signs', 'Prohibitory Signs', 'Warning Signs'
        ]},
        { title: 'Available Sizes', items: ['190 mm', '290 mm'] },
        { title: 'Custom Signs', items: [
          'Custom signs can be manufactured according to client requirements.'
        ]},
        { title: 'Sign Frames Available', items: [
          'Aluminium Sign Frames', 'Black Aluminium Sign Frames'
        ]},
        { title: 'Available Frame Sizes', items: ['190 mm', '290 mm'] }
      ]
    },
    {
      id: 'hydrants',
      label: 'Fire Hydrant Valves',
      tagline: 'Brass and cast iron hydrant valves, booster connectors and aluminium standpipes.',
      groups: [
        { title: 'Hydrant Valves & Connectors', items: [
          '50 mm Marine Hydrant Valve',
          '80 mm Right Angle Brass Hydrant Valve',
          '80 mm Tamper-Proof Brass Hydrant Valve & Key',
          '80 mm Oblique Brass Hydrant Valve',
          '80 mm Right Angle Cast Iron Hydrant Valve & Adapter',
          'Double Booster Connector',
          'Booster Connectors'
        ]},
        { title: 'Standpipes', items: [
          'Fixed Head Light Aluminium Standpipe (Available in Different Sizes)',
          'Swivel Head Light Aluminium Standpipe (Available in Different Sizes)'
        ]}
      ]
    },
    {
      id: 'hoses',
      label: 'Lay Flat Hoses & Couplings',
      tagline: 'Lay flat hoses in various materials, pressure ratings and sizes, with matching couplings.',
      groups: [
        { title: 'Lay Flat Hoses & Couplings', items: [
          'Lay Flat Hoses Available in Various Pressure Ratings (Bar)',
          'Different Material Types of Lay Flat Hoses Available',
          'Multiple Sizes and Pressure Ratings Available to Suit Client Requirements',
          'Couplings Available for Lay Flat Hoses'
        ], note: 'Contact us with your requirements, and we will recommend the suitable hose type, material, size, and pressure rating for your application.' }
      ]
    },
    {
      id: 'nozzles',
      label: 'Branch Pipes & Nozzles',
      tagline: 'Universal, jet spray, curtain and turbo nozzles, monitors, dividers and foam-making equipment.',
      groups: [
        { title: 'Branch Pipes & Nozzles', items: [
          'Universal Nozzles',
          'Jet Spray Curtain Nozzles',
          'Curtain Nozzles',
          'Turbo Nozzles',
          'Foam Making Equipment',
          'Monitors',
          'Dividers & Collectors'
        ], note: 'Multiple nozzles and branch pipes available to suit different firefighting applications.' }
      ]
    },
    {
      id: 'blankets',
      label: 'Fire Blankets',
      tagline: 'Standard fire blankets plus lithium-ion and EV battery fire blankets for thermal runaway containment.',
      groups: [
        { title: 'Standard Fire Blankets', items: [
          'Standard Fire Blanket – 0.9 m × 0.9 m',
          'Standard Fire Blanket – 1.2 m × 1.2 m',
          'Standard Fire Blanket – 1.2 m × 1.8 m',
          'Standard Fire Blanket – 1.8 m × 1.8 m'
        ]},
        { title: 'Lithium Battery Fire Blankets', items: [
          'Lithium-Ion Battery Fire Blanket – 1.7 m × 2.0 m',
          'Lithium-Ion Battery Fire Blanket – 2.6 m × 3.3 m',
          'Lithium-Ion Battery Fire Blanket – 6.0 m × 8.0 m'
        ], features: [
          'Designed for lithium-ion battery fire containment and thermal runaway incidents.',
          'Lithium-ion battery fires cannot typically be extinguished by conventional fire extinguishers alone — these blankets help contain the fire, suppress flames, reduce radiant heat, and limit the spread of fire while emergency services manage the incident.',
          'Withstands temperatures of up to 1,500°C.',
          'Provides thermal protection for 30 minutes to several hours, depending on the intensity of the fire and surrounding conditions.',
          'Suitable for lithium battery storage areas, warehouses, workshops, factories, laboratories, and industrial facilities.'
        ]},
        { title: 'Electric Vehicle (EV) Lithium Battery Fire Blankets', items: [
          'EV Lithium-Ion Battery Fire Blanket – 6.0 m × 8.0 m',
          'EV Lithium-Ion Battery Fire Blanket – 10.0 m × 11.0 m'
        ], features: [
          'Designed specifically for electric vehicle (EV) battery fire containment.',
          'EV lithium-ion battery fires cannot typically be extinguished by conventional firefighting methods alone — these blankets help contain flames, reduce heat transfer, and prevent fire spread while the battery is allowed to cool under controlled conditions.',
          'Withstands temperatures of up to 1,500°C.',
          'Provides thermal protection for 30 minutes to several hours, depending on the intensity of the fire and surrounding conditions.',
          'Suitable for electric vehicles, EV charging stations, workshops, dealerships, parking facilities, transport companies, and emergency response teams.'
        ]}
      ]
    },
    {
      id: 'firstaid',
      label: 'First Aid',
      tagline: 'First aid kits, refills and spill kits for workplaces, vehicles and healthcare facilities.',
      groups: [
        { title: 'First Aid', items: [
          'First Aid Kit Bag',
          'Plastic First Aid Kit',
          'Metal First Aid Kit',
          'First Aid Kit Contents (Refills)',
          'Complete First Aid Kits',
          'Spill Kits'
        ], note: 'Available in various sizes and configurations to suit workplaces, commercial buildings, industrial facilities, vehicles, schools, healthcare facilities, and other applications.' }
      ]
    }
  ];

  const escapeHtml = (str) => String(str).replace(/[&<>"']/g, ch => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
  ));

  const groupMarkup = (g) => `
    <div class="product-group">
      <h4>${escapeHtml(g.title)}</h4>
      <ul class="service-item__includes">
        ${g.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
      ${g.features ? `
        <h4>Features</h4>
        <ul class="service-item__includes">
          ${g.features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
        </ul>
      ` : ''}
      ${g.note ? `<p class="service-item__apps">${escapeHtml(g.note)}</p>` : ''}
    </div>
  `;

  const cardMarkup = (c, i) => `
    <article class="service-item" data-cat="${c.id}">
      <button class="service-item__head" type="button" aria-expanded="false" aria-controls="prod-panel-${i}" id="prod-head-${i}">
        <span class="service-item__tag">Product Category</span>
        <span class="service-item__name">${escapeHtml(c.label)}</span>
        <span class="service-item__chev" aria-hidden="true"></span>
      </button>
      <div class="service-item__panel" id="prod-panel-${i}" role="region" aria-labelledby="prod-head-${i}" hidden>
        <div class="service-item__panel-inner">
          <p class="service-item__desc">${escapeHtml(c.tagline)}</p>
          ${c.groups.map(groupMarkup).join('')}
        </div>
      </div>
    </article>
  `;

  grid.innerHTML = categories.map((c, i) => cardMarkup(c, i)).join('');

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
