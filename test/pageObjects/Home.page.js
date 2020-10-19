const Generic = require('./Generic.page');
const Feed = require('./components/Feed');

const { getTrimmedText } = require('../../utils/Functions');
class Home extends Generic {
  constructor() {
    super('./');
  }
  load () {
    super.load();
    this.currentFeed.waitForLoad();
  }

  get $feedsContainer() { return $('[data-qa-id="feed-tabs"]'); }
  get $$feedTabs() { return this.$feedsContainer.$$('[data-qa-type="feed-tab"]'); }
  get feedTabsText() { return this.$$feedTabs.map(getTrimmedText); }
  get activeFeedTabText() { return this.$feedsContainer
    .$$('[data-qa-type="feed-tab"] .active')
    .map(getTrimmedText);
    }
  get currentFeed () { return new Feed('[data-qa-type="article-list"]'); }


  clickTab(tabText) {
    const tabToClick = this.$$feedTabs.find(
    ($tab) => $tab.getText() === tabText);
    tabToClick.click();
    browser.waitUntil(() => { return this.activeFeedTabText[0] === tabText;},
    { timeoutMsg: 'Active tab text never switched to desired text' });
    this.currentFeed.waitForLoad();
  };
}
module.exports = new Home();
