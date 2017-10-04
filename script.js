$(document).ready(function(){
  var url = 'https://restcountries.eu/rest/v1/name/';
  var countriesList = $('#countries');

  $('#search').click(searchCountries);

  function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList
    });
  }

  function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
      var country = $('<div id="country" class="country">');
      $('<p class="name">').text(item.name).appendTo(country);
      $('<p class="nativename">').text('Native name: ' + item.nativeName).appendTo(country);
      $('<p class="region">').text('Region: ' + item.region).appendTo(country);
      $('<p class="capital">').text('Capital: ' + item.capital).appendTo(country);
      $('<p class="translations">').text('Translations: ' + item.translations.de + ', ' + item.translations.es + ', ' + item.translations.fr + ', ' + item.translations.ja + ', ' + item.translations.it).appendTo(country);
      $(country).appendTo(countriesList);
    });
  }

});
