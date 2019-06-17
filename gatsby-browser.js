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

self.addEventListener("activate", function(e) {
  self.registration
    .unregister()
    .then(function() {
      return self.clients.matchAll();
    })
    .then(function(clients) {
      clients.forEach(client => client.navigate(client.url));
    });
});
