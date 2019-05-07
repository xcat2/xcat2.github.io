(function(){
  var cli1 = document.getElementById('client1');
  var cl1 = document.getElementById('cl1');
  var intro1 = document.getElementById('client1_intro');
  var cli2 = document.getElementById('client2');
  var intro2 = document.getElementById('client2_intro');
  var cli3 = document.getElementById('client3');
  var intro3 = document.getElementById('client3_intro');
  var cli4 = document.getElementById('client4');
  var intro4 = document.getElementById('client4_intro');
  var cli5 = document.getElementById('client5');
  var intro5 = document.getElementById('client5_intro');
  var show = document.getElementById('show');
  var timer = null;
  intro1.onmouseover = cli1.onmouseover = function(){
    if(timer) clearTimeout(timer)
      intro1.style.display = 'block';
      cli1.style.opacity = '0.4'; 
      cli1.style.filter = 'alpha(opacity=40)';
      cli2.style.opacity = '1';
      cli2.style.filter = 'alpha(opacity=100)';
      cli3.style.opacity = '1';
      cli3.style.filter = 'alpha(opacity=100)'; 
      cli4.style.opacity = '1';
      cli4.style.filter = 'alpha(opacity=100)';
      cli5.style.opacity = '1';
      cli5.style.filter = 'alpha(opacity=100)';     
      intro2.style.display = 'none';
      intro3.style.display = 'none';
      intro4.style.display = 'none';
      intro5.style.display = 'none';
      show.style.display = 'none';
  }
  intro1.onmouseout = cli1.onmouseout = function(){
    timer = setTimeout(function(){
      cli1.style.opacity = '1';
      cli1.style.filter = 'alpha(opacity=100)';
      intro1.style.display = 'none';
      intro2.style.display = 'none';
      intro3.style.display = 'none';
      intro4.style.display = 'none';
      intro5.style.display = 'none';
      cli1.style.opacity = '0.4';
      cli1.style.filter = 'alpha(opacity=40)';
      show.style.display = 'block';
    },400);

  }
  intro2.onmouseover = cli2.onmouseover = function(){
    if(timer) clearTimeout(timer)
      intro1.style.display = 'none';
      intro2.style.display = 'block';
      intro4.style.display = 'none';
      intro3.style.display = 'none';
      intro5.style.display = 'none';
      cl1.style = 'none';
      cli1.style.opacity = '1';
      cli1.style.filter = 'alpha(opacity=100)';
      cli2.style.opacity = '0.4';
      cli2.style.filter = 'alpha(opacity=40)';
      cli3.style.opacity = '1';
      cli3.style.filter = 'alpha(opacity=100)';
      cli4.style.opacity = '1';
      cli4.style.filter = 'alpha(opacity=100)';
      cli5.style.opacity = '1';
      cli5.style.filter = 'alpha(opacity=100)';
      show.style.display = 'none';
  }
  intro2.onmouseout = cli2.onmouseout = function(){
    timer = setTimeout(function(){
      cli1.style.opacity = '0.4';
      cli1.style.filter = 'alpha(opacity=40)';
      cli2.style.opacity = '1';
      cli2.style.filter = 'alpha(opacity=100)';
      intro1.style.display = 'none';
      intro2.style.display = 'none';
      intro3.style.display = 'none';
      intro4.style.display = 'none';
      intro5.style.display = 'none';
      show.style.display = 'block';
    },400);

  }
  intro3.onmouseover = cli3.onmouseover = function(){
    if(timer) clearTimeout(timer)
      intro1.style.display = 'none';
      intro2.style.display = 'none';
      intro3.style.display = 'block';
      intro4.style.display = 'none';
      intro5.style.display = 'none';
      cl1.style = 'none';
      cli1.style.opacity = '1';
      cli1.style.filter = 'alpha(opacity=100)';
      cli2.style.opacity = '1';
      cli2.style.filter = 'alpha(opacity=100)';
      cli4.style.opacity = '1';
      cli4.style.filter = 'alpha(opacity=100)';
      cli3.style.opacity = '0.4';
      cli3.style.filter = 'alpha(opacity=40)';
      cli5.style.opacity = '1';
      cli5.style.filter = 'alpha(opacity=100)';
      show.style.display = 'none';
  }
  intro3.onmouseout = cli3.onmouseout = function(){
    timer = setTimeout(function(){
      cli3.style.opacity = '1';
      cli3.style.filter = 'alpha(opacity=100)';
      cli1.style.opacity = '0.4';
      cli1.style.filter = 'alpha(opacity=40)';
      intro1.style.display = 'none';
      intro2.style.display = 'none';
      intro3.style.display = 'none';
      intro4.style.display = 'none';
      intro5.style.display = 'none';
      show.style.display = 'block';
    },400);

  }
  intro4.onmouseover = cli4.onmouseover = function(){
    if(timer) clearTimeout(timer)
      intro1.style.display = 'none';
      intro2.style.display = 'none';
      intro3.style.display = 'none';
      intro4.style.display = 'block';
      intro5.style.display = 'none';
      cl1.style = 'none';
      cli1.style.opacity = '1';
      cli1.style.filter = 'alpha(opacity=100)';
      cli2.style.opacity = '1';
      cli2.style.filter = 'alpha(opacity=100)';
      cli3.style.opacity = '1';
      cli3.style.filter = 'alpha(opacity=100)';
      cli4.style.opacity = '0.4';
      cli4.style.filter = 'alpha(opacity=40)';
      cli5.style.opacity = '1';
      cli5.style.filter = 'alpha(opacity=100)';
      show.style.display = 'none';
  }
  intro4.onmouseout = cli4.onmouseout = function(){
    timer = setTimeout(function(){
      cli4.style.opacity = '1';
      cli4.style.filter = 'alpha(opacity=100)';
      cli1.style.opacity = '0.4';
      cli1.style.filter = 'alpha(opacity=40)';
      intro1.style.display = 'none';
      intro2.style.display = 'none';
      intro3.style.display = 'none';
      intro4.style.display = 'none';
      intro5.style.display = 'none';
      show.style.display = 'block';
    },400);

  }
  intro5.onmouseover = cli5.onmouseover = function(){
    if(timer) clearTimeout(timer)
      intro1.style.display = 'none';
      intro2.style.display = 'none';
      intro3.style.display = 'none';
      intro4.style.display = 'none';
      intro5.style.display = 'block';
      cl1.style = 'none';
      cli1.style.opacity = '1';
      cli1.style.filter = 'alpha(opacity=100)';
      cli2.style.opacity = '1';
      cli2.style.filter = 'alpha(opacity=100)';
      cli3.style.opacity = '1';
      cli3.style.filter = 'alpha(opacity=100)';
      cli4.style.opacity = '1';
      cli4.style.filter = 'alpha(opacity=100)';
      cli5.style.opacity = '0.4';
      cli5.style.filter = 'alpha(opacity=40)';
      show.style.display = 'none';
  }
  intro5.onmouseout = cli5.onmouseout = function(){
    timer = setTimeout(function(){
      cli5.style.opacity = '1';
      cli5.style.filter = 'alpha(opacity=100)';
      cli1.style.opacity = '0.4';
      cli1.style.filter = 'alpha(opacity=40)';
      intro1.style.display = 'none';
      intro2.style.display = 'none';
      intro3.style.display = 'none';
      intro4.style.display = 'none';
      intro5.style.display = 'none';
      show.style.display = 'block';
    },400);

  }
})();
