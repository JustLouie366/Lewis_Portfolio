// Add each independent scenario here; both its card and detail page use this entry.
// IDs must be unique and must not match an existing project ID.
// Supported systems: 'combat-toolkit', 'elemental-material'.
// Example (leave unpublished ideas out of the array):
// { id: 'your-scenario', title: 'Your scenario title', status: 'Concept',
//   summary: 'A focused story or gameplay experiment.',
//   systems: ['combat-toolkit', 'elemental-material'] }
const scenarios = [];

const scenarioGrid = document.getElementById('scenario-grid');
if (scenarioGrid) {
  const systemNames = { 'combat-toolkit': 'Foundation Combat Toolkit', 'elemental-material': 'Elemental Material System' };
  for (const entry of scenarios) {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = 'case-study.html?project=' + encodeURIComponent(entry.id);
    const meta = document.createElement('div');
    meta.className = 'project-meta';
    const copy = document.createElement('div');
    for (const [tag, className, value] of [
      ['p', 'project-type', 'Standalone scenario / ' + entry.status],
      ['h3', '', entry.title],
      ['p', 'project-desc', entry.summary]
    ]) {
      const element = document.createElement(tag);
      element.className = className;
      element.textContent = value;
      copy.append(element);
    }
    const arrow = document.createElement('span');
    arrow.className = 'card-arrow';
    arrow.textContent = '↗';
    arrow.setAttribute('aria-hidden', 'true');
    meta.append(copy, arrow);
    const tags = document.createElement('div');
    tags.className = 'tags';
    for (const system of entry.systems) {
      const tag = document.createElement('span');
      tag.textContent = systemNames[system];
      tags.append(tag);
    }
    card.append(meta, tags);
    scenarioGrid.append(card);
  }
  document.getElementById('scenario-empty').hidden = scenarios.length > 0;
}
