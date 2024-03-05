package toDoListProject.ToDoList.status;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class StatusService {
	
	@Autowired
	private StatusRepository repo;
	
	public Status createStatus(@Valid CreateStatusDTO data) {
		
		Status newStatus = new Status();
		newStatus.setName(data.getName().trim());
		return this.repo.save(newStatus);
	}

	public List<Status> findAll() {
		return this.repo.findAll();
	}

	public Optional<Status> findById(Long id) {
		return this.repo.findById(id);
	}

}
