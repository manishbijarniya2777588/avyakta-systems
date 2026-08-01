# Avyakta (Civ-OS)

Automated civic infrastructure auditing system. Crowdsourced fleet telemetry
(accelerometer + GPS) is turned into verified proof of road condition, tied
directly to contractor escrow payment.

## Current state

This is the initial front-end scaffold — no backend or real authentication
yet. It exists so the dashboard shell, navigation, and page structure are in
place before the data pipeline (Python: ingestion → filtering → thresholds →
DBSCAN clustering) is wired in.

### What's here
- `index.html` — main hub: portals (rider / contractor / municipal) and
  modules (road model, plus placeholders for escrow verification and
  contractor accountability)
- `rider.html`, `contractor.html`, `municipal.html` — placeholder login
  screens for each portal
- `road-model.html` — the one active module for now; will eventually render
  output from the detection pipeline
- `assets/css/style.css` — design tokens and shared styles
- `assets/js/main.js` — placeholder form handling (no real auth yet)

### What's explicitly NOT here yet
- Backend / API
- Real authentication
- The Python detection pipeline itself (separate repo/folder — see the
  project's engineering roadmap)
- Escrow verification and contractor accountability modules (disabled on
  the hub until built)

## Running locally

No build step. Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Roadmap

See the project's engineering roadmap for the full detection-pipeline
milestones (signal filtering, anomaly thresholds, spatial clustering,
escrow trigger) and the accountability-system design (material usage ratio,
tiered contractor response).
