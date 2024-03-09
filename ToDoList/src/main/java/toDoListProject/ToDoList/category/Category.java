package toDoListProject.ToDoList.category;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import toDoListProject.ToDoList.common.BaseEntity;
import toDoListProject.ToDoList.tasks.Task;

@Entity
@Table(name = "categories")
public class Category extends BaseEntity {
	
	public Category() {
	}

	@OneToMany(mappedBy = "category")
	@JsonIgnoreProperties("category")
	private List<Task> tasks;

	@Column(unique = true)
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String categoryName) {
		this.name = categoryName;
	}
	
	public List<Task> getTasks() {
		return tasks;
	}
	
	public void setTasks(List<Task> tasks) {
		this.tasks = tasks;
	}
	
}
