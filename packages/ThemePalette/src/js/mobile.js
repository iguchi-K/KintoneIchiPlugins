import '../scss/main.scss';

(function (PLUGIN_ID) {
  kintone.events.on(['mobile.app.record.index.show', 'mobile.app.record.detail.show'], () => {
    const config = kintone.plugin.app.getConfig(PLUGIN_ID);
    const color = config.color || 'navyBlue'; // デフォルトはnavyBlue

    // 既存のテーマクラスを削除
    document.body.classList.remove(
      'theme-pink',
      'theme-bluegray', 
      'theme-navyBlue',
      'theme-greige',
      'theme-mintgreen',
      'theme-lavender',
      'theme-pastelyellow',
      'theme-darkgray',
      'theme-silver',
      'theme-beige',
      'theme-mossgreen',
      'theme-olive',
      'theme-vividorange',
    );

    // 新しいテーマクラスを追加
    document.body.classList.add('ichi-theme', `theme-${color}`);
  });
})(kintone.$PLUGIN_ID);
