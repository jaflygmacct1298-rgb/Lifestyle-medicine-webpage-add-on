import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTrack, setActiveTrack] = useState(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("navbar");
      if (window.scrollY > 50) {
        nav?.classList.add("scrolled");
      } else {
        nav?.classList.remove("scrolled");
      }

      // Very simple progress bar and active section logic
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const prog = document.getElementById("prog");
      if (prog) prog.style.width = scrolled + "%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const PILLARS = [
    {
      num: "01",
      title: "Whole-Food Nutrition",
      desc: "Learn to eat in a way that protects your heart — delicious, realistic, and backed by decades of research.",
      image: "/images/pillar-nourish.png",
      icons: ["🥗", "🍎", "🛒"]
    },
    {
      num: "02",
      title: "Physical Activity",
      desc: "Find movement that fits your life and your health. We'll build a safe, personalized plan together — no gym required.",
      image: "/images/pillar-exercise.png",
      icons: ["🏃", "🧘", "🚴"]
    },
    {
      num: "03",
      title: "Sleep Health",
      desc: "Poor sleep silently harms your heart. We help you understand and improve your sleep — from habits to screening for sleep apnea.",
      image: "/images/pillar-sleep.png",
      icons: ["🌙", "💤", "🛏️"]
    },
    {
      num: "04",
      title: "Stress Resilience",
      desc: "Chronic stress raises blood pressure and damages arteries. We give you practical tools to manage stress in real life.",
      image: "/images/pillar-stress.png",
      icons: ["🧠", "🌿", "🧘‍♀️"]
    },
    {
      num: "05",
      title: "Social Connection & Purpose",
      desc: "Loneliness is hard on the heart. Our group model connects you with others on the same journey — and that connection heals.",
      image: "/images/pillar-social.png",
      icons: ["🤝", "👥", "❤️"]
    },
    {
      num: "06",
      title: "Substance Risk Reduction",
      desc: "We help you reduce habits that harm your heart — at your pace, without judgment, with real support to make it stick.",
      image: "/images/pillar-habits.png",
      icons: ["🚭", "💧", "🛡️"]
    },
  ];

  return (
    <>
      <div id="prog"></div>

      <nav id="navbar">
        <div className="nav-logo flex items-center">
          <img src="/images/logo.png" alt="Cardiovascular Specialists of New England" className="h-12 w-auto" />
        </div>
        <ul className="nav-links">
          <li><a href="#s1">Mission</a></li>
          <li><a href="#s2">Pillars</a></li>
          <li><a href="#s3">Programs</a></li>
          <li><a href="#s4">Curriculum</a></li>
          <li><a href="#s5">SMA Format</a></li>
          <li><a href="#s6">Outcomes</a></li>
        </ul>
        <button className="nav-btn" onClick={() => scrollToSection('s8')}>Join the Program</button>
      </nav>

      {/* HERO */}
      <section id="s0">
        <div className="hero-l">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="hero-eyebrow">A New Approach to Heart Health</motion.div>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="hero-h1">Take control of<br/><em>your heart health</em></motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="hero-sub">Our cardiologists have developed a proven 12-week program to help you manage heart disease, blood pressure, weight, and diabetes — through lifestyle changes that work alongside your medications.</motion.p>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}} className="hero-actions">
            <button className="btn-solid" onClick={() => scrollToSection('s3')}>Find Your Program</button>
            <button className="btn-ghost" onClick={() => scrollToSection('s8')}>Join the Program</button>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.4}} className="hero-stats">
            <div><div className="stat-n">10</div><div className="stat-l">Heart Specialists on Your Team</div></div>
            <div><div className="stat-n">12</div><div className="stat-l">Weeks to Lasting Change</div></div>
            <div><div className="stat-n">7</div><div className="stat-l">Lifestyle Pillars Covered</div></div>
          </motion.div>
        </div>
        <div className="hero-r">
          <div className="hero-img-frame">
            <img src="/images/hero-active-couple.png" alt="Active healthy senior couple" className="w-full h-full object-cover" />
          </div>
          <div className="hero-badge">
            <div className="badge-icon">🫀</div>
            <div className="badge-text"><strong>Now Enrolling</strong>Talk to your cardiologist to get started</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-bar">
        <div className="marquee-inner">
          <span>Lifestyle Medicine <span className="mdot">✦</span></span>
          <span>Shared Medical Appointments <span className="mdot">✦</span></span>
          <span>ASCVD Prevention <span className="mdot">✦</span></span>
          <span>Cardiometabolic Health <span className="mdot">✦</span></span>
          <span>Telehealth Options &amp; Remote Monitoring <span className="mdot">✦</span></span>
          <span>Weight &amp; Metabolic Care <span className="mdot">✦</span></span>
          <span>Plant-Forward Nutrition <span className="mdot">✦</span></span>
          <span>Medication De-escalation <span className="mdot">✦</span></span>
        </div>
      </div>

      {/* MISSION */}
      <section id="s1">
        <div className="section-tag">How We Think About Your Care</div>
        <h2 className="section-h2">Real change starts with <em>how you live,</em><br/>not just what you take</h2>
        <div className="mission-grid">
          <div className="mission-statement">
            <div className="ms-label">Our Commitment to You</div>
            <div className="ms-text">"We believe that heart disease, diabetes, high blood pressure, and obesity can be prevented — and often reversed — through the right lifestyle changes, supported by a dedicated clinical team that walks alongside you every step of the way."</div>
            <div className="ms-rule"></div>
            <div className="ms-tagline">Cardiovascular Specialists of New England — your dedicated heart health team</div>
          </div>
          <div className="philosophy-list">
            {[
              "Heart disease, diabetes, high blood pressure, and obesity can be treated — and often reversed — by changing the way we live, not just the medications we take.",
              "Lifestyle change is our first treatment, not an afterthought. Your medications support the changes you make — not the other way around.",
              "Lasting change takes time, support, and a team around you. We're with you for the long haul — not just one appointment.",
              "We never judge. Setbacks happen to everyone — we help you get back on track without shame or stigma.",
              "Progress isn't about being perfect. It's about consistent effort, the support of your group, and celebrating every step forward."
            ].map((text, i) => (
              <div className="philo-item" key={i}>
                <div className="philo-num">0{i+1}</div>
                <div className="philo-text">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS - Updated with mockup style images */}
      <section id="s2" style={{ background: 'var(--cream)', color: 'var(--charcoal)' }}>
        <div className="section-tag" style={{ color: 'var(--navy)' }}>ACLM-Aligned Core Pillars</div>
        <h2 className="section-h2">Seven areas of your life that<br/><em>shape your heart health</em></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {PILLARS.map((pillar, i) => (
            <motion.div 
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: i * 0.1}}
              key={i} 
              className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-[var(--border-color)] group hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-white font-serif text-3xl font-semibold mb-2">{pillar.title}</h3>
                  <div className="w-12 h-1 bg-[var(--sky)]"></div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-[#4A5568] leading-relaxed mb-8">{pillar.desc}</p>
                <div className="flex gap-4">
                  {pillar.icons.map((icon, j) => (
                    <div key={j} className="w-12 h-12 rounded-full bg-[var(--mist)] flex items-center justify-center text-xl">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRACKS */}
      <section id="s3">
        <div className="section-tag">Find the Right Program for You</div>
        <h2 className="section-h2">One program, tailored to <em>your specific health needs</em></h2>
        <div className="tracks-layout">
          <div className="track-cards">
            {[
              { title: "Heart Disease Prevention", sub: "Reduce your risk before a cardiac event occurs" },
              { title: "After a Heart Event", sub: "Recovery and prevention after heart attack, stent, bypass, or heart failure" },
              { title: "Weight & Heart Health", sub: "Safe, sustainable weight management to protect your heart" },
              { title: "Diabetes & Blood Sugar", sub: "Control blood sugar and reduce your heart risk" },
              { title: "High Blood Pressure & Cholesterol", sub: "Lifestyle strategies to lower numbers and reduce medications" }
            ].map((track, i) => (
              <div className={`track-card ${activeTrack === i ? 'active' : ''}`} onClick={() => setActiveTrack(i)} key={i}>
                <div className="tc-num">0{i+1}</div>
                <div><div className="tc-name">{track.title}</div><div className="tc-sub">{track.sub}</div></div>
                <div className="tc-arrow">→</div>
              </div>
            ))}
          </div>
          <div className="track-detail" id="track-detail">
            <div className="td-label">Track 01 — Primary Prevention</div>
            <div className="td-title">Cardiometabolic Prevention</div>
            <div className="td-desc">For patients with elevated but modifiable cardiovascular risk — elevated CAC score, metabolic syndrome, or significant family history — who have not yet experienced a cardiac event. Lifestyle intervention is most powerful before disease is established.</div>
            <div className="td-tags">
              <span className="td-tag">AHA Primary Prevention</span>
              <span className="td-tag">DASH / Mediterranean Diet</span>
              <span className="td-tag">≥150 min/wk Activity</span>
              <span className="td-tag">BP &amp; Lipid Targets</span>
              <span className="td-tag">ASCVD Risk Score</span>
              <span className="td-tag">Psychosocial Risk</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="s6">
        <div className="section-tag">What You Can Expect to Achieve</div>
        <h2 className="section-h2">Real, meaningful goals — <em>for your health and your life</em></h2>
        <div className="outcomes-grid">
          <div className="outcome-card">
            <div className="oc-header">
              <div className="oc-icon">📊</div>
              <div className="oc-title">Health Goals</div>
            </div>
            <div className="oc-body">
              <div className="oc-metric">5–10%<span>meaningful weight loss in 6–12 months</span></div>
              <div className="oc-item"><div className="oc-dot"></div>Blood pressure in a healthy range</div>
              <div className="oc-item"><div className="oc-dot"></div>Better blood sugar control</div>
              <div className="oc-item"><div className="oc-dot"></div>Lower cholesterol levels</div>
              <div className="oc-item"><div className="oc-dot"></div>Opportunity to reduce medications over time</div>
            </div>
          </div>
          <div className="outcome-card">
            <div className="oc-header" style={{background: 'var(--red)'}}>
              <div className="oc-icon">💬</div>
              <div className="oc-title">How You'll Feel</div>
            </div>
            <div className="oc-body">
              <div className="oc-metric">Better<span>quality of life across the board</span></div>
              <div className="oc-item"><div className="oc-dot"></div>More energy for the things you love</div>
              <div className="oc-item"><div className="oc-dot"></div>Confidence to manage your own health</div>
              <div className="oc-item"><div className="oc-dot"></div>Freedom from guilt and shame around health</div>
              <div className="oc-item"><div className="oc-dot"></div>Real friendships and peer support</div>
            </div>
          </div>
          <div className="outcome-card">
            <div className="oc-header" style={{background: '#2D6A4F'}}>
              <div className="oc-icon">🏥</div>
              <div className="oc-title">Long-Term Benefits</div>
            </div>
            <div className="oc-body">
              <div className="oc-metric">Fewer<span>hospital visits and cardiac events</span></div>
              <div className="oc-item"><div className="oc-dot"></div>Staying engaged and on track for 12 weeks</div>
              <div className="oc-item"><div className="oc-dot"></div>Lower overall healthcare costs over time</div>
              <div className="oc-item"><div className="oc-dot"></div>A healthier life — the ultimate measure of success</div>
              <div className="oc-item"><div className="oc-dot"></div>Potentially fewer medications as health improves</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="s8">
        <div className="cta-logo flex items-center justify-center">
          <img src="/images/logo.png" alt="CSNE Logo" className="h-14 w-auto brightness-0 invert opacity-90" />
        </div>
        <div className="cta-eyebrow">Ready to Experience the Difference?</div>
        <h2 className="cta-h2">Take the first step toward<br/><em>a healthier heart</em></h2>
        <p className="cta-sub">Talk to your cardiologist today about joining our Lifestyle Medicine program. Discover how changing the way you live can change the way you feel.</p>
        <div className="cta-btns">
          <button className="btn-red-lg">Join the Program</button>
          <button className="btn-outline-lg">Learn More</button>
        </div>
        <ul className="footer-nav">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Patient Portal</a></li>
        </ul>
      </section>
    </>
  );
}
