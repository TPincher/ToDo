package toDoListProject.ToDoList.tasks;

import java.util.Date;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;

public class UpdateTaskDTO {

	@Pattern(regexp = "^(?=\\S).*$", message = "Title cannot be empty")
	private String title;

	@Pattern(regexp = "^(?=\\S).*$", message = "Content cannot be empty")
	private String content;

	@Positive
	private Long statusId;
	
	@Positive
	private Long categoryId;
	
	@Future
	private Date dueDate;
	

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Long getStatusId() {
		return statusId;
	}

	public void setStatusId(Long statusId) {
		this.statusId = statusId;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
}
