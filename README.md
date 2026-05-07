# Häagen-Dazs Nutrition Guide

Internal nutrition reference tool for Häagen-Dazs shop staff.  
© 2025 HDIP, Inc. — For internal use only.

---

## Project Structure

```
haagen-dazs-guide/
├── index.html          ← Main HTML — page structure & tab layout
├── css/
│   └── styles.css      ← All styling (variables, layout, cards, charts)
├── js/
│   ├── data.js         ← All nutrition data (ice cream, smoothies, shakes, etc.)
│   ├── utils.js        ← Shared helper functions (sort, bar builder, etc.)
│   ├── cards.js        ← Card HTML builder functions
│   ├── icecream.js     ← Ice Cream & Sorbet tab logic
│   ├── smoothies.js    ← Smoothies tab logic
│   ├── shakes.js       ← Shakes & Lemonades tab logic
│   ├── sundaes.js      ← Dazzlers & Sundaes tab logic
│   ├── cones.js        ← Cones & Cups tab logic
│   ├── insights.js     ← All charts & visualisations (bar, radar, scatter, rankings)
│   ├── facts.js        ← 40 Key Facts tab logic
│   └── app.js          ← Main init & tab switching (load this last)
└── README.md
```

---

## How to Use

### On a store tablet or local device
1. Copy the entire `haagen-dazs-guide/` folder to the device.
2. Open `index.html` in any modern browser (Chrome, Safari, Edge).
3. No internet connection required after the Google Fonts load on first open.
   - For fully offline use, download and host the fonts locally.

### Hosting on GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages** and set the source to your main branch / root.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## Tabs

| Tab | Contents |
|-----|----------|
| 🍦 Ice Cream & Sorbet | 27 ice cream + 4 sorbet flavors with full nutrition |
| 🥤 Smoothies | 6 flavors × 2 sizes × 2 bases (Ice Cream / Non-Dairy) |
| 🥛 Shakes & Lemonades | 10 shake flavors + 3 frozen lemonades in small & regular |
| 🍨 Dazzlers & Sundaes | 7 Dazzlers + 2 Sundaes in small and regular |
| 🍦 Cones & Cups | Waffle, Waffle Dipped, Sugar, Wafer Cone & Cup (all sizes) |
| 📊 Insights | Bar chart, comparison table, radar, rankings, scatter plot |
| 💡 40 Facts | Quick-reference answers to common customer questions |

---

## Updating Data

All nutrition data lives in **`js/data.js`** inside the `HD` object.  
To add a new flavor, append an entry to the appropriate array:

```js
// Example — adding a new ice cream flavor:
HD.iceCream.push({
  name: "New Flavor",
  type: "ic",           // "ic" = ice cream, "so" = sorbet
  cat:  "Ice Cream",
  desc: "Description here",
  calories: 350, fat: 22, satfat: 13, chol: 90, sodium: 80,
  carbs: 30, fiber: 1, sugar: 28, added: 22, protein: 6,
  gf: true, kosher: true, dairy: true,
  allergens: "Milk, Egg"
});
```

To update a fact in the 40 Facts tab, edit the corresponding object in `HD.facts`.

---

## Data Source

All nutritional information is sourced from official Häagen-Dazs shop nutrition binders.  
Information accurate as of **June 2025** · © 2025 HDIP, Inc.  
Manufactured by Dreyer's Grand Ice Cream, Inc.

*For allergen questions, please speak to the store manager.*
