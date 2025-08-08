document.addEventListener("DOMContentLoaded", function () {
  // ===== 1. QUANTUM REALITY ENGINE =====
  const quantumCore = {
    init() {
      this.setupCanvas();
      this.setupAudio();
      this.createParticles(150);
      this.animate();
      this.bindEvents();
      this.setupOrbAnimation();
    },

    particles: [],
    audioContext: null,
    analyser: null,
    frequencyData: null,
    lastUpdate: 0,

    setupCanvas() {
      this.particleCanvas = document.getElementById("particle-field");
      this.neuralCanvas = document.getElementById("neural-web");
      this.particleCtx = this.particleCanvas.getContext("2d");
      this.neuralCtx = this.neuralCanvas.getContext("2d");

      this.resizeCanvases();
      window.addEventListener("resize", () => this.resizeCanvases());
    },

    setupAudio() {
      const audio = document.getElementById("ambient-pulse");
      audio.volume = 0.2;

      try {
        this.audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
        const source = this.audioContext.createMediaElementSource(audio);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 64;
        source.connect(this.analyser);
        source.connect(this.audioContext.destination);
        this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);

        // Handle audio autoplay policy
        const playAudio = () => {
          audio.play().catch((e) => {
            document.body.removeEventListener("click", playAudio);
          });
          document.body.removeEventListener("click", playAudio);
        };

        document.body.addEventListener("click", playAudio);
      } catch (e) {
        console.log("Audio error:", e);
      }
    },

    createParticles(count) {
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.particleCanvas.width,
          y: Math.random() * this.particleCanvas.height,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 0.5,
          angle: Math.random() * Math.PI * 2,
          hue: Math.random() * 60 + 180, // Cyan to magenta range
          energy: 0,
          targetX: null,
          targetY: null,
        });
      }
    },

    setupOrbAnimation() {
      const orb = document.querySelector(".energy-orb");
      let scale = 1;
      let direction = 0.005;

      setInterval(() => {
        scale += direction;
        if (scale > 1.3 || scale < 0.7) direction *= -1;
        orb.style.transform = `scale(${scale})`;
      }, 50);
    },

    updateParticles(timestamp) {
      const centerX = this.particleCanvas.width / 2;
      const centerY = this.particleCanvas.height / 2;
      const deltaTime = timestamp - this.lastUpdate;
      this.lastUpdate = timestamp;

      // Update audio data if available
      if (this.analyser && this.frequencyData) {
        this.analyser.getByteFrequencyData(this.frequencyData);
      }

      this.particles.forEach((p) => {
        // Apply movement
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        // Center attraction with noise
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 100) {
          p.angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.3;
        } else {
          p.angle += (Math.random() - 0.5) * 0.2;
        }

        // Audio reactivity
        if (this.frequencyData) {
          const freqIndex = Math.floor(p.hue % this.frequencyData.length);
          p.energy = this.frequencyData[freqIndex] / 255;
          p.size = 1 + p.energy * 4;
        }

        // Boundary wrapping
        if (p.x < 0) p.x = this.particleCanvas.width;
        if (p.x > this.particleCanvas.width) p.x = 0;
        if (p.y < 0) p.y = this.particleCanvas.height;
        if (p.y > this.particleCanvas.height) p.y = 0;
      });
    },

    drawParticles() {
      this.particleCtx.clearRect(
        0,
        0,
        this.particleCanvas.width,
        this.particleCanvas.height
      );

      this.particles.forEach((p) => {
        const glow = p.energy * 20;
        const alpha = 0.3 + p.energy * 0.7;

        // Core particle
        this.particleCtx.beginPath();
        this.particleCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.particleCtx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${alpha})`;
        this.particleCtx.fill();

        // Glow effect
        const gradient = this.particleCtx.createRadialGradient(
          p.x,
          p.y,
          p.size,
          p.x,
          p.y,
          p.size + glow
        );
        gradient.addColorStop(0, `hsla(${p.hue}, 100%, 70%, ${alpha * 0.5})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 100%, 70%, 0)`);

        this.particleCtx.beginPath();
        this.particleCtx.arc(p.x, p.y, p.size + glow, 0, Math.PI * 2);
        this.particleCtx.fillStyle = gradient;
        this.particleCtx.fill();
      });
    },

    drawNeuralConnections() {
      this.neuralCtx.clearRect(
        0,
        0,
        this.neuralCanvas.width,
        this.neuralCanvas.height
      );

      // Limit connections for performance
      const maxConnections = Math.min(this.particles.length * 5, 500);
      let connectionsDrawn = 0;

      for (
        let i = 0;
        i < this.particles.length && connectionsDrawn < maxConnections;
        i++
      ) {
        for (
          let j = i + 1;
          j < this.particles.length && connectionsDrawn < maxConnections;
          j++
        ) {
          const p1 = this.particles[i];
          const p2 = this.particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const connectionStrength = 1 - distance / 200;
            const opacity =
              connectionStrength * (0.2 + (p1.energy + p2.energy) / 2);

            this.neuralCtx.beginPath();
            this.neuralCtx.moveTo(p1.x, p1.y);
            this.neuralCtx.lineTo(p2.x, p2.y);

            const midHue = (p1.hue + p2.hue) / 2;
            this.neuralCtx.strokeStyle = `hsla(${midHue}, 100%, 70%, ${opacity})`;
            this.neuralCtx.lineWidth = 0.5 + opacity * 3;
            this.neuralCtx.stroke();

            connectionsDrawn++;
          }
        }
      }
    },

    animate(timestamp) {
      this.updateParticles(timestamp);
      this.drawParticles();
      this.drawNeuralConnections();

      requestAnimationFrame((ts) => this.animate(ts));
    },

    resizeCanvases() {
      this.particleCanvas.width = window.innerWidth;
      this.particleCanvas.height = window.innerHeight;
      this.neuralCanvas.width = window.innerWidth;
      this.neuralCanvas.height = window.innerHeight;

      // Reset particle positions to avoid clustering
      this.particles.forEach((p) => {
        p.x = Math.random() * this.particleCanvas.width;
        p.y = Math.random() * this.particleCanvas.height;
      });
    },

    bindEvents() {
      let mouseX = 0;
      let mouseY = 0;

      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      // Mouse repulsion effect
      setInterval(() => {
        this.particles.forEach((p) => {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const force = (150 - distance) / 50;
            p.angle = Math.atan2(p.y - mouseY, p.x - mouseX);
            p.speed = 1 + force;
          }
        });
      }, 50);
    },
  };

  // ===== 2. GLITCH REALITY SYSTEM =====
  const glitchSystem = {
    init() {
      this.glitchElements = [
        ...document.querySelectorAll("h1, h2, h3, .heading, .sub-heading"),
        document.querySelector(".SideImg img"),
        document.querySelector(".auto-type"),
      ];

      this.setupGlitchEngine();
      this.createSVGFilter();
    },

    createSVGFilter() {
      const svgFilter = `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
          <defs>
            <filter id="glitch">
              <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="1" result="warp"></feTurbulence>
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="8" in="SourceGraphic" in2="warp"></feDisplacementMap>
            </filter>
          </defs>
        </svg>
      `;
      document.body.insertAdjacentHTML("afterbegin", svgFilter);
    },

    setupGlitchEngine() {
      setInterval(() => {
        if (Math.random() > 0.7) {
          this.triggerGlitch();
        }
      }, 3000);
    },

    triggerGlitch() {
      const intensity = Math.random() * 15 + 5;
      const duration = Math.random() * 400 + 100;

      this.glitchElements.forEach((el) => {
        if (!el) return;

        el.style.filter = 'url("#glitch")';
        el.style.transform = `
          translate(${Math.random() * intensity - intensity / 2}px, 
                    ${Math.random() * intensity - intensity / 2}px)
          scale(${0.9 + Math.random() * 0.2})
        `;
        el.style.opacity = 0.7 + Math.random() * 0.3;

        setTimeout(() => {
          el.style.filter = "none";
          el.style.transform = "";
          el.style.opacity = "";
        }, duration);
      });
    },
  };

  // ===== 3. SWIPER INITIALIZATION =====
  const swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: false,
        translate: ["-120%", 0, -500],
        rotate: [0, 0, 0],
      },
      next: {
        shadow: false,
        translate: ["120%", 0, -500],
        rotate: [0, 0, 0],
      },
    },
    on: {
      init: function () {
        updateActiveNav(this.activeIndex);
        enableSlideScrolling();
      },
      slideChangeTransitionStart: function () {
        document.querySelector(".swiper-wrapper").style.filter =
          'url("#glitch")';
        quantumCore.particles.forEach((p) => {
          p.angle = Math.random() * Math.PI * 2;
          p.speed = Math.random() * 3 + 1;
        });
      },
      slideChangeTransitionEnd: function () {
        document.querySelector(".swiper-wrapper").style.filter = "none";
      },
      slideChange: function () {
        updateActiveNav(this.activeIndex);
      },
    },
  });

  // ===== 4. TYPING ANIMATION =====
  const typed = new Typed(".auto-type", {
    strings: ["SHRE^IK!", "SHRE*IK!", "SHRE_NIK!", "SHR3N!K"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    cursorChar: "_",
    smartBackspace: false,
    loop: true,
    onStringTyped: () => {
      const element = document.querySelector(".auto-type");
      element.style.textShadow = "0 0 15px var(--neon-pink)";
      setTimeout(() => {
        element.style.textShadow = "0 0 5px var(--neon-blue)";
      }, 300);
    },
  });

  // ===== 5. HELPER FUNCTIONS =====
  function enableSlideScrolling() {
    document.querySelectorAll(".swiper-slide").forEach((slide) => {
      slide.style.overflowY = "auto";
      slide.style.height = "100vh";
    });
  }

  window.Navigate = function (index) {
    if (!swiper || index >= swiper.slides.length) return;
    document.querySelector(".swiper-wrapper").style.filter = 'url("#glitch")';
    swiper.slideTo(index, 800);
    setTimeout(() => {
      document.querySelector(".swiper-wrapper").style.filter = "none";
      swiper.slides[index].scrollTop = 0;
    }, 800);
  };

  function updateActiveNav(index) {
    document.querySelectorAll(".Links li").forEach((item, i) => {
      const icon = item.querySelector("i");
      if (i === index) {
        item.classList.add("activeLink");
        item.style.textShadow = "0 0 10px var(--neon-pink)";
        if (icon) icon.style.color = "var(--neon-pink)";
      } else {
        item.classList.remove("activeLink");
        item.style.textShadow = "none";
        if (icon) icon.style.color = "var(--text-color)";
      }
    });
  }

  function setupHoverEffects() {
    document
      .querySelectorAll("button, a, .work-card, .skills-card")
      .forEach((el) => {
        el.addEventListener("mouseenter", () => {
          el.style.transform = "translateY(-3px)";
          el.style.boxShadow = `0 5px 15px ${getRandomNeonColor()}`;
        });
        el.addEventListener("mouseleave", () => {
          el.style.transform = "";
          el.style.boxShadow = "";
        });
      });
  }

  function getRandomNeonColor() {
    const colors = [
      "var(--neon-pink)",
      "var(--neon-blue)",
      "var(--neon-purple)",
      "var(--neon-green)",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // ===== 6. INITIALIZE EVERYTHING =====
  quantumCore.init();
  glitchSystem.init();
  setupHoverEffects();

  // Fade in the entire page
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});
