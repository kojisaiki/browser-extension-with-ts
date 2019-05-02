// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

console.log(`'Allo 'Allo! Devtools Extension`);

chrome.devtools.panels.create(
    'My Panel',
    '',
    '../pages/devtools-panel01.html',
    (panel) => { }
);
