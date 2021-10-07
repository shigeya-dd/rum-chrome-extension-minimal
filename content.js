window.DD_RUM && window.DD_RUM.init({
    applicationId: '__YourApplicationId__',
    clientToken: '__YourClientToken___',
    site: 'datadoghq.com',
    service: 'local_rum',
    env: 'production',
    version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
    trackSessionAcrossSubdomains: true
});

window.DD_RUM && window.DD_RUM.setUser({
    id: '12345abc001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    membership: 'gold'
});

// Uncomment the following two lines to enable Session Replay
// document.body.setAttribute("data-dd-privacy", "mask-user-input");
// window.DD_RUM.startSessionReplayRecording();
