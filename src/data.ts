import { Project, Service, Testimonial, ProcessStep, StatItem, Partner } from './types';

export const servicesData: Service[] = [
  {
    id: 'solar',
    title: 'Solar Energy Solutions',
    icon: 'Sun',
    description: 'High-efficiency commercial and residential solar installations designed to maximize power output and long-term utility savings.',
    features: [
      'Industrial Rooftop Solar Array Design',
      'Net-Metering & Feed-in Tariff Optimization',
      'High-Efficiency Tier-1 Bifacial Solar Panels',
      'Real-time Performance Monitoring Systems'
    ],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200',
    detailedDesc: 'Our solar design and installation service delivers optimized PV generation setups tailored to your specific commercial facility or residential estate. Utilizing top-tier bifacial panels and smart micro-inverters, we capture more sunlight per square foot to offset up to 100% of your grid consumption.',
    benefits: [
      'Reduce electrical bills immediately',
      'Lock in flat-rate power for 25+ years',
      'Achieve clean corporate sustainability compliance',
      'Significant government tax grants (such as clean energy tax credits)'
    ]
  },
  {
    id: 'storage',
    title: 'Energy Storage Systems',
    icon: 'Battery',
    description: 'Reliable utility-scale, industrial, and residential battery storage solutions for uninterrupted backup power, peak shaving, and energy arbitrage.',
    features: [
      'Peak Shaving & Demand Charge Reduction',
      'Microgrid Integration & Islanding Mode',
      'Tesla Powerpack & Megapack Certifications',
      'Auto-Switchover UPS Clean Backup Power'
    ],
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1200',
    detailedDesc: 'Battery energy storage is key to energy independence. We deploy modular lithium-iron-phosphate (LFP) storage units that intelligently discharge during peak tariff hours to save peak demand charges, and stand prepared as an ultra-fast automatic backup in case of grid blackouts.',
    benefits: [
      'Eliminate costly grid demand spikes',
      'Insulate operations from momentary brownouts',
      'Store excess solar power to deploy at night',
      'Avoid high-tariff electricity rates via smart dispatch'
    ]
  },
  {
    id: 'wind',
    title: 'Wind Energy Solutions',
    icon: 'Wind',
    description: 'Advanced wind power generation systems, tailored for utility installations, rural microgrids, and off-grid remote settings.',
    features: [
      'Wind Site Assessments & Annual Yield Forecasts',
      'Low Wind-Speed Aerodynamic Turbines',
      'Grid interconnection & Substation Support',
      'Structural Engineering & Multi-turbine Layouts'
    ],
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200',
    detailedDesc: 'Harness consistent, high-capacity breeze currents to power large operations. We conduct comprehensive multi-month site wind profiling and supply state-of-the-art turbines engineered for low startup speeds, ensuring steady output even in moderate wind conditions.',
    benefits: [
      'Complement solar setups with 24/7 winter-dominant yield',
      'Incredibly low spatial footprint on ground level',
      'Extremely high capacity factor relative to capital cost',
      'Decentralized regional power security'
    ]
  },
  {
    id: 'ev-charging',
    title: 'EV Charging Stations',
    icon: 'Zap',
    description: 'Turnkey smart Level 2 and Level 3 DC Fast Charging stations tailored for commercial parking lots, public zones, and fleet depots.',
    features: [
      'L2 Dual-Port & L3 Supercharging Systems',
      'Smart RFID Payment & Software Billing integration',
      'Dynamic Load Balancing to Protect Transformers',
      'Corporate Fleet Electrification Roadmaps'
    ],
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200',
    detailedDesc: 'Provide critical EV charging services to visitors, customers, or company fleets. Our smart charging infrastructure features cloud management networks, permitting direct customer billing, user tracking, and dynamic power distribution that ensures your facility stays within safe electrical load ceilings.',
    benefits: [
      'Attract high-value retail and commercial customers',
      'Unlock a steady stream of secondary parking revenue',
      'Satisfy corporate ESG climate reporting standards',
      'Prepare business fleets for zero-emission cost savings'
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'Commercial Solar Project',
    category: 'Solar Energy',
    location: 'Toronto, Canada',
    capacity: '500 kW Capacity',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
    description: 'State-of-the-art roof-mounted solar array designed for a distribution logistics warehouse. Offset over 85% of their daily operational power draw.',
    impact: 'Reduces 180 metric tons of CO2 footprint annually',
    year: '2024'
  },
  {
    id: 'proj2',
    title: 'Energy Storage System',
    category: 'Battery Storage',
    location: 'Calgary, Canada',
    capacity: '1 MWh Capacity',
    image: 'https://images.unsplash.com/photo-1548613053-220ef358109a?auto=format&fit=crop&q=80&w=800',
    description: 'A grid-scale battery pack providing rapid backup integration for an industrial manufacturing facility. Includes live grid-tariff monitoring.',
    impact: 'Shaved off $45,000 in monthly peak-period billing charges',
    year: '2025'
  },
  {
    id: 'proj3',
    title: 'Wind Energy Project',
    category: 'Wind Generation',
    location: 'Alberta, Canada',
    capacity: '2.5 MW Capacity',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800', // Wind Farm or similar
    description: 'Clean energy high-height wind farm integration consisting of multiple low-noise, active pitch turbines supporting rural cooperative power lines.',
    impact: 'Supplies stable local electricity to 450 residential farms',
    year: '2025'
  },
  {
    id: 'proj4',
    title: 'Industrial Microgrid Grid-Tie',
    category: 'Hybrid Solar-Storage',
    location: 'Vancouver, Canada',
    capacity: '1.2 MW Solar + 2 MWh Storage',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800',
    description: 'A completely autonomous industrial microgrid system combining bifacial rooftop arrays with large energy storage pods to shield food packaging hubs.',
    impact: 'Enables 100% manufacturing resilience in outages up to 7 days',
    year: '2026'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We perform deep utility bill audits, understand your physical structure constraints, and define net-zero consumption goals.',
    details: 'Our engineers audit 12-24 months of electrical data, analyze building envelopes, identify optimal orientation grids, and model local utility tariff structures (peak/off-peak, demand charges) to configure your system limits correctly.',
    icon: 'MessageSquareIcon'
  },
  {
    number: '02',
    title: 'Planning & Design',
    description: 'Our engineering experts leverage advanced CAD projection software to design custom multi-tech energy solutions.',
    details: 'Using solar radiant models, wind yield simulators, and storage simulation programs, we present transparent, guaranteed financial ROI spreadsheets, custom system schematics, zoning applications, and utility grid interconnection diagrams.',
    icon: 'FileTextIcon'
  },
  {
    number: '03',
    title: 'Installation',
    description: 'Our certified, red-seal electricians and solar crews safely construct and commission systems with minimal disruption.',
    details: 'Every step is managed with precision. We install racking, wire hybrid smart inverters, lock down heavy storm foundations of wind structures, and double-calibrate high-tech safety isolators before our formal utility grid connection tests.',
    icon: 'SettingsIcon'
  },
  {
    number: '04',
    title: 'Support & Maintenance',
    description: '24/7 smart IoT dashboard tracking, periodic physical checkups, and efficiency optimization sweeps.',
    details: 'We place remote monitoring sensors on your system to diagnose performance dips. Our clients gain access to emergency response hotlines, automated thermal scanner inspections, inverter hardware firmware updates, and efficiency warranty guarantees.',
    icon: 'CheckCircleIcon'
  }
];

export const statItems: StatItem[] = [
  {
    value: '500+',
    label: 'Projects Completed',
    description: 'High-performing commercial, solar, battery storage, and infrastructure jobs across Canada.'
  },
  {
    value: '150+',
    label: 'Happy Clients',
    description: 'Logistics hubs, agricultural grids, local municipalities, and medium-to-large business estates.'
  },
  {
    value: '15+',
    label: 'Years of Experience',
    description: 'Pioneering clean energy solutions with engineering excellence and certified electrical crews.'
  },
  {
    value: '24/7',
    label: 'Support & Monitoring',
    description: 'Cloud connected operations center constantly monitoring grid integrity and clean production.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test1',
    name: 'James Thompson',
    role: 'Operations Manager',
    company: 'Apex Logistics Canada',
    rating: 5,
    text: 'GlobalPoint Energy delivered an outstanding commercial solar layout for our distribution facilities. Their design maximized our roof space and their team guided us through utility agreements flawlessly. Our bills are 65% lower than last season.',
    avatar: 'https://images.unsplash.com/photo-1547037579-f0fc020ac3be?auto=format&fit=crop&q=80&w=200',
    location: 'Toronto, ON'
  },
  {
    id: 'test2',
    name: 'Sarah Mitchell',
    role: 'Facility Engineering Director',
    company: 'Pinnacle Agritech Labs',
    rating: 5,
    text: 'Deploying the GlobalPoint battery backup system has saved us dozens of times from localized line sags. The peak-shaving algorithm has paid for itself in record time by automatically dispatching storage during critical hours.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    location: 'Calgary, AB'
  },
  {
    id: 'test3',
    name: 'David Tremblay',
    role: 'Chief Representative',
    company: 'Lakeland Green Cooperative',
    rating: 5,
    text: 'For our combined wind and solar rural grid, GlobalPoint acted as an exquisite turnkey partner. They managed heavy civics, geotechnical foundation tests, and community zoning perfectly. Outstanding communication and technical know-how.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    location: 'Lethbridge, AB'
  }
];

export const partnersData: Partner[] = [
  {
    name: 'Canadian Solar',
    logoType: 'CanadianSolar',
    description: 'Premium red-seal high-density solar modules certified for rugged subzero environments.'
  },
  {
    name: 'Tesla Energy',
    logoType: 'Tesla',
    description: 'Certified installers of Tesla Commercial Megapack & Powerpack utility storage.'
  },
  {
    name: 'Enphase Energy',
    logoType: 'Enphase',
    description: 'Cutting-edge smart microinverters and software trackers with maximum localized safety panels.'
  },
  {
    name: 'Schneider Electric',
    logoType: 'Schneider',
    description: 'World-renowned industrial high-safety grid tie components, transformers, and breaker enclosures.'
  }
];
