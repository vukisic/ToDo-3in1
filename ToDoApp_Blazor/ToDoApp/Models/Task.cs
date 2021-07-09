using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoApp.Models
{
    public class Task
    {
        public long Id { get; set; }
        public string TaskName { get; set; }
        public Status Status { get; set; }
        public Priority Priority { get; set; }

        public Task(long id, string taskName, Status status, Priority priority)
        {
            Id = id;
            TaskName = taskName;
            Status = status;
            Priority = priority;
        }
    }
}
