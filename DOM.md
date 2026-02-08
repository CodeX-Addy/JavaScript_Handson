*******************************************************************
## WINDOW OBJECT
*******************************************************************
- window is the top most object and is created by browser itself
- DOM, BOM, JS Core, everything comes under window object
- Some methods include window.open(), window.close()
- some global terms like console.log() is also a global method
  of windows object and can access with window.console.log()


*******************************************************************
## DOCUMENT OBJECT
*******************************************************************
- HTML code is converted into JS Object is called as document
- Some methods inside document object includes
- To access: getElementById, getElementByClassName,
  getElementByTagName, querySelector (it takes first element by
  default), querySelectorAll
- To update the text:
  ```
  let element = document.getElementById("heading")
  element.innerText = 'Hey there'
  ```
- To append the element (it'll add at last by default):
  ```
  let addElement = document.createElement('h1')
  addElement.textContent = 'This is another heading'
  let bodyTag = document.querySelector('body');
  bodyTag.appendChild(addElement);
  <h1>​This is another heading​</h1>​
  ```
  
*******************************************************************
## DOM (DOCUMENT OBJECT MODEL)
*******************************************************************
- HTML Tags tokenizes into tokens which then converted to nodes
- Then nodes is used to represent a tree like structure called DOM

*******************************************************************
## BOM (BROWSER OBJECT MODEL)
*******************************************************************

- The interaction with the browser except the HTML content.
- Like navigation, location, screen size etc.
