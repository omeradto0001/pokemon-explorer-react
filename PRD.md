# Pokemon Explorer — Product Requirements Document

## 1. App Title & Overview

**Product:** Pokemon Explorer

Pokemon Explorer is a React frontend application for exploring Pokemon using live data from the public [PokeAPI](https://pokeapi.co/api/v2/pokemon). Users browse a collection of Pokemon and select an entry to inspect its details.

## 2. Target UX & Objectives

The application uses a **Master-Detail** layout:

- **Master:** Display a browsable list of Pokemon on one side of the interface.
- **Detail:** Display information about the selected Pokemon on the other side.
- Selecting a Pokemon in the master list updates the detail view without navigating away from the explorer.
- Make the currently selected Pokemon clear to the user.
- Show suitable loading, empty, and error states while retrieving data or when a request cannot be completed.
- Keep the layout usable on narrow screens by adapting the master and detail panels for smaller viewports.

## 3. API Integration Details

### Pokemon list

- Fetch the list from `https://pokeapi.co/api/v2/pokemon`.
- The API returns a paginated response containing `count`, `next`, `previous`, and `results`. Each result includes a Pokemon name and a URL for its detail resource.
- Support browsing additional results through the pagination URLs supplied by the API; do not assume the initial response contains every Pokemon.
- Present readable Pokemon names in the master list.

### Pokemon details

- When a Pokemon is selected, fetch its detail resource using the URL associated with that list entry. A named resource URL such as `https://pokeapi.co/api/v2/pokemon/{id-or-name}` may also be used.
- Display the selected Pokemon's:
  - Name
  - Image or sprite, preferring an available official artwork or other suitable sprite and providing a graceful fallback if no image is available
  - Types
  - Abilities
  - Base stats
  - Height
  - Weight
- Handle list and detail request loading and failures explicitly, and allow the user to retry a failed request.
- Use the browser's native `fetch` API for network requests.

## 4. Technical Requirements

- Build the frontend with React.
- Organize the UI into focused, reusable components, including distinct master-list and detail-view responsibilities.
- Maintain selected-Pokemon state clearly at a level shared by the master and detail components.
- Pass data and event handlers between components through props where appropriate.
- Keep list data, selected-item state, and request status easy to reason about; avoid unnecessary state duplication.
- Use native `fetch` calls to integrate with PokeAPI and handle non-success HTTP responses and network errors.
- Do not require a custom backend for the initial application; data is fetched directly from the public API.
