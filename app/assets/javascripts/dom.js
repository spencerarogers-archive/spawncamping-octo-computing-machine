var DOMChallenge = (function() {
    var initialized    = false,
        metasyntaxDone = false,
        question = 'hi',
        answerTag = '<div id="answer">answer goes here</div>',
        graceHopperDone = false;

    return {
      init: function() {
        if(initialized) { return false; }

        var that = this;
        setInterval(function() {
          that.gameLoop();
        }, 33);
      },
      gameLoop: function() {
        this.checkMetasyntax(this.setUpQuestion);
        this.checkQuestion();
      },
      checkMetasyntax: function(callback) {
        if(metasyntaxDone) { return false; }

        if(this.orderedMetasyntax()) {
          metasyntaxDone = true;
          callback();
        }
      },
      setUpQuestion: function() {
        $('body').append(question);
        $('body').append(answerTag);
      },
      checkQuestion: function() {
        if(graceHopperDone) { return false; }

        var answerEl = $('#answer'),
            answer;

        if(answerEl.length > 0) {
          answer = answerEl[0].innerText;
        }

        if(answer && answer.match(/nanosecond/i)) {
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
