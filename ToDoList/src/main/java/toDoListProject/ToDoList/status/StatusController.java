package toDoListProject.ToDoList.status;

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
@RequestMapping("/status")
public class StatusController {

	@Autowired
	private StatusService statusService;
	
	@PostMapping
	public ResponseEntity<Status> createStatus(@Valid @RequestBody CreateStatusDTO data) {
		Status createdStatus = this.statusService.createStatus(data);
		return new ResponseEntity<>(createdStatus, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Status>> findAll() {
		List<Status> allStatuses = this.statusService.findAll();
		return new ResponseEntity<>(allStatuses, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Status> getStatusById(@PathVariable Long id) throws NotFoundException {
		Optional<Status> maybeStatus = this.statusService.findById(id);
		Status foundStatus = maybeStatus.orElseThrow(() -> new NotFoundException(Status.class, id));
		return new ResponseEntity<>(foundStatus, HttpStatus.OK);
	}
}
