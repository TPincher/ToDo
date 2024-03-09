package toDoListProject.ToDoList.tasks;

import java.util.Date;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class CreateTaskDTO {

	@NotBlank
	private String title;
	
	@NotNull
	@Positive
	private Long categoryId;
	
	@NotBlank
	private String content;
	
	@NotNull
	@Positive
	private Long statusId;

	@Future
	public Date dueDate;

	
	public Long getCategoryId() {
		return categoryId;
	}
	
	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getTitle() {
		return title;
	}

	public String getContent() {
		return content;
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
