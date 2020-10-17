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

    const slug = articleDetails.title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');

    expect(browser).toHaveUrl(`articles/${slug}`, { containing: true });
    $('button*=Delete Article').click();
  })
});