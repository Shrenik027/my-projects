// Function too replace an article

function replaceArticel(articleId, newContent) {
  //Find the existing article
  const existingArticle = document.getElementById(articleId);
  //create a new div element for the updated articel

  const newArticle = document.createElement("div");
  //add css to it

  newArticle.className = "article";
  //keep the id same for the new article
  newArticle.id = articleId;
  //create the text node for new content
  const newTextNode = document.createTextNode(newContent);
  //append the text node to newArticle

  newArticle.appendChild(newTextNode);
  //Replacing the existing existing article with the new node

  existingArticle.parentNode.replaceChild(newArticle, existingArticle);
}
replaceArticel("article3", "Shrenik");
