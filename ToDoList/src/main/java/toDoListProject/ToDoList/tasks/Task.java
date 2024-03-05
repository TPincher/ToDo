package toDoListProject.ToDoList.tasks;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import toDoListProject.ToDoList.category.Category;
import toDoListProject.ToDoList.common.BaseEntity;
import toDoListProject.ToDoList.status.Status;

@Entity
@Table(name = "tasks")
public class Task extends BaseEntity {
	
	public Task() {
		super();
	}

	@Column
	private String title;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "category_id")
	@JsonIgnoreProperties("tasks")
	private Category category;
	
	@Column
	private String content;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "status_id")
	@JsonIgnoreProperties("tasks")
	private Status status;
	
	@Column
	private Date dueDate;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
}
