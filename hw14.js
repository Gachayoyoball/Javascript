    <label for="who">Knock, knock, who's there?</label><br><br>
    <button id="I-btn">I</button>
    <button id="Hate-btn">Hate</button>
    <button id="Mushrooms-btn">Mushrooms</button>
    

    <script>
      let buttons = document.querySelectorAll('button');
      buttons.forEach(btn => {
        btn.addEventListener('click', e => {
          alert("It's " + e.target.innerHTML);
          for (p in e) {
            console.log(p);
          }
        });
      });
    </script>
  </body>
</html>