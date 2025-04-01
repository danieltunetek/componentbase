// src/main.tsx (RENAMED FILE - Development Entry Point)

import React from 'react';
import ReactDOM from 'react-dom/client';

// Import your library's components and ThemeProvider
import { ThemeProvider, Button, IconWrapper, Theme } from './index'; // Import from the new index.ts

// --- Create a Sample Theme for Development ---
// (You could import this from a separate dev-theme.ts file too)
const devTheme: Theme = {
  colorTokens: {
    main: { default: '#007bff', hover: '#0056b3', active: '#004085', disabled: '#c0c0c0', disabledOpacity: '0.5' },
    danger: { default: '#dc3545', hover: '#c82333', active: '#bd2130', disabled: '#e2e2e2', disabledOpacity: '0.5' },
    // Add other necessary categories for testing
    neutral: { default: '#6c757d', hover: '#5a6268', active: '#4e555b', disabled: '#d6d8db', disabledOpacity: '0.5' },
    support: { default: '#17a2b8', hover: '#138496', active: '#117a8b', disabled: '#cfd2d3', disabledOpacity: '0.5' },
    warning: { default: '#ffc107', hover: '#e0a800', active: '#d39e00', disabled: '#e9ecef', disabledOpacity: '0.5' },
    success: { default: '#28a745', hover: '#218838', active: '#1e7e34', disabled: '#dee2e6', disabledOpacity: '0.5' },
    info: { default: '#17a2b8', hover: '#138496', active: '#117a8b', disabled: '#cfd2d3', disabledOpacity: '0.5' },
  },
  fontSizeTokens: {
    small: { 'size-4': '12px' },
    medium: { 'size-4': '14px' }, // Example: Button uses size-4
    large: { 'size-4': '16px' },
  },
  iconSizeTokens: {
    small: { xs: '12px', sm: '14px', md: '16px', lg: '20px' },
    medium: { xs: '14px', sm: '16px', md: '20px', lg: '24px' }, // Example: Button uses these
    large: { xs: '16px', sm: '20px', md: '24px', lg: '28px' },
  },
  spacingTokens: {
    small: { 'size-0': '0px', 'size-1': '2px', 'size-4': '8px' },
    medium: { 'size-0': '0px', 'size-1': '4px', 'size-4': '16px' }, // Example: Button uses size-0, size-1, size-4
    large: { 'size-0': '0px', 'size-1': '6px', 'size-4': '24px' },
  },
  borderRadiusTokens: {
    base: '4px',
    full: '9999px',
    // Add other radii if needed for testing
    sm: '2px', md: '6px', lg: '8px', xl: '12px'
  },
};
// --- End Sample Theme ---


// --- Create a Simple App for Development ---
function DevApp() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h1>Component Base Dev</h1>

      <h2>Filled Buttons</h2>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button color="main" height="36" sizeCategory="medium" variant="filled">Medium Main</Button>
        <Button color="danger" height="42" sizeCategory="medium" variant="filled">Large Danger</Button>
        <Button color="success" height="32" sizeCategory="small" variant="filled" disabled>Small Success Disabled</Button>
        <Button color="main" height="42" sizeCategory="medium" variant="filled" borderFull>Full Radius</Button>
      </div>

      <h2>Outlined Buttons</h2>
       <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button color="main" height="36" sizeCategory="medium" variant="outlined">Medium Main</Button>
        <Button color="danger" height="42" sizeCategory="medium" variant="outlined">Large Danger</Button>
        <Button color="success" height="32" sizeCategory="small" variant="outlined" disabled>Small Success Disabled</Button>
        <Button color="main" height="42" sizeCategory="medium" variant="outlined" borderFull>Full Radius</Button>
      </div>

      {/* Add IconWrapper tests if needed */}
      <h2>Icon Wrapper</h2>
      <IconWrapper size="md" sizeCategory="medium" className="test-wrapper">
         {/* Add an SVG or text here for testing */}
         <span>Icon</span>
      </IconWrapper>

    </div>
  );
}
// --- End Simple App ---


// --- Render the Development App ---
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* Wrap the DevApp with the ThemeProvider using the dev theme */}
    <ThemeProvider theme={devTheme}>
      <DevApp />
    </ThemeProvider>
  </React.StrictMode>
);