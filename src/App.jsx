import { useState } from "react";

/* ── Icons ── */
const UserIcon=({size=16,color})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const BuildingIcon=({size=16,color})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>;
const CheckIcon=({size=12})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const AlertIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const SearchIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const UploadIcon=({size=20})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>;
const FileIcon=({size=16})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const LinkIcon=({size=12})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const PlusIcon=({size=12})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const XIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const SpinnerIcon=({size=16})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{animation:"spin 1s linear infinite"}}><style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;
const ArrowRight=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const ArrowLeft=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;
const UsersIcon=({size=20})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const LayersIcon=({size=20})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const EntityBubble=({type,size=28})=>{const b=type==="business";return<div style={{width:size,height:size,borderRadius:b?6:"50%",background:b?"#e8f0fe":"#e6f4ea",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:b?"#1967d2":"#1e8e3e"}}>{b?<BuildingIcon size={size*0.5}/>:<UserIcon size={size*0.5}/>}</div>};

/* ══════════════════════════════════════════
   STEP 1: CHOOSE COMPLEXITY
   ══════════════════════════════════════════ */

const COMPLEXITY_OPTIONS = [
  {
    id: "simple",
    title: "Simple",
    subtitle: "Individual, Sole Prop, or Single-Member LLC",
    description: "One person or one entity with a single owner. No complex ownership structure to untangle.",
    examples: "Personal account, freelancer LLC, single-owner business",
    icon: <UserIcon size={28} color="#1967d2" />,
    color: "#1967d2", bg: "#e8f0fe",
    entities: "1 entity", people: "1 person", time: "~5 min",
  },
  {
    id: "standard",
    title: "Standard",
    subtitle: "One business with multiple owners / UBOs",
    description: "A single business entity (LLC, partnership, corporation) with multiple beneficial owners that need to be identified and verified.",
    examples: "Partnership, multi-member LLC, small corporation",
    icon: <UsersIcon size={28} />,
    color: "#e65100", bg: "#fff3e0",
    entities: "1 entity", people: "2–10 people", time: "~15 min",
  },
  {
    id: "complex",
    title: "Complex",
    subtitle: "Holding companies, subsidiaries, multi-layer ownership",
    description: "Multiple related business entities with layered ownership structures. Holding companies with operating subsidiaries, franchise groups, or investment vehicles.",
    examples: "Franchise group, PE portfolio, family office, multi-entity developer",
    icon: <LayersIcon size={28} />,
    color: "#7b1fa2", bg: "#f3e8fd",
    entities: "5–50+ entities", people: "5–20+ people", time: "~30 min",
  },
];

const ComplexityStep = ({ onSelect }) => (
  <div>
    <div style={{ textAlign: "center", marginBottom: 32 }}>
      <h1 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#202124" }}>Start a New Onboarding</h1>
      <p style={{ margin: "8px 0 0", fontSize: 15, color: "#5f6368" }}>What type of client are you onboarding?</p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
      {COMPLEXITY_OPTIONS.map(opt => (
        <div key={opt.id} onClick={() => onSelect(opt.id)} style={{
          background: "white", borderRadius: 12, border: "2px solid #e8eaed",
          padding: "24px 20px", cursor: "pointer",
          transition: "all 0.2s ease", position: "relative", overflow: "hidden",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = opt.color; e.currentTarget.style.boxShadow = `0 4px 20px ${opt.color}18`; e.currentTarget.style.transform = "translateY(-3px)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
        >
          {/* Icon */}
          <div style={{
            width: 52, height: 52, borderRadius: 12, background: opt.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: opt.color, marginBottom: 16,
          }}>
            {opt.icon}
          </div>

          <div style={{ fontSize: 18, fontWeight: 800, color: "#202124", marginBottom: 4 }}>{opt.title}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: opt.color, marginBottom: 12 }}>{opt.subtitle}</div>
          <div style={{ fontSize: 13, color: "#5f6368", lineHeight: 1.55, marginBottom: 16 }}>{opt.description}</div>

          <div style={{ fontSize: 11.5, color: "#80868b", fontStyle: "italic", marginBottom: 16 }}>e.g., {opt.examples}</div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { label: opt.entities },
              { label: opt.people },
              { label: opt.time },
            ].map((s, i) => <span key={i} style={{
              fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 99,
              background: "#f8f9fa", color: "#5f6368",
            }}>{s.label}</span>)}
          </div>

          {/* Select arrow */}
          <div style={{
            position: "absolute", bottom: 20, right: 20,
            width: 32, height: 32, borderRadius: "50%", background: opt.bg,
            display: "flex", alignItems: "center", justifyContent: "center", color: opt.color,
          }}>
            <ArrowRight size={16} />
          </div>
        </div>
      ))}
    </div>

    {/* Recent cases */}
    <div style={{ marginTop: 32, background: "white", borderRadius: 10, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "12px 16px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>Recent Onboarding Cases</span>
        <span style={{ fontSize: 12, color: "#1967d2", cursor: "pointer", fontWeight: 500 }}>View All →</span>
      </div>
      {[
        { name: "Port City Coffee LLC", type: "Standard", status: "In Progress", date: "Feb 10, 2026", entities: 1, people: 3 },
        { name: "Atlantic Shore Development Group", type: "Complex", status: "In Progress", date: "Feb 3, 2026", entities: 8, people: 12 },
        { name: "James Mitchell", type: "Simple", status: "Completed", date: "Jan 28, 2026", entities: 1, people: 1 },
        { name: "Bayshore Medical Partners LLC", type: "Standard", status: "On Hold", date: "Jan 22, 2026", entities: 1, people: 5 },
      ].map((c, i) => <div key={i} style={{
        display: "grid", gridTemplateColumns: "1.5fr 0.5fr 0.5fr 0.5fr",
        alignItems: "center", padding: "10px 16px",
        borderBottom: i < 3 ? "1px solid #f0f1f3" : "none", cursor: "pointer",
      }}
        onMouseEnter={e => e.currentTarget.style.background = "#f8f9fa"}
        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <EntityBubble type={c.people > 1 ? "business" : "individual"} size={24} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#202124" }}>{c.name}</div>
            <div style={{ fontSize: 11, color: "#80868b" }}>{c.date} · {c.entities} {c.entities === 1 ? "entity" : "entities"}, {c.people} {c.people === 1 ? "person" : "people"}</div>
          </div>
        </div>
        <div><span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4,
          background: c.type === "Simple" ? "#e8f0fe" : c.type === "Standard" ? "#fff3e0" : "#f3e8fd",
          color: c.type === "Simple" ? "#1967d2" : c.type === "Standard" ? "#e65100" : "#7b1fa2",
        }}>{c.type}</span></div>
        <div><span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4,
          background: c.status === "Completed" ? "#e6f4ea" : c.status === "On Hold" ? "#f1f3f4" : "#e8f0fe",
          color: c.status === "Completed" ? "#1e8e3e" : c.status === "On Hold" ? "#5f6368" : "#1967d2",
        }}>{c.status}</span></div>
        <div style={{ textAlign: "right", color: "#1967d2", fontSize: 12, fontWeight: 500 }}>Open →</div>
      </div>)}
    </div>
  </div>
);


/* ══════════════════════════════════════════
   STEP 2: CHOOSE METHOD
   ══════════════════════════════════════════ */

const MethodStep = ({ complexity, onSelect, onBack }) => {
  const opt = COMPLEXITY_OPTIONS.find(o => o.id === complexity);
  const isSimple = complexity === "simple";
  const isComplex = complexity === "complex";

  return <div>
    <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, padding: 0, border: "none", background: "none", color: "#1967d2", fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 20 }}>
      <ArrowLeft size={14} /> Back to onboarding type
    </button>

    <div style={{ textAlign: "center", marginBottom: 32 }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 99, background: opt.bg, color: opt.color, fontSize: 13, fontWeight: 700, marginBottom: 12 }}>
        {opt.icon && <span style={{ display: "flex", transform: "scale(0.6)", transformOrigin: "center" }}>{opt.icon}</span>}
        {opt.title}: {opt.subtitle}
      </div>
      <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#202124" }}>How do you want to get started?</h1>
      <p style={{ margin: "8px 0 0", fontSize: 14, color: "#5f6368" }}>
        {isSimple ? "Search for an existing client or create a new record." : "Choose how to provide the entity and ownership information."}
      </p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: isSimple ? "1fr 1fr" : "1fr 1fr 1fr", gap: 16, maxWidth: isSimple ? 640 : 900, margin: "0 auto" }}>
      {/* Search option — always available */}
      <div onClick={() => onSelect("search")} style={{
        background: "white", borderRadius: 12, border: "2px solid #e8eaed", padding: "28px 20px",
        cursor: "pointer", transition: "all 0.2s ease",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#1967d2"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(25,103,210,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
      >
        <div style={{ width: 48, height: 48, borderRadius: 12, background: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", color: "#1967d2", marginBottom: 16 }}>
          <SearchIcon size={24} />
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, color: "#202124", marginBottom: 6 }}>Search by Name</div>
        <div style={{ fontSize: 13, color: "#5f6368", lineHeight: 1.5, marginBottom: 16 }}>
          {isSimple
            ? "Look up an existing individual or business in nCino, or start a new record from scratch."
            : "Search for the primary entity by name or EIN. We'll check for existing records and guide you through adding owners and related parties."}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {["Auto-dedup", "Existing record linking", isSimple ? "Fastest path" : "Manual entry"].map((t, i) => <span key={i} style={{
            fontSize: 11, fontWeight: 500, padding: "3px 8px", borderRadius: 99, background: "#f8f9fa", color: "#5f6368",
          }}>{t}</span>)}
        </div>
      </div>

      {/* Upload docs — available for standard & complex */}
      {!isSimple && <div onClick={() => onSelect("upload")} style={{
        background: "white", borderRadius: 12, border: "2px solid #e8eaed", padding: "28px 20px",
        cursor: "pointer", transition: "all 0.2s ease",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#e65100"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(230,81,0,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
      >
        <div style={{ width: 48, height: 48, borderRadius: 12, background: "#fff3e0", display: "flex", alignItems: "center", justifyContent: "center", color: "#e65100", marginBottom: 16 }}>
          <UploadIcon size={24} />
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, color: "#202124", marginBottom: 6 }}>Upload Tax Returns</div>
        <div style={{ fontSize: 13, color: "#5f6368", lineHeight: 1.5, marginBottom: 16 }}>
          Upload the business tax return (1065) and K-1 schedules. We'll automatically extract entities, individuals, ownership percentages, and EIN/SSN data.
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {["Auto-extraction", "Ownership from K-1s", "Bulk dedup"].map((t, i) => <span key={i} style={{
            fontSize: 11, fontWeight: 500, padding: "3px 8px", borderRadius: 99, background: "#f8f9fa", color: "#5f6368",
          }}>{t}</span>)}
        </div>
      </div>}

      {/* Manual / blank — always available for simple, available as option for others */}
      <div onClick={() => onSelect("blank")} style={{
        background: "white", borderRadius: 12, border: "2px solid #e8eaed", padding: "28px 20px",
        cursor: "pointer", transition: "all 0.2s ease",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#1e8e3e"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(30,142,62,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
      >
        <div style={{ width: 48, height: 48, borderRadius: 12, background: "#e6f4ea", display: "flex", alignItems: "center", justifyContent: "center", color: "#1e8e3e", marginBottom: 16 }}>
          <PlusIcon size={24} />
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, color: "#202124", marginBottom: 6 }}>Start from Blank</div>
        <div style={{ fontSize: 13, color: "#5f6368", lineHeight: 1.5, marginBottom: 16 }}>
          {isSimple
            ? "Create a brand new record. You'll enter all the information manually."
            : "Create the case structure manually. You'll add each entity and individual one at a time, with dedup checking as you go."}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {["Full control", "Step-by-step", isComplex ? "For unusual structures" : "Quick setup"].map((t, i) => <span key={i} style={{
            fontSize: 11, fontWeight: 500, padding: "3px 8px", borderRadius: 99, background: "#f8f9fa", color: "#5f6368",
          }}>{t}</span>)}
        </div>
      </div>
    </div>

    {/* Contextual help for complex */}
    {isComplex && <div style={{
      marginTop: 24, padding: "16px 20px", borderRadius: 10,
      background: "#f3e8fd", border: "1px solid #ce93d8",
      display: "flex", alignItems: "flex-start", gap: 12, maxWidth: 900, margin: "24px auto 0",
    }}>
      <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#7b1fa2", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0, marginTop: 2 }}>
        <AlertIcon size={12} />
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#7b1fa2", marginBottom: 4 }}>Recommended: Upload Tax Returns</div>
        <div style={{ fontSize: 13, color: "#5f6368", lineHeight: 1.5 }}>
          For complex structures with multiple holding companies and subsidiaries, uploading the 1065 and K-1 schedules is significantly faster. The system will extract the full ownership hierarchy, identify all UBOs, and run dedup matching across all entities in one pass — instead of manually entering 20+ entities individually.
        </div>
      </div>
    </div>}
  </div>;
};


/* ══════════════════════════════════════════
   SEARCH FLOW
   ══════════════════════════════════════════ */

const SEARCH_RESULTS = [
  { id: "r1", name: "Garden State Holdings LLC", type: "business", ein: "27-4918523", address: "Red Bank, NJ", status: "No active case", existing: true },
  { id: "r2", name: "Garden State Subs Holdings LLC", type: "business", ein: "27-4918600", address: "Red Bank, NJ", status: "Active loan — originated Jun 2024", existing: true },
  { id: "r3", name: "Garden State Properties LLC", type: "business", ein: "—", address: "Newark, NJ", status: "Deposit account", existing: true },
];

const SearchFlow = ({ complexity, onBack, onStartCase }) => {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [searching, setSearching] = useState(false);

  const doSearch = () => {
    if (!query.trim()) return;
    setSearching(true);
    setTimeout(() => { setSearching(false); setSearched(true); }, 1200);
  };

  return <div>
    <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, padding: 0, border: "none", background: "none", color: "#1967d2", fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 20 }}>
      <ArrowLeft size={14} /> Back to creation method
    </button>

    <div style={{ marginBottom: 24 }}>
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#202124" }}>Search for {complexity === "simple" ? "Client" : "Primary Entity"}</h2>
      <p style={{ margin: "6px 0 0", fontSize: 13, color: "#5f6368" }}>
        Search by name, EIN, or SSN to check for existing records before creating a new case.
      </p>
    </div>

    {/* Search bar */}
    <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
      <div style={{
        flex: 1, display: "flex", alignItems: "center", gap: 10,
        padding: "12px 16px", borderRadius: 10, border: "2px solid #e8eaed",
        background: "white", transition: "border-color 0.15s",
      }}>
        <SearchIcon size={18} />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === "Enter" && doSearch()}
          placeholder={complexity === "simple" ? "Search by name, SSN, or EIN..." : "Search by business name or EIN..."}
          style={{
            flex: 1, border: "none", outline: "none", fontSize: 15, color: "#202124",
            background: "transparent",
          }}
        />
        {query && <div onClick={() => { setQuery(""); setSearched(false); }} style={{ cursor: "pointer", color: "#9aa0a6" }}><XIcon size={16} /></div>}
      </div>
      <button onClick={doSearch} style={{
        padding: "12px 24px", borderRadius: 10, border: "none",
        background: "#1967d2", color: "white", fontSize: 14, fontWeight: 600, cursor: "pointer",
      }}>Search</button>
    </div>

    {/* Searching state */}
    {searching && <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "40px 0" }}>
      <SpinnerIcon size={20} />
      <span style={{ fontSize: 14, color: "#1967d2", fontWeight: 500 }}>Searching nCino records...</span>
    </div>}

    {/* Results */}
    {searched && !searching && <div>
      <div style={{ background: "white", borderRadius: 10, border: "1px solid #e0e0e0", overflow: "hidden", marginBottom: 16 }}>
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>Existing Records Found</span>
          <span style={{ fontSize: 12, color: "#80868b" }}>{SEARCH_RESULTS.length} results for "{query}"</span>
        </div>
        {SEARCH_RESULTS.map((r, i) => <div key={r.id} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 16px", borderBottom: i < SEARCH_RESULTS.length - 1 ? "1px solid #f0f1f3" : "none",
          cursor: "pointer",
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#f8f9fa"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <EntityBubble type={r.type} size={32} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#202124" }}>{r.name}</div>
              <div style={{ fontSize: 12, color: "#80868b" }}>EIN: {r.ein} · {r.address}</div>
              <div style={{ fontSize: 11, color: "#5f6368", marginTop: 2 }}>{r.status}</div>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); onStartCase(r); }} style={{
            display: "flex", alignItems: "center", gap: 5,
            padding: "8px 16px", borderRadius: 6, border: "none",
            background: "#1967d2", color: "white", fontSize: 12, fontWeight: 600, cursor: "pointer",
          }}>
            <LinkIcon size={11} /> Start Case with This Entity
          </button>
        </div>)}
      </div>

      {/* Create new option */}
      <div style={{
        background: "white", borderRadius: 10, border: "2px dashed #dadce0", padding: "20px",
        display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer",
      }}
        onClick={() => onStartCase(null)}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#1e8e3e"; e.currentTarget.style.background = "#fcfffe"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#dadce0"; e.currentTarget.style.background = "white"; }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "#e6f4ea", display: "flex", alignItems: "center", justifyContent: "center", color: "#1e8e3e" }}>
            <PlusIcon size={20} />
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>None of these? Create a new record</div>
            <div style={{ fontSize: 13, color: "#5f6368" }}>Start a brand new onboarding case with "{query}" as the primary entity</div>
          </div>
        </div>
        <ArrowRight size={18} />
      </div>
    </div>}
  </div>;
};


/* ══════════════════════════════════════════
   UPLOAD FLOW (simplified version)
   ══════════════════════════════════════════ */

const UploadFlow = ({ complexity, onBack }) => {
  const [uploaded, setUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [extracting, setExtracting] = useState(false);
  const [extracted, setExtracted] = useState(false);

  const simulateUpload = () => {
    setUploading(true);
    setTimeout(() => { setUploading(false); setUploaded(true); }, 1500);
  };

  const simulateExtract = () => {
    setExtracting(true);
    setTimeout(() => { setExtracting(false); setExtracted(true); }, 3000);
  };

  return <div>
    <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, padding: 0, border: "none", background: "none", color: "#1967d2", fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 20 }}>
      <ArrowLeft size={14} /> Back to creation method
    </button>

    <div style={{ marginBottom: 24 }}>
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#202124" }}>Upload Tax Returns</h2>
      <p style={{ margin: "6px 0 0", fontSize: 13, color: "#5f6368" }}>
        Upload the partnership's Form 1065 and Schedule K-1s. We'll extract the full ownership structure automatically.
      </p>
    </div>

    {/* Drop zone */}
    {!uploaded && <div onClick={simulateUpload} style={{
      border: "2px dashed #dadce0", borderRadius: 12, padding: "56px 24px",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
      cursor: "pointer", transition: "all 0.15s", background: uploading ? "#f8f9fa" : "white",
    }}
      onMouseEnter={e => { if (!uploading) { e.currentTarget.style.borderColor = "#1967d2"; e.currentTarget.style.background = "#f8faff"; } }}
      onMouseLeave={e => { if (!uploading) { e.currentTarget.style.borderColor = "#dadce0"; e.currentTarget.style.background = "white"; } }}
    >
      {uploading ? <><SpinnerIcon size={28} /><div style={{ fontSize: 14, fontWeight: 600, color: "#1967d2" }}>Uploading documents...</div></>
        : <><UploadIcon size={40} /><div style={{ fontSize: 15, fontWeight: 600, color: "#202124" }}>Drop tax return files here</div><div style={{ fontSize: 13, color: "#80868b" }}>Form 1065, Schedule K-1s, and supporting schedules · PDF, up to 50MB each</div></>}
    </div>}

    {/* Files uploaded */}
    {uploaded && !extracting && !extracted && <div>
      <div style={{ background: "white", borderRadius: 10, border: "1px solid #e0e0e0", overflow: "hidden", marginBottom: 16 }}>
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #e8eaed", fontSize: 14, fontWeight: 700, color: "#202124" }}>Uploaded Documents (5)</div>
        {[
          { name: "Garden_State_Holdings_1065_2025.pdf", pages: 42 },
          { name: "GSH_K1_Schedule_All_Partners.pdf", pages: 28 },
          { name: "GSH_Subs_I_1065_2025.pdf", pages: 18 },
          { name: "GSH_Subs_II_1065_2025.pdf", pages: 16 },
          { name: "GSH_Subs_III_1065_2025.pdf", pages: 20 },
        ].map((f, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", borderBottom: i < 4 ? "1px solid #f0f1f3" : "none" }}>
          <FileIcon size={16} />
          <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 500, color: "#202124" }}>{f.name}</div><div style={{ fontSize: 11, color: "#80868b" }}>{f.pages} pages</div></div>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#1e8e3e", display: "flex", alignItems: "center", gap: 4 }}><CheckIcon size={12} /> Ready</span>
        </div>)}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={simulateExtract} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 24px", borderRadius: 8, border: "none", background: "#1967d2", color: "white", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          Extract Entities <ArrowRight size={14} />
        </button>
      </div>
    </div>}

    {/* Extracting */}
    {extracting && <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "56px 0" }}>
      <SpinnerIcon size={32} />
      <div style={{ fontSize: 15, fontWeight: 600, color: "#1967d2" }}>Extracting entities and ownership structure...</div>
      <div style={{ fontSize: 13, color: "#80868b" }}>Parsing K-1 schedules, identifying partners, calculating ownership percentages</div>
    </div>}

    {/* Extracted — summary then would continue to dedup */}
    {extracted && <div>
      <div style={{
        display: "flex", alignItems: "center", gap: 12, padding: "16px 20px",
        background: "#e6f4ea", borderRadius: 10, border: "1px solid #34a853", marginBottom: 20,
      }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#34a853", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><CheckIcon size={18} /></div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#1e8e3e" }}>Extraction Complete</div>
          <div style={{ fontSize: 13, color: "#3c4043" }}>Found 4 entities, 6 individuals, and 13 ownership links across 5 documents.</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
        {[
          { label: "Entities", value: "4", bg: "#e8f0fe", color: "#1967d2" },
          { label: "Individuals", value: "5", bg: "#e6f4ea", color: "#1e8e3e" },
          { label: "UBOs Identified", value: "2", bg: "#f3e8fd", color: "#7b1fa2" },
          { label: "Potential Matches", value: "4", bg: "#fef7e0", color: "#b06000" },
        ].map((s, i) => <div key={i} style={{ padding: "16px", borderRadius: 8, background: s.bg, textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
          <div style={{ fontSize: 11, color: "#5f6368", marginTop: 2 }}>{s.label}</div>
        </div>)}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 24px", borderRadius: 8, border: "none", background: "#1967d2", color: "white", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          Continue to Match & Dedup <ArrowRight size={14} />
        </button>
      </div>
    </div>}
  </div>;
};


/* ══════════════════════════════════════════
   BLANK / MANUAL FLOW with inline dedup
   ══════════════════════════════════════════ */

const DEDUP_MATCHES = {
  name_only: [
    { id: "m1", name: "Garden State Holdings LLC", ein: "27-4918523", address: "100 Main St, Red Bank, NJ", status: "No active case", confidence: 72, matchType: "Name similar", existing: true },
    { id: "m2", name: "Garden State Subs Holdings LLC", ein: "27-4918600", address: "200 Broad St, Red Bank, NJ", status: "Active loan — Jun 2024", confidence: 58, matchType: "Name similar", existing: true },
  ],
  ein_exact: { id: "m3", name: "Garden State Holdings LLC", ein: "27-4918523", address: "100 Main St, Red Bank, NJ", status: "No active case · 2 prior relationships", confidence: 99, matchType: "EIN exact match", existing: true },
  individual_name: [
    { id: "m4", name: "Maria T. Cancro", ssn: "—", address: "14 Navesink Ave, Rumson, NJ", status: "Guarantor on GSH Subs I loan", confidence: 82, matchType: "Name + address match", existing: true },
  ],
  individual_ssn: { id: "m5", name: "Maria T. Cancro", ssn: "***-**-3277", address: "14 Navesink Ave, Rumson, NJ", status: "Guarantor on GSH Subs I loan · Existing KYC on file", confidence: 99, matchType: "SSN exact match", existing: true },
};

const MatchPanel = ({ matches, type, onLink, onDismiss, resolved }) => {
  if (resolved) return <div style={{
    display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", marginTop: 8,
    borderRadius: 8, background: resolved === "linked" ? "#e6f4ea" : "#f8f9fa",
    border: `1px solid ${resolved === "linked" ? "#34a853" : "#e8eaed"}`,
  }}>
    {resolved === "linked" ? <><div style={{ width: 20, height: 20, borderRadius: "50%", background: "#34a853", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><LinkIcon size={10} /></div><span style={{ fontSize: 12, fontWeight: 600, color: "#1e8e3e" }}>Linked to existing record</span></> 
    : <><div style={{ width: 20, height: 20, borderRadius: "50%", background: "#e8eaed", display: "flex", alignItems: "center", justifyContent: "center", color: "#5f6368" }}><PlusIcon size={10} /></div><span style={{ fontSize: 12, fontWeight: 600, color: "#5f6368" }}>Creating as new record</span></>}
  </div>;

  const isExact = type === "exact";
  const items = Array.isArray(matches) ? matches : [matches];

  return <div style={{
    marginTop: 8, borderRadius: 8, overflow: "hidden",
    border: isExact ? "2px solid #34a853" : "1px solid #f9ab00",
    background: isExact ? "#e8f5e9" : "#fffde7",
  }}>
    <div style={{
      display: "flex", alignItems: "center", gap: 8, padding: "10px 14px",
      borderBottom: `1px solid ${isExact ? "#34a85333" : "#f9ab0033"}`,
    }}>
      {isExact
        ? <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#34a853", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><CheckIcon size={10} /></div>
        : <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#f9ab00", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><AlertIcon size={10} /></div>
      }
      <span style={{ fontSize: 12, fontWeight: 700, color: isExact ? "#1e8e3e" : "#b06000" }}>
        {isExact ? "Exact match found in nCino" : `${items.length} possible match${items.length > 1 ? "es" : ""} found`}
      </span>
    </div>
    {items.map((m, i) => <div key={m.id} style={{
      padding: "12px 14px", borderBottom: i < items.length - 1 ? `1px solid ${isExact ? "#34a85322" : "#f9ab0022"}` : "none",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <EntityBubble type={m.ssn ? "individual" : "business"} size={24} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#202124" }}>{m.name}</div>
            <div style={{ fontSize: 11, color: "#5f6368" }}>
              {m.ein ? `EIN: ${m.ein}` : m.ssn ? `SSN: ${m.ssn}` : ""} · {m.address}
            </div>
          </div>
        </div>
        <span style={{
          fontSize: 10.5, fontWeight: 600, padding: "2px 8px", borderRadius: 99,
          background: m.confidence >= 90 ? "#e6f4ea" : m.confidence >= 70 ? "#fef7e0" : "#f1f3f4",
          color: m.confidence >= 90 ? "#1e8e3e" : m.confidence >= 70 ? "#b06000" : "#5f6368",
        }}>{m.confidence}% · {m.matchType}</span>
      </div>
      <div style={{ fontSize: 11, color: "#5f6368", marginBottom: 8 }}>{m.status}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => onLink(m)} style={{
          display: "flex", alignItems: "center", gap: 4, padding: "6px 12px", borderRadius: 6,
          border: "none", background: "#1967d2", color: "white", fontSize: 12, fontWeight: 600, cursor: "pointer",
        }}><LinkIcon size={10} /> This is them — Link</button>
        <button onClick={onDismiss} style={{
          display: "flex", alignItems: "center", gap: 4, padding: "6px 12px", borderRadius: 6,
          border: "1px solid #dadce0", background: "white", color: "#5f6368", fontSize: 12, fontWeight: 500, cursor: "pointer",
        }}>Not a match — Continue as new</button>
      </div>
    </div>)}
  </div>;
};

const BlankFlow = ({ complexity, onBack }) => {
  const isSimple = complexity === "simple";
  const [formState, setFormState] = useState({ name: "", ein: "", ssn: "", dob: "", address: "", csz: "", entityType: "", state: "" });
  const [nameTyping, setNameTyping] = useState(false);
  const [nameMatches, setNameMatches] = useState(null);
  const [einMatch, setEinMatch] = useState(null);
  const [nameResolved, setNameResolved] = useState(null);
  const [einResolved, setEinResolved] = useState(null);
  const [searching, setSearching] = useState(false);

  const allResolved = (!nameMatches || nameResolved) && (!einMatch || einResolved);
  const hasMatches = nameMatches || einMatch;

  const handleNameChange = (val) => {
    setFormState(p => ({ ...p, name: val }));
    setNameResolved(null);
    setNameMatches(null);
    if (val.length >= 6) {
      setSearching(true);
      setTimeout(() => {
        setSearching(false);
        if (isSimple) {
          setNameMatches(DEDUP_MATCHES.individual_name);
        } else {
          setNameMatches(DEDUP_MATCHES.name_only);
        }
      }, 800);
    }
  };

  const handleEinChange = (val) => {
    setFormState(p => ({ ...p, ein: val, ssn: val }));
    setEinResolved(null);
    setEinMatch(null);
    if (val.length >= 5) {
      setSearching(true);
      setTimeout(() => {
        setSearching(false);
        if (isSimple) {
          setEinMatch(DEDUP_MATCHES.individual_ssn);
        } else {
          setEinMatch(DEDUP_MATCHES.ein_exact);
        }
      }, 600);
    }
  };

  return <div>
    <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, padding: 0, border: "none", background: "none", color: "#1967d2", fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 20 }}>
      <ArrowLeft size={14} /> Back to creation method
    </button>
    <div style={{ background: "white", borderRadius: 10, border: "1px solid #e0e0e0", padding: "32px 24px" }}>
      <h2 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700, color: "#202124" }}>
        {isSimple ? "New Client Information" : "Create Case — Manual Entry"}
      </h2>
      <p style={{ margin: "0 0 24px", fontSize: 13, color: "#5f6368" }}>
        {isSimple
          ? "Enter the client's information below. We'll check for existing records as you type."
          : "Start with the primary entity. We'll search for existing records in real time as you enter information."}
      </p>

      {/* Live dedup indicator */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", marginBottom: 20,
        borderRadius: 8, background: "#f8f9fa", border: "1px solid #e8eaed",
      }}>
        <SearchIcon size={14} />
        <span style={{ fontSize: 12, color: "#5f6368" }}>
          <strong>Real-time dedup active</strong> — we'll check nCino for existing records as you enter name and tax ID
        </span>
        {searching && <SpinnerIcon size={14} />}
      </div>

      {/* Form */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Row 1: Name (full width with dedup) */}
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 4 }}>{isSimple ? "Full Legal Name" : "Primary Entity Name"} *</div>
          <div style={{ position: "relative" }}>
            <input
              value={formState.name}
              onChange={e => handleNameChange(e.target.value)}
              placeholder={isSimple ? "e.g., Maria Cancro" : "e.g., Garden State Holdings LLC"}
              style={{
                width: "100%", padding: "10px 12px", borderRadius: 6, fontSize: 14,
                border: nameMatches && !nameResolved ? "2px solid #f9ab00" : "1px solid #dadce0",
                outline: "none", boxSizing: "border-box",
              }}
            />
            {searching && formState.name.length >= 6 && !nameMatches && <div style={{ position: "absolute", right: 12, top: 11 }}><SpinnerIcon size={16} /></div>}
          </div>
          {nameMatches && <MatchPanel
            matches={nameMatches}
            type="possible"
            onLink={(m) => setNameResolved("linked")}
            onDismiss={() => setNameResolved("new")}
            resolved={nameResolved}
          />}
        </div>

        {/* Row 2: Tax ID + one more field */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 4 }}>{isSimple ? "SSN or EIN" : "EIN"} *</div>
            <input
              value={isSimple ? formState.ssn : formState.ein}
              onChange={e => handleEinChange(e.target.value)}
              placeholder={isSimple ? "e.g., ***-**-3277" : "e.g., 27-4918523"}
              style={{
                width: "100%", padding: "10px 12px", borderRadius: 6, fontSize: 14,
                border: einMatch && !einResolved ? "2px solid #34a853" : "1px solid #dadce0",
                outline: "none", boxSizing: "border-box",
              }}
            />
            {einMatch && <MatchPanel
              matches={einMatch}
              type="exact"
              onLink={(m) => setEinResolved("linked")}
              onDismiss={() => setEinResolved("new")}
              resolved={einResolved}
            />}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 4 }}>{isSimple ? "Date of Birth" : "Entity Type"}</div>
            <select style={{
              width: "100%", padding: "10px 12px", borderRadius: 6, fontSize: 14,
              border: "1px solid #dadce0", outline: "none", boxSizing: "border-box",
              color: "#bdc1c6", background: "white",
            }}>
              {isSimple
                ? <option>MM/DD/YYYY</option>
                : <><option>Select type...</option><option>LLC</option><option>Partnership</option><option>Corporation</option><option>Trust</option></>
              }
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 4 }}>{isSimple ? "Address" : "Registered Address"}</div>
            <input placeholder="Street address" style={{
              width: "100%", padding: "10px 12px", borderRadius: 6, fontSize: 14,
              border: "1px solid #dadce0", outline: "none", boxSizing: "border-box",
            }} />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 4 }}>City, State, ZIP</div>
            <input placeholder="City, ST ZIP" style={{
              width: "100%", padding: "10px 12px", borderRadius: 6, fontSize: 14,
              border: "1px solid #dadce0", outline: "none", boxSizing: "border-box",
            }} />
          </div>
        </div>

        {!isSimple && <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 4 }}>State of Formation</div>
            <select style={{
              width: "100%", padding: "10px 12px", borderRadius: 6, fontSize: 14,
              border: "1px solid #dadce0", outline: "none", boxSizing: "border-box",
              color: "#bdc1c6", background: "white",
            }}><option>Select state...</option></select>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 4 }}>Date of Formation</div>
            <input placeholder="MM/DD/YYYY" style={{
              width: "100%", padding: "10px 12px", borderRadius: 6, fontSize: 14,
              border: "1px solid #dadce0", outline: "none", boxSizing: "border-box",
            }} />
          </div>
        </div>}
      </div>

      {/* Match resolution gate */}
      {hasMatches && !allResolved && <div style={{
        display: "flex", alignItems: "center", gap: 8, padding: "12px 14px", marginTop: 20,
        borderRadius: 8, background: "#fef7e0", border: "1px solid #f9ab00",
      }}>
        <AlertIcon size={14} />
        <span style={{ fontSize: 12, fontWeight: 600, color: "#b06000" }}>
          Resolve all potential matches above before continuing
        </span>
      </div>}

      {/* Summary of resolutions */}
      {hasMatches && allResolved && <div style={{
        display: "flex", alignItems: "center", gap: 8, padding: "12px 14px", marginTop: 20,
        borderRadius: 8, background: "#e6f4ea", border: "1px solid #34a853",
      }}>
        <CheckIcon size={14} />
        <span style={{ fontSize: 12, fontWeight: 600, color: "#1e8e3e" }}>
          All matches resolved — ready to continue
        </span>
      </div>}

      {/* Submit */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
        <button disabled={hasMatches && !allResolved} style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "10px 24px", borderRadius: 8, border: "none",
          background: (hasMatches && !allResolved) ? "#dadce0" : "#1967d2",
          color: (hasMatches && !allResolved) ? "#9aa0a6" : "white",
          fontSize: 14, fontWeight: 600,
          cursor: (hasMatches && !allResolved) ? "default" : "pointer",
        }}>
          {isSimple ? "Create Client & Start Onboarding" : "Save & Add Related Parties"} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   CASE STARTED CONFIRMATION
   ══════════════════════════════════════════ */

const CaseStarted = ({ entity, onReset }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "60px 24px", background: "white", borderRadius: 12, border: "1px solid #e0e0e0" }}>
    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#e6f4ea", display: "flex", alignItems: "center", justifyContent: "center", color: "#1e8e3e" }}><CheckIcon size={28} /></div>
    <div style={{ fontSize: 20, fontWeight: 700, color: "#202124" }}>Case Created</div>
    <div style={{ fontSize: 14, color: "#5f6368", textAlign: "center", maxWidth: 400 }}>
      Onboarding case has been initiated for <strong>{entity ? entity.name : "new entity"}</strong>.
      {entity?.existing && " Linked to existing nCino record."}
    </div>
    <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
      <button style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid #dadce0", background: "white", color: "#3c4043", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>View Case →</button>
      <button onClick={onReset} style={{ padding: "10px 20px", borderRadius: 8, border: "none", background: "#1967d2", color: "white", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Start Another</button>
    </div>
  </div>
);


/* ══════════════════════════════════════════
   MAIN APP
   ══════════════════════════════════════════ */

export default function App() {
  const [view, setView] = useState("complexity"); // complexity | method | search | upload | blank | started
  const [complexity, setComplexity] = useState(null);
  const [startedEntity, setStartedEntity] = useState(null);

  const handleComplexity = (c) => { setComplexity(c); setView("method"); };
  const handleMethod = (m) => setView(m);
  const handleStartCase = (entity) => { setStartedEntity(entity); setView("started"); };
  const handleReset = () => { setView("complexity"); setComplexity(null); setStartedEntity(null); };

  return <div style={{ fontFamily: "'Salesforce Sans','SF Pro Text',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", background: "#f3f3f3", minHeight: "100vh", fontSize: 13, color: "#3c4043" }}>
    {/* Top Nav */}
    <div style={{ background: "white", borderBottom: "1px solid #e0e0e0", padding: "0 16px", display: "flex", alignItems: "center", height: 44, gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginRight: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,5px)", gap: 3, opacity: 0.4 }}>{[...Array(9)].map((_, i) => <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#5f6368" }} />)}</div>
        <span style={{ fontWeight: 700, fontSize: 14, color: "#1967d2", letterSpacing: -0.2 }}>nCino</span>
      </div>
      {["Home","Leads","Opportunities","Relationships","Applications","Loans","Deposits","Onboarding"].map(item=><span key={item} style={{fontSize:12.5,color:item==="Onboarding"?"#1967d2":"#5f6368",fontWeight:item==="Onboarding"?600:400,cursor:"pointer",padding:"12px 0",borderBottom:item==="Onboarding"?"2px solid #1967d2":"2px solid transparent"}}>{item}</span>)}
      <div style={{ marginLeft: "auto" }}><div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 4, background: "#f1f3f4", fontSize: 12, color: "#80868b" }}><SearchIcon size={14} /> Search...</div></div>
    </div>

    {/* Page Header */}
    <div style={{ background: "white", borderBottom: "1px solid #e0e0e0", padding: "16px 24px" }}>
      <div style={{ fontSize: 12, color: "#80868b", marginBottom: 4 }}>
        <span style={{ color: "#1967d2", cursor: "pointer" }} onClick={handleReset}>Onboarding</span>
        {view !== "complexity" && <><span style={{ color: "#bdc1c6", margin: "0 5px" }}>&gt;</span><span style={{ color: view === "method" ? "#3c4043" : "#1967d2", cursor: view !== "method" ? "pointer" : "default" }} onClick={() => complexity && setView("method")}>New Case</span></>}
        {["search","upload","blank"].includes(view) && <><span style={{ color: "#bdc1c6", margin: "0 5px" }}>&gt;</span><span style={{ color: "#3c4043" }}>{view === "search" ? "Search" : view === "upload" ? "Upload" : "Manual Entry"}</span></>}
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#202124" }}>
        {view === "complexity" ? "Onboarding" : view === "started" ? "Case Created" : "New Onboarding Case"}
      </div>
    </div>

    {/* Content */}
    <div style={{ maxWidth: view === "complexity" ? 960 : 860, margin: "0 auto", padding: "24px" }}>
      {view === "complexity" && <ComplexityStep onSelect={handleComplexity} />}
      {view === "method" && <MethodStep complexity={complexity} onSelect={handleMethod} onBack={() => setView("complexity")} />}
      {view === "search" && <SearchFlow complexity={complexity} onBack={() => setView("method")} onStartCase={handleStartCase} />}
      {view === "upload" && <UploadFlow complexity={complexity} onBack={() => setView("method")} />}
      {view === "blank" && <BlankFlow complexity={complexity} onBack={() => setView("method")} />}
      {view === "started" && <CaseStarted entity={startedEntity} onReset={handleReset} />}
    </div>
  </div>;
}
