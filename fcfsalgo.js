function FCFS(processes) {
  let result = [];
  let currentTime = 0;

  for (let i = 0; i < processes.length; i++) {
    result.push({
      process: processes[i].process,
      startTime: currentTime,
      waitingTime: currentTime - processes[i].arrivalTime,
      turnAroundTime: currentTime + processes[i].burstTime - processes[i].arrivalTime
    });
    currentTime += processes[i].burstTime;
  }

  return result;
}
