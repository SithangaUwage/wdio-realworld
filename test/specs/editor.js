const Chance = require('chance');
const Auth = require('../pageObjects/Auth.page');
const Editor = require('../pageObjects/Editor.page');
const Article = require('../pageObjects/Article.page');

const { user1 } = require('../fixtures/users');

const auth = new Auth();
const editor = new Editor();
const chance = new Chance();
const article = new Article();

describe('Post Editor', function () {
	before(function () {
		auth.load();
		auth.login(user1);
	});
	beforeEach(function () {
		editor.load();
  });

	it('should load page properly', function () {
		expect(browser).toHaveUrl(editor.url.href);
		expect(editor.$title).toBeExisting();
		expect(editor.$description).toBeExisting();
		expect(editor.$body).toBeExisting();
		expect(editor.$tags).toBeExisting();
		expect(editor.$publish).toBeExisting();
  });
  
  it('should let you publish a new post', function () {
    const articleDetails = {
      title: chance.sentence({ words: 3 }),
      description: chance.sentence({ words: 7 }),
      body: chance.paragraph({ sentences: 4 }),
      tags: [chance.word(), chance.word()]
    };

    editor.submitArticle(articleDetails);

    expect(article.$title).toHaveText(articleDetails.title);
    expect(article.$body).toHaveText(articleDetails.body);
    expect(article.tags).toEqual(articleDetails.tags);
    $('button*=Delete Article').click();
  })
});

describe('"Unsaved Changes" alerts', function () {
  beforeEach(function () {
    editor.$title.setValue('Unsaved Change');
  });

  it('should alert you when using browser navigation', function () {
    browser.refresh();
    expect(() => browser.acceptAlert()).not.toThrow();
  });

  it('should warn you when trying to change URL', function () {
    $('=Home').click();
    const alertText = browser.getAlertText();
    expect(alertText).toEqual('Do you really want to leave? You have unsaved changes!');
    browser.acceptAlert();
    });
    
});
  