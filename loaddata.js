function renderWHOArticles(ulId, items) {
    var ul = document.getElementById(ulId);
    for(var i = 0; i <items.length; i++) {
    var li = document.createElement("li");
        var item = items[i];
        var x = document.createElement("A");
        var t = document.createTextNode("   "+ item.childNodes[3].textContent);
        x.setAttribute("href", "javascript:onLinkClick('"+item.childNodes[1].textContent+"')");
        x.appendChild(t);
        li.appendChild(x);
        x.setAttribute("class", "glyphicon glyphicon-arrow-right");
        //x.setAttribute("onclick", "javascript:onLinkClick('"+item.childNodes[1].textContent+"')");
        ul.appendChild(li);
        }
}


/**
 * Opens links in new window
 * @param {type} link
 */
function onLinkClick(link) {
    window.open(link);
}

function loadWHOArticles() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var response = this.responseText;
    var items = this.responseXML.getElementsByTagName("item");
    renderWHOArticles("WHOArticles", items);
    }
  };
  xhttp.open("GET", "https://www.who.int/rss-feeds/news-english.xml", true);
  xhttp.send();
}

function renderCDCArticles(ulId, items) {
    var ul = document.getElementById(ulId);
    for(var i = 0; i <items.length; i++) {
    var li = document.createElement("li");
        var item = items[i];
        var x = document.createElement("A");
        var t = document.createTextNode("   "+ item.childNodes[1].textContent);
        x.setAttribute("href", "javascript:onLinkClick('"+item.childNodes[5].textContent+"')");
        x.appendChild(t);
        li.appendChild(x);
        x.setAttribute("class", "glyphicon glyphicon-arrow-right");
        //x.setAttribute("onclick", "javascript:onLinkClick('"+item.childNodes[5].textContent+"')");
        ul.appendChild(li);
        }
}

function loadCDCNews() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var response = this.responseText;
    var items = this.responseXML.getElementsByTagName("item");
    renderCDCArticles("CDCArticles", items);
    }
  };
  xhttp.open("GET", "https://tools.cdc.gov/api/v2/resources/media/132608.rss", true);
  xhttp.send();
}

