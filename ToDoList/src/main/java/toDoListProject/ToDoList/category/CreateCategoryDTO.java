package toDoListProject.ToDoList.category;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CreateCategoryDTO {

	@NotBlank
	@Size(min=3, message = "Name must be at least 3 characters")
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
