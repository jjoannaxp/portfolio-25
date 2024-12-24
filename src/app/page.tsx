export default function Home() {
  return (
    <main>
      <div className="hero">
        <div id="hero-title">
          <div>
            Hey, I’m <em id="name">Joanna!</em>
          </div>
          <img
            src="/logo.svg"
            alt="Logo"
            style={{ width: "32px", height: "32px" }}
          />
        </div>

        <div id="tagline">
          A product designer <span className="red">˚⊹</span> blending pixels &
          code <span className="red">⊹₊⟡⋆</span> to build communities and tell
          stories <span className="red">( ˃ᴗ˂) ✧*｡</span>
        </div>
      </div>
      <div id="statuses">
        <div className="mono">
          <b>Previously:</b> Product Design @ Measured, WhatNot, and
          Eightfold.AI
        </div>
        <div className="mono">
          <b>Currently:</b> Building design communities, learning React, and
          finding new LA cafes.{" "}
        </div>
      </div>
      <ul>
        <li>
          <a href="/projects/tinker">Tinker</a>
        </li>
        <li>
          <a href="/projects/measured-kat">Known Audience Testing</a>
        </li>
        <li>
          <a href="/projects/measured-design-system">Design System</a>
        </li>
        <li>
          <a href="/projects/eightfold-ai">Eightfold.AI</a>
        </li>
        <li>
          <a href="/projects/whatnot">WhatNot</a>
        </li>
      </ul>
    </main>
  );
}
