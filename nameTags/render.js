const render = (newState) => {
  const nameTagsDOM = document.getElementById('nameTagsContainer');

  var nametagsHTML = newState.map(function (currentName) {
    return ` 
      <div class="nametag mx-auto w-50 text-center border m-1">
        <div class="hello bg-primary text-white p-3 h3">Hello, my name is:</div>
        <div class="name h4 p-5">${currentName.name}</div>
      </div>
    `;
  });

  nameTagsDOM.innerHTML = `
    <div class="nametagContainer">
      ${nametagsHTML.join('')}           
    </div>
  `
}