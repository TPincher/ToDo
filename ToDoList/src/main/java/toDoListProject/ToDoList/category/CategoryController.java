package toDoListProject.ToDoList.category;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import jakarta.validation.Valid;
import toDoListProject.ToDoList.exceptions.NotFoundException;

@RestController
@RequestMapping("/categories")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@PostMapping
	public ResponseEntity<Category> create(@Valid @RequestBody CreateCategoryDTO data) {
		Category createdCategory = this.categoryService.create(data);
		return new ResponseEntity<>(createdCategory, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Category>> findAll() {
		List<Category> allCategories = this.categoryService.findAll();
		return new ResponseEntity<>(allCategories, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Category> getCategoryById(@PathVariable Long id) throws NotFoundException {
		Optional<Category> maybeCategory = this.categoryService.findById(id);
		Category foundCategory = maybeCategory.orElseThrow(() -> new NotFoundException(Category.class, id));
		return new ResponseEntity<>(foundCategory, HttpStatus.OK);
	}
}

