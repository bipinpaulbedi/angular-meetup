self.addEventListener('message', (event: any) => {
    console.log(event.data);
    event.ports[0].postMessage({ 'Response': 'This is my response.' });
});