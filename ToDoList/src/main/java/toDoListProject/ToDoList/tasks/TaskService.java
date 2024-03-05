package toDoListProject.ToDoList.tasks;

//import java.util.Date;
import java.util.List;
import java.util.Optional;

//import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import toDoListProject.ToDoList.category.Category;
import toDoListProject.ToDoList.category.CategoryService;
import toDoListProject.ToDoList.exceptions.ServiceValidationException;
import toDoListProject.ToDoList.exceptions.ValidationErrors;
import toDoListProject.ToDoList.status.Status;
import toDoListProject.ToDoList.status.StatusService;

@Service
@Transactional
public class TaskService {
	
	@Autowired
	private TaskRepository repo;
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private StatusService statusService;

	public Task createTask(CreateTaskDTO data) throws ServiceValidationException {
		
		ValidationErrors errors = new ValidationErrors();
		
		Task newTask = new Task();

		newTask.setTitle(data.getTitle().trim());
		newTask.setContent(data.getContent().trim());
		newTask.setDueDate(data.dueDate);
		
		Long categoryId = data.getCategoryId();
		Long statusId = data.getStatusId();
		
		Optional<Category> maybeCategory = this.categoryService.findById(categoryId);
		if(maybeCategory.isEmpty()) {
			errors.addError("category", String.format("Category with id %s does not exist", categoryId));
		} else {
			newTask.setCategory(maybeCategory.get());
		}
		
		Optional<Status> maybeStatus = this.statusService.findById(statusId);
		if(maybeStatus.isEmpty()) {
			errors.addError("status", String.format("Status with id %s does not exist", statusId));
		} else {
			newTask.setStatus(maybeStatus.get());
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

	public Optional<Task> updateById(@Valid UpdateTaskDTO data, Long id) throws ServiceValidationException {
		Optional<Task> maybeTask = this.findById(id);
			if(maybeTask.isEmpty()) {
				return maybeTask;
			}
			
			Task foundTask = maybeTask.get();
			ValidationErrors errors = new ValidationErrors();
			
			foundTask.setTitle(data.getTitle().trim());
			foundTask.setContent(data.getContent().trim());
			foundTask.setDueDate(data.getDueDate());
			
			Long categoryId = data.getCategoryId();
			Optional<Category> maybeCategory = this.categoryService.findById(categoryId);
			if(maybeCategory.isEmpty()) {
				errors.addError("category", String.format("Category with id %s does not exist", categoryId));
			} else {
				foundTask.setCategory(maybeCategory.get());
			}
			
			Long statusId = data.getStatusId();
			Optional<Status> maybeStatus = this.statusService.findById(statusId);
			if(maybeStatus.isEmpty()) {
				errors.addError("status", String.format("Status with id %s does not exist", statusId));
			} else {
				foundTask.setStatus(maybeStatus.get());
			}
			
			if(errors.hasErrors()) {
				throw new ServiceValidationException(errors);
			}
			
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
