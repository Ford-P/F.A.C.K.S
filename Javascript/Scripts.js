var settings = {
  "url": "https://corona.lmao.ninja/v2/countries?yesterday&sort",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

$.getJSON("https://corona.lmao.ninja/v2/countries?yesterday&sort", function (data) {
  var corona_data = '';
  var count = 1;
  $.each(data, function (key, value) {
    corona_data += "<tr>";
    corona_data += "<td>" + count + "</td>";
    corona_data += "<td>" + value.country + "</td>";
    corona_data += "<td>" + value.cases + "</td>";
    corona_data += "<td>" + value.deaths + "</td>";
    corona_data += "<td>" + value.recovered + "</td>";
    corona_data += "<td>" + value.population + "</td>";
    corona_data += "</tr>";
    count++;
  });
  $("#corona_table").append(corona_data);
})

var settings = {
  "url": "https://corona.lmao.ninja/v2/all?yesterday",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

$.getJSON("https://corona.lmao.ninja/v2/all?yesterday", function (data) {
  var coronaCases = '<a class="coronaTextLink">' + data.cases + "</a>";
  var coronaDeaths = '<a class="coronaTextLink">' + data.deaths + "</a>";
  var coronaRecovered = '<a class="coronaTextLink">' + data.recovered + "</a>";

  $("#cases").append(coronaCases);
  $("#deaths").append(coronaDeaths);
  $("#recovered").append(coronaRecovered);

})
