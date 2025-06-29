(function (PLUGIN_ID) {
  const formEl = document.querySelector('.submit-setting');
  const colorEl = document.getElementById("theme-color");

  const config = kintone.plugin.app.getConfig(PLUGIN_ID);
  if (config.color) {
    colorEl.value = config.color;
  }

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    kintone.plugin.app.setConfig({ color: colorEl.value }, () => {
      alert('The plug-in settings have been saved. Please update the app!');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  });
})(kintone.$PLUGIN_ID);
