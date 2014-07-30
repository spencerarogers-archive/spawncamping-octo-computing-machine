var DOMChallenge = (function() {
    var initialized    = false,
        metasyntaxDone = false,
        metasyntaxAfter = 'On David Letterman, what unit of measurement did Grace Hopper show Letterman?',
        answerTag = '<div id="hopper-answer">Answer goes here!</div>',
        graceHopperDone = false;

    return {
      init: function() {
        if(initialized) { return false; }

        var that = this;
        setInterval(function() {
          that.handleMetasyntax();
          that.handleGraceHopper();
        }, 33);
      },
      handleMetasyntax: function() {
        if(metasyntaxDone) { return false; }

        if(this.orderedMetasyntax()) {
          $('body').append(metasyntaxAfter);
          $('body').append(answerTag);
          metasyntaxDone = true;
        }
      },
      handleGraceHopper: function() {
        if(graceHopperDone) { return false; }

        var answerEl = $('#hopper-answer'),
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
