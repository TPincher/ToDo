package toDoListProject.ToDoList.category;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class CategoryService {
	
	@Autowired
	private CategoryRepository repo;
	
	@Autowired
	private ModelMapper mapper;

	public Category create(@Valid CreateCategoryDTO data) {
		Category newCategory = mapper.map(data, Category.class);
		return this.repo.save(newCategory);
	}

	public List<Category> findAll() {
		return this.repo.findAll();
	}

	public Optional<Category> findById(Long categoryId) {
		return this.repo.findById(categoryId);
	}

	public Optional<Category> updateById(@Valid UpdateCategoryDTO data, Long id) {
		Optional<Category> maybeCategory = this.findById(id);
		if (maybeCategory.isEmpty()) {
			return maybeCategory;
		}
		
		Category foundCategory = maybeCategory.get();

		foundCategory.setName(data.getName().trim());
		Category updated = this.repo.save(foundCategory);
		return Optional.of(updated);
	}

	public boolean deleteCategoryById(Long id) {
		Optional<Category> maybeCategory = this.repo.findById(id);
		if(maybeCategory.isEmpty()) {
			return false;
		}
		this.repo.delete(maybeCategory.get());
		return true;
}

}
