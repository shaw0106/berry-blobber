// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var blueberries = {
  name: 'Blueberries',
  latin: 'Vaccinium corymbosum',
  onShrub: true,
  energy: 240,
  carbs: 14.49,
  protein: 0.74
};

var grapes = {
  name: 'Grapes',
  latin: 'Vitis vinifera',
  onShrub: false,
  energy: 288,
  carbs: 18.1,
  protein: 0.72
};

var redCurrant = {
  name: 'Red currant',
  latin: 'Ribes rubrum',
  onShrub: true,
  energy: 234,
  carbs: 13.8,
  protein: 1.4
};

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################


// Write your function here, name it `writeBerries`

var listContacts = function (contacts) {
  document.write('<h1>Planetary Peeps</h1>');

  contacts.forEach(function (item) {
    document.write('<h2>' + item.name + '<h2>');
    document.write('<dl>');
    document.write('<dt>E-mail address</dt>');
    document.write('<dd><a href="mailto:' + item.email + '">' + item.email + '</a></dd>');
    document.write('<dt>Phone Number</dt>');
    document.write('<dd><a href="tel:' + item.tel + '">' + item.tel + '</a></dd>');
    document.write('<dt>Location</dt>');
    document.write('<dd>Between ' + item.loc[0] + ' km & ' + item.loc[1] + ' km from the Sun.');
    document.write('</dl>');
  });
};

listContacts(peeps);



// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

// This code will execute your function
writeBerries([blueberries, grapes, redCurrant]);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
