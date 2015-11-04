jQuery(function(){


  var input = $("#type");
  var output = $("#output");
  input.keyup(function(e){
    var inputString = input.val();
    var outputString = output.val();
    splitInputArray = inputString.split(' ');
    outputArray = splitInputArray.map(function(currentVal) {
      sub.forEach(function(currentSymbol) {
        if (currentVal == currentSymbol['name']) {
          currentVal = currentSymbol['sym'];
        }
      })
      return currentVal
    })
    output.val(outputArray.join(' '));
  })

  var sub = [{ sym: '⌘', name: 'Command'},
             { sym: '⇥', name: 'Tab'},
             { sym: '⏎', name: 'Return'},
             { sym: '⌥', name: 'Option'},
             { sym: '⌃', name: 'Control'},
             { sym: '⎋', name: 'ESC'},
             { sym: '←', name: 'Left'},
             { sym: '↓', name: 'Down'},
             { sym: '↑', name: 'Up'},
             { sym: '→', name: 'Right'},
             { sym: '⇧', name: 'Shift'},
             { sym: '⏏', name: 'Eject'},
             { sym: '⇪', name: 'Caps'}];

})