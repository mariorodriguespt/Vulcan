Package.describe({
  name: "vulcan:api",
  summary: "Telescope API package",
  version: '1.3.2',
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'vulcan:core@1.3.2',
    'vulcan:posts@1.3.2',
    'vulcan:comments@1.3.2'
  ]);

  api.mainModule("lib/server.js", "server");
  // api.mainModule("lib/client.js", "client");

});
