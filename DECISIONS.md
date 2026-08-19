# DECISIONS.md — TaskFlow Frontend Engineering Challenge

**Candidate Submission:** Part 2 — The Premium Home Page  
**Product:** TaskFlow ("Stop managing your work. Start moving it forward.")

---

### 1. Architectural & Technical Choices (Why this over alternatives?)

- **React + Vite over Next.js / Heavy Frameworks:**  
  Selected a pure React + Vite single-page setup to maximize runtime performance, minimize bundle overhead (0 server dependencies), and ensure every line of code can be explained clearly during an interview call without framework abstraction magic (SSR, hydration quirks, or complex router configurations).

- **Standard CSS Design Tokens over Tailwind / UI Component Libraries:**  
  Built a bespoke CSS design system using native CSS variables (`:root`). This provides total control over Obsidian dark mode surfaces, precise micro-animations, hairline borders, and fluid typography without introducing utility bloat or third-party CSS library lock-in.

- **Lifted Local State (`useState`) over Redux / Zustand:**  
  State management for demo task completion and focus timing is elevated to the root component (`App.jsx`) and passed down via explicit React props. Derived values (such as completed count and progress percentage) are computed on the fly during rendering rather than stored redundantly in state.

---

### 2. Trade-offs Made Under Time Limit & Future Plan

- **Trade-off:**  
  Static demo dataset in local state instead of dynamic local storage persistence or drag-and-drop task reordering.
  
- **What I would build with a full week:**
  1. **Drag-and-Drop Task Reordering:** Implement native HTML5 drag-and-drop or lightweight gesture handlers for custom task prioritization.
  2. **Keyboard Shortcuts:** Global hotkeys (e.g., `Cmd+K` palette, `Space` for timer start, `N` for new task).
  3. **Local Storage Sync:** Persist user-checked tasks and timer preferences across browser refreshes.

---

### 3. AI Tool Usage & Verification

- **AI Utilization:**  
  AI assistance was used for scaffolding component templates, generating baseline CSS reset variables, and creating initial mock task datasets.

- **Personal Verification & Modifications:**  
  - Hand-tuned all responsive layout breakpoints (390px, 768px, 1024px, 1440px) to guarantee zero horizontal scroll.
  - Refactored task progress calculation logic to ensure pure rendering without state side-effects.
  - Implemented `@media (prefers-reduced-motion)` for motion accessibility.
