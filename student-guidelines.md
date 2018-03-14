# How to use this course without a mentor
  * Visual Code
  * Node and npm
  
  All of the chapters assumes that the instructor will use the following plugins.
  
  * emmet
  * livereload
  
  emmet is code completion and snippet plugin which comes with in visual code. It helps you to code faster and efficiently.
  It is important to save time while delivering the demo. At the same time the user should feel that every step was clear 
  infront of him.
  
  The other plugin is livereload.
  
  
  it helps you to automatically reload the page in browser, whenever the code is modified.
  to install livereload, run the following command in terminal
  `npm install -g livereload`
  
  The page you want to reload should have the following script tag.
  
  ```
    <script>
        document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
        ':35729/livereload.js?snipver=1"></' + 'script>')
    </script> 
  ```
  Now whenever you change the code and save the file, the browser will reload with updated preview.
  
# Guidelines 
