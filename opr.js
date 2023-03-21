function optimalPageReplacement() {
  // get input values from form
  const pageString = document.getElementById("pageString").value;
  const frameSize = parseInt(document.getElementById("frameSize").value);
  
  // split page string into individual pages
  const pages = pageString.split("");
  
  // initialize variables
  let hitCount = 0;
  let missCount = 0;
  let stack = [];
  
  // create table header
  let tableHTML = `
    <table>
      <tr>
        <th>Page</th>
        <th>Stack</th>
        <th>Hits</th>
        <th>Misses</th>
      </tr>
  `;
  
  // iterate through pages
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    
    // check if page is already in stack
    if (stack.includes(page)) {
      hitCount++;
      
      // move page to top of stack
      stack.splice(stack.indexOf(page), 1);
      stack.push(page);
    } else {
      missCount++;
      
      // if stack is not full, add page to top of stack
      if (stack.length < frameSize) {
        stack.push(page);
      } else {
        // find page in stack that will be used furthest in the future
        let futureIndex = -1;
        let furthestFuture = -1;
        for (let j = 0; j < stack.length; j++) {
          const futurePage = pages.slice(i + 1).indexOf(stack[j]);
          if (futurePage === -1) {
            futureIndex = j;
            break;
          } else if (futurePage > furthestFuture) {
            furthestFuture = futurePage;
            futureIndex = j;
          }
        }
        
        // replace page at futureIndex with current page
        stack[futureIndex] = page;
      }
    }
    
    // create table row for current page
    let rowHTML = `
      <tr>
        <td>${page}</td>
        <td>${stack.join(", ")}</td>
        <td>${hitCount}</td>
        <td>${missCount}</td>
      </tr>
    `;
    
    tableHTML += rowHTML;
  }
  
  // create table footer with hit ratio and miss ratio
  const totalRequests = hitCount + missCount;
  const hitRatio = (hitCount / totalRequests).toFixed(2);
  const missRatio = (missCount / totalRequests).toFixed(2);
  
  let footerHTML = `
    <tr>
      <td colspan="2"></td>
      <td>${hitCount}</td>
      <td>${missCount}</td>
    </tr>
    <tr>
      <td colspan="2"></td>
      <td>Hit Ratio: ${hitRatio}</td>
      <td>Miss Ratio: ${missRatio}</td>
    </tr>
  `;
  
  tableHTML += footerHTML;
  tableHTML += "</table>";
  
  // display table in output div
  document.getElementById("output").innerHTML = tableHTML;
}
