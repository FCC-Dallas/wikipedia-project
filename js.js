function search(event) {
  var input = document.querySelector('[name="search-query"]');
  var query = input.value;

  var baseUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=`;
  var keywordUrl = baseUrl + query;

  var request = new XMLHttpRequest();

  request.open('GET', keywordUrl);
  request.onreadystatechange = function () {
    if(request.readyState === XMLHttpRequest.DONE) {
      var resultBox = document.querySelector('#result');

      var data = JSON.parse(request.responseText);
      resultBox.innerHTML = JSON.stringify(data, null, 4);
    }
  }
  request.send();
}
