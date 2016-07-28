Package.describe({
  name: 'wkniffin:ionic-sass1.4',
  summary: "Ionic's CSS Framework in SASS and bundled for Meteor 1.4. Taken from meteoric:ionic-sass.",
  version: '0.1.0',
  git: 'https://github.com/wkniffin/ionic-sass1.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use("fourseven:scss@3.8.0_1", ["server"]);
  api.imply("fourseven:scss", ["server"]);

  api.addFiles([
    'stylesheets/_action-sheet.scss',
    'stylesheets/_animations.scss',
    'stylesheets/_backdrop.scss',
    'stylesheets/_badge.scss',
    'stylesheets/_bar.scss',
    'stylesheets/_button-bar.scss',
    'stylesheets/_button.scss',
    'stylesheets/_checkbox.scss',
    'stylesheets/_form.scss',
    'stylesheets/_grid.scss',
    'stylesheets/_items.scss',
    'stylesheets/_list.scss',
    'stylesheets/_loading.scss',
    'stylesheets/_menu.scss',
    'stylesheets/_mixins.scss',
    'stylesheets/_modal.scss',
    'stylesheets/_platform.scss',
    'stylesheets/_popover.scss',
    'stylesheets/_popup.scss',
    'stylesheets/_progress.scss',
    'stylesheets/_radio.scss',
    'stylesheets/_range.scss',
    'stylesheets/_refresher.scss',
    'stylesheets/_reset.scss',
    'stylesheets/_scaffolding.scss',
    'stylesheets/_select.scss',
    'stylesheets/_slide-box.scss',
    'stylesheets/_spinner.scss',
    'stylesheets/_tabs.scss',
    'stylesheets/_toggle.scss',
    'stylesheets/_transitions.scss',
    'stylesheets/_type.scss',
    'stylesheets/_util.scss',
    'stylesheets/_variables.scss'
  ], 'server');

  api.addFiles('_ionic.scss', 'server');
});
