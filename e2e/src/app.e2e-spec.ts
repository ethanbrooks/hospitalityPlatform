import { Selector } from 'testcafe';
fixture('Passing').page('http://localhost:4000');
test('foo equals foo', async t => await t.expect('foo').eql('foo'));
test('New Test', async t => {
    await t
        .click(Selector('.dx-fa-button-icon'))
        .click(Selector('.dx-fa-button-icon'))
        .click(Selector('i').withText('restaurant'))
        .click(Selector('div').withText('Omelette with asparagus and cheese').nth(7).find('.image'))
        .click(Selector('[class^="dx-overlay-wrapper popup-hor dx-popup-wrapper dx-o"][data-bind="dxControlsDescendantBindings: true"]'))
        .click(Selector('.dx-icon.dx-icon-overflow'))
        .click(Selector('span').withText('GUEST PORTAL'));
});
test('New Test', async t => {
  await t
      .takeScreenshot('neat.jpg')
      .maximizeWindow()
      .takeScreenshot('neater.jpg')
      .resizeWindow(640, 480);
});
