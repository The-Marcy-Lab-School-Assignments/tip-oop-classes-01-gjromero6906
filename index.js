/**
 * Task Class
 * 
 * A class to manage tasks with title, priority, completion status, and time tracking.
 */

class Task {
 //write your code here
    #completed = false;
    #minutesSpent =0;
    static allTasks =[];
    constructor(title,priority){
        this.title =title;
        this.priority = priority;
    }
    get completed(){
        return this.#completed;
    }
    get minutesSpend(){
        return this.#minutesSpent;
    }

}

//Test class with examples below:


// Export the Task class for testing
module.exports = { Task };
