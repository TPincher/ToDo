package toDoListProject.ToDoList.tasks;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import toDoListProject.ToDoList.category.Category;
import toDoListProject.ToDoList.category.CategoryService;
import toDoListProject.ToDoList.exceptions.ServiceValidationException;
import toDoListProject.ToDoList.exceptions.ValidationErrors;

@Service
@Transactional
public class TaskService {
	
	@Autowired
	private TaskRepository repo;
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private ModelMapper mapper;

	public Task createTask(@Valid CreateTaskDTO data) throws ServiceValidationException {
		
		ValidationErrors errors = new ValidationErrors();
		Task newTask = mapper.map(data, Task.class);
		
		Long categoryId = data.getCategoryId();
		
		Optional<Category> maybeCategory = this.categoryService.findById(categoryId);
		
		if(maybeCategory.isEmpty()) {
			errors.addError("category", String.format("Category with id %s does not exist", categoryId));
		} else {
			newTask.setCategory(maybeCategory.get());
		}
		
		if(errors.hasErrors()) {
			throw new ServiceValidationException(errors);
		}
		
		return this.repo.save(newTask);
	}

	public List<Task> getAll() {
		return this.repo.findAll();
	}

	public Optional<Task> findById(Long id) {
		return this.repo.findById(id);
	}

	public Optional<Task> updateById(@Valid UpdateTaskDTO data, Long id) {
		Optional<Task> maybeTask = this.findById(id);
			if(maybeTask.isEmpty()) {
				return maybeTask;
			}
			
			Task foundTask = maybeTask.get();
			
			mapper.map(data, foundTask);
			
			Task updated = this.repo.save(foundTask);
			return Optional.of(updated);
	}

	public boolean deleteTaskById(Long id) {
		Optional<Task> maybeTask = this.repo.findById(id);
			if(maybeTask.isEmpty()) {
				return false;
			}
			this.repo.delete(maybeTask.get());
			return true;
	}

	
}
