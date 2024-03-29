// function that run optimal page replaacement
function runOptimalPageReplacement() {
    let refString = document.getElementById("inputString").value; // storing value of inputString in refString variable
    let numFrames = document.getElementById("inputFrames").value; // storing value of inputFrames(Frame Size) in refString variable
    let pages = refString.split(" "); // spilt breaks string according to delimiter passed in argument, here is " "
    //                                  eg : input 0 1 3 5 (converted into array)-> {0,1,3,5}
    let numPages = pages.length;     // pages.length return length of string
    let frames = new Array(numFrames).fill(-1); // initially all frame are initilized by -1
    let faults = 0;
    let hits = 0;
    let nextUse = new Array(numFrames).fill(-1);
    let tableData = "<tr class=\"text-light bg-dark\"><th >Reference</th>";
    for (let i = 0; i < numFrames; i++) {
        tableData += "<th>Frame " + i + "</th>";
    }
    tableData += "<th>Page Status</th></tr>";
    for (let i = 0; i < numPages; i++) {
        let found = false;
        for (let j = 0; j < numFrames; j++) {
            if (frames[j] == pages[i]) {
                hits++;
                found = true;
                nextUse[j] = findNextUse(pages, i, numPages, frames[j]);
                break;
            }
        }
        if (!found) {
            let index = findOptimal(frames, nextUse, numFrames, pages, i, numPages);
            frames[index] = pages[i];
            nextUse[index] = findNextUse(pages, i, numPages, frames[index]);
            faults++;
        }
        tableData += "<tr><td>" + pages[i] + "</td>";
        for (let j = 0; j < numFrames; j++) {
            if (frames[j] == -1) {
                tableData += "<td></td>";
            } else {
                tableData += "<td>" + frames[j] + "</td>";
            }
        }
        if (!found) {
            tableData += "<td class=\"text-light bg-danger \" id=\"fault\";>FAULT</td></tr>";
        } else {
            tableData += "<td class=\"text-light bg-success \" id=\"hit\">HIT</td></tr>";
        }
    }
    document.getElementById("outputTable").innerHTML = tableData;
    let hitRatio = (hits / numPages * 100).toFixed(2);
    let faultRatio = (faults / numPages * 100).toFixed(2);
    let tableData2 = "<h2>Page Faults: " + faults + "</h2>";
    // for (let i = 0; i < numFrames; i++) {
    //     tableData += "<td></td>";
    // }
    tableData2 += "<h2>Page Hits: " + hits +"</h2>";
    tableData2 += "<h2>Fault Ratio : " + faultRatio + "% </h2>"
    tableData2 += "<h2>Hit Ratio : " + hitRatio + "% </h2>"
    document.getElementById("ratio_result").innerHTML = tableData2;
}

function findNextUse(pages, currentIndex, numPages, page) {
    for (let i = currentIndex + 1; i < numPages; i++) {
        if (pages[i] == page) {
            return i;
        }
    }
    return numPages;
}
function findOptimal(frames, nextUse, numFrames, pages, currentIndex, numPages) {
    let index = -1;
    let farthest = -1;
    for (let i = 0; i < numFrames; i++) {
        let found = false;
        for (let j = currentIndex + 1; j < numPages; j++) {
            if (frames[i] == pages[j]) {
                found = true;
                if (nextUse[i] < j) {
                    nextUse[i] = j;
                }
                break;
            }
        }
        if (!found) {
            return i;
        }
        if (nextUse[i] == numPages) {
            return i;
        }
        if (nextUse[i] > farthest) {
            farthest = nextUse[i];
            index = i;
        }
    }
    return index;
}
function resetform() {
  window.location.reload();
}
