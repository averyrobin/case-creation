import { useState } from "react";

/* ── Icons ── */
const UserIcon=({size=16,color})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const BuildingIcon=({size=16,color})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>;
const CheckIcon=({size=12})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const AlertIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const SearchIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const XIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const SpinnerIcon=({size=16})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{animation:"spin 1s linear infinite"}}><style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;
const ArrowRight=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const PlusIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const PlayIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>;
const LinkIcon=({size=12})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const FileIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const UsersIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const DocIcon=({size=14,color="#5f6368"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const RelatedPartiesIcon=({size=14,color="#5f6368"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const ChevronRight=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
const ALLOY_LOGO=({size=16})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#1a1a2e"/><path d="M12 5L6 19h3l1.2-3h5.6l1.2 3h3L12 5zm-1 9l1-2.5L13 14h-2z" fill="white"/></svg>;

const EntityBubble=({type,size=28})=>{const b=type==="business";return<div style={{width:size,height:size,borderRadius:b?6:"50%",background:b?"#e8f0fe":"#e6f4ea",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:b?"#1967d2":"#1e8e3e"}}>{b?<BuildingIcon size={size*0.5}/>:<UserIcon size={size*0.5}/>}</div>};

/* ══════════════════════════════════════════
   SEARCH SCREEN
   ══════════════════════════════════════════ */

const SearchScreen = ({ onCreateEntity, onCreateCase }) => {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [searching, setSearching] = useState(false);

  const doSearch = () => {
    if (!query.trim()) return;
    setSearching(true);
    setTimeout(() => { setSearching(false); setSearched(true); }, 800);
  };

  // Simulate: George Glass returns no results, Port City returns no results
  const hasResults = false;

  return <div style={{ maxWidth: 640, margin: "0 auto" }}>
    <div style={{ textAlign: "center", marginBottom: 28 }}>
      <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#202124" }}>Onboarding</h1>
      <p style={{ margin: "6px 0 0", fontSize: 14, color: "#5f6368" }}>Search for an existing client or create a new one.</p>
    </div>

    {/* Search bar */}
    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderRadius: 10, border: "2px solid #e8eaed", background: "white" }}>
        <SearchIcon size={18} />
        <input value={query} onChange={e => { setQuery(e.target.value); setSearched(false); }}
          onKeyDown={e => e.key === "Enter" && doSearch()}
          placeholder="Search by name, EIN, SSN, or phone number..."
          style={{ flex: 1, border: "none", outline: "none", fontSize: 15, color: "#202124", background: "transparent" }} />
        {query && <div onClick={() => { setQuery(""); setSearched(false); }} style={{ cursor: "pointer", color: "#9aa0a6" }}><XIcon size={16} /></div>}
      </div>
      <button onClick={doSearch} style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: "#1967d2", color: "white", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Search</button>
    </div>

    {/* Action buttons */}
    <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
      <button onClick={onCreateCase} style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: "14px", borderRadius: 10, border: "2px solid #e8eaed", background: "white",
        fontSize: 13, fontWeight: 600, color: "#1967d2", cursor: "pointer",
        transition: "all 0.15s",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#1967d2"; e.currentTarget.style.background = "#f8faff"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.background = "white"; }}
      >
        <FileIcon size={16} /> Create New Onboarding Case
      </button>
      <button onClick={onCreateEntity} style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: "14px", borderRadius: 10, border: "2px solid #e8eaed", background: "white",
        fontSize: 13, fontWeight: 600, color: "#1e8e3e", cursor: "pointer",
        transition: "all 0.15s",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#1e8e3e"; e.currentTarget.style.background = "#fcfffe"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.background = "white"; }}
      >
        <PlusIcon size={16} /> Create New Entity
      </button>
    </div>

    {/* Searching state */}
    {searching && <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "32px 0" }}>
      <SpinnerIcon size={18} /><span style={{ fontSize: 14, color: "#1967d2" }}>Searching...</span>
    </div>}

    {/* No results */}
    {searched && !searching && !hasResults && <div style={{
      background: "white", borderRadius: 10, border: "1px solid #e0e0e0", padding: "32px 20px", textAlign: "center",
    }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#5f6368", marginBottom: 8 }}>No results for "{query}"</div>
      <div style={{ fontSize: 13, color: "#9aa0a6", marginBottom: 16 }}>This client doesn't exist in nCino yet.</div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <button onClick={onCreateEntity} style={{
          display: "flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 8,
          border: "none", background: "#1e8e3e", color: "white", fontSize: 13, fontWeight: 600, cursor: "pointer",
        }}><PlusIcon size={12} /> Create New Entity "{query}"</button>
      </div>
    </div>}
  </div>;
};


/* ══════════════════════════════════════════
   ENTITY CREATION FORM
   ══════════════════════════════════════════ */

const ENTITY_TYPES = [
  { value: "individual", label: "Individual" },
  { value: "sole_prop", label: "Sole Proprietorship" },
  { value: "llc", label: "Limited Liability Company" },
  { value: "partnership", label: "Partnership" },
  { value: "corporation", label: "Corporation" },
  { value: "trust", label: "Trust" },
];

const EntityForm = ({ onSave, onBack, onCreateCase, prefillName }) => {
  const [entityType, setEntityType] = useState("");
  const [name, setName] = useState(prefillName || "");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [saved, setSaved] = useState(false);
  const [alloyRunning, setAlloyRunning] = useState(false);
  const [alloyComplete, setAlloyComplete] = useState(false);
  const [connections, setConnections] = useState([]);
  const [showAddConnection, setShowAddConnection] = useState(false);
  const [newConnName, setNewConnName] = useState("");
  const [newConnRole, setNewConnRole] = useState("Spouse");
  const [newConnOwnership, setNewConnOwnership] = useState("");
  const isBiz = ["llc", "partnership", "corporation", "trust", "sole_prop"].includes(entityType);

  const handleSave = () => setSaved(true);

  const handleRunAlloy = () => {
    setAlloyRunning(true);
    setTimeout(() => { setAlloyRunning(false); setAlloyComplete(true); }, 2000);
  };

  const handleAddConnection = () => {
    if (!newConnName.trim()) return;
    setConnections(prev => [...prev, { name: newConnName, role: newConnRole, ownership: newConnOwnership || null }]);
    setNewConnName(""); setNewConnRole(isBiz ? "Owner" : "Spouse"); setNewConnOwnership(""); setShowAddConnection(false);
  };

  return <div style={{ maxWidth: 640, margin: "0 auto" }}>
    {/* Header with Create Case button */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
      <div>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 4, padding: 0, border: "none", background: "none", color: "#1967d2", fontSize: 12, fontWeight: 600, cursor: "pointer", marginBottom: 6 }}>
          ← Back to search
        </button>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#202124" }}>{saved ? (name || "New Entity") : "Create New Entity"}</h2>
      </div>
      {saved && <button onClick={() => onCreateCase(name, entityType, connections)} style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: "8px 16px", borderRadius: 8, border: "1px solid #1967d2",
        background: "white", color: "#1967d2", fontSize: 12, fontWeight: 600, cursor: "pointer",
      }}>
        <FileIcon size={12} /> Create an Onboarding Case
      </button>}
    </div>

    {/* Form card */}
    <div style={{ background: "white", borderRadius: 10, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      {!saved ? <>
        {/* Entity type + name */}
        <div style={{ padding: "20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 4 }}>Relationship Type *</div>
              <select value={entityType} onChange={e => setEntityType(e.target.value)} style={{
                width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #dadce0",
                fontSize: 14, color: entityType ? "#202124" : "#9aa0a6", background: "white", outline: "none",
              }}>
                <option value="">Select type...</option>
                {ENTITY_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 4 }}>Relationship Name *</div>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Full legal name"
                style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #dadce0", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 4 }}>Email</div>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email@example.com"
                style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #dadce0", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              <div style={{ fontSize: 11, color: "#9aa0a6", marginTop: 4 }}>Collect email to send a digital onboarding link</div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 4 }}>Phone Number</div>
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="(555) 555-5555"
                style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #dadce0", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>
          </div>
        </div>

        <div style={{ padding: "12px 20px", borderTop: "1px solid #e8eaed", display: "flex", justifyContent: "flex-end" }}>
          <button onClick={handleSave} disabled={!entityType || !name} style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "10px 20px", borderRadius: 8, border: "none",
            background: (entityType && name) ? "#1967d2" : "#dadce0",
            color: (entityType && name) ? "white" : "#9aa0a6",
            fontSize: 14, fontWeight: 600, cursor: (entityType && name) ? "pointer" : "default",
          }}>Save & Continue <ArrowRight size={14} /></button>
        </div>
      </>

      : <>
        {/* Saved entity view */}
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", gap: 10, background: "#f8f9fa" }}>
          <EntityBubble type={isBiz ? "business" : "individual"} size={36} />
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#202124" }}>{name}</div>
            <div style={{ fontSize: 12, color: "#80868b" }}>{ENTITY_TYPES.find(t => t.value === entityType)?.label}{email && ` · ${email}`}{phone && ` · ${phone}`}</div>
          </div>
        </div>

        {/* Alloy Verification Section */}
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #e8eaed" }}>
          <div style={{
            border: `1px solid ${alloyComplete ? "#34a853" : "#e0e0e0"}`,
            borderRadius: 8, overflow: "hidden",
            background: alloyComplete ? "#e8f5e9" : "#f8f9fa",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <ALLOY_LOGO size={18} />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#202124" }}>Alloy Verification</span>
                {alloyComplete && <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 8px", borderRadius: 99, fontSize: 11.5, fontWeight: 600, background: "#e6f4ea", color: "#1e8e3e" }}>
                  <CheckIcon size={10} /> Approved (0.97)
                </span>}
                {alloyRunning && <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 8px", borderRadius: 99, fontSize: 11.5, fontWeight: 600, background: "#fef7e0", color: "#b06000" }}>
                  <SpinnerIcon size={10} /> Running...
                </span>}
                {!alloyRunning && !alloyComplete && <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 8px", borderRadius: 99, fontSize: 11.5, fontWeight: 600, background: "#f1f3f4", color: "#5f6368" }}>
                  Not Run
                </span>}
              </div>
              {!alloyRunning && !alloyComplete && <button onClick={handleRunAlloy} style={{
                display: "flex", alignItems: "center", gap: 5, padding: "6px 14px", borderRadius: 6,
                border: "none", background: "#1967d2", color: "white", fontSize: 12, fontWeight: 600, cursor: "pointer",
              }}><PlayIcon size={10} /> Run Verifications</button>}
            </div>
            {alloyRunning && <div style={{ padding: "10px 14px", borderTop: "1px solid #e0e0e033", display: "flex", alignItems: "center", gap: 8 }}>
              <SpinnerIcon size={14} />
              <span style={{ fontSize: 12, color: "#b06000" }}>Verifying identity and running compliance checks...</span>
            </div>}
            {alloyComplete && <div style={{ padding: "10px 14px", borderTop: "1px solid #34a85333" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {["Name Match", "DOB Match", "SSN Match", "Address Match"].map((t, i) => <span key={i} style={{
                  fontSize: 11, padding: "2px 8px", borderRadius: 99, background: "#e6f4ea", color: "#1e8e3e", fontWeight: 500,
                  display: "inline-flex", alignItems: "center", gap: 3,
                }}><CheckIcon size={9} /> {t}</span>)}
              </div>
            </div>}
          </div>
        </div>

        {/* Connected Relationships */}
        <div style={{ padding: "16px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>Connected Relationships</div>
            <button onClick={() => { setShowAddConnection(true); setNewConnRole(isBiz ? "Owner" : "Spouse"); }} style={{
              display: "flex", alignItems: "center", gap: 4, padding: "6px 12px", borderRadius: 6,
              border: "1px solid #dadce0", background: "white", color: "#1967d2", fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}><PlusIcon size={12} /> Add Connected Relationship</button>
          </div>

          {connections.length === 0 && !showAddConnection && <div style={{
            padding: "20px", borderRadius: 8, border: "1px dashed #dadce0", textAlign: "center",
          }}>
            <div style={{ fontSize: 13, color: "#9aa0a6" }}>No connected relationships yet</div>
            <div style={{ fontSize: 12, color: "#bdc1c6", marginTop: 4 }}>{isBiz ? "Add owners, signers, or guarantors" : "Add spouse, joint account holder, or power of attorney"}</div>
          </div>}

          {connections.map((c, i) => <div key={i} style={{
            display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
            borderRadius: 8, background: "#f8f9fa", border: "1px solid #e8eaed", marginBottom: 8,
          }}>
            <EntityBubble type="individual" size={28} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#202124" }}>{c.name}</div>
              <div style={{ fontSize: 11, color: "#80868b" }}>{c.role}{c.ownership ? ` · ${c.ownership}% ownership` : ""}</div>
            </div>
            {alloyComplete && <span style={{ fontSize: 10, fontWeight: 600, color: "#9aa0a6", background: "#f1f3f4", padding: "2px 6px", borderRadius: 99 }}>Needs verification</span>}
          </div>)}

          {/* Add connection form */}
          {showAddConnection && <div style={{
            padding: "14px", borderRadius: 8, border: "1px solid #1967d2", background: "#f8faff", marginTop: 8,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: isBiz ? "1fr 0.7fr 0.5fr" : "1fr 0.7fr", gap: 10, marginBottom: 10 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#5f6368", marginBottom: 3 }}>Name</div>
                <input value={newConnName} onChange={e => setNewConnName(e.target.value)} placeholder="Full legal name"
                  style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #dadce0", fontSize: 13, outline: "none", boxSizing: "border-box" }} />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#5f6368", marginBottom: 3 }}>Role</div>
                <select value={newConnRole} onChange={e => setNewConnRole(e.target.value)} style={{
                  width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #dadce0", fontSize: 13, outline: "none", background: "white",
                }}>
                  {isBiz
                    ? <>{["Owner", "Authorized Signer", "Guarantor", "Officer", "Director"].map(r => <option key={r}>{r}</option>)}</>
                    : <>{["Spouse", "Joint Account Holder", "Power of Attorney", "Beneficiary"].map(r => <option key={r}>{r}</option>)}</>}
                </select>
              </div>
              {isBiz && <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#5f6368", marginBottom: 3 }}>Ownership %</div>
                <input value={newConnOwnership} onChange={e => setNewConnOwnership(e.target.value)} placeholder="%"
                  style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #dadce0", fontSize: 13, outline: "none", boxSizing: "border-box" }} />
              </div>}
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <button onClick={() => setShowAddConnection(false)} style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid #dadce0", background: "white", color: "#5f6368", fontSize: 12, cursor: "pointer" }}>Cancel</button>
              <button onClick={handleAddConnection} style={{ padding: "6px 14px", borderRadius: 6, border: "none", background: "#1967d2", color: "white", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Save</button>
            </div>
          </div>}
        </div>

        {/* Save & Continue footer */}
        <div style={{ padding: "12px 20px", borderTop: "1px solid #e8eaed", display: "flex", justifyContent: "flex-end" }}>
          <button onClick={() => onSave(name, entityType, connections)} style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "10px 20px", borderRadius: 8, border: "none",
            background: "#1967d2", color: "white", fontSize: 14, fontWeight: 600, cursor: "pointer",
          }}>Save & Continue <ArrowRight size={14} /></button>
        </div>
      </>}
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   COMPLETION / NEXT STEPS
   ══════════════════════════════════════════ */

const CompletionScreen = ({ entityName, entityType, connections, onNewEntity, onOriginateProduct, onCreateCase, onGoToSearch }) => {
  return <div style={{ maxWidth: 640, margin: "0 auto" }}>
    {/* Success header */}
    <div style={{ textAlign: "center", marginBottom: 24 }}>
      <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#e6f4ea", display: "flex", alignItems: "center", justifyContent: "center", color: "#1e8e3e", margin: "0 auto 12px" }}>
        <CheckIcon size={24} />
      </div>
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#202124" }}>Onboarding Complete</h2>
      <p style={{ margin: "6px 0 0", fontSize: 14, color: "#5f6368" }}>
        <strong>{entityName}</strong> has been onboarded successfully.
        {connections.length > 0 && ` ${connections.length} connected relationship${connections.length > 1 ? "s" : ""} added.`}
      </p>
    </div>

    {/* Entity summary card */}
    <div style={{ background: "white", borderRadius: 10, border: "1px solid #e0e0e0", padding: "16px 20px", marginBottom: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <EntityBubble type={["llc", "partnership", "corporation", "trust", "sole_prop"].includes(entityType) ? "business" : "individual"} size={32} />
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#202124" }}>{entityName}</div>
          <div style={{ fontSize: 12, color: "#80868b" }}>{ENTITY_TYPES.find(t => t.value === entityType)?.label}</div>
        </div>
        <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 99, background: "#e6f4ea", color: "#1e8e3e", display: "flex", alignItems: "center", gap: 4 }}>
          <CheckIcon size={10} /> Verified
        </span>
      </div>
      {connections.length > 0 && <div>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 6 }}>Connected Relationships</div>
        {connections.map((c, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
          <EntityBubble type="individual" size={20} />
          <span style={{ fontSize: 12, color: "#3c4043" }}>{c.name}</span>
          <span style={{ fontSize: 11, color: "#9aa0a6" }}>{c.role}{c.ownership ? ` · ${c.ownership}%` : ""}</span>
        </div>)}
      </div>}
    </div>

    {/* What's next */}
    <div style={{ fontSize: 14, fontWeight: 700, color: "#202124", marginBottom: 12 }}>What would you like to do next?</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <button onClick={onNewEntity} style={{
        display: "flex", alignItems: "center", gap: 12, padding: "16px 20px",
        borderRadius: 10, border: "2px solid #e8eaed", background: "white",
        cursor: "pointer", textAlign: "left", transition: "all 0.15s",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#1e8e3e"; e.currentTarget.style.background = "#fcfffe"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.background = "white"; }}
      >
        <div style={{ width: 40, height: 40, borderRadius: 10, background: "#e6f4ea", display: "flex", alignItems: "center", justifyContent: "center", color: "#1e8e3e" }}>
          <PlusIcon size={20} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>Onboard a New Entity</div>
          <div style={{ fontSize: 12, color: "#80868b" }}>Start onboarding for another individual or business</div>
        </div>
        <ChevronRight size={16} />
      </button>

      <button onClick={onOriginateProduct} style={{
        display: "flex", alignItems: "center", gap: 12, padding: "16px 20px",
        borderRadius: 10, border: "2px solid #e8eaed", background: "white",
        cursor: "pointer", textAlign: "left", transition: "all 0.15s",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#1967d2"; e.currentTarget.style.background = "#f8faff"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.background = "white"; }}
      >
        <div style={{ width: 40, height: 40, borderRadius: 10, background: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", color: "#1967d2" }}>
          <ArrowRight size={20} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>Originate a Product</div>
          <div style={{ fontSize: 12, color: "#80868b" }}>Open a deposit account, treasury service, or loan for {entityName}</div>
        </div>
        <ChevronRight size={16} />
      </button>

      <button onClick={onCreateCase} style={{
        display: "flex", alignItems: "center", gap: 12, padding: "16px 20px",
        borderRadius: 10, border: "2px solid #e8eaed", background: "white",
        cursor: "pointer", textAlign: "left", transition: "all 0.15s",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#7b1fa2"; e.currentTarget.style.background = "#fdf8ff"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.background = "white"; }}
      >
        <div style={{ width: 40, height: 40, borderRadius: 10, background: "#f3e8fd", display: "flex", alignItems: "center", justifyContent: "center", color: "#7b1fa2" }}>
          <FileIcon size={20} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>Create an Onboarding Case</div>
          <div style={{ fontSize: 12, color: "#80868b" }}>Upgrade to case management for complex ownership, document exchange, and compliance orchestration</div>
        </div>
        <ChevronRight size={16} />
      </button>
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   CASE VIEW (upgrade destination)
   ══════════════════════════════════════════ */

const CaseView = ({ entityName, entityType, connections, onBack }) => {
  const isBiz = ["llc", "partnership", "corporation", "trust", "sole_prop"].includes(entityType);
  const NavItem = ({ icon, label, active, indent = 0 }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: `7px 12px 7px ${16 + indent}px`, fontSize: 13, color: active ? "#1967d2" : "#3c4043", fontWeight: active ? 600 : 400, background: active ? "#e8f0fe" : "transparent", borderLeft: active ? "3px solid #1967d2" : "3px solid transparent", cursor: "pointer" }}>
      <span style={{ display: "flex", flexShrink: 0 }}>{icon}</span>{label}
    </div>
  );

  return <div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
      <div>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 4, padding: 0, border: "none", background: "none", color: "#1967d2", fontSize: 12, fontWeight: 600, cursor: "pointer", marginBottom: 4 }}>← Back</button>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#202124" }}>OC-000099</span>
          <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4, background: "#e8f0fe", color: "#1967d2" }}>In Progress</span>
        </div>
      </div>
      <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 6, border: "1px solid #dadce0", background: "white", color: "#3c4043", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
        Request Customer to Complete
      </button>
    </div>

    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      {/* Left nav */}
      <div style={{ width: 220, flexShrink: 0, background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
        <div style={{ padding: "10px 0 4px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px" }}>Overview</div>
          <NavItem icon={<DocIcon />} label="Case Details" active />
        </div>
        <div style={{ height: 1, background: "#e8eaed", margin: "4px 12px" }} />
        <div style={{ padding: "8px 0 4px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px" }}>{entityName}</div>
          <NavItem icon={<DocIcon size={14} />} label="Business Information" indent={4} />
          <NavItem icon={<DocIcon size={14} />} label="Documents" indent={4} />
          <NavItem icon={<RelatedPartiesIcon />} label="Related Parties" indent={4} />
        </div>
        {connections.map((c, i) => <div key={i}>
          <div style={{ height: 1, background: "#e8eaed", margin: "4px 12px" }} />
          <div style={{ padding: "8px 0 4px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px" }}>{c.name}</div>
            <NavItem icon={<DocIcon size={14} />} label="Personal Details" indent={4} />
            <NavItem icon={<DocIcon size={14} />} label="Documents" indent={4} />
          </div>
        </div>)}
      </div>

      {/* Main content */}
      <div style={{ flex: 1 }}>
        <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", padding: "20px" }}>
          <h2 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 700, color: "#202124" }}>Case Details</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px 24px" }}>
            <div><div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 3 }}>Primary Entity</div><div style={{ fontSize: 14, fontWeight: 600, color: "#202124" }}>{entityName}</div></div>
            <div><div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 3 }}>Entity Type</div><div style={{ fontSize: 14, fontWeight: 600, color: "#202124" }}>{ENTITY_TYPES.find(t => t.value === entityType)?.label}</div></div>
            <div><div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 3 }}>Related Parties</div><div style={{ fontSize: 14, fontWeight: 600, color: "#202124" }}>{connections.length}</div></div>
            <div><div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 3 }}>Status</div><span style={{ fontSize: 12, fontWeight: 600, padding: "2px 8px", borderRadius: 4, background: "#e8f0fe", color: "#1967d2" }}>In Progress</span></div>
            <div><div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 3 }}>Case Owner</div><div style={{ fontSize: 14, fontWeight: 600, color: "#202124" }}>Avery Cocozziello</div></div>
            <div><div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 3 }}>Created</div><div style={{ fontSize: 14, fontWeight: 600, color: "#202124" }}>Feb 15, 2026</div></div>
          </div>
        </div>

        <div style={{ background: "#f3e8fd", borderRadius: 8, border: "1px solid #ce93d8", padding: "16px 20px", marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#7b1fa2", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}><CheckIcon size={16} /></div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#7b1fa2" }}>Case Created from Entity</div>
            <div style={{ fontSize: 13, color: "#5f6368" }}>
              {entityName} and {connections.length} connected relationship{connections.length !== 1 ? "s" : ""} have been carried over. You can now add related parties, request documents, and manage the full onboarding workflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   SCENARIO SELECTOR (demo guide)
   ══════════════════════════════════════════ */

const ScenarioSelector = ({ onSelect }) => (
  <div style={{ maxWidth: 700, margin: "0 auto" }}>
    <div style={{ textAlign: "center", marginBottom: 28 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: "#9aa0a6", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Demo Walkthrough</div>
      <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#202124" }}>Choose a Scenario</h1>
      <p style={{ margin: "6px 0 0", fontSize: 14, color: "#5f6368" }}>Walk through the bundled onboarding flow step by step.</p>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {[
        { id: "individual", title: "Part 1: George Glass (Individual)", desc: "George walks into the branch and wants to open a personal deposit account. Simple individual onboarding with Alloy verification and an optional connected relationship (spouse).", steps: "Search → Create Entity → Verify → Add Spouse → Complete → Open Deposit", color: "#1967d2", bg: "#e8f0fe" },
        { id: "smallbiz", title: "Part 2: Port City Coffee LLC (Small Business)", desc: "George had such a great experience, he wants to open a business deposit account for his single-member LLC. Simple business onboarding with George as the sole owner.", steps: "Search → Create Entity → Verify → Add George as Owner → Complete → Open Business Deposit", color: "#e65100", bg: "#fff3e0" },
        { id: "upgrade", title: "Part 3: Upgrade to Onboarding Case", desc: "Mid-conversation, the banker realizes Port City Coffee has multiple layers of ownership. The banker upgrades from simple entity onboarding into a full onboarding case with related party management.", steps: "Search → Create Entity → Realize Complexity → Create Onboarding Case → Full Case View", color: "#7b1fa2", bg: "#f3e8fd" },
      ].map(s => <div key={s.id} onClick={() => onSelect(s.id)} style={{
        background: "white", borderRadius: 10, border: "2px solid #e8eaed", padding: "20px",
        cursor: "pointer", transition: "all 0.15s", display: "flex", alignItems: "center", gap: 16,
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.boxShadow = `0 4px 16px ${s.color}12`; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.boxShadow = "none"; }}
      >
        <div style={{ width: 48, height: 48, borderRadius: 12, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, flexShrink: 0, fontSize: 18, fontWeight: 800 }}>
          {s.id === "individual" ? "1" : s.id === "smallbiz" ? "2" : "3"}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#202124", marginBottom: 4 }}>{s.title}</div>
          <div style={{ fontSize: 13, color: "#5f6368", lineHeight: 1.5, marginBottom: 8 }}>{s.desc}</div>
          <div style={{ fontSize: 11, color: "#9aa0a6" }}>{s.steps}</div>
        </div>
        <ChevronRight size={18} />
      </div>)}
    </div>
  </div>
);


/* ══════════════════════════════════════════
   MAIN APP
   ══════════════════════════════════════════ */

export default function App() {
  const [view, setView] = useState("scenarios");
  const [scenario, setScenario] = useState(null);
  const [completedEntity, setCompletedEntity] = useState(null);

  const handleScenario = (s) => {
    setScenario(s);
    setView("search");
    setCompletedEntity(null);
  };

  const prefillMap = { individual: "George Glass", smallbiz: "Port City Coffee LLC", upgrade: "Port City Coffee LLC" };

  return <div style={{ fontFamily: "'Salesforce Sans','SF Pro Text',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", background: "#f3f3f3", minHeight: "100vh", fontSize: 13, color: "#3c4043" }}>
    {/* Top Nav */}
    <div style={{ background: "white", borderBottom: "1px solid #e0e0e0", padding: "0 16px", display: "flex", alignItems: "center", height: 44, gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginRight: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,5px)", gap: 3, opacity: 0.4 }}>{[...Array(9)].map((_, i) => <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#5f6368" }} />)}</div>
        <span style={{ fontWeight: 700, fontSize: 14, color: "#1967d2", letterSpacing: -0.2 }}>nCino</span>
      </div>
      {["Home", "Leads", "Opportunities", "Relationships", "Applications", "Loans", "Deposits", "Onboarding"].map(item => <span key={item} style={{ fontSize: 12.5, color: item === "Onboarding" ? "#1967d2" : "#5f6368", fontWeight: item === "Onboarding" ? 600 : 400, cursor: "pointer", padding: "12px 0", borderBottom: item === "Onboarding" ? "2px solid #1967d2" : "2px solid transparent" }}>{item}</span>)}
      <div style={{ marginLeft: "auto" }}><div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 4, background: "#f1f3f4", fontSize: 12, color: "#80868b" }}><SearchIcon size={14} /> Search...</div></div>
    </div>

    {/* Page header */}
    <div style={{ background: "white", borderBottom: "1px solid #e0e0e0", padding: "16px 24px" }}>
      <div style={{ fontSize: 12, color: "#80868b", marginBottom: 4, display: "flex", alignItems: "center", gap: 5 }}>
        <span style={{ color: "#1967d2", cursor: "pointer" }} onClick={() => setView("scenarios")}>Onboarding</span>
        {view !== "scenarios" && <><span style={{ color: "#bdc1c6" }}>&gt;</span><span style={{ color: "#3c4043" }}>{
          view === "search" ? "Search" :
          view === "create" ? "New Entity" :
          view === "complete" ? "Complete" :
          view === "case" ? "Case" : ""
        }</span></>}
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#202124" }}>Onboarding</div>
    </div>

    {/* Content */}
    <div style={{ padding: "24px" }}>
      {view === "scenarios" && <ScenarioSelector onSelect={handleScenario} />}

      {view === "search" && <SearchScreen
        onCreateEntity={() => setView("create")}
        onCreateCase={() => setView("case-direct")}
      />}

      {view === "create" && <EntityForm
        prefillName={prefillMap[scenario] || ""}
        onBack={() => setView("search")}
        onSave={(name, type, conns) => {
          setCompletedEntity({ name, type, connections: conns });
          setView("complete");
        }}
        onCreateCase={(name, type, conns) => {
          setCompletedEntity({ name, type, connections: conns });
          setView("case");
        }}
      />}

      {view === "complete" && completedEntity && <CompletionScreen
        entityName={completedEntity.name}
        entityType={completedEntity.type}
        connections={completedEntity.connections}
        onNewEntity={() => setView("search")}
        onOriginateProduct={() => alert("Would navigate to Deposit Account Opening workflow")}
        onCreateCase={() => setView("case")}
        onGoToSearch={() => setView("search")}
      />}

      {view === "case" && completedEntity && <CaseView
        entityName={completedEntity.name}
        entityType={completedEntity.type}
        connections={completedEntity.connections}
        onBack={() => setView("complete")}
      />}
    </div>
  </div>;
}
