package toDoListProject.ToDoList.category;

import jakarta.validation.constraints.Pattern;

public class UpdateCategoryDTO {

	@Pattern(regexp = "^(?=\\S).*$", message = "category name cannot be empty")
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
