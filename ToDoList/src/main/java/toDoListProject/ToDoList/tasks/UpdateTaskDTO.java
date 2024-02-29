package toDoListProject.ToDoList.tasks;

import jakarta.validation.constraints.Pattern;

public class UpdateTaskDTO {

	@Pattern(regexp = "^(?=\\S).*$", message = "Title cannot be empty")
	private String title;

	@Pattern(regexp = "^(?=\\S).*$", message = "Content cannot be empty")
	private String content;

	private int category;

	private int priority;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getCategory() {
		return category;
	}

	public void setCategory(int category) {
		this.category = category;
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
