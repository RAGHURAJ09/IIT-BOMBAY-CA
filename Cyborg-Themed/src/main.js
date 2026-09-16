import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="shell">
    <header class="topbar">
      <a class="brand" href="#top" aria-label="Nexus 09 home"><span class="brand-mark">N/09</span><span class="brand-copy">NEXUS<br><small>CYBERNETICS</small></span></a>
      <nav aria-label="Main navigation"><a href="#protocol">Protocol</a><a href="#systems">Systems</a><a href="#contact">Contact</a></nav>
      <button class="power-button" id="power-button" type="button" aria-pressed="true"><span class="power-dot"></span><span id="power-label">Online</span></button>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="pulse"></span> Neural interface / series 09</p>
          <h1 id="hero-title">Become more<br><em>than human.</em></h1>
          <p class="hero-intro">A responsive exoskeleton for the edge of possibility. NEXUS-09 synchronizes body, mind, and machine in real time.</p>
          <div class="hero-actions"><a class="button button-primary" href="#protocol">Enter the protocol <span>↗</span></a><a class="text-link" href="#systems">Explore systems <span>↓</span></a></div>
          <div class="hero-meta"><div><strong>01</strong><span>Adaptive<br>architecture</span></div><div><strong>∞</strong><span>Potential<br>unlocked</span></div></div>
        </div>
        <div class="hero-visual" aria-label="Abstract cybernetic neural interface visualization">
          <div class="scanline"></div><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="core"><div class="core-ring ring-back"></div><div class="core-ring ring-front"></div><div class="core-glow"></div><div class="core-crosshair"></div></div>
          <div class="readout readout-top"><span>NEURAL SYNC</span><strong>98.7%</strong></div>
          <div class="readout readout-side"><span>CORE TEMP</span><strong>36.8°</strong><i></i></div>
          <div class="coordinate">35°41'12.8"N<br>139°41'30.2"E</div><div class="visual-label">N-09 <span>///</span> ACTIVE</div>
        </div>
      </section>

      <section class="signal-strip" aria-label="System telemetry"><span>LIVE TELEMETRY</span><i></i><span>LATENCY <b>0.02ms</b></span><i></i><span>UPTIME <b>99.99%</b></span><i></i><span>CLASS <b>ASCENDANT</b></span><div class="signal-bars"><b></b><b></b><b></b><b></b><b></b></div></section>

      <section class="protocol section-grid" id="protocol"><div class="section-heading"><p class="eyebrow">/ 01 &nbsp; THE PROTOCOL</p><h2>Intelligence<br>in motion.</h2></div><div class="section-body"><p>We build interfaces that disappear into instinct. NEXUS is an evolving operating layer for the human body, tuned to respond before you think.</p><a class="text-link" href="#systems">View the architecture <span>↗</span></a></div></section>

      <section class="systems" id="systems"><div class="systems-heading"><p class="eyebrow">/ 02 &nbsp; SYSTEMS ONLINE</p><h2>Built for the<br><em>next iteration.</em></h2></div><div class="system-grid"><article class="system-card featured"><div class="card-top"><span>01 / PERCEPTION</span><span>↗</span></div><div class="icon-eye"><i></i></div><h3>OPTIC<br>AMPLIFIER</h3><p>See signal through the noise.</p><div class="card-line"></div><span class="status">●&nbsp; CALIBRATED</span></article><article class="system-card"><div class="card-top"><span>02 / COGNITION</span><span>↗</span></div><div class="icon-wave"><i></i><i></i><i></i><i></i></div><h3>THOUGHT<br>ENGINE</h3><p>Turn intention into action.</p><div class="card-line"></div><span class="status">●&nbsp; CALIBRATED</span></article><article class="system-card"><div class="card-top"><span>03 / KINETICS</span><span>↗</span></div><div class="icon-cross"><i></i><i></i></div><h3>VECTOR<br>FRAME</h3><p>Move without compromise.</p><div class="card-line"></div><span class="status">●&nbsp; CALIBRATED</span></article></div></section>

      <section class="contact" id="contact"><p class="eyebrow">/ 03 &nbsp; INITIATE CONTACT</p><h2>The future is<br><em>already listening.</em></h2><button class="button button-primary" id="contact-button" type="button">Request access <span>↗</span></button><p class="contact-note" id="contact-note">Secure channel / response within 09 hours</p></section>
    </main>
    <footer><span>© 2094 NEXUS INDUSTRIES</span><span>ALL SYSTEMS NOMINAL <i></i></span><span>NYC / TOKYO / LUNA</span></footer>
  </div>
`

const powerButton = document.querySelector('#power-button')
powerButton.addEventListener('click', () => {
  const isOnline = powerButton.getAttribute('aria-pressed') === 'true'
  powerButton.setAttribute('aria-pressed', String(!isOnline))
  document.querySelector('#power-label').textContent = isOnline ? 'Standby' : 'Online'
})

document.querySelector('#contact-button').addEventListener('click', (event) => {
  event.currentTarget.textContent = 'Access requested ✓'
  document.querySelector('#contact-note').textContent = 'Your signal has been received / channel secured'
})
