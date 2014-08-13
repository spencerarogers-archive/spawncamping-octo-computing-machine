var DOMChallenge = (function() {
    var initialized    = false,
        metasyntaxDone = false,
        question =
          '<!-- Discover the question and provide an answer! -->' +
          '<div id="question" class="decoding" data-encoded-with="base64">' +
            'V2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgcGh5c2ljcyBsYWIgd2hlcmUgVGltIEJlcm5lcnMtTGVlIGNyZWF0ZWQgdGhlIFdvcmxkIFdpZGUgV2ViPw==' +
          '</div>';
        answerTag = '<div id="answer">replace this text with your answer</div>',
        answerRegex = /cern/i,
        questionAnswered = false,
        colorsFilledIn = false;

    return {
      init: function() {
        if(initialized) { return false; }

        var that = this;
        setInterval(function() {
          that.gameLoop();
        }, 33);
      },
      gameLoop: function() {
        this.checkMetasyntax(this.askQuestion);
        this.checkQuestion(this.addColors);
        this.checkColors(this.transition);
      },
      transition: function() {
        window.location = '/dom/ination';
      },
      checkColors: function(callback) {
        if(colorsFilledIn) { return false; }

        var heart = $('.red.heart').length > 0,
            star = $('.yellow.star').length > 0,
            leaf = $('.blue.yellow.leaf').length > 0;

        if(heart && star && leaf) {
          colorsFilledIn = true;
          callback();
        }
      },
      addColors: function() {
        $('body').append(
          '<div id="shapes">' +
            '<!-- Use the following HTML classes to turn the shapes the right color! -->' +
            '<!-- classes: blue, red, yellow -->' +
            '<span class="blue heart glyphicon glyphicon-heart"></span> ' +
            '<span class="red star glyphicon glyphicon-star"></span> '  +
            '<span class="yellow leaf glyphicon glyphicon-leaf"></span>'   +
          '</div>'
        );
      },
      checkMetasyntax: function(callback) {
        if(metasyntaxDone) { return false; }

        if(this.orderedMetasyntax()) {
          metasyntaxDone = true;
          callback();
        }
      },
      askQuestion: function() {
        $('body').append(question);
        $('body').append(answerTag);
      },
      checkQuestion: function(callback) {
        if(questionAnswered) { return false; }

        var answerEl = $('#answer'),
            answer;

        if(answerEl.length > 0) {
          answer = answerEl[0].innerText;
        }

        if(answer && answer.match(answerRegex)) {
          callback();
          questionAnswered = true;
        }
      },
      orderedMetasyntax: function() {
        var els = $('.metasyntactic');

        return els[0].id == 'foo' &&
               els[1].id == 'bar' &&
               els[2].id == 'baz' &&
               els[3].id == 'qux';
      }
    }
}());

$(function() {
  if($('#dom-challenge').length > 0) {
    DOMChallenge.init()
  }
});
