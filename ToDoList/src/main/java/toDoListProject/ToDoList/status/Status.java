package toDoListProject.ToDoList.status;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import toDoListProject.ToDoList.common.BaseEntity;
import toDoListProject.ToDoList.tasks.Task;

@Entity
@Table(name = "status")
public class Status extends BaseEntity{
	
	public Status() {
	}
	
	@OneToMany(mappedBy = "status")
	@JsonIgnoreProperties("status")
	private List<Task> tasks;
	
	@Column(unique = true)
	private String name;
	
	public String getName() {
		return name;
	}
	
	public void setName(String statusName) {
		this.name = statusName;
	}

	public List<Task> getTasks() {
		return tasks;
	}

	public void setTasks(List<Task> tasks) {
		this.tasks = tasks;
	}
	
	
}
