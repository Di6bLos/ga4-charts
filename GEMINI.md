# GA4 Dashboard - Gemini CLI Context

This project is a modern analytics dashboard built with Astro and Chart.js, designed to visualize Google Analytics 4 (GA4) data.

## 🚀 Project Overview

*   **Framework:** [Astro](https://astro.build/) (v6.1.7)
*   **Charts:** [Chart.js](https://www.chartjs.org/) (v4.5.1)
*   **Styling:** Vanilla CSS within Astro components.
*   **Data Layer:** Currently uses a mock data implementation (`src/lib/mockData.ts`) which is abstracted through an analytics service (`src/lib/analytics.ts`).

### Key Features
- **KPI Cards:** Overview of Bounce Rate, Session Duration, Engagement Rate, and Real-time Users.
- **Interactive Charts:** Line charts for users over time, and various bar/pie/doughnut charts for source, device, and regional breakdown.
- **Date Range Picker:** Allows simulating/filtering data based on day counts.

## 📁 Directory Structure

- `src/components/charts/`: Contains individual Astro components for different chart types. Each component handles its own Chart.js initialization and client-side updates.
- `src/lib/`:
    - `analytics.ts`: High-level data fetching functions.
    - `mockData.ts`: Realistic mock data generation for GA4 metrics.
- `src/pages/`: Contains `index.astro`, the main dashboard entry point.
- `src/layouts/`: Base layout wrapper.

## 🧞 Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Previews the build locally |

## 🛠 Development Conventions

### Component Architecture
- **Astro Components:** Prefer standard `.astro` components.
- **Chart Initialization:** Charts are initialized in `<script>` tags within the `.astro` files to ensure they run on the client side.
- **Data Passing:** Data is passed from pages to components via Astro `props`.
- **Dynamic Updates:** The dashboard uses custom events (e.g., `ga4:update`) for client-side state updates when the date range changes.

### Styling
- Use scoped `<style>` blocks within `.astro` components.
- Follow the established dark-themed color palette (`#1e293b` for cards, `#6366f1` for primary accents).

### Data Handling
- Types are defined in `src/lib/mockData.ts`.
- Always use the `fetchAllAnalytics` helper in `src/lib/analytics.ts` for consistent data loading on pages.
