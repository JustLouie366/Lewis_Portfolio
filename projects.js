const projects = {
  'elemental-material': { title: 'Elemental Material System', type: 'Core system / Elemental interaction framework', summary: 'A reusable framework for exploring interactions between elements, materials, and environmental states. Standalone scenarios provide a space to explore these interactions through story and gameplay.', tags: ['Systems Design', 'Materials', 'Environmental Interaction'], visual: 'visual-elemental', glyph: '◇' },
  astra: { title: 'Project X / Astra', type: 'Systemic action roguelite', summary: 'A systemic action roguelite focused on combat, AI, and systems design.', tags: ['Combat Design', 'AI', 'Systems Design'], visual: 'visual-astra', glyph: '✳' },
  'combat-toolkit': { title: 'Foundation Combat Toolkit', type: 'Core system / UE5 modular combat framework', summary: 'A modular combat framework exploring technical design, Blueprints, and multiplayer.', tags: ['Technical Design', 'Blueprints', 'Multiplayer'], visual: 'visual-combat', glyph: '⌘' },
  'drone-training': { title: 'Drone Pilot Training', type: 'Serious game', summary: 'A serious game project spanning user experience, systems, and playtesting.', tags: ['UX', 'Systems', 'Playtesting'], visual: 'visual-drone', glyph: '◎' },
  'stack-o-bot': { title: 'Stack-O-Bot Customization', type: 'Customization experience', summary: 'A customization concept exploring UI/UX, audience research, and Unreal prototyping.', tags: ['UI / UX', 'Audience Research', 'Unreal Prototyping'], visual: 'visual-stack', glyph: '▥' },
  'careless-whisper': { title: 'Careless Whisper', type: 'Gameplay systems', summary: 'A gameplay project exploring sanity systems and audio feedback.', tags: ['Gameplay Systems', 'Audio Feedback'], visual: 'visual-whisper', glyph: '◌' }
};
const sectionPrompts = [
  ['Overview', 'Add the project context, genre, platform, team size, and timeframe.'],
  ['Role', 'Specify Darryl’s responsibilities and distinguish his work from the team’s contributions.'],
  ['Design Goal', 'Describe the player problem or experience this work set out to address.'],
  ['Constraints', 'Document the technical, production, audience, and schedule limits that shaped the design.'],
  ['Process', 'Show research, exploration, prototypes, decisions, and tradeoffs.'],
  ['Implementation', 'Explain how the design was built, with diagrams, Blueprint examples, or annotated media.'],
  ['Result', 'Add verified outcomes, playable links, footage, or evidence from testing.'],
  ['Iteration', 'Show what changed after feedback and why.'],
  ['Reflection', 'Share what Darryl learned and what he would improve next.']
];
const key = new URLSearchParams(location.search).get('project');
const scenario = scenarios.find(entry => entry.id === key);
const project = projects[key] || (scenario && { ...scenario, type: 'Standalone scenario / ' + scenario.status, tags: scenario.systems.map(id => projects[id].title), visual: 'visual-elemental', glyph: '◇' });
const prompts = scenario ? [['Design Question', 'Describe the focused player experience this scenario explores.'], ['Story & Gameplay', 'Explain the self-contained setting, story beats, and gameplay sequence.'], ['Systems Used', 'Explain how the selected core systems support the experience.'], ['Play & Watch', 'Add a playable build or footage when available.'], ['Iteration', 'Document playtest observations and design changes.']] : sectionPrompts;
const target = document.getElementById('case-content');
if (!project) {
  document.title = 'Project not found — Darryl Lewis';
  target.innerHTML = '<section class="not-found"><p class="eyebrow">PROJECT NOT FOUND</p><h1>This project page is unavailable.</h1><a class="text-link" href="index.html#work">View selected work ↗</a></section>';
} else {
  document.title = `${project.title} — Darryl Lewis`;
  const safe = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  target.innerHTML = `<article class="case-study"><header class="case-header"><p class="eyebrow">${scenario ? 'STANDALONE SCENARIO' : 'CASE STUDY'} / CONTENT DRAFT</p><p class="case-type">${safe(project.type)}</p><h1>${safe(project.title)}</h1><p class="case-summary">${safe(project.summary)}</p><div class="tags">${project.tags.map(tag => `<span>${safe(tag)}</span>`).join('')}</div></header><div class="case-hero-visual project-visual ${project.visual}"><span class="visual-label">PROJECT IMAGE OR VIDEO PLACEHOLDER</span><span class="visual-glyph" aria-hidden="true">${project.glyph}</span><span class="visual-index">REPLACE WITH VERIFIED PROJECT MEDIA</span></div><div class="case-intro"><p class="eyebrow">THE STORY BEHIND THE WORK</p><p>This page is a structured draft. The section prompts below indicate where verified project details, decisions, images, and outcomes should go.</p></div><div class="case-sections">${prompts.map(([heading, prompt], i) => `<section class="case-section"><span class="case-number">${String(i + 1).padStart(2, '0')}</span><h2>${heading}</h2><p class="placeholder-note">Content placeholder — ${prompt}</p></section>`).join('')}</div><div class="case-end"><span>END OF CASE STUDY</span><a class="text-link" href="index.html#work">Explore the portfolio ↗</a></div></article>`;
}
