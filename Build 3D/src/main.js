import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <div class="brand" aria-label="Techfest IIT Bombay">
        <span class="brand-mark">TF</span>
        <div class="brand-copy">
          <strong>TECHFEST</strong>
          <small>IIT BOMBAY</small>
        </div>
      </div>

      <nav class="main-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#highlights">Highlights</a>
        <a href="#workshops">Workshops</a>
        <a href="#register">Register</a>
      </nav>

      <button class="ghost-button" type="button">Explore now</button>
    </header>

    <main class="content">
      <section class="hero" id="top">
        <div class="hero-copy">
          <p class="eyebrow">Asia's largest science & technology festival</p>
          <h1>
            Build the<br />
            <span>future</span><br />
            at Techfest.
          </h1>

          <p class="lead">
            Discover a world of innovation where robotics, design, AI, creativity, and cutting-edge technology collide in one unforgettable experience.
          </p>

          <div class="cta-row">
            <a class="primary-btn" href="#register">Register now</a>
            <a class="secondary-btn" href="#highlights">View highlights</a>
          </div>

          <div class="hero-stats">
            <div>
              <strong>2500+</strong>
              <span>colleges</span>
            </div>
            <div>
              <strong>120+</strong>
              <span>events</span>
            </div>
            <div>
              <strong>3D</strong>
              <span>immersive</span>
            </div>
          </div>
        </div>

        <div class="visual-panel" aria-label="3D Techfest concept scene">
          <div class="scene" aria-hidden="true">
            <div class="backdrop-orbit orbit-one"></div>
            <div class="backdrop-orbit orbit-two"></div>
            <div class="backdrop-orbit orbit-three"></div>

            <div class="float-layer layer-1"></div>
            <div class="float-layer layer-2"></div>
            <div class="float-layer layer-3"></div>

            <div class="core-object">
              <div class="core-glow"></div>
              <div class="core-ring ring-a"></div>
              <div class="core-ring ring-b"></div>
              <div class="core-ring ring-c"></div>
              <div class="core-dot"></div>
            </div>

            <div class="glass-card glass-a" data-tilt>
              <span>AI LAB</span>
              <strong>08</strong>
            </div>

            <div class="glass-card glass-b" data-tilt>
              <span>HACKATHON</span>
              <strong>24H</strong>
            </div>

            <div class="glass-card glass-c" data-tilt>
              <span>WORKSHOP</span>
              <strong>360°</strong>
            </div>
          </div>
        </div>
      </section>

      <section class="feature-strip" aria-label="Techfest event metrics">
        <div><span>Live launch</span><strong>Innovation wave</strong></div>
        <div><span>Campus reach</span><strong>Global audience</strong></div>
        <div><span>Core vibe</span><strong>Build • Learn • Inspire</strong></div>
      </section>

      <section class="info-grid" id="about">
        <div class="section-heading">
          <p class="eyebrow">Why Techfest</p>
          <h2>Where ideas take shape in motion.</h2>
        </div>

        <div class="info-cards">
          <article class="info-card" data-tilt>
            <label>01</label>
            <h3>Innovation</h3>
            <p>From robotics to product design, Techfest turns bold thinking into real-world impact.</p>
          </article>

          <article class="info-card active" data-tilt>
            <label>02</label>
            <h3>Collaboration</h3>
            <p>Bring together creators, engineers, strategists, and dreamers under one immersive platform.</p>
          </article>

          <article class="info-card" data-tilt>
            <label>03</label>
            <h3>Experience</h3>
            <p>Explore interactive showcases, hands-on workshops, and technologies redefining tomorrow.</p>
          </article>
        </div>
      </section>

      <section class="showcase" id="highlights">
        <div class="showcase-copy">
          <p class="eyebrow">Signature highlights</p>
          <h2>3D experiences that inspire action.</h2>
          <p>
            Step into the future through immersive exhibits, visionary prototypes, and elite competitions designed to challenge and excite every curious mind.
          </p>
        </div>

        <div class="showcase-panels">
          <div class="panel-card panel-large" data-tilt>
            <span>Robotics arena</span>
            <strong>Autonomous intelligence</strong>
          </div>
          <div class="panel-card" data-tilt>
            <span>Design sprint</span>
            <strong>Human-centered systems</strong>
          </div>
          <div class="panel-card" data-tilt>
            <span>Tech expo</span>
            <strong>Future-ready products</strong>
          </div>
        </div>
      </section>

      <section class="program-grid" id="workshops">
        <div class="program-header">
          <p class="eyebrow">Featured programs</p>
          <h2>Build, learn, and execute.</h2>
        </div>

        <div class="program-list">
          <div class="program-row">
            <span>01</span>
            <strong>AI & machine learning workshops</strong>
            <em>Hands-on labs</em>
          </div>
          <div class="program-row">
            <span>02</span>
            <strong>Robotics competitions</strong>
            <em>Prototype challenge</em>
          </div>
          <div class="program-row">
            <span>03</span>
            <strong>Product design & ideation</strong>
            <em>Creative sprint</em>
          </div>
        </div>
      </section>

      <section class="cta-panel" id="register">
        <p class="eyebrow">Join the movement</p>
        <h2>Be part of the next big idea.</h2>
        <button class="primary-btn" type="button">Reserve your spot</button>
      </section>
    </main>

    <footer class="site-footer">
      <span>Techfest IIT Bombay</span>
      <span>Build • Learn • Create</span>
      <span>2026 Edition</span>
    </footer>
  </div>
`

const scene = document.querySelector('.scene')
const floatLayers = document.querySelectorAll('.float-layer, .glass-card')
const tiltCards = document.querySelectorAll('[data-tilt]')

const updateSceneTilt = (x, y) => {
  scene.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`

  floatLayers.forEach((layer, index) => {
    const strength = (index + 1) * 0.35
    layer.style.transform = `translate3d(${x * strength}px, ${y * (strength + 0.3)}px, ${index * 16}px)`
  })
}

window.addEventListener('pointermove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 24
  const y = (event.clientY / window.innerHeight - 0.5) * -20
  updateSceneTilt(x, y)
})

window.addEventListener('scroll', () => {
  const scrollOffset = window.scrollY * 0.12
  document.documentElement.style.setProperty('--scroll-shift', `${scrollOffset}px`)
  const orbit = document.querySelector('.backdrop-orbit.orbit-one')
  if (orbit) {
    orbit.style.transform = `translate3d(0, ${scrollOffset * 0.9}px, 0) rotateZ(${scrollOffset * 0.15}deg)`
  }
})

tiltCards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5

    card.style.transform = `perspective(1100px) rotateX(${(-py * 12).toFixed(2)}deg) rotateY(${(px * 14).toFixed(2)}deg) translateY(-8px)`
  })

  card.addEventListener('pointerleave', () => {
    card.style.transform = ''
  })
})
