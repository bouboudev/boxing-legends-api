const express = require('express');
const boxers = require('./boxers.json');

const app = express();
const PORT = 3000;

// --- Business Logic ---

function calculateLegendScore(boxer) {
  const totalFights = boxer.wins + boxer.losses;
  const winRate = totalFights > 0 ? (boxer.wins / totalFights) * 100 : 0;

  const breakdown = {
    wins40:         boxer.wins >= 40         ? 20 : 0,
    winRate85:      winRate > 85             ? 20 : 0,
    kos20:          boxer.kos >= 20          ? 10 : 0,
    worldChampion:  boxer.isWorldChampion    ? 20 : 0,
    divisionTitles: boxer.divisionTitles >= 2 ? 15 : 0,
  };

  const score = Object.values(breakdown).reduce((sum, pts) => sum + pts, 0);

  return { score, breakdown };
}

function isLegend(score) {
  return score >= 70;
}

function enrichBoxer(boxer) {
  const { score, breakdown } = calculateLegendScore(boxer);
  return {
    ...boxer,
    legendScore: score,
    legend: isLegend(score),
    breakdown,
  };
}

// --- Routes ---

// GET /boxers — all boxers with legend info
app.get('/boxers', (req, res) => {
  const result = boxers.map(enrichBoxer);
  res.json(result);
});

// GET /boxers/top — sorted by legendScore descending
// Must be declared BEFORE /boxers/:id to avoid "top" being treated as an id
app.get('/boxers/top', (req, res) => {
  const result = boxers
    .map(enrichBoxer)
    .sort((a, b) => b.legendScore - a.legendScore);
  res.json(result);
});

// GET /boxers/:id — single boxer
app.get('/boxers/:id', (req, res) => {
  const boxer = boxers.find((b) => b.id === parseInt(req.params.id));
  if (!boxer) {
    return res.status(404).json({ error: 'Boxer not found' });
  }
  res.json(enrichBoxer(boxer));
});

// GET /legends — only legend boxers
app.get('/legends', (req, res) => {
  const result = boxers.map(enrichBoxer).filter((b) => b.legend);
  res.json(result);
});

// --- Start server ---

app.listen(PORT, () => {
  console.log(`Boxing Legends API running at http://localhost:${PORT}`);
});
