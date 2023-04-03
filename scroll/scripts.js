const sticky = document.querySelector('nav')
sticky.className = 'sticky'




// Add a click event listener to the link with href="#div2"
document.querySelector('a[href="#div1"]').addEventListener('click', function(e) {
  // Prevent the default link behavior
  e.preventDefault();

  let  result = e.target.hash.substring(1)
  var chosenDiv = document.getElementById(`${result}`);
  
  // Calculate the top position to scroll to
  var topPos = chosenDiv.offsetTop - (window.innerHeight / 1.5) + (chosenDiv.offsetHeight / 10);
  
  // Scroll to the calculated position
  window.scrollTo({top: topPos, behavior: 'smooth'});
});

document.querySelector('a[href="#div2"]').addEventListener('click', function(e) {
    // Prevent the default link behavior
    e.preventDefault();
  
    let  result = e.target.hash.substring(1)
    var chosenDiv = document.getElementById(`${result}`);
    
    // Calculate the top position to scroll to
    var topPos = chosenDiv.offsetTop - (window.innerHeight ) + (chosenDiv.offsetHeight / 8);
    
    // Scroll to the calculated position
    window.scrollTo({top: topPos, behavior: 'smooth'});
  });

  document.querySelector('a[href="#div3"]').addEventListener('click', function(e) {
    // Prevent the default link behavior
    e.preventDefault();
  
    let  result = e.target.hash.substring(1)
    var chosenDiv = document.getElementById(`${result}`);
    
    // Calculate the top position to scroll to
    var topPos = chosenDiv.offsetTop - (window.innerHeight / 1.5 ) + (chosenDiv.offsetHeight / 10);
    
    // Scroll to the calculated position
    window.scrollTo({top: topPos, behavior: 'smooth'});
  });

  document.querySelector('a[href="#div4"]').addEventListener('click', function(e) {
    // Prevent the default link behavior
    e.preventDefault();
  
    let  result = e.target.hash.substring(1)
    var chosenDiv = document.getElementById(`${result}`);
    
    // Calculate the top position to scroll to
    var topPos = chosenDiv.offsetTop - (window.innerHeight / 1.5) + (chosenDiv.offsetHeight / 10);
    
    // Scroll to the calculated position
    window.scrollTo({top: topPos, behavior: 'smooth'});
  });

  document.querySelector('a[href="#div5"]').addEventListener('click', function(e) {
    // Prevent the default link behavior
    e.preventDefault();
  
    let  result = e.target.hash.substring(1)
    var chosenDiv = document.getElementById(`${result}`);
    
    // Calculate the top position to scroll to
    var topPos = chosenDiv.offsetTop - (window.innerHeight / 1.5 ) + (chosenDiv.offsetHeight / 10);
    
    // Scroll to the calculated position
    window.scrollTo({top: topPos, behavior: 'smooth'});
  });
