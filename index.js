var feedbackString;

module.exports = {
    hooks: {
      // called on each book & each language book
      'init': function () {

      }
    },

    blocks: {},

    book: {
        assets: "./book",
        js: [
          "handler.js"
        ],
        css: [
            "header-element.css"
        ]
    }
};
