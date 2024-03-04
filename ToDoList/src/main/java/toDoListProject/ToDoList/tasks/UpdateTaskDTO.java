package toDoListProject.ToDoList.tasks;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;

public class UpdateTaskDTO {

	@Pattern(regexp = "^(?=\\S).*$", message = "Title cannot be empty")
	private String title;

	@Pattern(regexp = "^(?=\\S).*$", message = "Content cannot be empty")
	private String content;

	
	@Positive
	private Long categoryId;

	private int priority;

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

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

}
