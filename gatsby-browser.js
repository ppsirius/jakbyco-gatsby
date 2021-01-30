export { default as wrapRootElement } from "./src/state/reduxWrapper";

// export const onServiceWorkerUpdateReady = () => {
//   const answer = window.confirm(
//     `This application has been updated. ` +
//       `Reload to display the latest version?`
//   )

//   if (answer === true) {
//     window.location.reload()
//   }
// }
// self.addEventListener("activate", function(event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames
//           .filter(function(cacheName) {
//             // Return true if you want to remove this cache,
//             // but remember that caches are shared across
//             // the whole origin
//           })
//           .map(function(cacheName) {
//             return caches.delete(cacheName);
//           })
//       );
//     })
//   );
// });

// Temporary solution unregister
navigator.serviceWorker.getRegistrations().then((registrations) => {
  registrations.forEach((registration) => {
    registration.unregister();
  });
});
