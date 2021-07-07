let color = '#3aa757';
// Fired when the extension is first installed, when the
// extension is updated to a new version, and when Chrome is 
// updated to a new version.
chrome.runtime.onInstalled.addListener(() => {
    // Sets Storage data syncs data between browsers with same acc.
    // Storage api must be registered in manifest.
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});