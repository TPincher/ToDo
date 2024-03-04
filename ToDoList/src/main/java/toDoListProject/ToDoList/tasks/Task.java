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

@Entity
@Table(name = "tasks")
public class Task extends BaseEntity {
	
	public Task() {
		super();
	}

	@Column
	private String title;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "category_id")
	@JsonIgnoreProperties("tasks")
	private Category category;
	
	@Column
	private String content;
	
	@Column
	private int status;
	
	@Column
	private int priority;

	@Column
	private Date dueAt;

	public Date getDueAt() {
		return dueAt;
	}

	public void setDueAt(Date dueAt) {
		this.dueAt = dueAt;
	}

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

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}
	
	

}
