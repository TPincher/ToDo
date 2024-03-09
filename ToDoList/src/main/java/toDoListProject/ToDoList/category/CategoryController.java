package toDoListProject.ToDoList.category;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import jakarta.validation.Valid;
import toDoListProject.ToDoList.exceptions.NotFoundException;
import toDoListProject.ToDoList.exceptions.ServiceValidationException;

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
	
	@PatchMapping("/{id}")
	public ResponseEntity<Category> updateCategoryById(@Valid @RequestBody UpdateCategoryDTO data, @PathVariable Long id) throws NotFoundException, ServiceValidationException {
		Optional<Category> maybeUpdatedCategory = this.categoryService.updateById(data, id);
		Category updatedCategory = maybeUpdatedCategory.orElseThrow(() -> new NotFoundException(Category.class, id));
		return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Category> deleteCategoryById(@PathVariable Long id) throws NotFoundException {
		boolean deleted = this.categoryService.deleteCategoryById(id);
		if(!deleted) {
			throw new NotFoundException(Category.class, id);
		}
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
}

