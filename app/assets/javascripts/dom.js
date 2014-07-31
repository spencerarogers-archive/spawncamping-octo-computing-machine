var DOMChallenge = (function() {
    var initialized    = false,
        metasyntaxDone = false,
        question = '<div id="question" data-encoding-type="base64">V2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgcGh5c2ljcyBsYWIgd2hlcmUgVGltIEJlcm5lcnMtTGVlIGNyZWF0ZWQgdGhlIFdvcmxkIFdpZGUgV2ViPw==</div>',
        answerTag = '<div id="answer">replace this text with your answer</div>',
        answerRegex = /cern/i,
        questionAnswered = false;

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
        this.checkQuestion();
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
      checkQuestion: function() {
        if(questionAnswered) { return false; }

        var answerEl = $('#answer'),
            answer;

        if(answerEl.length > 0) {
          answer = answerEl[0].innerText;
        }

        if(answer && answer.match(answerRegex)) {
          console.log('Great! Now do something else');
          graceHopperDone = true;
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

DOMChallenge.init()
