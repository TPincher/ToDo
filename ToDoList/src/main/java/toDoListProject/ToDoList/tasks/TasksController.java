package toDoListProject.ToDoList.tasks;

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
@RequestMapping("/tasks")
public class TasksController {
	
	@Autowired
	private TaskService taskService;
	
	@PostMapping
	public ResponseEntity<Task> createTask(@Valid @RequestBody CreateTaskDTO data) throws ServiceValidationException {
		Task createdTask = this.taskService.createTask(data);
		return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Task>> getAllTasks() {
		List<Task> allTasks = this.taskService.getAll();
		return new ResponseEntity<>(allTasks, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Task> getTaskById(@PathVariable Long id) throws NotFoundException {
		Optional<Task> maybeTask = this.taskService.findById(id);
		Task foundTask = maybeTask.orElseThrow(() -> new NotFoundException(Task.class, id));
		return new ResponseEntity<>(foundTask, HttpStatus.OK);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<Task> updateTaskById(@Valid @RequestBody UpdateTaskDTO data, @PathVariable Long id) throws NotFoundException {
		Optional<Task> maybeUpdatedTask = this.taskService.updateById(data, id);
		Task updatedTask = maybeUpdatedTask.orElseThrow(() -> new NotFoundException(Task.class, id));
		return new ResponseEntity<>(updatedTask, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Task> deleteTasksById(@PathVariable Long id) throws NotFoundException {
		boolean deleted = this.taskService.deleteTaskById(id);
		if(!deleted) {
			throw new NotFoundException(Task.class, id);
		}
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
}
