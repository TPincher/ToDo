package toDoListProject.ToDoList.tasks;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class TaskService {
	
	@Autowired
	private TaskRepository repo;
	
	@Autowired
	private ModelMapper mapper;

	public Task createTask(@Valid CreateTaskDTO data) {
		
		Task newTask = mapper.map(data, Task.class);
		newTask.setCreatedAt(new Date());
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
			if(data.getTitle() != null) {
				foundTask.setTitle(data.getTitle().trim());
			}
			
			if(data.getCategory() > 0 && data.getCategory() < 4) {
				foundTask.setCategory(data.getCategory());
			}
			
			if (data.getContent() != null) {
				foundTask.setContent(data.getContent().trim());
			}
			
			if (data.getPriority() > 0 && data.getPriority() < 4) {
				foundTask.setPriority(data.getPriority());
			}
			
		return maybeTask;
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
