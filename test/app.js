const API_SERVER_KEY =
    'BNDbZ4avweY3XU7n7d0P_KEqVFSFiI4LRk5IthArN3vAtazIP416Rs6lyeGELbm6OXeq7A4Q-5JGhyEYZJbBm3c';

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

const suscription = async () => {
    const register = await navigator.serviceWorker.register('./worker.js', {
        scope: '/test/',
    });
    console.log('New Service Worker created');

    console.log('Registering push');
    const subscriptionData = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(API_SERVER_KEY),
    });

    console.log('SUB --->', subscriptionData);

    await fetch('http://localhost:3000/api/v1/notifications/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscriptionData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

console.log('<------ APP ----->');
if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
}
suscription();

const $btnSendNotification = document.getElementById('send-not');

$btnSendNotification.addEventListener('click', async () => {
    const message = document.getElementById('notification-message').value;
    await fetch(
        'http://localhost:3000/api/v1/notifications/send-notification',
        {
            method: 'POST',
            body: JSON.stringify({ message }),
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    console.log('Notification sent');
});
