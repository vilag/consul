console.log('Service Worker')

self.addEventListener('push', e => {
     const data = e.data.json()
     console.log(data)
     self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://www.grupomorsa.com/images/logo_morsa_b.png'
     })
})