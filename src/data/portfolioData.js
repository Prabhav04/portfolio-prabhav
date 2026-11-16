export const PORTFOLIO_DATA = {
  profile: {
    name: "Prabhav Narayanan",
    systemId: "PRABHAV.exe",
    version: "v2025.1.0-CRT",
    title: "Frontend Developer & Multi-Instrumentalist",
    subtitle: "Creative Technologist // Rhythm & Logic",
    location: "Kerala, India",
    email: "prabhavnarayanan74@gmail.com",
    phone: "+91 97471 50277",
    github: "https://github.com/Prabhav04",
    institution: "Rajiv Gandhi Institute of Technology (RIT), Kottayam",
    elevatorPitch: "I build high-performance, collaborative architectures for the creative industry. I bring the discipline of a performer and the logic of an engineer to every codebase.",
    shortBio: "Frontend developer and passionate musician dedicated to crafting meaningful digital experiences. Blending technical engineering with creative intuition, I translate rhythm, harmony, and user experience timing into intuitive, high-performance web applications.",
    taglines: [
      "CREATIVE DEVELOPER.",
      "DIGITAL EXPERIMENTER.",
      "MUSICIAN."
    ],
    statusTicker: "BROADCAST ACTIVE • SYSTEM NORMAL • OPEN FOR ROLES & COLLABS • 108.4 MHz STEREO",
  },

  channels: [
    { id: 1, code: "CH 01", name: "HOME", frequency: "94.5 MHz", description: "Main Broadcast & Identity" },
    { id: 2, code: "CH 02", name: "ABOUT", frequency: "98.2 MHz", description: "Performer-Engineer Narrative & Journey" },
    { id: 3, code: "CH 03", name: "PROJECTS", frequency: "101.9 MHz", description: "Engineering Broadcasts & Applications" },
    { id: 4, code: "CH 04", name: "TECH STACK", frequency: "104.3 MHz", description: "Signal Meters & Technical Arsenal" },
    { id: 5, code: "CH 05", name: "FREQUENCIES", frequency: "107.1 MHz", description: "Violin, Bands & Audio Experiments" },
    { id: 6, code: "CH 06", name: "TRANSMIT", frequency: "108.4 MHz", description: "Direct Communication & Terminal" }
  ],

  projects: [
    {
      id: "gigmate",
      title: "GIGmate",
      year: "2025",
      tagline: "Real-time collaboration platform for band members during live performances.",
      problem: "Born from the chaos of live stage performances, where physical notes and scattered setlists caused bottlenecks.",
      description: "Engineered to synchronize live updates instantly across band members' devices using Firebase, ensuring everyone stays synchronized on stage. Features dedicated performer tabs and real-time state management tailored for high-pressure musical environments.",
      techStack: ["React", "Tailwind CSS", "Firebase", "Realtime Database"],
      liveUrl: "https://gigmate-smoky.vercel.app/",
      githubUrl: "https://github.com/Prabhav04/Gigmate",
      badge: "LIVE STAGE SYNC",
      channelSignal: "99.8%"
    },
    {
      id: "design-desk",
      title: "Design Desk",
      year: "2025",
      tagline: "Template-based poster generation platform for institutional use.",
      problem: "Allows non-designers (faculty & students) to generate professional posters rapidly without graphic design expertise.",
      description: "Design automation platform featuring dynamic template editing, batch poster generation, and ZIP export functionality for efficient bulk asset downloads.",
      techStack: ["React", "HTML5 Canvas", "Firebase", "JSZip"],
      liveUrl: "https://poster-master.vercel.app/",
      githubUrl: "https://github.com/Prabhav04/",
      badge: "BATCH RENDER",
      channelSignal: "97.4%"
    },
    {
      id: "auralex",
      title: "Auralex",
      year: "2025",
      tagline: "AI-powered FIR documentation and legal assistance system.",
      problem: "Streamlines complainant statement capture and legal section mapping during legal filings.",
      description: "AI-assisted legal documentation system converting complainant voice input into structured FIR reports. Employs Whisper for speech-to-text transcription and a RAG pipeline with vector databases and transformer models to retrieve relevant legal provisions. Integrates the Gemini API to produce structured guidance based on extracted case context.",
      techStack: ["React", "FastAPI", "Whisper", "RAG", "Vector DB", "Gemini API"],
      liveUrl: null,
      githubUrl: "https://github.com/Prabhav04",
      badge: "AI RAG PIPELINE",
      channelSignal: "98.1%"
    },
    {
      id: "freefolks-web",
      title: "Freefolks Band Web",
      year: "2025",
      tagline: "Official portfolio website for the Kerala-based band Freefolks.",
      problem: "Digital identity translating musical aesthetics, EP releases, and live gigs into an immersive web experience.",
      description: "Responsive digital experience matching the rhythm of the band's EP releases. Features smooth Framer Motion animations, performance archives, and media galleries delivered with high performance.",
      techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://freefolks-ep.vercel.app/",
      githubUrl: "https://github.com/Prabhav04/freefolksEP",
      badge: "BAND AUDIO/VISUAL",
      channelSignal: "100%"
    },
    {
      id: "vintage-gfx",
      title: "Retro Wallpaper Hub (VintageGFX)",
      year: "2025",
      tagline: "90s Indian newspaper-themed wallpaper showcase.",
      problem: "Nostalgic retro-styled showcase platform celebrating 90s Indian print media typography, halftone aesthetic, and layout design.",
      description: "Nostalgic retro-styled showcase platform celebrating 90s Indian print media typography, halftone aesthetic, and layout design using modern web technologies.",
      techStack: ["Next.js", "CSS Modules", "Retro UI"],
      liveUrl: "https://vintage-gfx.vercel.app",
      githubUrl: "https://github.com/Prabhav04/VintageGFX",
      badge: "PRINT NOSTALGIA",
      channelSignal: "96.5%"
    },
    {
      id: "permissions-rit",
      title: "Permissions RIT",
      year: "2025",
      tagline: "Digital permission management system for college events and activities.",
      problem: "Modernized traditional paper-based approval workflows for students and faculty.",
      description: "Web application streamlining requests, faculty authorizations, and tracking for campus events with real-time status visibility.",
      techStack: ["React", "Firebase", "Workflow Automation"],
      liveUrl: "https://permissions-rit.vercel.app/",
      githubUrl: "https://github.com/Prabhav04/Permissions-RIT",
      badge: "CAMPUS WORKFLOW",
      channelSignal: "99.0%"
    }
  ],

  skills: {
    frontend: [
      { name: "React / Next.js", level: 95, signal: "OPTIMAL", tag: "Core Framework" },
      { name: "JavaScript (ES6+)", level: 92, signal: "OPTIMAL", tag: "Language" },
      { name: "Tailwind CSS & CSS Modules", level: 96, signal: "OPTIMAL", tag: "Design & Style" },
      { name: "Framer Motion", level: 90, signal: "HIGH", tag: "Micro-interactions" },
      { name: "HTML5 Canvas", level: 85, signal: "HIGH", tag: "Graphics" },
      { name: "Vite Tooling", level: 92, signal: "OPTIMAL", tag: "Dev Build" }
    ],
    backend: [
      { name: "Node.js", level: 86, signal: "HIGH", tag: "Runtime" },
      { name: "Python (FastAPI / Django)", level: 84, signal: "HIGH", tag: "Services" },
      { name: "Firebase (Auth, Realtime, Firestore)", level: 92, signal: "OPTIMAL", tag: "Cloud BaaS" },
      { name: "MongoDB", level: 80, signal: "MEDIUM-HIGH", tag: "NoSQL DB" },
      { name: "C / C++", level: 78, signal: "MEDIUM", tag: "Systems" }
    ],
    aiAndAudio: [
      { name: "Web Audio API", level: 90, signal: "OPTIMAL", tag: "Audio Synthesis" },
      { name: "Whisper (Speech-to-Text)", level: 88, signal: "HIGH", tag: "Audio AI" },
      { name: "RAG & Vector Databases", level: 85, signal: "HIGH", tag: "AI Retrieval" },
      { name: "Google Gemini API", level: 92, signal: "OPTIMAL", tag: "LLM Integration" },
      { name: "Transformer Models", level: 80, signal: "HIGH", tag: "NLP" }
    ],
    tools: [
      { name: "Git & GitHub", level: 94, signal: "OPTIMAL", tag: "Version Control" },
      { name: "Vercel Deployment", level: 95, signal: "OPTIMAL", tag: "DevOps" },
      { name: "Figma & Blender", level: 84, signal: "HIGH", tag: "Visual Prototyping" },
      { name: "REST APIs & Architecture", level: 90, signal: "OPTIMAL", tag: "Protocols" }
    ]
  },

  milestones: [
    {
      year: "2022",
      phase: "IGNITION",
      subtitle: "Second Year of Engineering",
      details: "Got seriously into coding. Began exploring algorithms, logic, and problem-solving beyond the classroom curriculum."
    },
    {
      year: "2023",
      phase: "SHARPENING THE TOOLS",
      subtitle: "Full-Stack Exploration",
      details: "Experimented across languages and frameworks (JavaScript, React, Python). Built utilities to solve daily friction and collegiate challenges."
    },
    {
      year: "2024",
      phase: "FINAL YEAR & REAL-WORLD UTILITY",
      subtitle: "Building for Impact",
      details: "Shifted focus to building full-scale projects solving personal and institutional needs rather than academic assignments. Bridged musical intuition with software architectures."
    },
    {
      year: "2025",
      phase: "PROFESSIONAL PRACTICE",
      subtitle: "Creative Technologist",
      details: "Refined engineering craft, architecting robust tools with practical impact and transitioning from student builder to professional developer."
    }
  ],

  leadership: [
    { period: "1st Year", role: "Vice Chair", org: "IEEE IAS SBC RIT", description: "Stepped into technical leadership early, assisting chapter coordination." },
    { period: "2nd Year", role: "Executive Committee Member", org: "Computer Science Association (CSA), RIT", description: "Active committee member driving departmental events and workshops." },
    { period: "3rd Year", role: "Chairperson", org: "IEEE IAS SBC RIT", description: "Led the student branch chapter initiatives, workshops, and student engagements." },
    { period: "3rd Year", role: "Chairperson", org: "Computer Science Association (CSA), RIT", description: "Headed departmental student body, organizing tech fests and initiatives." },
    { period: "3rd Year", role: "Technical Coordinator", org: "IEEE IA/IE/PELS Joint Chapter Kerala", description: "Coordinated inter-college technical activities and technical programs." },
    { period: "3rd Year", role: "Joint Coordinator", org: "Keli Arts Fest 2024 (RIT)", description: "Co-led coordination and management of the annual college arts festival." },
    { period: "4th Year", role: "Social Media Manager", org: "Official RIT Kottayam Channels", description: "Managed official institutional media communications and online presence." },
    { period: "4th Year", role: "Organizing Committee Member", org: "RITU '25", description: "Core organizer for RIT Kottayam's premier national techno-cultural fest." }
  ],

  music: {
    instruments: [
      { name: "Violin", role: "Lead Instrument", score: 5, max: 5, notes: "Core sonic signature; expressive melodic lead & classical discipline" },
      { name: "Guitar", role: "Supporting Instrument", score: 4, max: 5, notes: "Rhythmic and harmonic backbone; live stage performance" },
      { name: "Keyboard", role: "Supporting Instrument", score: 3, max: 5, notes: "Synthesizer layers, chord voicing & arrangement foundations" }
    ],
    bands: [
      {
        name: "Freefolks",
        type: "Professional Band · Kerala",
        status: "ACTIVE • TOURING & RELEASING",
        desc: "Professional musical outfit fusing folk, rock, and classical elements into an original contemporary sound across stages and venues in Kerala.",
        link: "https://freefolks-ep.vercel.app/"
      },
      {
        name: "RITM",
        type: "College Band · RIT Kottayam",
        status: "CAMPUS LEGEND",
        desc: "College band that ignited live performance passion. Formed by musicians on campus for high-energy campus stages, late-night rehearsals, and fest crowds."
      }
    ],
    timeline: [
      { period: "2013–2017", title: "School Days & Keyboard", desc: "First notes on Keyboard. Performed on stages, discovering a love for live performance." },
      { period: "2018", title: "Violin Journey Began", desc: "9th grade: Violin unlocked doors to lead roles, musical discipline, and recognition." },
      { period: "2023", title: "RITM Formed", desc: "Joined RITM at RIT Kottayam for annual fests and high-octane live stage shows." },
      { period: "2024–Present", title: "Freefolks & Beyond", desc: "Co-founded / formalized Freefolks, taking chemistry to professional stages and EP releases." }
    ],
    frequencies: [
      { note: "C4", freq: 261.63, label: "Tuning Ground" },
      { note: "D4", freq: 293.66, label: "Warm Resonance" },
      { note: "E4", freq: 329.63, label: "Harmonic Pulse" },
      { note: "G4", freq: 392.00, label: "Violin G-String" },
      { note: "A4", freq: 440.00, label: "Concert Pitch (A440)" },
      { note: "C5", freq: 523.25, label: "High Brilliance" }
    ]
  }
};
