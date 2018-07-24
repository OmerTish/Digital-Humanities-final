//**SEARCH**//

//remove nsbp- big spaces between pictures
$('.wrap').html(function(i,h){
    return h.replace(/&nbsp;/g,'');
});

//by name
$("#search-criteria").on("keyup", function() {
    var g = $(this).val().toLowerCase();
    $("#contet a").each(function() {
        var s = $(this).attr("name");
        $(this).closest('.wrap')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
    });
});
//by year
$("#myRange").on("click", function() {
    var g =Number(document.getElementById("demo").innerHTML);
    $("#contet a").each(function() {
        var s1 = Number($(this).attr("year1"));
        var s2 = Number($(this).attr("year2"));
        $(this).closest('.wrap')[ (s1<=g && g<=s2) ? 'show' : 'hide' ]();
    });
});
//by size
$("#myRange1").on("click", function() {
    var g =Number(document.getElementById("demo1").innerHTML);
    $("#contet a").each(function() {
        var s1 = Number($(this).attr("size"));
        $(this).closest('.wrap')[ (g<=s1) ? 'show' : 'hide' ]();
    });
});
//**SEARCH-END**//

//**SLIDE**//
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
if(slider && output){
    output.innerHTML = slider.value;
    slider.oninput = function() {
  output.innerHTML = this.value;
}
}


//**SLIDE END//

//**SLIDE-SIZE**//
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
if(slider1 && output1){
    output1.innerHTML = slider1.value;
    slider1.oninput = function() {
  output1.innerHTML = this.value;
}
}


//**SLIDE-SIZE END//
//**TABS-FOOTER**//
if(document.getElementById("name")){
    document.getElementById("name").click();
}
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
//**TABS-FOOTER-END**//

///***MONGOL- START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Mongol_Empire&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#mongolContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Mongol_Empire'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#mongol').html(blurb.find('div.floatnone'));
    }
    });
    
});

var tableToExcel = (function() {
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = uri + base64(format(template, ctx))
  }
})()

var objMongol=[
 {
   "Years": "1206-1368",
   "Capital": "Avarga, Karakorum, Khanbaliq",
   "Languages": "Mongolian, Turkic, Chinese, Persian",
   "Religion": "Tengrism, Shamanism, Islam, Buddhism, Nestorianism",
   "Area (million km^2)": 24,
   "Currency": "dirhams, silver, silk, chinese coins"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objMongol));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#mongolJson');


///***MONGOL- END***///

///***BRITISH- START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=British_Empire&callback=?",
        contentType: "application/json; chBritish_Empirearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#britishContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'British_Empire'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#british').html(blurb.find('tr:nth-child(3) img'));
    }
    });
    
});

var objBritish=[
 {
   "Years": "1497-1997",
   "Capital": "London",
   "Languages": "English",
   "Religion": "Christianity",
   "Area (million km^2)": 35.5,
   "Currency": "Pound, Shilling"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objBritish));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#britishJson');
///***BRITISH- END***///

//**RUSSIAN-START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Russian_Empire&callback=?",
        contentType: "application/json; chBritish_Empirearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#russianContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Russian_Empire'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#russian').html(blurb.find('tr:nth-child(7) img'));
    }
    });
    
});

var objRussian=[
 {
   "Years": "1721-1917",
   "Capital": "Saint Petersburg, Moscow",
   "Languages": "Russian",
   "Religion": "Orthodox Christianity",
   "Area (million km^2)": 22.8,
   "Currency": "Ruble"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objRussian));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#russianJson');
//**RUSSIAN-END***///

//**Qing-START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Qing_dynasty&callback=?",
        contentType: "application/json; chQing_Dynastyarset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#qingContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Qing_Empire'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#qing').html(blurb.find('tr:nth-child(6) img'));
    }
    });
    
});

var objQing=[
 {
   "Years": "1636-1912",
   "Capital": "Shengjing, Peking",
   "Languages": "Mandarin, Manchu, Mongolian, Tibetan, Chagatai",
   "Religion": "Heaven worship, Buddhism, Chinese folk religion, Confucianism, Taoism, Islam, Shamanism, Christianity",
   "Area (million km^2)": 14.7,
   "Currency": "Cash, Tael"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objQing));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#qingJson');
//**Qing-END***///

//**French-START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=French_colonial_empire&callback=?",
        contentType: "application/json; chFrench_colonial_empirearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#frenchContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'French_colonial_empire'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#french').html(blurb.find('tr:nth-child(6) img'));
    }
    });
    
});

var objFrench=[
 {
   "Years": "1534-1980",
   "Capital": "Paris",
   "Languages": "French",
   "Religion": "Chatolic Christianity",
   "Area (million km^2)": 11.5,
   "Currency": "Franc"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objFrench));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#frenchJson');
//**French-END***///

//**Spanish-START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Spanish_Empire&callback=?",
        contentType: "application/json; chSpanish_Empirearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#spanishContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Spanish_Empire'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#spanish').html(blurb.find('tr:nth-child(6):first img '));
    }
    });
    
});

var objSpanish=[
 {
   "Years": "1492-1975",
   "Capital": "Madrid",
   "Languages": "Spanish, Latin",
   "Religion": "Chatolic Christianity",
   "Area (million km^2)": 13.7,
   "Currency": "Spanish real, Escudo, Spanish dollar, Spanish peseta"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objSpanish));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#spanishJson');
//**Spanish-END***///

//**UMAYYAD-START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Umayyad_Caliphate&callback=?",
        contentType: "application/json; chUmayyadCaliphatearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#umayyadContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Umayyad_Caliphate'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#umayyad').html(blurb.find('tr:nth-child(4):first img '));
    }
    });
    
});

var objUmayyad=[
 {
   "Years": "661-750",
   "Capital": "Damascus, Harran",
   "Languages": "Classical Arabic",
   "Religion": "Sunni Isalm",
   "Area (million km^2)": 11.1,
   "Currency": "Gold dinar, Dirham"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objUmayyad));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#umayyadJson');
//**UMAYYAD-END***///

//**Yuan-START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Yuan_dynasty&callback=?",
        contentType: "application/json; chYuan_dynastyarset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#yuanContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Yuan_dynasty'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#yuan').html(blurb.find('tr:nth-child(6):first img '));
    }
    });
    
});

var objYuan=[
 {
   "Years": "1271-1368",
   "Capital": "Khanbaliq",
   "Languages": "Mongolian, Chinese",
   "Religion": "Buddhism, Heaven worship, Shamanism, Taoism, Confucianism, Chinese folk religion, Chinese Nestorian Christianity, Roman Catholic Christianity, Judaism, Chinese Manichaeism, Islam, Legalism",
   "Area (million km^2)": 11,
   "Currency": "Predominantly"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objYuan));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#yuanJson');
//**Yuan-END***///

//**Portuguese -START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Portuguese_Empire&callback=?",
        contentType: "application/json; chPortuguese_Empirearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#portugueseContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Portuguese_Empire'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#portuguese').html(blurb.find('tr:nth-child(5):first img '));
    }
    });
    
});

var objPortuguese=[
 {
   "Years": "1415-1999",
   "Capital": "Lisbon, Rio De Janeiro",
   "Languages": "Portuguese",
   "Religion": "Catholicism",
   "Area (million km^2)": 10.4,
   "Currency": "Portuguese Real"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objPortuguese));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#portugueseJson');
//**Portuguese -END***///

//**Xiongnu -START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Xiongnu&callback=?",
        contentType: "application/json; chXiongnuarset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#xiongnuContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
  //     $.ajax({
  // dataType: 'jsonp', // no CORS
  // url: 'https://en.wikipedia.org/w/api.php',
  // data: {
  //   action: 'query',
  //   prop: 'revisions',
  //   rvprop: 'content',
  //   format: 'json',
  //   rvsection: '0', // infobox
  //   rvparse: '', // convert to HTML
  //   redirects: '', // follow title redirects
  //   titles: 'Xiongnu'
  // },
  // success: function(data) {
  //   var keys = Object.keys(data.query.pages);
  //   var content = data.query.pages[keys[0]].revisions[0]['*'];
  //   var data = $('.mw-parser-output', content).prevObject.get(0);
  //   var blurb = $('<div></div>').html(data);
  //   $('#xiongnu').html(blurb.find('tr:nth-child(5):first img '));
  //   }
  //   });
    
});

var objXiongnu=[
 {
   "Years": "-209 - 53",
   "Capital": "LongCheng",
   "Languages": "Old Chinese",
   "Religion": "Buddhisam",
   "Area (million km^2)": 9,
   "Currency": ""
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objXiongnu));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#xiongnuJson');
//**Xiongnu -END***///

//**Brazil -START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Empire_of_Brazil&callback=?",
        contentType: "application/json; chPortuguese_Empirearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#brazilContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Empire_of_Brazil'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#brazil').html(blurb.find('tr:nth-child(7):first img '));
    }
    });
    
});

var objBrazil=[
 {
   "Years": "1822-1889",
   "Capital": "Rio De Janeiro",
   "Languages": "Portuguese",
   "Religion": "Roman Catholic",
   "Area (million km^2)": 8.337,
   "Currency": "Real"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objBrazil));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#brazilJson');
//**Brazil -END***///

//**Han -START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Han_dynasty&callback=?",
        contentType: "application/json; chHan_dynastyarset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#hanContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Han_dynasty'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#han').html(blurb.find('tr:nth-child(4):first img '));
    }
    });
    
});

var objHan=[
 {
   "Years": "-202 - 220",
   "Capital": "Chang'an, Luoyang, Xuchang",
   "Languages": "Old Chinese",
   "Religion": "Taoism, Chinese folk religion",
   "Area (million km^2)": 6.5,
   "Currency": "Ban Liang coins, Wu Zhu coins"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objHan));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#hanJson');
//**Han -END***///

//**Ming -START***///
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Ming_dynasty&callback=?",
        contentType: "application/json; chMing_dynastyarset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#mingContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Ming_dynasty'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#ming').html(blurb.find('tr:nth-child(4):first img '));
    }
    });
    
});

var objMing=[
 {
   "Years": "1368 - 1644",
   "Capital": "Nanjing, Beijing",
   "Languages": "Mandarin",
   "Religion": "Heaven worship, Taoism, Confucianism, Buddhism, Chinese folk religion, Islam, Roman Catholicism",
   "Area (million km^2)": 6.5,
   "Currency": "Paper money, copper cashes strings of coin , paperSilver taels"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objMing));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#mingJson');
//**Ming -END***///


//**Rashidun-START***///
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Rashidun_Caliphate&callback=?",
        contentType: "application/json; chRashidun_Caliphatearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#rashidunContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Rashidun_Caliphate'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#rashidun').html(blurb.find('tr:nth-child(4):first img '));
    }
    });
    
});

var objRashidun=[
 {
   "Years": "632 - 661",
   "Capital": "Medina, Kufa",
   "Languages": "Arabic, Aramaic/Syriac, Armenian, Baloch, Berber, Coptic, Georgian, Greek, Middle Persian, Kurdish, Vulgar Latin, Semitic languages, Iranian languages",
   "Religion": "Islam",
   "Area (million km^2)": 6.4,
   "Currency": "Dinar, Dirham"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objRashidun));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#rashidunJson');
//**Rashidun -END***///

//**Turkic_Khaganate-START***///
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Turkic_Khaganate&callback=?",
        contentType: "application/json; chTurkic_Khaganatearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#turkicContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Turkic_Khaganate'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#turkic').html(blurb.find('tr:nth-child(5):first img '));
    }
    });
    
});

var objTurkic=[
 {
   "Years": "552-744",
   "Capital": "Otuken",
   "Languages": "Sogdian, Old turkic",
   "Religion": "Tengrism, Shamanism, Buhddhism",
   "Area (million km^2)": 6,
   "Currency": "-"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objTurkic));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#turkicJson');
//**Turkic_Khaganate -END***///

//**Ottoman_Empire-START***///
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Ottoman_Empire&callback=?",
        contentType: "application/json; chOttoman_Empirearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#ottomanContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Ottoman_Empire'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#ottoman').html(blurb.find('tr:nth-child(7):first img '));
    }
    });
    
});

var objOttoman=[
 {
   "Years": "1299-1923",
   "Capital": "Sogut, Bursa, Edirne, Constantinople",
   "Languages": "Ottoman turkic",
   "Religion": "Sunni Islam",
   "Area (million km^2)": 5.2,
   "Currency": "Akce, Para, Sultani, Kurus, Lira"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objOttoman));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#ottomanJson');
//**Ottoman -END***///

//**Roman-START***///
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Roman_Empire&callback=?",
        contentType: "application/json; chRoman_Empirearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#romanContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'Roman_Empire'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#roman').html(blurb.find('tr:nth-child(5):first img '));
    }
    });
    
});

var objRoman=[
 {
   "Years": "-27 - 395",
   "Capital": "Rome, Mediolanum, Ravenna, Nicomedia, Constantinople",
   "Languages": "Latin, Greek",
   "Religion": "Imperial cult- driven polytheism, Nicene Christianity",
   "Area (million km^2)": 5,
   "Currency": "Sestertius, Aureus, Solidus, Nomisma"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objRoman));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#romanJson');
//**Roman -END***///

//**German-START***///
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=German_colonial_empire&callback=?",
        contentType: "application/json; chGerman_colonial_empirearset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
            blurb.find('span.haudio').remove();
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#germanContent').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
    
      $.ajax({
  dataType: 'jsonp', // no CORS
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    rvsection: '0', // infobox
    rvparse: '', // convert to HTML
    redirects: '', // follow title redirects
    titles: 'German_colonial_empire'
  },
  success: function(data) {
    var keys = Object.keys(data.query.pages);
    var content = data.query.pages[keys[0]].revisions[0]['*'];
    var data = $('.infobox', content).get(0);
    var blurb = $('<div></div>').html(data);
    $('#german').html(blurb.find('tr:nth-child(6):first img '));
    }
    });
    
});

var objGerman=[
 {
   "Years": "1884-1918",
   "Capital": "Berlin",
   "Languages": "German",
   "Religion": "Christianity",
   "Area (million km^2)": 3.2,
   "Currency": "Mark"
 }
];

var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objGerman));

$('<a href="data:' + data + '" download="data.json"> <input type="button" value="Export to JSON"></a>').appendTo('#germanJson');
//**German -END***///