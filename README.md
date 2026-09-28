# Darryl Lewis portfolio

A static portfolio MVP. Open `index.html` in a browser to preview it. No build step, package install, or server is required.

## Publishing on GitHub Pages

1. Create a GitHub repository and put the files in this folder at the repository root.
2. In the repository's **Settings → Pages**, choose **Deploy from a branch**, then select the main branch and `/ (root)`.
3. GitHub will display the public site URL after publishing. A custom domain can be added later.

All links and assets use relative paths, so the site works at either a user site or a project site URL.

## Replace the placeholders

## Portfolio structure

- Core Systems: Foundation Combat Toolkit and Elemental Material System.
- Playable & Concept Scenarios: independent story/gameplay segments using either or both systems. No parent game or campaign is required.
- Additional Work: the original Astra, Drone Pilot Training, Stack-O-Bot, and Careless Whisper projects remain accessible with their existing case-study URLs.

### Adding a scenario

Add an object to the `scenarios` array in `scenarios.js`, using the commented example there. Give each entry a unique `id`, a `title`, an accurate `status` (such as Concept, In development, or Playable), a short `summary`, and a `systems` array containing `combat-toolkit` and/or `elemental-material`.

The homepage card and `case-study.html?project=YOUR-ID` detail page appear automatically. The empty state disappears when the first entry is added. Scenario details provide prompts for the design question, story/gameplay, systems used, play/footage, and iteration. Fill these with verified content before presenting the entry as a completed case study. No scenario has been invented or marked playable in this revision.

This local revision has not been uploaded to GitHub or published to the live site.

## Content still to supply

- Replace each labeled visual with a real screenshot, clip, or annotated diagram. Images can be stored in an `assets/` folder.
- Update the project facts and case-study content in `projects.js` and the homepage cards in `index.html`.
- Replace the draft About text with Darryl's approved biography.
- Add a verified resume PDF and contact details, then convert the placeholder buttons into links.
- Remove the `noindex` tag in `case-study.html` after the case studies contain publishable details.

The abstract graphics are CSS decoration, not representations of actual project footage. No project results, employment history, contact details, or resume facts are asserted.
