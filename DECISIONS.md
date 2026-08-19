# DECISIONS.md — TaskFlow Frontend Engineering Challenge

**Candidate Submission:** Part 2 — The Premium Home Page  
**Product:** TaskFlow ("Stop managing your work. Start moving it forward.")

---

### 1. Why this architecture strategy over the obvious alternative rejected?

I chose a **React + Vite + Vanilla CSS** single-page architecture over Next.js / Server-Side Rendering (SSR) and heavy state management libraries like Redux or Zustand. 

- **Why rejected Next.js:** SSR and routing magic add unnecessary bundle weight and runtime complexity for a focused, single-page product demonstration. A pure Vite React client app loads instantly, has zero server infrastructure dependencies, and compiles in < 7 seconds.
- **Why rejected Redux / Zustand:** Local React state (`useState`) passed via explicit props is sufficient for interactive task checking and timing. Deriving progress percentages dynamically during render eliminates state duplication bugs.
- **Why rejected Tailwind CSS / UI Libraries:** Custom CSS custom properties (`:root`) provide full design freedom over the Light Premium SaaS theme (white `#FFFFFF`, soft gray `#F8F9FC`, subtle `#E7EAF0` borders, indigo `#5B5FEF` accents) without utility class noise.

---

### 2. One trade-off made under the time limit, and what I'd do with a real week.

- **Trade-off:**  
  In-memory demo task state without `localStorage` persistence or drag-and-drop task re-prioritization.
  
- **What I would build with a full week:**
  1. **Drag-and-Drop Task Reordering:** Native HTML5 or touch-friendly drag handles so users can manually rank daily priorities.
  2. **Keyboard Command Palette (`Cmd+K`):** Quick-capture shortcuts for adding tasks, toggling focus mode, or resetting the timer without using the mouse.
  3. **Local Storage Sync:** Persist checked tasks, custom task additions, and timer settings across page reloads.

---

### 3. Where did AI tools get used, and what was personally verified or changed afterward?

- **Where AI was used:**  
  Generating initial React component boilerplate, drafting baseline CSS reset properties, and creating mock task items.

- **What I personally verified and changed afterward:**
  - **Color Palette & Visual Tone:** Shifted the interface from an oversized dark AI template look to a restrained, light-themed premium SaaS aesthetic with intentional blue/indigo accent scoping.
  - **Responsive Breakpoint Testing:** Tested layout rendering at 390px, 768px, 1024px, and 1440px to ensure zero horizontal scrolling and proper mobile menu drawer functionality.
  - **State Pureness:** Verified that progress bar percentages and task counts are derived reactively without state side-effects.
  - **Accessibility:** Enforced `@media (prefers-reduced-motion: reduce)` rules for motion-sensitive users.

---

### 🕹️ Bonus Round: Hidden Easter Eggs

For the Acdyon team to find:
1. **Konami Code:** Type `↑ ↑ ↓ ↓ ← → ← → b a` anywhere on the keyboard to trigger the Secret Konami Mode.
2. **Logo Secret:** Click the top-left TaskFlow logo 3 times in a row.
