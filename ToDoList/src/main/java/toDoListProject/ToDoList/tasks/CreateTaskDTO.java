package toDoListProject.ToDoList.tasks;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class CreateTaskDTO {

	@NotBlank
	private String title;
	
	@NotNull
	@Positive
	private int category;
	
	@NotBlank
	private String content;
	
	@NotNull
	@Positive
	private int priority;

	public String getTitle() {
		return title;
	}

	public int getCategory() {
		return category;
	}

	public String getContent() {
		return content;
	}

	public int getPriority() {
		return priority;
	}

}
