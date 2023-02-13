function generate()
{
  function FCFS(processes) {
    // processes is an array of objects, where each object represents a process with its burst time and arrival time
  
    let currentTime = 0; // Current time
    let completionTimes = []; // Array to store completion times of processes
    let waitingTimes = []; // Array to store waiting times of processes
    let turnaroundTimes = []; // Array to store turnaround times of processes
  
    // Loop through each process and calculate its completion time, waiting time, and turnaround time
    for (let i = 0; i < processes.length; i++) {
        let process = processes[i];
        let burstTime = process.burstTime;
        let arrivalTime = process.arrivalTime;
  
        // If the arrival time of the process is greater than the current time,
        // update the current time to the arrival time
        if (arrivalTime > currentTime) {
            currentTime = arrivalTime;
        }
  
        // Calculate the completion time for the current process
        let completionTime = currentTime + burstTime;
  
        // Add the completion time to the completionTimes array
        completionTimes.push(completionTime);
  
        // Calculate the waiting time for the current process
        let waitingTime = currentTime - arrivalTime;
  
        // Add the waiting time to the waitingTimes array
        waitingTimes.push(waitingTime);
  
        // Calculate the turnaround time for the current process
        let turnaroundTime = completionTime - arrivalTime;
  
        // Add the turnaround time to the turnaroundTimes array
        turnaroundTimes.push(turnaroundTime);
  
        // Update the current time to the completion time
        currentTime = completionTime;
    }
  
    // Return the completion times, waiting
    return{
      completionTimes,
      waitingTimes,
      turnaroundTimes
    };
  }
  let processes = [
    { burstTime: parseInt(document.getElementById("burst-1").value),arrivalTime : parseInt(document.getElementById("arrival-1").value)},
    { burstTime: 3, arrivalTime: 2 },
    { burstTime: 3, arrivalTime: 4 },
    { burstTime: 5, arrivalTime: 6 }
  ];
  
  let result = FCFS(processes);
  let completion = result.completionTimes;
let waiting = result.waitingTimes;
let turnaround = result.turnaroundTimes;

// Display the results in the HTML table
document.getElementById("p1").innerHTML = document.getElementById("process-1").value;
document.getElementById("p2").innerHTML = document.getElementById("process-2").value;
document.getElementById("p3").innerHTML = document.getElementById("process-3").value;
document.getElementById("p4").innerHTML = document.getElementById("process-4").value;

document.getElementById("result-process-1").innerHTML = completion[0];
document.getElementById("result-process-2").innerHTML = completion[1];
document.getElementById("result-process-3").innerHTML = completion[2];
document.getElementById("result-process-4").innerHTML = completion[3];

document.getElementById("result-wait-1").innerHTML = waiting[0];
document.getElementById("result-wait-2").innerHTML = waiting[1];
document.getElementById("result-wait-3").innerHTML = waiting[2];
document.getElementById("result-wait-4").innerHTML = waiting[3];

document.getElementById("result-turn-1").innerHTML = turnaround[0];
document.getElementById("result-turn-2").innerHTML = turnaround[1];
document.getElementById("result-turn-3").innerHTML = turnaround[2];
document.getElementById("result-turn-4").innerHTML = turnaround[3];
} // Output: [.....]