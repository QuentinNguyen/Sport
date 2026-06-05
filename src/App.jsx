import { useState } from "react";

const program = [
  {
    day: "Séance A",
    tag: "Handstand & Gainage",
    color: "#C8F04A",
    blocks: [
      {
        title: "Échauffement",
        duration: "10 min",
        exercises: [
          { name: "Rotations d'épaules + poignets", sets: null, reps: "2 min", note: "" },
          { name: "Cat-cow + thoracic rotation", sets: null, reps: "10 reps", note: "" },
          { name: "Hollow body rock", sets: "3×", reps: "20 sec", note: "Lombaires collées au sol" },
        ],
      },
      {
        title: "Handstand — Contrôle bassin",
        duration: "20 min",
        exercises: [
          { name: "Handstand mur ventre face", sets: "5×", reps: "25 sec", note: "Bascule active du bassin, pousse le sol" },
          { name: "Pike hold sur sol → élévation lente", sets: "4×", reps: "5 reps", note: "Contrôle de la montée jambe par jambe" },
          { name: "Bascule antéro/postérieure en planche haute", sets: "3×", reps: "10 reps", note: "Isoler le mouvement du bassin" },
          { name: "Tentatives handstand libre", sets: "10×", reps: "5–10 sec", note: "Qualité > quantité, pause 30 sec entre" },
        ],
      },
      {
        title: "Gainage 1 main — Jambe latérale",
        duration: "15 min",
        exercises: [
          { name: "Side plank 1 main + jambe béquille", sets: "3×", reps: "20 sec / côté", note: "Pied avant comme 3ᵉ appui léger" },
          { name: "Side plank 1 main + hip dip", sets: "3×", reps: "8 reps / côté", note: "Montée lente, contrôle total" },
          { name: "Side plank 1 main + jambe levée 3 sec", sets: "3×", reps: "6 reps / côté", note: "Tenir 3 sec en haut" },
        ],
      },
      {
        title: "Mobilité — Épaules & Hanches",
        duration: "10 min",
        exercises: [
          { name: "Shoulder flexion wall slide", sets: "2×", reps: "12 reps", note: "" },
          { name: "Pigeon pose", sets: null, reps: "90 sec / côté", note: "" },
          { name: "Bretzel stretch", sets: null, reps: "60 sec / côté", note: "" },
        ],
      },
    ],
  },
  {
    day: "Séance B",
    tag: "Force & Mobilité profonde",
    color: "#FF6B35",
    blocks: [
      {
        title: "Échauffement",
        duration: "10 min",
        exercises: [
          { name: "Inchworm + push-up", sets: "3×", reps: "5 reps", note: "" },
          { name: "World's greatest stretch", sets: null, reps: "5 reps / côté", note: "" },
          { name: "Scapular push-ups", sets: "2×", reps: "12 reps", note: "" },
        ],
      },
      {
        title: "Force — Tronc & Gainage global",
        duration: "20 min",
        exercises: [
          { name: "Dragon flag excentrique", sets: "4×", reps: "5 reps", note: "Descente en 4 sec" },
          { name: "Planche frontale 1 bras (au sol)", sets: "4×", reps: "20 sec / côté", note: "Progresser vers jambe levée" },
          { name: "L-sit (parallettes ou sol)", sets: "4×", reps: "15–20 sec", note: "Pousse active + bascule bassin" },
          { name: "Pike compression assis", sets: "3×", reps: "30 sec", note: "Hanches ouvertes, dos droit" },
        ],
      },
      {
        title: "Mobilité — Splits & Colonne",
        duration: "20 min",
        exercises: [
          { name: "Hip flexor lunge progressif", sets: null, reps: "2 min / côté", note: "Descendre sur l'expiration" },
          { name: "Pancake stretch au sol", sets: null, reps: "3 min", note: "Pousse la poitrine vers le sol" },
          { name: "Pont (wheel pose) ou prépa épaule", sets: "3×", reps: "20 sec", note: "Pousser les hanches vers le haut" },
          { name: "Cobra → updog → downdog flow", sets: "3×", reps: "5 cycles", note: "" },
        ],
      },
    ],
  },
  {
    day: "Séance C",
    tag: "Skill + Mobilité active",
    color: "#4AC9F0",
    blocks: [
      {
        title: "Échauffement",
        duration: "8 min",
        exercises: [
          { name: "Jump rope ou sauts latéraux", sets: null, reps: "3 min", note: "" },
          { name: "Banded shoulder warm-up", sets: "2×", reps: "15 reps", note: "" },
        ],
      },
      {
        title: "Handstand — Travail technique",
        duration: "20 min",
        exercises: [
          { name: "Kick-up contre mur (dos)", sets: "8×", reps: "hold max", note: "Trouver l'alignement, corriger le bassin" },
          { name: "Chest to wall + shoulder taps", sets: "3×", reps: "6 reps / côté", note: "Stabilité scapulaire" },
          { name: "Handstand straddle entry", sets: "5×", reps: "3 tentatives", note: "Montée jambes en V" },
        ],
      },
      {
        title: "Gainage 1 main — Consolidation",
        duration: "15 min",
        exercises: [
          { name: "Side plank 1 main tenu max", sets: "3×", reps: "max / côté", note: "Noter le temps, progresser semaine après semaine" },
          { name: "Abduction latérale en side plank 2 appuis", sets: "3×", reps: "12 reps / côté", note: "Fessier moyen + obliques" },
          { name: "Side plank 1 main + rotation thoracique", sets: "3×", reps: "8 reps / côté", note: "Bras libre passe sous le corps" },
        ],
      },
      {
        title: "Récupération active",
        duration: "10 min",
        exercises: [
          { name: "Child's pose + extension latérale", sets: null, reps: "2 min", note: "" },
          { name: "Supine spinal twist", sets: null, reps: "90 sec / côté", note: "" },
          { name: "Respiration diaphragmatique", sets: null, reps: "2 min", note: "Expire lentement, relâche tout" },
        ],
      },
    ],
  },
];

const tips = [
  "Alterne A–B–C avec au moins 1 jour de repos entre chaque séance.",
  "Les handstands se travaillent frais : toujours en début de séance.",
  "Si tu sens une fatigue inhabituelle, remplace la séance par mobilité seule.",
  "Progresse sur le gainage 1 main en notant tes temps chaque semaine.",
];

export default function SportProgram() {
  const [activeDay, setActiveDay] = useState(0);
  const [openBlock, setOpenBlock] = useState(null);

  const session = program[activeDay];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0A",
      fontFamily: "'DM Mono', 'Courier New', monospace",
      color: "#F0EDE6",
      padding: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .tab-btn { transition: all 0.2s ease; cursor: pointer; border: none; }
        .tab-btn:hover { opacity: 0.85; transform: translateY(-1px); }
        .block-header { cursor: pointer; transition: background 0.15s; }
        .block-header:hover { background: rgba(255,255,255,0.04) !important; }
        .ex-row:nth-child(even) { background: rgba(255,255,255,0.025); }
      `}</style>

      {/* Header */}
      <div style={{
        padding: "40px 24px 28px",
        borderBottom: "1px solid #1E1E1E",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -60, right: -40,
          width: 220, height: 220,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${session.color}18 0%, transparent 70%)`,
          transition: "background 0.4s",
        }} />
        <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#555", marginBottom: 8, textTransform: "uppercase" }}>
          Programme · Niveau Avancé
        </div>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(36px, 8vw, 56px)",
          lineHeight: 1,
          color: "#F0EDE6",
          letterSpacing: "0.02em",
        }}>
          SPORT TRAINING
        </div>
        <div style={{
          marginTop: 6,
          fontSize: 12,
          color: "#444",
          letterSpacing: "0.12em",
        }}>
          Handstand · Gainage 1 main · Mobilité
        </div>
      </div>

      {/* Session Tabs */}
      <div style={{ display: "flex", gap: 2, padding: "16px 24px 0", borderBottom: "1px solid #1A1A1A" }}>
        {program.map((s, i) => (
          <button
            key={i}
            className="tab-btn"
            onClick={() => { setActiveDay(i); setOpenBlock(null); }}
            style={{
              flex: 1,
              padding: "10px 8px",
              background: activeDay === i ? s.color : "#141414",
              color: activeDay === i ? "#0A0A0A" : "#555",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "'DM Mono', monospace",
              fontWeight: activeDay === i ? "500" : "300",
              borderRadius: "4px 4px 0 0",
            }}
          >
            {s.day}
          </button>
        ))}
      </div>

      {/* Session Header */}
      <div style={{ padding: "20px 24px 4px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 8, height: 8, borderRadius: "50%",
          background: session.color,
          flexShrink: 0,
        }} />
        <div style={{ fontSize: 13, color: session.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {session.tag}
        </div>
        <div style={{ marginLeft: "auto", fontSize: 11, color: "#333" }}>
          {session.blocks.reduce((a, b) => a + (parseInt(b.duration) || 0), 0)} min total
        </div>
      </div>

      {/* Blocks */}
      <div style={{ padding: "12px 24px 24px" }}>
        {session.blocks.map((block, bi) => (
          <div key={bi} style={{
            marginBottom: 8,
            border: `1px solid ${openBlock === bi ? "#2A2A2A" : "#181818"}`,
            borderRadius: 6,
            overflow: "hidden",
            transition: "border-color 0.2s",
          }}>
            {/* Block Header */}
            <div
              className="block-header"
              onClick={() => setOpenBlock(openBlock === bi ? null : bi)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "14px 16px",
                background: "#111",
                gap: 12,
              }}
            >
              <div style={{
                width: 22, height: 22, borderRadius: 3,
                background: openBlock === bi ? session.color : "#1E1E1E",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.2s",
                fontSize: 10,
                color: openBlock === bi ? "#0A0A0A" : "#444",
              }}>
                {openBlock === bi ? "▲" : "▼"}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: "500", letterSpacing: "0.06em", color: "#DDD" }}>
                  {block.title}
                </div>
              </div>
              <div style={{
                fontSize: 10,
                color: "#333",
                letterSpacing: "0.1em",
                background: "#1A1A1A",
                padding: "3px 8px",
                borderRadius: 3,
              }}>
                {block.duration}
              </div>
            </div>

            {/* Exercises */}
            {openBlock === bi && (
              <div style={{ background: "#0D0D0D" }}>
                {/* Column headers */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 60px 80px",
                  padding: "8px 16px",
                  fontSize: 9,
                  color: "#333",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid #161616",
                }}>
                  <span>Exercice</span>
                  <span style={{ textAlign: "center" }}>Séries</span>
                  <span style={{ textAlign: "center" }}>Reps / Durée</span>
                </div>
                {block.exercises.map((ex, ei) => (
                  <div key={ei} className="ex-row" style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 60px 80px",
                    padding: "10px 16px",
                    alignItems: "start",
                    borderBottom: ei < block.exercises.length - 1 ? "1px solid #131313" : "none",
                  }}>
                    <div>
                      <div style={{ fontSize: 12, color: "#CCC", marginBottom: ex.note ? 3 : 0 }}>
                        {ex.name}
                      </div>
                      {ex.note && (
                        <div style={{ fontSize: 10, color: "#444", fontStyle: "italic" }}>
                          {ex.note}
                        </div>
                      )}
                    </div>
                    <div style={{ textAlign: "center", fontSize: 12, color: session.color, fontWeight: "500" }}>
                      {ex.sets || "—"}
                    </div>
                    <div style={{ textAlign: "center", fontSize: 11, color: "#888" }}>
                      {ex.reps}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tips */}
      <div style={{
        margin: "0 24px 32px",
        padding: 16,
        border: "1px solid #1A1A1A",
        borderRadius: 6,
        background: "#0D0D0D",
      }}>
        <div style={{ fontSize: 9, letterSpacing: "0.18em", color: "#333", textTransform: "uppercase", marginBottom: 12 }}>
          Notes de programmation
        </div>
        {tips.map((t, i) => (
          <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < tips.length - 1 ? 8 : 0 }}>
            <div style={{ color: session.color, fontSize: 10, marginTop: 2, flexShrink: 0 }}>◆</div>
            <div style={{ fontSize: 11, color: "#555", lineHeight: 1.5 }}>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
