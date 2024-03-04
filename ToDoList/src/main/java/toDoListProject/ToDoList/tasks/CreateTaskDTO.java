package toDoListProject.ToDoList.tasks;

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
	private int priority;
	
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

	public int getPriority() {
		return priority;
	}
	
	@Override
	public String toString() {
		return "CreateTaskDTO title=" + title + ", content=" +  content;
	}

}
