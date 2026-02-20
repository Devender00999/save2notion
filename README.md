# Save2Notion

Save2Notion is a lightweight Chrome Extension that allows you to easily save selected text from any web page directly to your Notion workspace. Just highlight text, and a convenient floating toolbar appears to help you send it to Notion in one click.

## Features

- **Quick Selection Toolbar**: Simply highlight text on any webpage to reveal the Save2Notion floating toolbar.
- **One-Click Save**: Click the save icon (💾) to capture the highlighted text.
- **Settings Access**: Easily access configuration options via the settings icon (⚙️) on the toolbar.

## Project Structure

- `manifest.json`: Configuration for the extension (Manifest V3).
- `content.js`: Injects the floating toolbar onto web pages you visit.
- `popup.html` / `popup.js`: Basic popup interface for the extension action button.

## Installation (Developer Mode)

1. Clone or download this project to your local machine.
2. Open Google Chrome and navigate to the Extensions page (`chrome://extensions/`).
3. Enable the **Developer mode** toggle in the top right corner.
4. Click on the **Load unpacked** button.
5. Select the `save2notion` directory (the folder containing `manifest.json`).

The extension should now be installed and active in your browser!

## Usage

1. Go to any regular webpage.
2. Highlight a piece of text holding the mouse button and releasing.
3. The Save2Notion toolbar will appear right above your selection.
4. Click the **Save** (💾) button. (Note: integration with Notion requires setting up authentication and API endpoints).
5. The **Settings** (⚙️) button allows you to configure preferences or Notion credentials (to be implemented).

## Technologies Used

- Manifest V3 Chrome Extension API
- Vanilla JavaScript, HTML, CSS
